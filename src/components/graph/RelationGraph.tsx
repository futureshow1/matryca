import { useEffect, useRef, useState, useMemo } from 'react';
import cytoscape from 'cytoscape';
import type { ElementDefinition, LayoutOptions } from 'cytoscape';

interface GraphNode {
  id: string;
  label: string;
  type: 'case' | 'company' | 'person' | 'tag';
  /** A-E for cases, undefined for others */
  group?: string;
  href?: string;
  /** Pre-computed metadata for the side panel */
  meta?: {
    /** Company: case count, total fines */
    caseCount?: number;
    finesEur?: number;
    finesUsd?: number;
    /** Case: year, top fine, status */
    year?: number;
    topFineLabel?: string;
    status?: string;
    /** Person: role, years */
    role?: string;
    years?: string;
    /** Tag: case count */
  };
}

interface GraphEdge {
  source: string;
  target: string;
  kind: 'case-case' | 'company-case' | 'person-case' | 'tag-case';
}

interface Props {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

// Group A-E colors
const GROUP_COLORS: Record<string, string> = {
  A: '#4f46e5', // Meta — indigo
  B: '#0d9488', // Google — teal
  C: '#475569', // Apple/MS/LinkedIn — slate
  D: '#d97706', // Amazon/Uber — amber
  E: '#A32D2D', // TikTok/X/Clearview/Zoom — accent red
};

const TYPE_COLORS = {
  case: '#A32D2D',
  company: '#1A1C20',
  person: '#0d9488',
  tag: '#8E9096',
} as const;

const TYPE_LABELS_PL: Record<string, string> = {
  case: 'Sprawa',
  company: 'Firma',
  person: 'Osoba',
  tag: 'Tag',
};

type LayoutMode = 'concentric' | 'force' | 'grouped';

export default function RelationGraph({ nodes, edges }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);
  // Tags off by default — they create the most visual noise
  const [activeTypes, setActiveTypes] = useState<Set<string>>(
    new Set(['case', 'company', 'person'])
  );
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<GraphNode | null>(null);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('concentric');
  const [hoverNode, setHoverNode] = useState<GraphNode | null>(null);

  // Build a quick lookup for connected node info on selection
  const adjacency = useMemo(() => {
    const map = new Map<string, GraphNode[]>();
    const byId = new Map(nodes.map((n) => [n.id, n]));
    edges.forEach((e) => {
      if (!map.has(e.source)) map.set(e.source, []);
      if (!map.has(e.target)) map.set(e.target, []);
      const t = byId.get(e.target);
      const s = byId.get(e.source);
      if (t) map.get(e.source)!.push(t);
      if (s) map.get(e.target)!.push(s);
    });
    return map;
  }, [nodes, edges]);

  // Build cytoscape elements
  const elements = useMemo<ElementDefinition[]>(() => [
    ...nodes.map((n) => ({
      data: {
        id: n.id,
        label: n.label,
        type: n.type,
        group: n.group,
        href: n.href,
        // expose group color for case nodes
        groupColor: n.group ? GROUP_COLORS[n.group] : undefined,
      },
      classes: n.type,
    })),
    ...edges.map((e, i) => ({
      data: {
        id: `e${i}`,
        source: e.source,
        target: e.target,
        kind: e.kind,
      },
      classes: e.kind,
    })),
  ], [nodes, edges]);

