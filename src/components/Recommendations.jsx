import { useState, useEffect, useRef } from 'react'
import { recommendations } from '../data/content'
import styles from './Recommendations.module.css'

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

function CardContent({ r }) {
  return (
    <>
      <i className="ti ti-quote" aria-hidden="true" />
      <div className={styles.quote}>
        {r.quote.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
      </div>
      <div className={styles.author}>
        {r.photo
          ? <img src={r.photo} alt={r.name} className={styles.avatarImg} />
          : <div className={styles.avatar}>{initials(r.name)}</div>}
        <div>
          <p className={styles.name}>{r.name}</p>
          <p className={styles.role}>{r.title}, {r.company}</p>
          <p className={styles.meta}>{r.relationship} · {r.date}</p>
        </div>
      </div>
    </>
  )
}

export default function Recommendations() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const [minHeight, setMinHeight] = useState(0)
  const total = recommendations.length
  const r = recommendations[index]
  const timerRef = useRef(null)
  const measureRef = useRef(null)

  useEffect(() => {
    if (!measureRef.current) return
    const heights = Array.from(measureRef.current.children).map(el => el.offsetHeight)
    setMinHeight(Math.max(...heights))
  }, [])

  const prev = () => { setDirection(-1); setIndex(i => (i - 1 + total) % total) }
  const next = () => { setDirection(1); setIndex(i => (i + 1) % total) }
  const goTo = (i) => { setDirection(i > index ? 1 : -1); setIndex(i) }

  useEffect(() => {
    if (total <= 1 || paused) return
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex(i => (i + 1) % total)
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [paused, total])

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Hidden offscreen container used only to measure all card heights on mount */}
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', width: 'inherit' }}
      >
        {recommendations.map((rec, i) => (
          <div key={i} className={styles.card}>
            <CardContent r={rec} />
          </div>
        ))}
      </div>

      <div className={styles.header}>
        <p className="section-label">RECOMMENDATIONS</p>
        {total > 1 && (
          <div className={styles.nav}>
            <button type="button" onClick={prev} aria-label="Previous recommendation">
              <i className="ti ti-chevron-left" aria-hidden="true" />
            </button>
            <button type="button" onClick={next} aria-label="Next recommendation">
              <i className="ti ti-chevron-right" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <div className={styles.cardViewport} style={minHeight ? { minHeight } : undefined}>
        <div className={styles.card} key={index} data-dir={direction === 1 ? 'next' : 'prev'}>
          <CardContent r={r} />
        </div>
      </div>

      {total > 1 && (
        <div className={styles.dots}>
          {recommendations.map((rec, i) => (
            <button
              type="button"
              key={rec.name}
              className={i === index ? styles.dotActive : styles.dot}
              onClick={() => goTo(i)}
              aria-label={`Go to recommendation ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
