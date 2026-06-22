import { experience, education, certifications } from '../data/content'
import Reveal from './Reveal'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section}>
      <Reveal><p className="section-label">Experience</p></Reveal>
      <div className={styles.list}>
        {experience.map((e, i) => (
          <Reveal key={i} as="div" className={styles.item} style={{ '--i': i }}>
            <p className={styles.period}>{e.period}</p>
            <div className={styles.content}>
              <p className={styles.role}>{e.role}</p>
              <p className={styles.company}>{e.company} · <span>{e.type}</span></p>
              <ul className={styles.bullets}>
                {e.bullets.map((b, j) => <li key={j} className={styles.bullet}>{b}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className={styles.bottom}>
          <div>
            <p className="section-label">Education</p>
            {education.map(e => (
              <div key={e.degree} className={styles.eduItem}>
                <p className={styles.eduDegree}>{e.degree}</p>
                <p className={styles.eduSchool}>{e.school} · {e.year}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="section-label">Certifications</p>
            <ul className={styles.certList}>
              {certifications.map(c => (
                <li key={c} className={styles.certItem}>
                  <i className="ti ti-certificate" aria-hidden="true" />{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
