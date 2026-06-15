import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { caseStudies, projects } from '../data/content'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RagDiagram from '../components/RagDiagram'
import Contact from '../components/Contact'
import styles from './CaseStudy.module.css'

function NextProjects({ current }) {
  const others = projects.filter(p => p.id !== current).slice(0, 2)
  return (
    <div className={styles.nextGrid}>
      {others.map(p => (
        <Link to={`/projects/${p.id}`} key={p.id} className={styles.nextCard}>
          <span className={`${styles.company} ${styles[p.companyType]}`}>{p.company}</span>
          <p className={styles.nextTitle}>{p.title}</p>
          <span className={styles.nextLink}>
            Read case study <i className="ti ti-arrow-right" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  )
}

export default function CaseStudy() {
  const { id } = useParams()
  const cs = caseStudies[id]

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!cs) return <Navigate to="/" replace />

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Nav />
        <main>
          <div className={styles.header}>
            <div className={styles.headerMeta}>
              <span className={`${styles.company} ${styles[cs.companyType]}`}>{cs.company}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.platform}>{cs.platform}</span>
            </div>
            <h1 className={styles.title}>{cs.title}</h1>
            <div className={styles.metaRow}>
              <span><i className="ti ti-user" aria-hidden="true" /> {cs.role}</span>
              <span><i className="ti ti-calendar" aria-hidden="true" /> {cs.timeline}</span>
            </div>
            <div className={styles.tags}>
              {cs.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>

          <div className={styles.tldr}>
            <p className={styles.tldrLabel}>TL;DR</p>
            <p className={styles.tldrText}>{cs.tldr}</p>
          </div>

          <div className={styles.metricsGrid}>
            {cs.metrics.map((m, i) => (
              <div key={i} className={styles.metricCard}>
                <p className={styles.metricValue}>{m.value}</p>
                <p className={styles.metricLabel}>{m.label}</p>
              </div>
            ))}
          </div>

          {cs.hasArchDiagram && (
            <div className={styles.diagSection}>
              <p className={styles.sectionLabel}>Architecture</p>
              <RagDiagram />
            </div>
          )}

          <div className={styles.sections}>
            {cs.sections.map((s, i) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.sectionHeading}>{s.heading}</h2>
                <div className={styles.sectionBody}>
                  {s.content.split('\n\n').map((para, j) => {
                    if (/^\d+\./.test(para)) {
                      return (
                        <ol key={j} className={styles.ol}>
                          {para.split('\n').filter(Boolean).map((line, k) => (
                            <li key={k}>{line.replace(/^\d+\.\s*/, '')}</li>
                          ))}
                        </ol>
                      )
                    }
                    return <p key={j}>{para}</p>
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.bigWin}>
            <div className={styles.bigWinIcon}>
              <i className="ti ti-trophy" aria-hidden="true" />
            </div>
            <div>
              <p className={styles.bigWinLabel}>The big win</p>
              <p className={styles.bigWinText}>{cs.bigWin}</p>
            </div>
          </div>

          <div style={{marginBottom: '2.5rem'}}>
            <p className={styles.sectionLabel} style={{marginBottom:'1rem'}}>More projects</p>
            <NextProjects current={id} />
          </div>

          <Contact />

        </main>
        <Footer />
      </div>
    </div>
  )
}
