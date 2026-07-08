import { useEffect, useState } from 'react'

export function useActiveSection(count) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    let raf = null

    const measure = () => {
      raf = null
      const sections = Array.from(document.querySelectorAll('[data-act]'))
      const y = window.scrollY + window.innerHeight * 0.35
      let active = 0
      sections.forEach((s, i) => {
        const top = s.getBoundingClientRect().top + window.scrollY
        if (top <= y) active = i
      })

      const de = document.documentElement
      const max = de.scrollHeight - de.clientHeight
      const prog = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0

      setActiveIndex((prev) => (prev === active ? prev : active))
      setProgress(prog)
      setMobile(window.innerWidth < 920)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(measure)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    measure()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [count])

  const goToSection = (i) => {
    const sections = document.querySelectorAll('[data-act]')
    const el = sections[i]
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 8
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return { activeIndex, progress, mobile, goToSection }
}
