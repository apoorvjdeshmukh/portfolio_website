import styles from './ScrollProgress.module.css'

export default function ScrollProgress({ progress }) {
  return (
    <div className={styles.bar} style={{ width: `${progress * 100}%` }} />
  )
}
