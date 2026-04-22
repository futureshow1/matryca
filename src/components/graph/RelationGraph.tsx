import { useEffect, useRef, useState } from 'react';
import cytoscape from 'cytoscape';
import type { ElementDefinition } from 'cytoscape';

interface GraphNode {
  id: string;
  label: string;
  type: 'case' | 'company' | 'person' | 'tag';
  group?: string;
  href?: string;
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

// Astro base URL — injected at build time
const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

const TYPE_FILTERS = [
  { id: 'case', label: 'sprawy', color: '#A32D2D' },
  { id: 'company', label: 'firmy', color: '#4f46e5' },
  { id: 'person', label: 'ludzie', color: '#0d9488' },
  { id: 'tag', label: 'tagi', color: '#d97706' },
] as const;

export default function RelationGraph({ nodes, edges }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<cytoscape.Core | null>(null);
  const [activeTypes, setActiveTypes] = useState<Set<string>>(
    new Set(['case', 'company', 'person', 'tag'])
  );
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<GraphNode | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements: ElementDefinition[] = [
      ...nodes.map((n) => ({
        data: { ...n, id: n.id, label: n.label, type: n.type, group: n.group, href: n.href },
      })),
      ...edges.map((e, i) => ({
        data: {
          id: `e${i}`,
          source: e.source,
          target: e.target,
          kind: e.kind,
        },
      })),
    ];

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      wheelSensitivity: 0.25,
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            'font-size': '10px',
            'font-family': 'Inter, sans-serif',
            color: '#5C5E64',
            'text-valign': 'bottom' as const,
            'text-margin-y': 4,
            'text-max-width': '140px' as const,
            'text-wrap': 'ellipsis' as const,
            'text-background-color': '#FAFAF7',
            'text-background-opacity': 0.9,
            'text-background-padding': '2px',
          },
        },
        {
          selector: 'node[type = "case"]',
          style: {
            'background-color': '#A32D2D',
            width: 14,
            height: 14,
            shape: 'ellipse',
          },
        },
        {
          selector: 'node[type = "company"]',
          style: {
            'background-color': '#4f46e5',
            width: 22,
            height: 22,
            shape: 'diamond',
          },
        },
        {
          selector: 'node[type = "person"]',
          style: {
            'background-color': '#0d9488',
            width: 16,
            height: 16,
            shape: 'triangle',
          },
        },
        {
          selector: 'node[type = "tag"]',
          style: {
            'background-color': '#d97706',
            width: 10,
            height: 10,
            shape: 'rectangle',
          },
        },
        {
          selector: 'edge',
          style: {
            width: 0.6,
            'line-color': '#8E9096',
            'line-opacity': 0.4,
            'curve-style': 'haystack' as const,
          },
        },
        {
          selector: 'edge[kind = "case-case"]',
          style: {
            'line-color': '#A32D2D',
            'line-opacity': 0.35,
            width: 1,
          },
        },
        {
          selector: 'node.highlighted',
          style: {
            'border-width': 2,
            'border-color': '#A32D2D',
            'z-index': 100 as unknown as undefined,
          },
        },
        {
          selector: 'node.dimmed',
          style: {
            opacity: 0.15,
          },
        },
        {
          selector: 'edge.dimmed',
          style: {
            opacity: 0.05,
          },
        },
        {
          selector: 'edge.highlighted',
          style: {
            'line-color': '#A32D2D',
            'line-opacity': 0.8,
            width: 1.5,
          },
        },
      ],
      layout: {
        name: 'cose',
        animate: false,
        nodeRepulsion: () => 8000,
        idealEdgeLength: () => 80,
        edgeElasticity: () => 100,
        numIter: 1500,
      },
    });

    cyRef.current = cy;

    cy.on('tap', 'node', (e) => {
      const n = e.target.data() as GraphNode;
      setSelected(n);

      // Highlight connected nodes
      cy.elements().removeClass('highlighted').addClass('dimmed');
      const connected = e.target.closedNeighborhood();
      connected.removeClass('dimmed').addClass('highlighted');
    });

    cy.on('tap', (e) => {
      if (e.target === cy) {
        cy.elements().removeClass('highlighted').removeClass('dimmed');
        setSelected(null);
      }
    });

    return () => {
      cy.destroy();
      cyRef.current = null;
    };
  }, [nodes, edges]);

  // Filter toggle
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    cy.nodes().forEach((n) => {
      const t = n.data('type');
      if (activeTypes.has(t)) {
        n.style('display', 'element');
      } else {
        n.style('display', 'none');
      }
    });
  }, [activeTypes]);

  // Search
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      cy.elements().removeClass('highlighted').removeClass('dimmed');
      return;
    }
    cy.elements().removeClass('highlighted').addClass('dimmed');
    cy.nodes().forEach((n) => {
      if ((n.data('label') as string).toLowerCase().includes(q)) {
        n.removeClass('dimmed').addClass('highlighted');
        n.connectedEdges().removeClass('dimmed').addClass('highlighted');
        n.connectedEdges().connectedNodes().removeClass('dimmed');
      }
    });
  }, [query]);

  const toggleType = (type: string) => {
    setActiveTypes((prev) => {
      const n = new Set(prev);
      if (n.has(type)) n.delete(type);
      else n.add(type);
      return n;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        <input
          type="search"
          placeholder="Wyszukaj węzeł (firma, osoba, sprawa)..."
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
        {TYPE_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => toggleType(f.id)}
            style={{
              padding: '4px 10px',
              borderRadius: 'var(--radius-md)',
              border: `0.5px solid ${activeTypes.has(f.id) ? f.color : 'var(--border)'}`,
              background: activeTypes.has(f.id) ? f.color : 'transparent',
              color: activeTypes.has(f.id) ? 'white' : 'var(--text-secondary)',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              textTransform: 'lowercase',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative' }}>
        <div
          ref={containerRef}
          style={{
            width: '100%',
            height: '680px',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--radius-md)',
          }}
        />

        {selected && (
          <div
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              maxWidth: 280,
              padding: '16px',
              background: 'var(--bg-primary)',
              border: '0.5px solid var(--border-hover)',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              fontSize: '13px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--accent)',
                margin: '0 0 4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {selected.type === 'case' && 'Sprawa'}
              {selected.type === 'company' && 'Firma'}
              {selected.type === 'person' && 'Osoba'}
              {selected.type === 'tag' && 'Tag'}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 500,
                margin: '0 0 8px',
                lineHeight: 1.25,
              }}
            >
              {selected.label}
            </p>
            {selected.href && (
              <a
                href={`${BASE_URL}${selected.href}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                Przejdź →
              </a>
            )}
          </div>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-tertiary)',
        }}
      >
        <span>{nodes.length} węzłów · {edges.length} krawędzi</span>
        <span>Klik = zaznacz + sąsiedztwo · Scroll = zoom · Drag = przesuń</span>
      </div>
    </div>
  );
}
