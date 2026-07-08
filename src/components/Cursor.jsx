import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const dot = dotRef.current
    if (!dot) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x, cy = y, sc = 1, ts = 1
    let raf = null

    dot.style.opacity = '1'

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      const hit = e.target.closest && e.target.closest('a,button,[data-magnetic],[data-proj]')
      ts = hit ? 1.9 : 1
    }

    const loop = () => {
      cx += (x - cx) * 0.2
      cy += (y - cy) * 0.2
      sc += (ts - sc) * 0.15
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%) scale(${sc})`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    loop()

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={dotRef} className={styles.cursor} aria-hidden="true" />
}
