import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

function PageTracker() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }, [location])
  return null
}

export default function App() {
  return (
    <>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<CaseStudy />} />
      </Routes>
    </>
  )
}
