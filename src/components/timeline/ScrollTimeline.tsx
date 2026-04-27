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

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1fr) minmax(280px, 440px)',
        gap: '48px',
        alignItems: 'start',
        position: 'relative',
      }}
      ref={scrollerRef}
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

        {/* Dots navigation */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          {scenes.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: idx === activeScene ? 22 : 8,
                height: 8,
                borderRadius: 4,
                background: idx === activeScene ? 'var(--accent)' : 'var(--border)',
                transition: 'background 300ms ease-out, width 400ms cubic-bezier(0.2, 0.7, 0.2, 1)',
              }}
            />
          ))}
        </div>
      </aside>

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
