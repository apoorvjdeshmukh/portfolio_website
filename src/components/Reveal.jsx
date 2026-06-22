import { useReveal } from '../hooks/useReveal'
import styles from './Reveal.module.css'

export default function Reveal({ as: Tag = 'div', stagger = false, children, className = '', ...rest }) {
  const [ref, shown] = useReveal()
  // Stagger containers must NOT carry the .reveal class — only their children animate.
  // Applying .reveal to a stagger container would leave clip-path on it after the
  // entrance animation, clipping children that move upward on hover (e.g. cards).
  const base = stagger ? styles.stagger : styles.reveal
  return (
    <Tag
      ref={ref}
      className={`${base} ${shown ? styles.in : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
