import { useState } from 'react'
import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import EditorialHeadline from './EditorialHeadline'
import Reveal from './Reveal'
import styles from './Hero.module.css'

export default function Hero() {
  const [showPhoto, setShowPhoto] = useState(true)

  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <Reveal>
          <div className={styles.available}>
            <span className={styles.dot} />
            {personal.availability}
          </div>
          <p className={styles.eyebrow}>{personal.title} · {personal.location}</p>
        </Reveal>

        <EditorialHeadline lines={[
          { text: personal.headline[0] },
          { text: personal.headline[1], accent: true },
        ]} />

        <Reveal>
          <p className={styles.bio}>{personal.bio}</p>
        </Reveal>

        <Reveal>
          <div className={styles.seeking}>
            <div className={styles.seekingHeader}>
              <i className="ti ti-briefcase-search" aria-hidden="true" />
              <span>Actively seeking</span>
              <span className={styles.seekingDivider}>·</span>
              <span className={styles.seekingStart}>{personal.seeking.start}</span>
              <span className={styles.seekingDivider}>·</span>
              <span className={styles.seekingStart}>{personal.seeking.visaNote}</span>
            </div>
            <div className={styles.seekingRoles}>
              {personal.seeking.titles.map(t => (
                <span key={t} className={styles.roleChip}>{t}</span>
              ))}
            </div>
            <div className={styles.seekingMeta}>
              <span>{[...personal.seeking.types, ...personal.seeking.locations].join(' · ')}</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" stagger className={styles.tags}>
          {personal.tags.map((t, i) => (
            <span key={t} className={styles.tag} style={{ '--i': i }}>{t}</span>
          ))}
        </Reveal>

        <Reveal>
          <div className={styles.cta}>
            <CopyEmail className={styles.btnPrimary}>
              <i className="ti ti-send" aria-hidden="true" /> Get in touch
            </CopyEmail>
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
        </Reveal>
      </div>

      {showPhoto && (
        <Reveal>
          <div className={styles.photoWrapper}>
            <img
              src={personal.photo}
              alt={personal.name}
              className={styles.photo}
              onError={() => setShowPhoto(false)}
            />
          </div>
        </Reveal>
      )}
    </section>
  )
}
