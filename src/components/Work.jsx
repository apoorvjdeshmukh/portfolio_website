import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { projects, caseStudies } from '../data/content'
import Reveal from './Reveal'
import styles from './Work.module.css'

const items = projects.map((p) => ({ ...p, ...caseStudies[p.id] }))

const chipClass = { nurd: styles.chipNurd, agile: styles.chipAgile, eze: styles.chipEze, personal: styles.chipPersonal }

function Chip({ item }) {
  return <span className={`${styles.chip} ${chipClass[item.companyType]}`}>{item.company}</span>
}

function DetailBody({ item, compact = false }) {
  return (
    <>
      <div className={styles.metaRow}>
        <Chip item={item} />
        <span className={styles.timeline}>{item.timeline}</span>
        <span className={styles.metaDot}>·</span>
        <span className={styles.platform}>{item.platform}</span>
      </div>
      {!compact && <h3 className={styles.title}>{item.title}</h3>}
      <p className={styles.bigWin}>{item.bigWin}</p>
      <div className={styles.metricsGrid}>
        {item.metrics.map((m, i) => (
          <div key={i}>
            <p className={styles.metricValue}>{m.value}</p>
            <p className={styles.metricLabel}>{m.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.tags}>
        {item.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <div className={styles.footerRow}>
        <Link to={`/projects/${item.id}`} className={styles.cta}>
          Read case study <Icon name="arrow-right" />
        </Link>
        {item.externalCaseStudy && (
          <a href={item.externalCaseStudy.url} target="_blank" rel="noopener noreferrer" className={styles.published}>
            {item.externalCaseStudy.label} <Icon name="arrow-up-right" />
          </a>
        )}
      </div>
    </>
  )
}

export default function Work() {
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.section} data-act="2" id="work">
      <div aria-hidden="true" className={styles.glow} />
      <div className={styles.inner}>
        <Reveal><p className={styles.label}>Selected work</p></Reveal>
        <Reveal>
          <h2 className={styles.heading}>
            Eight 0-to-1 products, shipped under real constraints — regulation, multiple languages, legacy chaos, and (for two) just my own time and a Claude API key.
          </h2>
        </Reveal>

        {/* Desktop: index list + detail panel */}
        <div className={styles.desktopLayout}>
          <div className={styles.indexList}>
            {items.map((item, i) => {
              const on = i === selected
              return (
                <div key={item.id} data-proj className={on ? styles.rowActive : styles.row}>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    onFocus={() => setSelected(i)}
                    className={styles.rowBtn}
                  >
                    <span className={on ? styles.numActive : styles.num}>{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <span className={on ? styles.rowTitleActive : styles.rowTitle}>{item.title}</span>
                      <span className={on ? styles.rowCompanyActive : styles.rowCompany}>{item.company}</span>
                    </span>
                  </button>
                  <Link to={`/projects/${item.id}`} className={on ? styles.rowGoActive : styles.rowGo} aria-label={`Read ${item.title} case study`}>
                    <Icon name="arrow-right" />
                  </Link>
                </div>
              )
            })}
          </div>
          <div className={styles.detailWrapper}>
            {items.map((item, i) => (
              <div
                key={item.id}
                aria-hidden={i !== selected}
                className={i === selected ? styles.detail : styles.detailHidden}
              >
                <DetailBody item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: accordion, all projects visible */}
        <div className={styles.accordion}>
          {items.map((item, i) => {
            const on = i === open
            return (
              <div key={item.id} data-proj className={on ? styles.accItemOpen : styles.accItem}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? -1 : i)}
                  className={styles.accHead}
                >
                  <span className={on ? styles.numActive : styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.accText}>
                    <span className={styles.accTitle}>{item.title}</span>
                    <span className={styles.rowCompanyActive}>{item.company}</span>
                  </span>
                  <span className={styles.accSign} aria-hidden="true">{on ? '−' : '+'}</span>
                </button>
                {on && (
                  <div className={styles.accBody}>
                    <DetailBody item={item} compact />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
