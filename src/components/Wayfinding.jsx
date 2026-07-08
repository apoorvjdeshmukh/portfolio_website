import styles from './Wayfinding.module.css'

const ACTS = [
  { n: '01', label: 'Intro' },
  { n: '02', label: 'Numbers' },
  { n: '03', label: 'Work' },
  { n: '04', label: 'Craft' },
  { n: '05', label: 'Contact' },
]

export default function Wayfinding({ activeIndex, mobile, progress, goToSection }) {
  if (mobile) {
    return (
      <div className={styles.mpill}>
        {ACTS.map((a, i) => (
          <button
            key={a.n}
            type="button"
            data-proj
            aria-label={a.label}
            className={i === activeIndex ? styles.mdotActive : styles.mdot}
            onClick={() => goToSection(i)}
          />
        ))}
      </div>
    )
  }

  return (
    <aside className={styles.spine}>
      <div className={styles.track}>
        <div className={styles.fill} style={{ height: `${progress * 100}%` }} />
        {ACTS.map((a, i) => {
          const on = i === activeIndex
          return (
            <button
              key={a.n}
              type="button"
              data-proj
              className={styles.node}
              onClick={() => goToSection(i)}
            >
              <span className={on ? styles.labelOn : styles.label}>{a.n} · {a.label}</span>
              <span className={on ? styles.dotOn : styles.dot} />
            </button>
          )
        })}
      </div>
    </aside>
  )
}
