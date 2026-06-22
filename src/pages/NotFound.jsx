import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Reveal>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page not found</h1>
        <p className={styles.sub}>This page doesn't exist or was moved.</p>
        <Link to="/" className={styles.btn}>← Back to home</Link>
      </Reveal>
    </div>
  )
}
