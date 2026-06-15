import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <p className="section-label">Featured projects</p>
      <div className={styles.grid}>
        {projects.map(p => (
          <Link to={`/projects/${p.id}`} key={p.id} className={styles.card}>
            <div className={styles.header}>
              <p className={styles.title}>{p.title}</p>
              <span className={`${styles.company} ${styles[p.companyType]}`}>{p.company}</span>
            </div>
            <div className={styles.tags}>
              {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <p className={styles.win}>{p.win}</p>
            <span className={styles.readMore}>
              Read case study <i className="ti ti-arrow-right" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
