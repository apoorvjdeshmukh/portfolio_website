import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon'
import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import styles from './Nav.module.css'

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  return (
    <nav className={styles.nav}>
      {isHome ? (
        <Link to="/" className={styles.name}>{personal.name}</Link>
      ) : (
        <button type="button" onClick={() => navigate(-1)} className={styles.name}>
          ← Back
        </button>
      )}
      <div className={styles.links}>
        <Link to="/blog" className={styles.blogLink}>
          <Icon name="notes" /> Blog
        </Link>
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
    </nav>
  )
}
