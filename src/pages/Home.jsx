import styles from './Home.module.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import Projects from '../components/Projects'
import Stack from '../components/Stack'
import Experience from '../components/Experience'
import Recommendations from '../components/Recommendations'
import ResumeCard from '../components/ResumeCard'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.page}>
      <div aria-hidden="true" className={styles.glow} />
      <div className={styles.container}>
        <Nav />
        <main>
          <Hero />
          <Metrics />
          <Projects />
          <Stack />
          <Experience />
          <Recommendations />
          <ResumeCard />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
