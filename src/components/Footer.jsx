import { personal } from '../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.name}>{personal.name}</p>
        <p className={styles.email}>{personal.email}</p>
      </div>
      <div className={styles.links}>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-linkedin" aria-hidden="true" /> LinkedIn
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-github" aria-hidden="true" /> GitHub
        </a>
        <a href={`mailto:${personal.email}`}>
          <i className="ti ti-mail" aria-hidden="true" /> Email
        </a>
      </div>
    </footer>
  )
}
