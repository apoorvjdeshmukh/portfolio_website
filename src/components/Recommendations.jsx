import { recommendations } from '../data/content'
import styles from './Recommendations.module.css'

function initials(name) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

export default function Recommendations() {
  return (
    <section className={styles.section}>
      <p className="section-label">RECOMMENDATIONS</p>
      <div className={styles.grid}>
        {recommendations.map(r => (
          <div className={styles.card} key={r.name}>
            <i className="ti ti-quote" aria-hidden="true" />
            <p className={styles.quote}>{r.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{initials(r.name)}</div>
              <div>
                <p className={styles.name}>{r.name}</p>
                <p className={styles.role}>{r.title}, {r.company}</p>
                <p className={styles.meta}>{r.relationship} · {r.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
