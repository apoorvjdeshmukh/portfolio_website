import { stack } from '../data/content'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section className={styles.section}>
      <p className="section-label">Product stack</p>
      <div className={styles.grid}>
        {stack.map(s => (
          <div key={s.title} className={styles.card}>
            <i className={`ti ${s.icon} ${styles.icon}`} aria-hidden="true" />
            <p className={styles.title}>{s.title}</p>
            <ul className={styles.list}>
              {s.items.map(item => (
                <li key={item} className={styles.item}>
                  <i className="ti ti-check" aria-hidden="true" />{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
