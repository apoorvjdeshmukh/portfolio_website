import Icon from './Icon'
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
            <Icon name={s.icon} className={styles.icon} />
            <p className={styles.title}>{s.title}</p>
            <ul className={styles.list}>
              {s.items.map(item => (
                <li key={item} className={styles.item}>
                  <Icon name="check" />{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
