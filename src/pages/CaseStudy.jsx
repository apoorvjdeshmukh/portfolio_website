import Icon from '../components/Icon'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { caseStudies, projects } from '../data/content'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import RagDiagram from '../components/RagDiagram'
import NexusEcosystemDiagram from '../components/diagrams/NexusEcosystemDiagram'
import NexusDriverDiagram from '../components/diagrams/NexusDriverDiagram'
import FintechMpDiagram from '../components/diagrams/FintechMpDiagram'
import UnionPlatformDiagram from '../components/diagrams/UnionPlatformDiagram'
import Contact from '../components/Contact'
import Reveal from '../components/Reveal'
import styles from './CaseStudy.module.css'

const diagrams = {
  'rag': RagDiagram,
  'logixa': NexusEcosystemDiagram,
  'logixa-drivers': NexusDriverDiagram,
  'fintech-mp': FintechMpDiagram,
  'union-platform': UnionPlatformDiagram,
}

function renderInline(text) {
  return text.split(/(\*\*.+?\*\*)/g).map((chunk, i) => {
    if (chunk.startsWith('**') && chunk.endsWith('**')) {
      return <mark key={i} className={styles.highlight}>{chunk.slice(2, -2)}</mark>
    }
    return chunk
  })
}

function NextProjects({ current }) {
  const others = projects.filter(p => p.id !== current).slice(0, 2)
  return (
    <Reveal as="div" stagger className={styles.nextGrid}>
      {others.map((p, i) => (
        <Link to={`/projects/${p.id}`} key={p.id} className={styles.nextCard} style={{ '--i': i }}>
          <span className={`${styles.company} ${styles[p.companyType]}`}>{p.company}</span>
          <p className={styles.nextTitle}>{p.title}</p>
          <span className={styles.nextLink}>
            Read case study <Icon name="arrow-right" />
          </span>
        </Link>
      ))}
    </Reveal>
  )
}

export default function CaseStudy() {
  const { id } = useParams()
  const cs = caseStudies[id]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!cs) return <Navigate to="/" replace />

  const pageUrl = `https://apoorvdeshmukh.netlify.app/projects/${id}`

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{cs.title} — Apoorv Deshmukh</title>
        <meta name="description" content={cs.tldr} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${cs.title} — Apoorv Deshmukh`} />
        <meta property="og:description" content={cs.tldr} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:title" content={`${cs.title} — Apoorv Deshmukh`} />
        <meta name="twitter:description" content={cs.tldr} />
      </Helmet>
      <div className={styles.container}>
        <Nav />
        <main>
          <Reveal>
            <div className={styles.header}>
              <div className={styles.headerMeta}>
                <span className={`${styles.company} ${styles[cs.companyType]}`}>{cs.company}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.platform}>{cs.platform}</span>
              </div>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>{cs.title}</h1>
                {cs.externalCaseStudy && (
                  <a href={cs.externalCaseStudy.url} target="_blank" rel="noopener noreferrer" className={styles.externalChip}>
                    <Icon name="world" />
                    {cs.externalCaseStudy.label}
                    <Icon name="arrow-up-right" />
                  </a>
                )}
                {cs.links && cs.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={styles.externalChip}>
                    <Icon name={l.icon || 'world'} />
                    {l.label}
                    <Icon name="arrow-up-right" />
                  </a>
                ))}
              </div>
              <div className={styles.metaRow}>
                <span><Icon name="user" /> {cs.role}</span>
                <span><Icon name="calendar" /> {cs.timeline}</span>
              </div>
              <div className={styles.tags}>
                {cs.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className={styles.tldr}>
              <p className={styles.tldrLabel}>TL;DR</p>
              <p className={styles.tldrText}>{cs.tldr}</p>
            </div>
          </Reveal>

          <Reveal as="div" stagger className={styles.metricsGrid}>
            {cs.metrics.map((m, i) => (
              <div key={i} className={styles.metricCard} style={{ '--i': i }}>
                <p className={styles.metricValue}>{m.value}</p>
                <p className={styles.metricLabel}>{m.label}</p>
              </div>
            ))}
          </Reveal>

          {cs.diagram && diagrams[cs.diagram] && (
            <Reveal>
              <div className={styles.diagSection}>
                <p className={styles.sectionLabel}>{cs.diagramLabel || 'How it works'}</p>
                {(() => { const Diagram = diagrams[cs.diagram]; return <Diagram /> })()}
              </div>
            </Reveal>
          )}

          {cs.screenshots && cs.screenshots.length > 0 && (
            <Reveal as="div" stagger className={styles.mediaGrid}>
              {cs.screenshots.map((s, i) => (
                <img key={s.src} src={s.src} alt={s.alt} loading="lazy" className={styles.screenshot} style={{ '--i': i }} />
              ))}
            </Reveal>
          )}

          {cs.video && (
            <Reveal>
              <div className={styles.videoSection}>
                <p className={styles.sectionLabel}>{cs.video.label || 'Demo'}</p>
                <div className={styles.videoWrap}>
                  <iframe
                    src={`https://www.youtube.com/embed/${cs.video.youtubeId}`}
                    title={cs.video.title || cs.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>
          )}

          <div className={styles.sections}>
            {cs.sections.map((s, i) => (
              <Reveal key={i} as="div" className={styles.section}>
                <h2 className={styles.sectionHeading}>
                  <span className={styles.sectionNum}>{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>
                <div className={styles.sectionBody}>
                  {s.content.split('\n\n').map((para, j) => {
                    if (/^\d+\./.test(para)) {
                      return (
                        <ol key={j} className={styles.ol}>
                          {para.split('\n').filter(Boolean).map((line, k) => (
                            <li key={k}>{renderInline(line.replace(/^\d+\.\s*/, ''))}</li>
                          ))}
                        </ol>
                      )
                    }
                    return <p key={j}>{renderInline(para)}</p>
                  })}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.bigWin}>
              <div className={styles.bigWinIcon}>
                <Icon name="trophy" />
              </div>
              <div>
                <p className={styles.bigWinLabel}>The big win</p>
                <p className={styles.bigWinText}>{cs.bigWin}</p>
              </div>
            </div>
          </Reveal>

          <div style={{ marginBottom: '2.5rem' }}>
            <Reveal><p className={styles.sectionLabel} style={{ marginBottom: '1rem' }}>More projects</p></Reveal>
            <NextProjects current={id} />
          </div>

          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
