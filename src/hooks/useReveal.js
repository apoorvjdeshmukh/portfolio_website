import { useEffect, useRef, useState } from 'react'

export function useReveal({ threshold = 0.18, once = true } = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true); return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true)
          if (once) io.unobserve(e.target)
        } else if (!once) {
          setShown(false)
        }
      })
    }, { threshold, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, once])
  return [ref, shown]
}