  // === Init Cytoscape ===
  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      wheelSensitivity: 0.2,
      minZoom: 0.3,
      maxZoom: 2.5,
      style: [
        // === Default node ===
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            'font-size': '11px',
            'font-family': 'Inter, sans-serif',
            'font-weight': 500,
            color: '#1A1C20',
            'text-valign': 'bottom' as const,
            'text-margin-y': 6,
            'text-max-width': '120px' as const,
            'text-wrap': 'wrap' as const,
            'text-background-color': '#FAFAF7',
            'text-background-opacity': 0.92,
            'text-background-padding': '3px',
            'text-background-shape': 'roundrectangle' as const,
            'border-width': 0,
            'transition-property': 'opacity, border-width, border-color',
            'transition-duration': 200,
          },
        },
        // === Cases (small dots, color by group) ===
        {
          selector: 'node.case',
          style: {
            width: 18,
            height: 18,
            shape: 'ellipse',
            'background-color': 'data(groupColor)',
            // Hide labels by default for cases — too many
            'font-size': '9px',
            color: '#5C5E64',
            'text-opacity': 0,
          },
        },
        // === Companies (large diamonds, always labeled) ===
        {
          selector: 'node.company',
          style: {
            width: 38,
            height: 38,
            shape: 'diamond',
            'background-color': '#1A1C20',
            'border-width': 2,
            'border-color': '#A32D2D',
            'font-size': '13px',
            'font-weight': 600,
            color: '#1A1C20',
            'text-margin-y': 8,
          },
        },
        // === People (triangles, always labeled) ===
        {
          selector: 'node.person',
          style: {
            width: 22,
            height: 22,
            shape: 'triangle',
            'background-color': '#0d9488',
            'font-size': '11px',
            color: '#0d9488',
          },
        },
        // === Tags (small squares, label on hover/select only) ===
        {
          selector: 'node.tag',
          style: {
            width: 12,
            height: 12,
            shape: 'rectangle',
            'background-color': '#d97706',
            'font-size': '10px',
            color: '#8E9096',
            'text-opacity': 0,
          },
        },
        // === Edges ===
        {
          selector: 'edge',
          style: {
            width: 0.8,
            'line-color': '#C8C9CD',
            'line-opacity': 0.4,
            'curve-style': 'haystack' as const,
            'haystack-radius': 0.4,
          },
        },
        {
          selector: 'edge.company-case',
          style: {
            'line-color': '#A32D2D',
            'line-opacity': 0.35,
            width: 1.2,
          },
        },
        {
          selector: 'edge.person-case',
          style: {
            'line-color': '#0d9488',
            'line-opacity': 0.45,
            width: 1,
            'line-style': 'dashed' as const,
          },
        },
        {
          selector: 'edge.tag-case',
          style: {
            'line-color': '#d97706',
            'line-opacity': 0.18,
            width: 0.5,
          },
        },
        {
          selector: 'edge.case-case',
          style: {
            'line-color': '#A32D2D',
            'line-opacity': 0.5,
            width: 1.5,
            'curve-style': 'bezier' as const,
          },
        },
        // === Hover/select states ===
        {
          selector: 'node.is-hover, node.is-selected',
          style: {
            'border-width': 3,
            'border-color': '#A32D2D',
            'text-opacity': 1,
            'z-index': 999 as unknown as undefined,
          },
        },
        {
          selector: 'node.is-neighbor',
          style: {
            'text-opacity': 1,
            'border-width': 1.5,
            'border-color': '#A32D2D',
          },
        },
        {
          selector: 'edge.is-active',
          style: {
            'line-color': '#A32D2D',
            'line-opacity': 0.85,
            width: 2,
          },
        },
        {
          selector: 'node.is-dim',
          style: {
            opacity: 0.12,
            'text-opacity': 0,
          },
        },
        {
          selector: 'edge.is-dim',
          style: {
            opacity: 0.04,
          },
        },
      ],
      layout: getLayout('concentric'),
    });

    cyRef.current = cy;

    // === Hover ===
    cy.on('mouseover', 'node', (e) => {
      const n = e.target.data() as GraphNode;
      setHoverNode(n);
      cy.elements().addClass('is-dim');
      const hood = e.target.closedNeighborhood();
      hood.removeClass('is-dim');
      e.target.addClass('is-hover');
      hood.nodes().not(e.target).addClass('is-neighbor');
      hood.edges().addClass('is-active');
    });

    cy.on('mouseout', 'node', (e) => {
      // Don't clear if a node is selected
      if (cy.elements('.is-selected').length > 0) return;
      cy.elements().removeClass('is-dim is-hover is-neighbor is-active');
      setHoverNode(null);
    });

    // === Click select ===
    cy.on('tap', 'node', (e) => {
      const n = e.target.data() as GraphNode;
      setSelected(n);
      cy.elements().removeClass('is-dim is-hover is-neighbor is-active is-selected');
      cy.elements().addClass('is-dim');
      const hood = e.target.closedNeighborhood();
      hood.removeClass('is-dim');
      e.target.addClass('is-selected');
      hood.nodes().not(e.target).addClass('is-neighbor');
      hood.edges().addClass('is-active');
    });

    cy.on('tap', (e) => {
      if (e.target === cy) {
        cy.elements().removeClass('is-dim is-hover is-neighbor is-active is-selected');
        setSelected(null);
        setHoverNode(null);
      }
    });

    return () => {
      cy.destroy();
      cyRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);

  // === Layout change ===
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.layout(getLayout(layoutMode)).run();
  }, [layoutMode]);

  // === Type filter ===
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.batch(() => {
      cy.nodes().forEach((n) => {
        const t = n.data('type');
        if (activeTypes.has(t)) {
          n.style('display', 'element');
        } else {
          n.style('display', 'none');
        }
      });
    });
    // Re-run layout to use only visible nodes
    cy.layout(getLayout(layoutMode)).run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTypes]);

  // === Search ===
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    const q = query.trim().toLowerCase();
    cy.elements().removeClass('is-dim is-hover is-neighbor is-active');
    if (!q) return;
    cy.elements().addClass('is-dim');
    const matches = cy.nodes().filter((n) =>
      (n.data('label') as string).toLowerCase().includes(q)
    );
    matches.removeClass('is-dim');
    matches.addClass('is-neighbor');
    matches.connectedEdges().removeClass('is-dim').addClass('is-active');
    matches.connectedEdges().connectedNodes().removeClass('is-dim');
  }, [query]);

  const toggleType = (type: string) => {
    setActiveTypes((prev) => {
      const n = new Set(prev);
      if (n.has(type)) n.delete(type);
      else n.add(type);
      return n;
    });
  };

  const fitToView = () => {
    cyRef.current?.fit(undefined, 30);
  };

  const resetSelection = () => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.elements().removeClass('is-dim is-hover is-neighbor is-active is-selected');
    setSelected(null);
    setHoverNode(null);
  };

  // The node to show in the side panel (selected takes priority over hover)
  const focusNode = selected || hoverNode;
  const focusNeighbors = focusNode ? adjacency.get(focusNode.id) ?? [] : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* === Toolbar === */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        <input
          type="search"
          placeholder="Wyszukaj firmę, sprawę, osobę..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '6px 12px',
            borderRadius: 'var(--radius-md)',
            border: '0.5px solid var(--border-hover)',
            background: 'var(--bg-card)',
            fontSize: '13px',
            fontFamily: 'var(--font-sans)',
            flex: 1,
            minWidth: '200px',
          }}
        />

        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginRight: 4 }}>POKAŻ:</span>
          {[
            { id: 'case', label: 'sprawy', n: nodes.filter((x) => x.type === 'case').length },
            { id: 'company', label: 'firmy', n: nodes.filter((x) => x.type === 'company').length },
            { id: 'person', label: 'ludzi', n: nodes.filter((x) => x.type === 'person').length },
            { id: 'tag', label: 'tagi', n: nodes.filter((x) => x.type === 'tag').length },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => toggleType(f.id)}
              style={chipStyle(activeTypes.has(f.id), TYPE_COLORS[f.id as keyof typeof TYPE_COLORS])}
            >
              {f.label} <span style={{ opacity: 0.6, marginLeft: 3 }}>{f.n}</span>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '4px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-tertiary)', marginRight: 4, alignSelf: 'center' }}>UKŁAD:</span>
          {(['concentric', 'force', 'grouped'] as LayoutMode[]).map((m) => (
            <button
              key={m}
              onClick={() => setLayoutMode(m)}
              style={chipStyle(layoutMode === m, '#A32D2D')}
            >
              {m === 'concentric' ? 'koncentryczny' : m === 'force' ? 'siłowy' : 'wg grup'}
            </button>
          ))}
        </div>

        <button onClick={fitToView} style={chipStyle(false, '#5C5E64')}>dopasuj</button>
        {selected && <button onClick={resetSelection} style={chipStyle(false, '#A32D2D')}>wyczyść zaznaczenie</button>}
      </div>

      {/* === Graph + Side panel === */}
      <div
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '12px',
          minHeight: '720px',
        }}
      >
        <div
          ref={containerRef}
          style={{
            width: '100%',
            height: '720px',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--radius-md)',
          }}
        />

        {/* === Info panel === */}
        <aside
          style={{
            background: 'var(--bg-secondary)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '16px',
            fontSize: '13px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '720px',
            overflowY: 'auto',
          }}
        >
          {!focusNode && (
            <>
              <p style={panelKickerStyle}>Sieć powiązań</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 500, lineHeight: 1.3, margin: 0 }}>
                {nodes.filter((n) => activeTypes.has(n.type)).length} węzłów,{' '}
                {edges.filter((e) => {
                  const s = e.source.split(':')[0];
                  const t = e.target.split(':')[0];
                  return activeTypes.has(s) && activeTypes.has(t);
                }).length}{' '}
                krawędzi
              </p>
              <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 12, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <p style={{ margin: '0 0 8px' }}><strong style={{ color: 'var(--text-primary)' }}>Najedź</strong> na węzeł, żeby zobaczyć jego powiązania.</p>
                <p style={{ margin: '0 0 8px' }}><strong style={{ color: 'var(--text-primary)' }}>Kliknij</strong>, żeby przypiąć zaznaczenie.</p>
                <p style={{ margin: '0 0 8px' }}><strong style={{ color: 'var(--text-primary)' }}>Tagi</strong> są domyślnie wyłączone — włącz je w toolbarze, jeśli chcesz zobaczyć tematyczne grupy.</p>
              </div>
              <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 12 }}>
                <p style={panelKickerStyle}>Legenda</p>
                <ul style={legendStyle}>
                  <li><span style={swatchStyle('#1A1C20', 'diamond')} /> firma (12)</li>
                  <li><span style={swatchStyle('#0d9488', 'triangle')} /> sygnalista / dziennikarz (12)</li>
                  <li><span style={swatchStyle('#A32D2D', 'circle')} /> sprawa A-E (33, kolor wg grupy)</li>
                  <li><span style={swatchStyle('#d97706', 'square')} /> tag tematyczny</li>
                </ul>
              </div>
              <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 12 }}>
                <p style={panelKickerStyle}>Grupy spraw</p>
                <ul style={legendStyle}>
                  <li><span style={swatchStyle(GROUP_COLORS.A, 'circle')} /> A — Meta (10)</li>
                  <li><span style={swatchStyle(GROUP_COLORS.B, 'circle')} /> B — Google (6)</li>
                  <li><span style={swatchStyle(GROUP_COLORS.C, 'circle')} /> C — Apple / MS / LinkedIn (5)</li>
                  <li><span style={swatchStyle(GROUP_COLORS.D, 'circle')} /> D — Amazon / Uber (6)</li>
                  <li><span style={swatchStyle(GROUP_COLORS.E, 'circle')} /> E — TikTok / X / Clearview / Zoom (6)</li>
                </ul>
              </div>
            </>
          )}

          {focusNode && (
            <>
              <p style={panelKickerStyle}>{TYPE_LABELS_PL[focusNode.type]}{focusNode.group ? ` · grupa ${focusNode.group}` : ''}</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 500, lineHeight: 1.2, margin: 0 }}>
                {focusNode.label}
              </p>
              {focusNode.href && (
                <a
                  href={`${BASE_URL}${focusNode.href}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    borderBottom: '1px solid currentColor',
                    paddingBottom: 1,
                    alignSelf: 'flex-start',
                  }}
                >
                  Otwórz pełny profil →
                </a>
              )}
              <div style={{ borderTop: '0.5px solid var(--border)', paddingTop: 12 }}>
                <p style={panelKickerStyle}>
                  Powiązań: {focusNeighbors.length}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12 }}>
                  {focusNeighbors
                    .sort((a, b) => {
                      // Order: companies, people, cases, tags
                      const order = { company: 0, person: 1, case: 2, tag: 3 };
                      return order[a.type] - order[b.type];
                    })
                    .slice(0, 25)
                    .map((n) => (
                      <li key={n.id} style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 6,
                            height: 6,
                            borderRadius: n.type === 'company' ? 0 : n.type === 'tag' ? 0 : '50%',
                            background: n.type === 'case' && n.group ? GROUP_COLORS[n.group] : TYPE_COLORS[n.type],
                            transform: n.type === 'company' ? 'rotate(45deg)' : 'none',
                            flexShrink: 0,
                            marginTop: 4,
                          }}
                        />
                        {n.href ? (
                          <a href={`${BASE_URL}${n.href}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                            {n.label}
                          </a>
                        ) : (
                          <span>{n.label}</span>
                        )}
                      </li>
                    ))}
                  {focusNeighbors.length > 25 && (
                    <li style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
                      + {focusNeighbors.length - 25} więcej...
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
        </aside>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-tertiary)',
          justifyContent: 'space-between',
        }}
      >
        <span>scroll = zoom · drag = przesuń · kliknięcie w tle = wyczyść</span>
        <span>{nodes.length} węzłów · {edges.length} krawędzi razem</span>
      </div>
    </div>
  );
}

