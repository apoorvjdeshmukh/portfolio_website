import { personal } from '../data/content'
import CopyEmail from './CopyEmail'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <p className={styles.label}>Let's build something</p>
        <h2 className={styles.heading}>
          Have a product challenge?<br />I'd love to hear it.
        </h2>
        <p className={styles.sub}>
          Open to Senior PM roles and consulting engagements — particularly AI-native products, 0-to-1 builds, and regulated environments.
        </p>
        <div className={styles.cta}>
          <CopyEmail className={styles.btnPrimary}>
            <i className="ti ti-send" aria-hidden="true" /> Get in touch
          </CopyEmail>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            <i className="ti ti-brand-linkedin" aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
