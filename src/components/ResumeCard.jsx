import Icon from './Icon'
import Reveal from './Reveal'
import styles from './ResumeCard.module.css'

export default function ResumeCard() {
  return (
    <Reveal as="div" className={styles.card}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <Icon name="file-cv" />
        </div>
        <div>
          <p className={styles.title}>Want the full resume?</p>
          <p className={styles.sub}>Kept updated and tailored. Download it or reach out directly.</p>
        </div>
      </div>
      <div className={styles.actions}>
        <a href="/resume.pdf" download className={styles.btn}>
          <Icon name="download" /> Download PDF
        </a>
      </div>
    </Reveal>
  )
}
