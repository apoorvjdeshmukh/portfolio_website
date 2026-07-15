import Icon from '../components/Icon'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blog'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) return <Navigate to="/blog" replace />

  const pageUrl = `https://apoorvdeshmukh.netlify.app/blog/${slug}`

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{post.title} — Apoorv Deshmukh</title>
        <meta name="description" content={post.subtitle} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${post.title} — Apoorv Deshmukh`} />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={`${post.title} — Apoorv Deshmukh`} />
        <meta name="twitter:description" content={post.subtitle} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.subtitle,
            datePublished: post.date,
            url: pageUrl,
            author: { '@type': 'Person', name: 'Apoorv Jain Deshmukh', url: 'https://apoorvdeshmukh.netlify.app' },
          })}
        </script>
      </Helmet>
      <div className={styles.container}>
        <Nav />
        <main>
          <Reveal>
            <div className={styles.tags}>
              {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.subtitle}>{post.subtitle}</p>
            <p className={styles.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            {post.linkedinUrl && (
              <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
                <Icon name="brand-linkedin" /> View original post on LinkedIn
              </a>
            )}
            <p className={styles.intro}>{post.intro}</p>
          </Reveal>

          {post.steps.map((step, i) => (
            <Reveal key={i} as="div" className={styles.step}>
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
            </Reveal>
          ))}

          {post.benchmarkTable && (
            <Reveal as="div" className={styles.benchmark}>
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
                        <td>{row.selected && <Icon name="check" />} {row.model}</td>
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
            </Reveal>
          )}

          {post.surprise && (
            <Reveal as="div" className={styles.callout}>
              <p className={styles.calloutLabel}>{post.surprise.label}</p>
              <p className={styles.calloutBody}>{post.surprise.body}</p>
            </Reveal>
          )}

          {post.takeaway && (
            <Reveal as="div" className={styles.takeaway}>
              <p className={styles.takeawayLabel}>The takeaway</p>
              <p className={styles.takeawayBody}>{post.takeaway}</p>
            </Reveal>
          )}

          <Reveal><Link to="/blog" className={styles.back}>← Back to all posts</Link></Reveal>
        </main>
        <Footer />
      </div>
    </div>
  )
}