// === Layout configurations ===
function getLayout(mode: LayoutMode): LayoutOptions {
  if (mode === 'concentric') {
    return {
      name: 'concentric',
      animate: false,
      concentric: (node: any) => {
        const t = node.data('type');
        // Higher = more central
        if (t === 'company') return 4;
        if (t === 'case') return 3;
        if (t === 'person') return 2;
        if (t === 'tag') return 1;
        return 0;
      },
      levelWidth: () => 1,
      minNodeSpacing: 24,
      spacingFactor: 1.05,
      avoidOverlap: true,
      padding: 30,
    } as LayoutOptions;
  }
  if (mode === 'grouped') {
    // Groups A-E in clusters; companies in inner ring
    return {
      name: 'concentric',
      animate: false,
      concentric: (node: any) => {
        const t = node.data('type');
        const g = node.data('group');
        if (t === 'company') return 100;
        if (t === 'person') return 50;
        if (t === 'tag') return 10;
        // For cases, use group letter as concentric ring (different rings per group)
        if (t === 'case') {
          const groupRank = { A: 90, B: 80, C: 70, D: 60, E: 55 } as Record<string, number>;
          return groupRank[g] ?? 40;
        }
        return 0;
      },
      levelWidth: () => 1,
      minNodeSpacing: 30,
      spacingFactor: 1.2,
      avoidOverlap: true,
      padding: 40,
    } as LayoutOptions;
  }
  // force / cose
  return {
    name: 'cose',
    animate: false,
    nodeRepulsion: () => 12000,
    idealEdgeLength: () => 90,
    edgeElasticity: () => 80,
    numIter: 2000,
    gravity: 60,
    initialTemp: 200,
    coolingFactor: 0.95,
    padding: 30,
  } as LayoutOptions;
}

