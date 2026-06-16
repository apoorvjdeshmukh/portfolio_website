export const blogPosts = {
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
    surprise: {
      label: 'The result that surprised me',
      body: 'The popular, newer model scored an MRR of 0.12 on non-English queries. Nearly useless. A smaller, older multilingual model (paraphrase-multilingual-MiniLM) took it to 1.0. Newer and bigger lost to right-for-the-job.',
    },
    takeaway: "Model selection is an evaluation problem, not a research problem. The team that benchmarks on their own data beats the team that picks whatever is trending. Every time.",
  },
}
