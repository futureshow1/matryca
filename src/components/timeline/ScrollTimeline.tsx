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
          debug: false,
        })
        .onStepEnter((res: { index: number }) => {
          setActiveScene(res.index);
        });

      window.addEventListener('resize', () => scroller.resize());
    })();

    return () => {
      cancelled = true;
      if (scroller) scroller.destroy();
    };
  }, []);

  const current = scenes[activeScene];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 1fr) minmax(280px, 440px)',
        gap: '48px',
        alignItems: 'start',
      }}
      ref={scrollerRef}
    >
      {/* Left column: scrolling text */}
      <div>
        {scenes.map((scene, i) => (
          <section
            key={scene.id}
            className="timeline-step"
            data-step={i}
            style={{
              minHeight: '90vh',
              padding: '120px 0',
              opacity: activeScene === i ? 1 : 0.35,
              transition: 'opacity 400ms ease-out',
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
        ))}
      </div>

      {/* Right column: sticky highlights panel */}
      <aside
        style={{
          position: 'sticky',
          top: 'calc(60px + 2rem)',
          alignSelf: 'start',
        }}
      >
        <div
          style={{
            padding: '32px 28px',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            minHeight: '320px',
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
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: idx === activeScene ? 'var(--accent)' : 'var(--border)',
                transition: 'background 200ms ease-out',
              }}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}