// === Style helpers ===
function chipStyle(active: boolean, color: string): React.CSSProperties {
  return {
    padding: '4px 10px',
    borderRadius: 'var(--radius-md)',
    border: `0.5px solid ${active ? color : 'var(--border)'}`,
    background: active ? color : 'transparent',
    color: active ? 'white' : 'var(--text-secondary)',
    fontSize: '11px',
    fontFamily: 'var(--font-mono)',
    cursor: 'pointer',
    textTransform: 'lowercase',
    transition: 'all 150ms',
  };
}

const panelKickerStyle: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
  fontSize: '10px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  margin: '0 0 6px',
};

const legendStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  fontSize: 12,
  color: 'var(--text-secondary)',
};

function swatchStyle(color: string, shape: 'circle' | 'square' | 'diamond' | 'triangle'): React.CSSProperties {
  if (shape === 'triangle') {
    return {
      display: 'inline-block',
      width: 0,
      height: 0,
      marginRight: 6,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: `8px solid ${color}`,
      verticalAlign: 'middle',
    };
  }
  return {
    display: 'inline-block',
    width: 10,
    height: 10,
    background: color,
    borderRadius: shape === 'circle' ? '50%' : shape === 'diamond' ? 0 : 2,
    transform: shape === 'diamond' ? 'rotate(45deg)' : 'none',
    marginRight: 6,
    verticalAlign: 'middle',
  };
}
