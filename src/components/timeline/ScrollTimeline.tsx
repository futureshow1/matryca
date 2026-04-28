import { useEffect, useRef, useState } from 'react';
import { TIMELINE_SCENES, type TimelineScene } from '../../data/timeline-scenes';

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
const makeUrl = (path: string) => `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export interface ScrollTimelineLabels {
  /** "Sprawy:" / "Cases:" */
  casesLabel: string;
  /** "Scena" / "Scene" */
  sceneLabel: string;
  /** Path prefix for case links: "/sprawy/" or "/en/cases/" */
  casesHrefPrefix: string;
}

const DEFAULT_LABELS: ScrollTimelineLabels = {
  casesLabel: 'Sprawy:',
  sceneLabel: 'Scena',
  casesHrefPrefix: '/sprawy/',
};

interface Props {
  scenes?: TimelineScene[];
  labels?: ScrollTimelineLabels;
}

export default function ScrollTimeline({
  scenes = TIMELINE_SCENES,
  labels = DEFAULT_LABELS,
}: Props = {}) {
  const [activeScene, setActiveScene] = useState<number>(0);
  const [transitionKey, setTransitionKey] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroller: any;
    let cancelled = false;

    (async () => {
      const scrollama = (await import('scrollama')).default;
      if (cancelled) return;
      scroller = scrollama();
      scroller
        .setup({
          step: '.timeline-step',
          offset: 0.5,
          progress: true,
          debug: false,
        })
        .onStepEnter((res: { index: number }) => {
          setActiveScene(res.index);
          setTransitionKey((k) => k + 1);
        })
        .onStepProgress((res: { progress: number }) => {
          setScrollProgress(res.progress);
        });

      window.addEventListener('resize', () => scroller.resize());
    })();

    return () => {
      cancelled = true;
      if (scroller) scroller.destroy();
    };
  }, []);

  const current = scenes[activeScene];
  // Parallax y-shift for the sticky panel: -16px..+16px across a scene
  const parallaxY = (scrollProgress - 0.5) * 32;
  // Background hue shift per scene (subtle drift through the deck)
  const hue = (activeScene * 7) % 360;

  const jumpToScene = (idx: number) => {
    const el = document.querySelector(`.timeline-step[data-step="${idx}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveScene(idx);
    }
  };

  return (
    <div ref={scrollerRef} style={{ position: 'relative' }}>
      {/* Sticky horizontal year ribbon — always visible while scrolling */}
      <div
        style={{
          position: 'sticky',
          top: 60,
          zIndex: 50,
          marginInline: 'calc(-1 * var(--space-4))',
          paddingBlock: '10px',
          paddingInline: 'var(--space-4)',
          background: 'color-mix(in srgb, var(--bg-primary) 92%, transparent)',
          backdropFilter: 'blur(8px)',
          borderBottom: '0.5px solid var(--border)',
          marginBottom: '24px',
        }}
      >
        <div
          role="tablist"
          aria-label={labels.sceneLabel === 'Scena' ? 'Skok do roku' : 'Jump to year'}
          style={{
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            paddingBlock: 4,
          }}
        >
          {scenes.map((scene, idx) => {
            const isActive = idx === activeScene;
            return (
              <button
                key={scene.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => jumpToScene(idx)}
                style={{
                  flexShrink: 0,
                  padding: '6px 12px',
                  borderRadius: 999,
                  border: `0.5px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                  background: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? 'white' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontWeight: isActive ? 500 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {scene.year}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1fr) minmax(280px, 440px)',
          gap: '48px',
          alignItems: 'start',
          position: 'relative',
        }}
      >
      {/* Cinematic background gradient that drifts with each scene */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          background: `radial-gradient(ellipse at ${30 + (scrollProgress * 40)}% ${20 + (activeScene * 4) % 60}%,
            hsla(${hue}, 60%, 50%, 0.06) 0%,
            transparent 50%)`,
          transition: 'background 1200ms ease-out',
          pointerEvents: 'none',
        }}
      />
      {/* Left column: scrolling text */}
      <div>
        {scenes.map((scene, i) => {
          const isActive = activeScene === i;
          const distance = Math.abs(activeScene - i);
          return (
          <section
            key={scene.id}
            className="timeline-step"
            data-step={i}
            style={{
              minHeight: '90vh',
              padding: '120px 0',
              opacity: isActive ? 1 : Math.max(0.18, 0.5 - distance * 0.12),
              transform: isActive ? 'translateY(0) scale(1)' : `translateY(${distance * 6}px) scale(${1 - distance * 0.012})`,
              filter: isActive ? 'blur(0)' : `blur(${Math.min(distance * 0.6, 2.4)}px)`,
              transition: 'opacity 600ms cubic-bezier(0.2, 0.7, 0.2, 1), transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1), filter 600ms ease-out',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--accent)',
                margin: '0 0 8px',
              }}
            >
              {scene.year} · {scene.kicker}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.2vw, 36px)',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
              }}
            >
              {scene.headline}
            </h2>
            {scene.bodyParagraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  margin: '0 0 16px',
                }}
              >
                {p}
              </p>
            ))}
            {scene.caseIds.length > 0 && (
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  margin: '24px 0 0',
                }}
              >
                {labels.casesLabel}{' '}
                {scene.caseIds.map((id, idx) => (
                  <span key={id}>
                    <a
                      href={makeUrl(`${labels.casesHrefPrefix}?filter=${id}`)}
                      style={{ color: 'var(--accent)', textDecoration: 'none' }}
                    >
                      {id}
                    </a>
                    {idx < scene.caseIds.length - 1 && ' · '}
                  </span>
                ))}
              </p>
            )}
          </section>
          );
        })}
      </div>

      {/* Right column: sticky highlights panel with parallax + scene-key animation */}
      <aside
        style={{
          position: 'sticky',
          top: 'calc(60px + 2rem)',
          alignSelf: 'start',
          transform: `translateY(${parallaxY}px)`,
          transition: 'transform 200ms ease-out',
        }}
      >
        <div
          key={transitionKey}
          style={{
            padding: '32px 28px',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            minHeight: '320px',
            animation: 'tl-scene-in 700ms cubic-bezier(0.2, 0.7, 0.2, 1) both',
            boxShadow: `0 8px 40px rgba(0, 0, 0, 0.04), 0 0 0 1px hsla(${hue}, 60%, 50%, 0.08)`,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-tertiary)',
              margin: '0 0 4px',
            }}
          >
            {labels.sceneLabel} {activeScene + 1} / {scenes.length}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '56px',
              fontWeight: 500,
              color: 'var(--accent)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              margin: '0 0 24px',
              animation: 'tl-year-pop 900ms cubic-bezier(0.2, 0.7, 0.2, 1) both',
            }}
          >
            {current.year}
          </p>

          {current.highlights && current.highlights.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {current.highlights.map((h, idx) => (
                <div key={idx}>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '28px',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1,
                      margin: '0 0 4px',
                    }}
                  >
                    {h.value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.04em',
                      margin: 0,
                    }}
                  >
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Vertical timeline axis — clickable years */}
        <nav
          aria-label={labels.sceneLabel === 'Scena' ? 'Skok do roku' : 'Jump to year'}
          style={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '0.5px solid var(--border)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-tertiary)',
              margin: '0 0 12px',
            }}
          >
            {labels.sceneLabel === 'Scena' ? 'Skok do roku' : 'Jump to year'}
          </p>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              position: 'relative',
            }}
          >
            {/* Connecting line behind the dots */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 7,
                top: 6,
                bottom: 6,
                width: 1,
                background: 'var(--border)',
              }}
            />
            {/* Progress overlay on the connecting line */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 7,
                top: 6,
                width: 1,
                height: `calc(${(activeScene / Math.max(scenes.length - 1, 1)) * 100}% - 12px + ${scrollProgress * (100 / scenes.length)}%)`,
                background: 'var(--accent)',
                transition: 'height 400ms cubic-bezier(0.2, 0.7, 0.2, 1)',
              }}
            />
            {scenes.map((scene, idx) => {
              const isActive = idx === activeScene;
              const isPast = idx < activeScene;
              return (
                <li key={scene.id} style={{ position: 'relative', margin: 0 }}>
                  <button
                    type="button"
                    onClick={() => jumpToScene(idx)}
                    aria-current={isActive ? 'true' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      width: '100%',
                      padding: '6px 0',
                      background: 'transparent',
                      border: 0,
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-mono)',
                      fontSize: isActive ? '13px' : '12px',
                      color: isActive
                        ? 'var(--accent)'
                        : isPast
                          ? 'var(--text-secondary)'
                          : 'var(--text-tertiary)',
                      letterSpacing: '0.04em',
                      fontWeight: isActive ? 500 : 400,
                      transition: 'color 200ms, font-size 200ms',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = isPast ? 'var(--text-secondary)' : 'var(--text-tertiary)';
                      }
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: isActive ? 14 : 8,
                        height: isActive ? 14 : 8,
                        borderRadius: '50%',
                        background: isActive
                          ? 'var(--accent)'
                          : isPast
                            ? 'var(--accent)'
                            : 'var(--bg-card)',
                        border: isActive
                          ? '2px solid var(--bg-card)'
                          : isPast
                            ? '0'
                            : '1.5px solid var(--border)',
                        boxShadow: isActive ? '0 0 0 2px var(--accent)' : 'none',
                        flexShrink: 0,
                        marginLeft: isActive ? -3 : 0,
                        transition: 'all 250ms cubic-bezier(0.2, 0.7, 0.2, 1)',
                      }}
                    />
                    <span style={{ flex: 1 }}>{scene.year}</span>
                    <span
                      style={{
                        fontSize: '10px',
                        color: isActive ? 'var(--accent)' : 'var(--text-tertiary)',
                        opacity: isActive ? 1 : 0.6,
                        textTransform: 'lowercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {scene.kicker.toLowerCase()}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </aside>
      </div>

      {/* Inline keyframes — kept colocated so the component is self-contained */}
      <style>{`
        @keyframes tl-scene-in {
          from { opacity: 0; transform: translateY(24px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes tl-year-pop {
          0%   { opacity: 0; transform: scale(0.7) translateY(8px); letter-spacing: 0; }
          60%  { opacity: 1; transform: scale(1.05) translateY(0); letter-spacing: -0.05em; }
          100% { opacity: 1; transform: scale(1) translateY(0); letter-spacing: -0.03em; }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="timeline-step"], aside [style*="animation"] {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            filter: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
