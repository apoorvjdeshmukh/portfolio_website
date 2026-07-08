import { useEffect, useRef } from 'react'

export function useMagnetic() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: none)').matches) return

    el.style.transition = 'transform .25s cubic-bezier(.22,.61,.36,1)'

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const mx = e.clientX - (r.left + r.width / 2)
      const my = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${mx * 0.28}px, ${my * 0.42}px)`
    }
    const onLeave = () => { el.style.transform = 'translate(0,0)' }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return ref
}
