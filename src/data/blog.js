export const blogPosts = {
  'building-ai-products': {
    title: 'Building AI products, not just speccing them',
    subtitle: 'Three things I shipped to close the gap between spec and production',
    date: '2026-06-22',
    tags: ['AI / ML', 'Builder PM', 'Product'],
    intro: "The fastest way I learned what AI products actually need? I stopped speccing them and started building them.",
    steps: [
      {
        title: 'A multilingual RAG system, end to end',
        body: 'Hybrid retrieval, async ingestion, and a benchmark of 20+ embedding models to find the one that hit MRR 1.0. The hard part was never the tech. It was defining what "good" meant for the people trusting the answers.',
        list: ['MRR 1.0 on the selected model', 'Dense + BM25 hybrid retrieval', '20+ models benchmarked'],
      },
      {
        title: 'AI integration on a logistics platform',
        body: 'A tool that pulls shipment data out of messy, multi-format documents and lifted shipment processing speed 20%, with the monitoring and data isolation to run it safely in production.',
        list: ['20% faster shipment processing', '11+ epics shipped', '50% faster prototyping'],
      },
      {
        title: 'Production-ready code, not just tickets',
        body: 'New features and bug fixes, written with Claude and reviewed by engineers before merge. Not to become an engineer, but to take small tickets off their plate and close the gap between idea and working software.',
        list: ['Claude-assisted development', 'Engineer-reviewed before merge', 'Production-shipped'],
      },
    ],
    surprise: {
      label: 'What I keep coming back to',
      body: 'AI lowered the cost of building. It did not lower the cost of building the right thing. The teams that win aren\'t the fastest. They\'re the ones who define "good" clearly, measure it honestly, and bring people along.',
    },
    takeaway: "I work at the intersection of product judgment and hands-on building, and this is the work I want to keep doing.",
  },
  'embedding-model-benchmark': {
    title: 'How to Benchmark Embedding Models',
    subtitle: 'A framework for picking the right model, not the trending one',
    date: '2026-06-16',
    tags: ['RAG', 'AI / ML', 'Evaluation'],
    intro: "I benchmarked 20+ embedding models for a multilingual RAG system. Most \"best embedding model\" lists would have steered me wrong.",
    steps: [
      {
        title: 'Start with your data, not leaderboards',
        body: "Public benchmarks (MTEB, etc.) tell you how a model performs on someone else's data. They don't tell you how it handles your documents, your query patterns, your languages. I built a golden set of 50+ real analyst queries with known-correct answers. That became my source of truth.",
      },
      {
        title: 'Measure what actually matters',
        body: 'I scored every model on:',
        list: ['MRR (does the right answer rank first?)', 'Retrieval latency (will it survive production?)', 'Cross-language consistency (same quality across languages, not just English)', 'Embedding dimension (cost and storage scale with this)'],
      },
      {
        title: 'Run the boring part',
        body: 'Same golden set, same retrieval pipeline, swap only the embedding model. Log every score. No vibes, no "this one feels better." Just numbers in a spreadsheet.',
      },
    ],
    benchmarkTable: {
      title: 'Embedding Model Benchmark',
      subtitle: 'Fintech marketplace · multilingual retrieval set · FAISS IndexFlatIP, cosine · 22 models tested',
      stats: [
        { label: 'Selected Model MRR', value: '1.00' },
        { label: 'Dimension', value: '384' },
        { label: 'Throughput', value: '33', suffix: 'docs/s' },
      ],
      rows: [
        { model: 'paraphrase-multilingual-MiniLM-L12-v2', category: 'Multilingual', r1: '1.00', mrr: '1.000', dim: '384', selected: true },
        { model: 'multilingual-e5-small', category: 'Multilingual', r1: '1.00', mrr: '1.000', dim: '384' },
        { model: 'distiluse-base-multilingual-cased', category: 'Multilingual', r1: '1.00', mrr: '1.000', dim: '512' },
        { model: 'LaBSE', category: 'Multilingual', r1: '1.00', mrr: '1.000', dim: '768' },
        { note: '15 more models · full benchmark available on request' },
        { model: 'all-MiniLM-L6-v2', category: 'English-small', r1: '0.00', mrr: '0.116', dim: '384' },
        { model: 'paraphrase-MiniLM-L12-v2', category: 'English-small', r1: '0.00', mrr: '0.110', dim: '384' },
        { model: 'msmarco-MiniLM-L6-cos-v5', category: 'English-small', r1: '0.00', mrr: '0.089', dim: '384' },
      ],
      footnote: "Top performers all multilingual. Popular English-only models cluster near the bottom on non-English queries. Selected: paraphrase-multilingual-MiniLM-L12-v2 for the best quality, speed, and size balance among the models reaching MRR 1.0.",
    },
    surprise: {
      label: 'The result that surprised me',
      body: 'The popular, newer model scored an MRR of 0.12 on non-English queries. Nearly useless. A smaller, older multilingual model (paraphrase-multilingual-MiniLM) took it to 1.0. Newer and bigger lost to right-for-the-job.',
    },
    takeaway: "Model selection is an evaluation problem, not a research problem. The team that benchmarks on their own data beats the team that picks whatever is trending. Every time.",
  },
}
