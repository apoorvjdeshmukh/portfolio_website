import styles from './RagDiagram.module.css'

const ragHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0a0f; color: #e8e6f0; font-family: 'DM Sans', sans-serif; padding: 24px 28px 32px; }
  .header { text-align: center; margin-bottom: 18px; }
  .eyebrow { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.2em; color: #7c6ff7; text-transform: uppercase; margin-bottom: 6px; }
  .header h1 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; background: linear-gradient(135deg, #ffffff 30%, #a89dff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1; margin-bottom: 4px; }
  .header .sub { font-size: 10px; color: #6b6880; font-family: 'DM Mono', monospace; letter-spacing: 0.05em; }
  .metrics { display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
  .metric { text-align: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 7px 12px; min-width: 90px; }
  .metric .val { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: #a89dff; display: block; }
  .metric .lbl { font-family: 'DM Mono', monospace; font-size: 8px; color: #5a5770; letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
  .pipeline { display: flex; flex-direction: column; gap: 2px; }
  .stage-row { display: grid; grid-template-columns: 120px 1fr; gap: 10px; align-items: stretch; min-height: 56px; }
  .stage-label { display: flex; flex-direction: column; justify-content: center; align-items: flex-end; padding-right: 10px; border-right: 2px solid rgba(255,255,255,0.06); position: relative; }
  .stage-label::after { content: ''; position: absolute; right: -5px; top: 50%; transform: translateY(-50%); width: 8px; height: 8px; border-radius: 50%; background: var(--accent, #7c6ff7); box-shadow: 0 0 8px var(--accent, #7c6ff7); }
  .stage-num { font-family: 'DM Mono', monospace; font-size: 9px; color: var(--accent, #7c6ff7); letter-spacing: 0.15em; text-transform: uppercase; }
  .stage-name { font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 700; color: #d0cce8; text-align: right; margin-top: 2px; }
  .stage-content { padding: 7px 0 7px 10px; display: flex; flex-direction: column; justify-content: center; gap: 4px; }
  .flow-row { display: flex; align-items: center; flex-wrap: wrap; gap: 4px; }
  .box { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 7px; padding: 6px 12px; font-size: 11px; font-family: 'DM Mono', monospace; color: #c8c4e0; white-space: nowrap; }
  .box.highlight { background: rgba(124,111,247,0.15); border-color: rgba(124,111,247,0.5); color: #c8bdff; }
  .box.orange { background: rgba(255,140,60,0.1); border-color: rgba(255,140,60,0.35); color: #ffc09d; }
  .box.green { background: rgba(60,200,120,0.1); border-color: rgba(60,200,120,0.35); color: #90e8b8; }
  .box.red { background: rgba(255,80,80,0.1); border-color: rgba(255,80,80,0.3); color: #ffb0b0; }
  .arrow { font-size: 13px; color: #3d3a55; padding: 0 1px; flex-shrink: 0; }
  .split-container { display: flex; flex-direction: column; gap: 7px; width: 100%; }
  .split-label { font-family: 'DM Mono', monospace; font-size: 9px; color: #4a4760; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2px; }
  .split-path { display: flex; align-items: center; flex-wrap: wrap; gap: 4px; }
  .merge-label { font-family: 'DM Mono', monospace; font-size: 9px; color: #7c6ff7; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 3px; }
  .note { font-size: 10px; color: #5a5770; font-family: 'DM Mono', monospace; background: rgba(255,255,255,0.02); border-left: 2px solid rgba(124,111,247,0.3); padding: 3px 8px; border-radius: 0 4px 4px 0; margin-top: 3px; }
  .note span { color: #8a7fff; }
  hr.divider { border: none; border-top: 1px dashed rgba(255,255,255,0.05); margin: 2px 0 2px 130px; }
  .summary { margin-top: 16px; background: rgba(124,111,247,0.06); border: 1px solid rgba(124,111,247,0.2); border-radius: 10px; padding: 12px 18px; }
  .summary h3 { font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; color: #7c6ff7; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; }
  .summary p { font-size: 10px; line-height: 1.7; color: #9490b0; font-style: italic; }
  .summary p strong { color: #c8c4e0; font-style: normal; }
  .footer { text-align: center; margin-top: 14px; font-family: 'DM Mono', monospace; font-size: 8px; color: #3a3750; letter-spacing: 0.15em; text-transform: uppercase; }
</style>
</head>
<body>
<div class="header">
  <div class="eyebrow">AgileCatalyst.ai · GCC Fintech Marketplace · 2025</div>
  <h1>Hybrid RAG Architecture</h1>
  <div class="sub">Production Pipeline · English + Arabic · End-to-End &lt; 1.2s</div>
</div>
<div class="metrics">
  <div class="metric"><span class="val">MRR 1.0</span><span class="lbl">Retrieval Accuracy</span></div>
  <div class="metric"><span class="val">42ms</span><span class="lbl">Retrieval Latency</span></div>
  <div class="metric"><span class="val">&lt;1.2s</span><span class="lbl">End-to-End</span></div>
  <div class="metric"><span class="val">80%</span><span class="lbl">Chunk Relevancy</span></div>
  <div class="metric"><span class="val">95%</span><span class="lbl">EN OCR Accuracy</span></div>
  <div class="metric"><span class="val">90%+</span><span class="lbl">AR OCR Accuracy</span></div>
</div>
<div class="pipeline">
  <div class="stage-row" style="--accent:#7c6ff7">
    <div class="stage-label"><span class="stage-num">01</span><span class="stage-name">Ingestion</span></div>
    <div class="stage-content">
      <div class="flow-row"><div class="box highlight">Document Upload</div><div class="arrow">→</div><div class="box highlight">/kb_train Endpoint</div><div class="arrow">→</div><div class="box green">Async Background Job</div><div class="arrow">→</div><div class="box">Immediate ACK</div></div>
      <div class="note">⚡ Redesigned sync→async after container crashes on 50MB+ files. <span>Unlocked production stability.</span></div>
    </div>
  </div>
  <hr class="divider">
  <div class="stage-row" style="--accent:#ff8c3c">
    <div class="stage-label"><span class="stage-num">02</span><span class="stage-name">OCR + Parsing</span></div>
    <div class="stage-content">
      <div class="flow-row"><div class="box orange">Gemini Pro</div><div class="arrow">→</div><div class="box">Digital PDFs</div></div>
      <div class="flow-row"><div class="box orange">Tesseract</div><div class="arrow">→</div><div class="box">Scanned PDFs</div><div class="arrow">→</div><div class="box orange">Arabic Reshaper + BiDi</div><div class="arrow">→</div><div class="box">RTL Rendering</div></div>
      <div class="note">PyMuPDF for structured text layers. <span>95% EN · 90%+ AR accuracy.</span></div>
    </div>
  </div>
  <hr class="divider">
  <div class="stage-row" style="--accent:#3cc878">
    <div class="stage-label"><span class="stage-num">03</span><span class="stage-name">Chunking</span></div>
    <div class="stage-content">
      <div class="flow-row"><div class="box green">Header-Based</div><div class="arrow">+</div><div class="box green">Recursive</div><div class="arrow">+</div><div class="box green">Custom Logic</div><div class="arrow">→</div><div class="box highlight">~500 Token Chunks</div></div>
      <div class="note">Custom logic for tables and cap tables. <span>Preserves row/column structure.</span></div>
    </div>
  </div>
  <hr class="divider">
  <div class="stage-row" style="--accent:#a89dff">
    <div class="stage-label"><span class="stage-num">04</span><span class="stage-name">Embeddings</span></div>
    <div class="stage-content">
      <div class="flow-row"><div class="box">Chunks</div><div class="arrow">→</div><div class="box highlight">paraphrase-multilingual-MiniLM-L12-v2</div><div class="arrow">→</div><div class="box highlight">Vectors</div><div class="arrow">→</div><div class="box green">Qdrant Vector DB</div></div>
      <div class="note">Company-scoped metadata filter as <span>hard architectural constraint.</span></div>
      <div class="note">20+ models benchmarked. Previous model: MRR 0.12 (Arabic). This model: <span>MRR 1.0.</span></div>
    </div>
  </div>
  <hr class="divider">
  <div class="stage-row" style="--accent:#ff6b6b;min-height:100px">
    <div class="stage-label"><span class="stage-num">05</span><span class="stage-name">Hybrid Retrieval</span></div>
    <div class="stage-content">
      <div class="split-container">
        <div><div class="split-label">Path 1 — Dense</div><div class="split-path"><div class="box">User Query</div><div class="arrow">→</div><div class="box highlight">Embedding Model</div><div class="arrow">→</div><div class="box highlight">Qdrant Vector Search</div><div class="arrow">→</div><div class="box">Dense Results</div></div></div>
        <div><div class="split-label">Path 2 — Sparse</div><div class="split-path"><div class="box">User Query</div><div class="arrow">→</div><div class="box orange">BM25 Index</div><div class="arrow">→</div><div class="box orange">Keyword Match</div><div class="arrow">→</div><div class="box">Sparse Results</div></div></div>
        <div><div class="merge-label">↓ merge</div><div class="split-path"><div class="box green">Reciprocal Rank Fusion</div><div class="arrow">→</div><div class="box highlight">Top-K Chunks</div></div></div>
      </div>
      <div class="note">BM25 handles Arabic morphology dense embeddings miss. <span>Together: MRR 1.0. Latency: 42ms.</span></div>
    </div>
  </div>
  <hr class="divider">
  <div class="stage-row" style="--accent:#60d4f0">
    <div class="stage-label"><span class="stage-num">06</span><span class="stage-name">Generation</span></div>
    <div class="stage-content">
      <div class="flow-row"><div class="box">Top-K Chunks</div><div class="arrow">→</div><div class="box highlight">3-Prompt System</div><div class="arrow">→</div><div class="box highlight">GPT-4o</div><div class="arrow">→</div><div class="box green">Grounded Answer</div></div>
      <div class="flow-row" style="margin-top:3px"><div class="box red">Faithfulness Scorer</div><div class="arrow">+</div><div class="box red">Context Window Guard</div><div class="arrow">+</div><div class="box red">Cost Spike Alert</div></div>
      <div class="note">FIFO memory: last 3 exchanges. <span>System + context + user prompt.</span></div>
    </div>
  </div>
</div>
<div class="summary">
  <h3>Full Flow</h3>
  <p><strong>Async ingestion</strong> → OCR (Gemini Pro + Tesseract + Arabic reshaping) → <strong>hybrid chunking (~500 tokens)</strong> → multilingual vectors in <strong>Qdrant with hard client isolation</strong> → <strong>parallel dense + BM25 sparse retrieval</strong> via Reciprocal Rank Fusion → <strong>GPT-4o grounded in retrieved context</strong> — end to end in <strong>under 1.2 seconds.</strong></p>
</div>
<div class="footer">Apoorv Jain Deshmukh · AgileCatalyst.ai · Hybrid RAG · 2025</div>
</body>
</html>`

export default function RagDiagram() {
  const blob = new Blob([ragHTML], { type: 'text/html' })
  const url = URL.createObjectURL(blob)

  return (
    <div className={styles.wrapper}>
      <iframe
        src={url}
        className={styles.frame}
        title="Hybrid RAG Architecture Diagram"
        sandbox="allow-same-origin allow-scripts"
        scrolling="no"
        onLoad={(e) => {
          try {
            const h = e.target.contentDocument.body.scrollHeight
            e.target.style.height = (h + 32) + 'px'
          } catch {}
        }}
      />
    </div>
  )
}
