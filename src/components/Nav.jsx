import Icon from './Icon'
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
        <Link to="/blog">
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
