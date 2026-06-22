import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import Reveal from './Reveal'
import styles from './ResumeCard.module.css'

export default function ResumeCard() {
  return (
    <Reveal as="section" className={styles.card}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <i className="ti ti-file-cv" aria-hidden="true" />
        </div>
        <div>
          <p className={styles.title}>Want the full resume?</p>
          <p className={styles.sub}>Kept updated and tailored. Download it or reach out directly.</p>
        </div>
      </div>
      <div className={styles.actions}>
        <a href="/resume.pdf" download className={styles.btn}>
          <i className="ti ti-download" aria-hidden="true" /> Download PDF
        </a>
        <CopyEmail className={styles.btnGhost}>
          <i className="ti ti-mail" aria-hidden="true" /> Email me
        </CopyEmail>
      </div>
    </Reveal>
  )
}
