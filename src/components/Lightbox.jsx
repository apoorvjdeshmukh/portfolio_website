import { useEffect, useRef } from 'react'
import Icon from './Icon'
import styles from './Lightbox.module.css'

// A zoomed view of one screenshot. Esc or a click outside closes it, the arrow keys move between images,
// Tab stays inside it, and focus goes back to the screenshot that opened it.
export default function Lightbox({ images, index, onClose, onMove }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const last = images.length - 1

  useEffect(() => {
    const opener = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      if (opener && opener.focus) opener.focus()
    }
  }, [])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowRight' && index < last) { onMove(index + 1); return }
      if (e.key === 'ArrowLeft' && index > 0) { onMove(index - 1); return }
      if (e.key === 'Tab') {
        const items = dialogRef.current?.querySelectorAll('button:not([disabled])')
        if (!items || !items.length) return
        const first = items[0]
        const end = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); end.focus() }
        else if (!e.shiftKey && document.activeElement === end) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, last, onClose, onMove])

  const img = images[index]
  return (
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`Screenshot ${index + 1} of ${images.length}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close">×</button>
        <img src={img.src} alt={img.alt} className={styles.image} />
        <p className={styles.caption}>{img.alt}</p>
        {images.length > 1 && (
          <div className={styles.nav}>
            <button type="button" className={styles.navBtn} onClick={() => onMove(index - 1)} disabled={index === 0} aria-label="Previous screenshot">
              <span className={styles.flip}><Icon name="arrow-right" /></span>
            </button>
            <span className={styles.count}>{index + 1} / {images.length}</span>
            <button type="button" className={styles.navBtn} onClick={() => onMove(index + 1)} disabled={index === last} aria-label="Next screenshot">
              <Icon name="arrow-right" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
