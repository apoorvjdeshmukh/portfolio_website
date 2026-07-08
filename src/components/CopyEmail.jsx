import { forwardRef, useContext } from 'react'
import { ToastContext } from '../context/ToastContext'
import { personal } from '../data/content'

const CopyEmail = forwardRef(function CopyEmail({ className, children, ...rest }, ref) {
  const showToast = useContext(ToastContext)

  const handleClick = () => {
    const text = personal.email
    const notify = () => showToast('Email address copied to clipboard')
    const fallback = () => {
      const el = document.createElement('textarea')
      el.value = text
      el.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      notify()
    }
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(notify).catch(fallback)
    } else {
      fallback()
    }
  }

  return (
    <button ref={ref} type="button" onClick={handleClick} className={className} {...rest}>
      {children}
    </button>
  )
})

export default CopyEmail
