import Stack from './Stack'
import Experience from './Experience'
import Recommendations from './Recommendations'
import styles from './Craft.module.css'

export default function Craft() {
  return (
    <section className={styles.section} data-act="3">
      <div className={styles.inner}>
        <Stack />
        <Experience />
        <Recommendations />
      </div>
    </section>
  )
}
