import { useState } from 'react'
import Icon from './Icon'
import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import EditorialHeadline from './EditorialHeadline'
import Reveal from './Reveal'
import { useMagnetic } from '../hooks/useMagnetic'
import styles from './Hero.module.css'

export default function Hero() {
  const [showPhoto, setShowPhoto] = useState(true)
  const primaryRef = useMagnetic()
  const ghostRef = useMagnetic()

  return (
    <section className={styles.hero} data-act="0" id="top">
      <div aria-hidden="true" className={styles.glow} />
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

        <Reveal as="div" stagger className={styles.tags}>
          {personal.tags.map((t, i) => (
            <span key={t} className={styles.tag} style={{ '--i': i }}>{t}</span>
          ))}
        </Reveal>

        <Reveal>
          <div className={styles.cta}>
            <CopyEmail ref={primaryRef} data-magnetic className={styles.btnPrimary}>
              <Icon name="send" /> Get in touch
            </CopyEmail>
            <a ref={ghostRef} data-magnetic href="#work" className={styles.btnGhost}>
              <Icon name="arrow-down" /> See my work
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
