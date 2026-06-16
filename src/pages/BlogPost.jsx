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

          {post.benchmarkTable && (
            <div className={styles.benchmark}>
              <h3 className={styles.benchmarkTitle}>{post.benchmarkTable.title}</h3>
              <p className={styles.benchmarkSubtitle}>{post.benchmarkTable.subtitle}</p>

              <div className={styles.benchmarkStats}>
                {post.benchmarkTable.stats.map(s => (
                  <div className={styles.statCard} key={s.label}>
                    <p className={styles.statLabel}>{s.label}</p>
                    <p className={styles.statValue}>{s.value}{s.suffix && <span className={styles.statSuffix}> {s.suffix}</span>}</p>
                  </div>
                ))}
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr><th>Model</th><th>Category</th><th>R@1</th><th>MRR</th><th>Dim</th></tr>
                  </thead>
                  <tbody>
                    {post.benchmarkTable.rows.map((row, i) => row.note ? (
                      <tr key={i} className={styles.noteRow}><td colSpan={5}>{row.note}</td></tr>
                    ) : (
                      <tr key={i} className={row.selected ? styles.selectedRow : ''}>
                        <td>{row.selected && <i className="ti ti-check" aria-hidden="true" />} {row.model}</td>
                        <td><span className={styles.catTag}>{row.category}</span></td>
                        <td>{row.r1}</td>
                        <td className={styles.mrrCell}>{row.mrr}</td>
                        <td>{row.dim}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.benchmarkFootnote}>{post.benchmarkTable.footnote}</p>
            </div>
          )}

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
