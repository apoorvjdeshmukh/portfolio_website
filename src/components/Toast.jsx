import { useEffect, useState } from 'react'
import styles from './Toast.module.css'

export default function Toast({ message, onDone }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!message) return
    setVisible(true)
    const hide = setTimeout(() => setVisible(false), 2500)
    const clear = setTimeout(onDone, 3000)
    return () => { clearTimeout(hide); clearTimeout(clear) }
  }, [message, onDone])

  if (!message) return null

  return (
    <div className={`${styles.toast} ${visible ? styles.show : styles.hide}`}>
      <span className={styles.icon}><i className="ti ti-circle-check-filled" /></span>
      {message}
    </div>
  )
}
