import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { blogPosts } from '../data/blog'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import styles from './Blog.module.css'

export default function Blog() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const posts = Object.entries(blogPosts)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Nav />
        <main>
          <Reveal>
            <p className="section-label">BLOG</p>
            <h1 className={styles.heading}>Notes on building products</h1>
            <p className={styles.sub}>Frameworks and lessons from product management, RAG systems, and 0-to-1 builds.</p>
          </Reveal>

          <Reveal as="div" stagger className={styles.list}>
            {posts.map(([slug, post], i) => (
              <Link to={`/blog/${slug}`} key={slug} className={styles.card} style={{ '--i': i }}>
                <div className={styles.tags}>
                  {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.subtitle}>{post.subtitle}</p>
                <span className={styles.readMore}>Read post <i className="ti ti-arrow-right" aria-hidden="true" /></span>
              </Link>
            ))}
          </Reveal>
        </main>
        <Footer />
      </div>
    </div>
  )
}
