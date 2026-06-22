import { stack } from '../data/content'
import Reveal from './Reveal'
import styles from './Stack.module.css'

export default function Stack() {
  return (
    <section className={styles.section}>
      <Reveal><p className="section-label">Product stack</p></Reveal>
      <Reveal as="div" stagger className={styles.grid}>
        {stack.map((s, i) => (
          <div key={s.title} className={styles.card} style={{ '--i': i }}>
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
      </Reveal>
    </section>
  )
}
