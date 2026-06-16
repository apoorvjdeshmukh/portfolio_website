import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { blogPosts } from '../data/blog'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
    if (post) document.title = `${post.title} — Apoorv Deshmukh`
  }, [slug, post])

  if (!post) return <Navigate to="/blog" replace />

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Nav />
        <main>
          <div className={styles.tags}>
            {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.subtitle}>{post.subtitle}</p>
          <p className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className={styles.intro}>{post.intro}</p>

          {post.steps.map((step, i) => (
            <div className={styles.step} key={i}>
              <span className={styles.stepNum}>{i + 1}</span>
              <div>
                <h2 className={styles.stepTitle}>{step.title}</h2>
                <p className={styles.stepBody}>{step.body}</p>
                {step.list && (
                  <ul className={styles.stepList}>
                    {step.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {post.surprise && (
            <div className={styles.callout}>
              <p className={styles.calloutLabel}>{post.surprise.label}</p>
              <p className={styles.calloutBody}>{post.surprise.body}</p>
            </div>
          )}

          {post.takeaway && (
            <div className={styles.takeaway}>
              <p className={styles.takeawayLabel}>The takeaway</p>
              <p className={styles.takeawayBody}>{post.takeaway}</p>
            </div>
          )}

          <Link to="/blog" className={styles.back}>← Back to all posts</Link>
        </main>
        <Footer />
      </div>
    </div>
  )
}
