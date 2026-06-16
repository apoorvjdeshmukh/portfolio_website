import { useState, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import NotFound from './pages/NotFound'
import Toast from './components/Toast'
import { ToastContext } from './context/ToastContext'

function PageTracker() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }, [location])
  return null
}

export default function App() {
  const [toast, setToast] = useState(null)
  const showToast = useCallback((msg) => setToast(msg), [])
  const clearToast = useCallback(() => setToast(null), [])

  return (
    <ToastContext.Provider value={showToast}>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toast message={toast} onDone={clearToast} />
    </ToastContext.Provider>
  )
}
