import { useReveal } from '../hooks/useReveal'
import styles from './EditorialHeadline.module.css'

export default function EditorialHeadline({ lines }) {
  const [ref, shown] = useReveal()
  return (
    <h1 ref={ref} className={`${styles.h1} ${shown ? styles.in : ''}`}>
      {lines.map((line, i) => (
        <span key={i} className={styles.line}>
          <span
            className={styles.inner}
            style={{ '--d': `${i * 150}ms`, color: line.accent ? 'var(--accent)' : undefined }}
          >
            {line.text}
          </span>
        </span>
      ))}
    </h1>
  )
}
