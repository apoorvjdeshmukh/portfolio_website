import Icon from './Icon'
import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
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
          <Icon name="brand-linkedin" /> LinkedIn
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">
          <Icon name="brand-github" /> GitHub
        </a>
        <CopyEmail>
          <Icon name="mail" /> Email
        </CopyEmail>
      </div>
    </footer>
  )
}
