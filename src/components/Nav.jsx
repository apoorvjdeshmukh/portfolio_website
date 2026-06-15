import { Link, useLocation } from 'react-router-dom'
import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import styles from './Nav.module.css'

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.name}>
        {isHome ? personal.name : '← Back'}
      </Link>
      <div className={styles.links}>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-linkedin" aria-hidden="true" /> LinkedIn
        </a>
        <a href={personal.github} target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-github" aria-hidden="true" /> GitHub
        </a>
        <CopyEmail>
          <i className="ti ti-mail" aria-hidden="true" /> Email
        </CopyEmail>
      </div>
    </nav>
  )
}
