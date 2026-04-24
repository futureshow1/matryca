import { useState, useMemo } from 'react';
import { QUESTIONS, scoreProfile } from '../../data/quiz-en';

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');
const makeUrl = (path: string) => `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

type Answer = 'yes' | 'no' | 'dont-know';

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[currentIdx];
  const answered = Object.keys(answers).length;
  const progress = answered / QUESTIONS.length;

  const answer = (a: Answer) => {
    setAnswers((prev) => ({ ...prev, [current.id]: a }));
  };

  const next = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const back = () => {
    if (currentIdx > 0) setCurrentIdx((i) => i - 1);
  };

  const reset = () => {
    setAnswers({});
    setCurrentIdx(0);
    setFinished(false);
  };

  const result = useMemo(() => (finished ? scoreProfile(answers) : null), [finished, answers]);

  if (finished && result) {
    const yesQuestions = QUESTIONS.filter((q) => answers[q.id] === 'yes');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{
          padding: '32px',
          background: 'var(--bg-card)',
          border: '0.5px solid var(--border)',
          borderRadius: 'var(--radius-md)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            margin: '0 0 8px',
          }}>
            Your result
          </p>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '48px',
            fontWeight: 500,
            lineHeight: 1,
            color: 'var(--accent)',
            letterSpacing: '-0.02em',
            margin: '0 0 4px',
          }}>
            {result.level}
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--text-tertiary)',
            margin: '0 0 16px',
          }}>
            {Math.round(result.score)} / {result.maxScore} exposure points
          </p>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.55,
            color: 'var(--text-primary)',
            margin: 0,
            maxWidth: 640,
          }}>
            {result.description}
          </p>
        </div>

        <section>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '24px',
            margin: '0 0 16px',
          }}>
            What this means — concrete steps
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: 16 }}>
            {yesQuestions.length === 0
              ? 'No services require action — perfect.'
              : `For ${yesQuestions.length} services you use:`}
          </p>
          <ol style={{ listStyle: 'decimal', paddingLeft: 20, margin: 0 }}>
            {yesQuestions.map((q) => (
              <li key={q.id} style={{
                padding: '16px 0',
                borderBottom: '0.5px solid var(--border)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '16px',
                  fontWeight: 500,
                  margin: '0 0 4px',
                }}>
                  {q.question}
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.55,
                  color: 'var(--text-secondary)',
                  margin: '0 0 8px',
                }}>
                  {q.action}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {q.caseIds.map((cid) => (
                    <a key={cid}
                      href={makeUrl(`/en/cases/`)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        padding: '2px 6px',
                        background: 'var(--accent-bg)',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {cid}
                    </a>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div style={{
          display: 'flex',
          gap: '12px',
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '0.5px solid var(--border)',
        }}>
          <button onClick={reset} style={btnStyle('primary')}>Start over</button>
          <a href={makeUrl('/en/cases/')} style={btnStyle('ghost')}>Browse 33 cases</a>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          margin: 0,
        }}>
          Your answers are not saved anywhere — this portal collects no data.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          flex: 1,
          height: 3,
          background: 'var(--border)',
          borderRadius: 2,
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: 'var(--accent)',
            transition: 'width 300ms ease-out',
          }} />
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          minWidth: 42,
        }}>
          {currentIdx + 1} / {QUESTIONS.length}
        </span>
      </div>

      {/* Question */}
      <div style={{
        padding: '32px',
        background: 'var(--bg-card)',
        border: '0.5px solid var(--border)',
        borderRadius: 'var(--radius-md)',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          margin: '0 0 8px',
        }}>
          Question {currentIdx + 1}
        </p>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '24px',
          fontWeight: 500,
          lineHeight: 1.25,
          margin: '0 0 24px',
          maxWidth: 640,
        }}>
          {current.question}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {(['yes', 'no', 'dont-know'] as const).map((a) => (
            <button
              key={a}
              onClick={() => answer(a)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-md)',
                border: `0.5px solid ${answers[current.id] === a ? 'var(--accent)' : 'var(--border-hover)'}`,
                background: answers[current.id] === a ? 'var(--accent)' : 'transparent',
                color: answers[current.id] === a ? 'white' : 'var(--text-primary)',
                fontSize: '14px',
                fontFamily: 'var(--font-sans)',
                cursor: 'pointer',
                transition: 'all 150ms ease-out',
                textTransform: 'none',
              }}
            >
              {a === 'dont-know' ? "Don't know" : a === 'yes' ? 'Yes' : 'No'}
            </button>
          ))}
        </div>
      </div>

      {/* Revelation (po odpowiedzi) */}
      {answers[current.id] && answers[current.id] !== 'no' && (
        <div style={{
          padding: '20px 24px',
          background: 'var(--accent-bg)',
          borderLeft: '2px solid var(--accent)',
          borderRadius: 'var(--radius-sm)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            margin: '0 0 6px',
          }}>
            What this means
          </p>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.55,
            color: 'var(--accent-text)',
            margin: 0,
          }}>
            {current.revelation}
          </p>
        </div>
      )}

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
        <button
          onClick={back}
          disabled={currentIdx === 0}
          style={{
            ...btnStyle('ghost'),
            opacity: currentIdx === 0 ? 0.4 : 1,
            cursor: currentIdx === 0 ? 'default' : 'pointer',
          }}
        >
          ← Poprzednie
        </button>
        <button
          onClick={next}
          disabled={!answers[current.id]}
          style={{
            ...btnStyle('primary'),
            opacity: !answers[current.id] ? 0.4 : 1,
            cursor: !answers[current.id] ? 'default' : 'pointer',
          }}
        >
          {currentIdx === QUESTIONS.length - 1 ? 'See your result' : 'Next →'}
        </button>
      </div>
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
  };
}
