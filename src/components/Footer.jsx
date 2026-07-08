import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.name}>© 2026 {personal.name} · {personal.location}</p>
        <div className={styles.links}>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <CopyEmail>Email</CopyEmail>
        </div>
      </div>
    </footer>
  )
}
