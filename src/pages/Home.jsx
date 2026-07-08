import { Helmet } from 'react-helmet-async'
import styles from './Home.module.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import Work from '../components/Work'
import Craft from '../components/Craft'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import Wayfinding from '../components/Wayfinding'
import Cursor from '../components/Cursor'
import { useActiveSection } from '../hooks/useActiveSection'

const ACT_COUNT = 5

export default function Home() {
  const { activeIndex, progress, mobile, goToSection } = useActiveSection(ACT_COUNT)

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Apoorv Deshmukh | Product Manager</title>
        <meta name="description" content="Apoorv Deshmukh — Senior Product Manager specializing in AI-native products, RAG systems, fintech, and logistics platforms." />
        <link rel="canonical" href="https://apoorvdeshmukh.netlify.app/" />
      </Helmet>
      <ScrollProgress progress={progress} />
      <Cursor />
      <Wayfinding activeIndex={activeIndex} mobile={mobile} progress={progress} goToSection={goToSection} />
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Work />
        <Craft />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
