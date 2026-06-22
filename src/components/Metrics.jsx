import { useEffect, useRef, useState } from 'react'
import { metrics } from '../data/content'
import Reveal from './Reveal'
import styles from './Metrics.module.css'

function useCountUp(to, from, duration, decimals, triggered) {
  const [display, setDisplay] = useState(from.toFixed(decimals))

  useEffect(() => {
    if (!triggered) return
    const start = performance.now()
    const range = to - from

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay((from + range * eased).toFixed(decimals))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [triggered])

  return display
}

function MetricCard({ metric, triggered, style }) {
  const c = metric.counter
  const val = useCountUp(c.to, c.from ?? 0, 1400, c.decimals ?? 0, triggered)

  let display
  if (c.type === 'range') {
    display = `${c.from}→${val}${c.suffix ?? ''}`
  } else {
    display = `${c.prefix ?? ''}${val}${c.suffix ?? ''}`
  }

  return (
    <div className={styles.card} style={style}>
      <p className={styles.value}>{triggered ? display : metric.value}</p>
      <p className={styles.desc}>{metric.label}</p>
    </div>
  )
}

export default function Metrics() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <Reveal><p className="section-label">By the numbers</p></Reveal>
      <Reveal as="div" stagger className={styles.grid}>
        {metrics.map((m, i) => (
          <MetricCard key={i} metric={m} triggered={triggered} style={{ '--i': i }} />
        ))}
      </Reveal>
    </section>
  )
}
