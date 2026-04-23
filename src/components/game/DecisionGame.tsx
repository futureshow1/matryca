import { useState, useMemo } from 'react';
import { SCENARIOS, scoreToLevel } from '../../data/scenarios';

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
const makeUrl = (path: string) => `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

export default function DecisionGame() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showConsequence, setShowConsequence] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = SCENARIOS[currentIdx];
  const progress = currentIdx / SCENARIOS.length;
  const currentChoice = current
    ? current.choices.find((c) => c.id === answers[current.slug])
    : null;

  const totalScore = useMemo(() => {
    return SCENARIOS.reduce((sum, sc) => {
      const choice = sc.choices.find((c) => c.id === answers[sc.slug]);
      return sum + (choice?.score ?? 0);
    }, 0);
  }, [answers]);

  const maxPossible = useMemo(
    () => SCENARIOS.reduce((sum, sc) => sum + Math.max(...sc.choices.map((c) => c.score)), 0),
    []
  );

  const pickChoice = (choiceId: string) => {
    setAnswers((prev) => ({ ...prev, [current.slug]: choiceId }));
    setShowConsequence(true);
  };

  const next = () => {
    setShowConsequence(false);
    if (currentIdx < SCENARIOS.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentIdx(0);
    setShowConsequence(false);
    setFinished(false);
  };

  if (finished) {
    const result = scoreToLevel(totalScore, maxPossible);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div
          style={{
            padding: '32px',
            background: 'var(--bg-card)',
            border: '0.5px solid var(--border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              margin: '0 0 8px',
            }}
          >
            Twój wzorzec decyzji
          </p>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '48px',
              fontWeight: 500,
              lineHeight: 1,
              color: 'var(--accent)',
              letterSpacing: '-0.02em',
              margin: '0 0 16px',
            }}
          >
            {result.level}
          </p>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.55,
              color: 'var(--text-primary)',
              margin: 0,
              maxWidth: 640,
            }}
          >
            {result.description}
          </p>
        </div>

        <section>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              margin: '0 0 16px',
            }}
          >
            Przegląd twoich decyzji
          </h2>
          {SCENARIOS.map((sc) => {
            const choice = sc.choices.find((c) => c.id === answers[sc.slug]);
            if (!choice) return null;
            return (
              <div
                key={sc.slug}
                style={{
                  padding: '16px 0',
                  borderBottom: '0.5px solid var(--border)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    margin: '0 0 4px',
                  }}
                >
                  {sc.kicker}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 500,
                    margin: '0 0 6px',
                  }}
                >
                  {sc.title}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    margin: '0 0 6px',
                  }}
                >
                  Wybrałaś/-eś: <em>{choice.label}</em>
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    margin: 0,
                  }}
                >
                  W rzeczywistości: {sc.reality.substring(0, 140)}…
                </p>
              </div>
            );
          })}
        </section>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: '0.5px solid var(--border)',
          }}
        >
          <button onClick={reset} style={btnStyle('primary')}>
            Zagraj od nowa
          </button>
          <a href={makeUrl('/sygnalisci/')} style={btnStyle('ghost')}>
            Poznaj 12 sygnalistów →
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            margin: 0,
          }}
        >
          Twoje odpowiedzi nie są nigdzie zapisane — portal nie zbiera danych.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            flex: 1,
            height: 3,
            background: 'var(--border)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progress * 100}%`,
              background: 'var(--accent)',
              transition: 'width 300ms ease-out',
            }}
          />
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            minWidth: 52,
          }}
        >
          {currentIdx + 1} / {SCENARIOS.length}
        </span>
      </div>

      {/* Scenariusz */}
      <div
        style={{
          padding: '32px',
          background: 'var(--bg-card)',
          border: '0.5px solid var(--border)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            margin: '0 0 8px',
          }}
        >
          {current.kicker} · {current.year}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 500,
            lineHeight: 1.2,
            margin: '0 0 12px',
            maxWidth: 720,
          }}
        >
          {current.title}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text-tertiary)',
            margin: '0 0 16px',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {current.role}
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: 1.6,
            color: 'var(--text-primary)',
            margin: '0 0 20px',
            maxWidth: 720,
          }}
        >
          {current.context}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px',
            fontWeight: 500,
            margin: '0 0 16px',
            color: 'var(--accent)',
          }}
        >
          {current.question}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {current.choices.map((choice, i) => {
            const isSelected = answers[current.slug] === choice.id;
            const shouldShow = !showConsequence || isSelected;
            if (!shouldShow) return null;
            return (
              <button
                key={choice.id}
                onClick={() => !showConsequence && pickChoice(choice.id)}
                disabled={showConsequence}
                style={{
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  border: `0.5px solid ${isSelected ? 'var(--accent)' : 'var(--border-hover)'}`,
                  background: isSelected ? 'var(--accent-bg)' : 'transparent',
                  color: 'var(--text-primary)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.5,
                  cursor: showConsequence ? 'default' : 'pointer',
                  transition: 'all 150ms ease-out',
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    marginRight: 8,
                  }}
                >
                  {String.fromCharCode(65 + i)}.
                </span>
                {choice.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Konsekwencja + reality */}
      {showConsequence && currentChoice && (
        <>
          <div
            style={{
              padding: '20px 24px',
              background: 'var(--accent-bg)',
              borderLeft: '2px solid var(--accent)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                margin: '0 0 6px',
              }}
            >
              Konsekwencja twojego wyboru
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--accent-text)',
                margin: 0,
              }}
            >
              {currentChoice.consequence}
            </p>
          </div>

          <div
            style={{
              padding: '20px 24px',
              background: 'var(--bg-card)',
              border: '0.5px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                margin: '0 0 6px',
              }}
            >
              Co wydarzyło się naprawdę
            </p>
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                margin: 0,
              }}
            >
              {current.reality}
            </p>
          </div>

          <button onClick={next} style={btnStyle('primary')}>
            {currentIdx === SCENARIOS.length - 1 ? 'Zobacz wynik' : 'Następny scenariusz →'}
          </button>
        </>
      )}
    </div>
  );
}

function btnStyle(variant: 'primary' | 'ghost'): React.CSSProperties {
  return {
    padding: '10px 20px',
    borderRadius: 'var(--radius-md)',
    border: variant === 'primary' ? 'none' : '0.5px solid var(--border-hover)',
    background: variant === 'primary' ? 'var(--accent)' : 'transparent',
    color: variant === 'primary' ? 'white' : 'var(--text-primary)',
    fontSize: '14px',
    fontFamily: 'var(--font-sans)',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    alignSelf: 'flex-start',
  };
}
