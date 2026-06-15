import { useState } from 'react'
import { personal } from '../data/content'
import styles from './Hero.module.css'

export default function Hero() {
  const [showPhoto, setShowPhoto] = useState(true)

  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <div className={styles.available}>
          <span className={styles.dot} />
          {personal.availability}
        </div>
        <p className={styles.eyebrow}>{personal.title} · {personal.location}</p>
        <h1 className={styles.headline}>
          {personal.headline[0]}<br />
          <span className={styles.accent}>{personal.headline[1]}</span>
        </h1>
        <p className={styles.bio}>{personal.bio}</p>

        <div className={styles.seeking}>
          <div className={styles.seekingHeader}>
            <i className="ti ti-briefcase-search" aria-hidden="true" />
            <span>Actively seeking</span>
            <span className={styles.seekingDivider}>·</span>
            <span className={styles.seekingStart}>{personal.seeking.start}</span>
          </div>
          <div className={styles.seekingRoles}>
            {personal.seeking.titles.map(t => (
              <span key={t} className={styles.roleChip}>{t}</span>
            ))}
          </div>
          <div className={styles.seekingMeta}>
            <span>{personal.seeking.types.join(' · ')}</span>
            <span className={styles.seekingDivider}>·</span>
            <span>{personal.seeking.locations.join(' · ')}</span>
          </div>
        </div>

        <div className={styles.tags}>
          {personal.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
        <div className={styles.cta}>
          <a href={`mailto:${personal.email}`} className={styles.btnPrimary}>
            <i className="ti ti-send" aria-hidden="true" /> Get in touch
          </a>
          <a href="#projects" className={styles.btnGhost}>
            <i className="ti ti-arrow-down" aria-hidden="true" /> See my work
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
            <i className="ti ti-brand-linkedin" aria-hidden="true" /> LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
            <i className="ti ti-brand-github" aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>

      {showPhoto && (
        <div className={styles.photoWrapper}>
          <img
            src={personal.photo}
            alt={personal.name}
            className={styles.photo}
            onError={() => setShowPhoto(false)}
          />
        </div>
      )}
    </section>
  )
}
