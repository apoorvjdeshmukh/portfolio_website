export const blogPosts = {
  'vibe-coding-non-negotiables': {
    title: 'Before you vibe code your next app: the 6 non-negotiables',
    subtitle: 'What to lock in before a single real screen exists',
    date: '2026-07-15',
    tags: ['AI / ML', 'Builder PM', 'Security'],
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7483232703262158850/',
    intro: "AI gets you from idea to working screen faster than ever. The failure modes haven't changed though — they just show up later, once real data's on the line. I spent days validating this approach with research before I trusted it, and I'm now applying it on my own app.",
    steps: [
      {
        title: 'Lock security before features',
        body: "Row-level access control means the database itself refuses to return or modify a row unless a rule explicitly says the requester is allowed to — and it should deny by default, not allow by default. Before you build a single real screen, create two fake accounts and confirm account A genuinely cannot read or edit account B's data. This is the single most common hole in AI-generated apps: the UI hides other users' data, but the API underneath will happily hand it over to anyone who asks directly.",
      },
      {
        title: 'Secrets never ride in the client',
        body: '"The client" is any code that ships to the browser or the app itself — and anyone can open dev tools, view-source, or decompile it and read every string inside. An API key or anything billed per call sits in there in plain sight if you put it there. The fix is a server function: a small endpoint you control that checks who\'s calling before it spends money or exposes the secret, so the key never leaves your server.',
      },
      {
        title: 'Multi-row writes are one transaction, not sequential calls',
        body: "A database transaction bundles multiple writes so they either all succeed together or all roll back together — nothing is left half-done. If you instead make two separate calls back-to-back (write row A, then write row B), a dropped connection between them leaves an orphaned row: money deducted with nothing credited, an order created with no line items. Wrapping related writes in one transaction is what prevents that half-finished state from ever existing.",
      },
      {
        title: 'Rate limits need durable storage, not memory',
        body: "Serverless functions are stateless — each request can spin up on a fresh instance with no memory of the last one, a \"cold start.\" A rate limiter built on an in-memory counter (a plain variable) resets constantly and never actually limits anything, because there's no guarantee the next request even hits the same instance. The fix is durable storage: a database or cache like Redis that persists the count between invocations, so the limit is real.",
      },
      {
        title: 'Guard state-changing updates with the state you expect',
        body: 'An unconditional write blindly overwrites a row without checking what it currently holds. If two requests race — a user double-clicking "ship," or a retried webhook — both can process the same action. The guard is simple: only apply the update if the row is still in the state you expect (e.g. "mark as shipped only if it\'s currently pending"). This is called optimistic concurrency control, and it\'s what stops the same record from being double-processed.',
      },
      {
        title: "Don't trust a green checkmark without checking what it checked",
        body: 'AI-generated tests can pass while testing the wrong thing entirely — asserting a function merely doesn\'t throw, rather than asserting it returns the correct value. A broken assertion is worse than no test at all, because it manufactures false confidence: the suite stays green even as the feature quietly breaks. Read what the assertion actually checks before you trust the checkmark next to it.',
      },
    ],
    surprise: {
      label: "The part AI won't do for you",
      body: "AI writes the code fast. It doesn't know which of these bite later — that judgment call is still yours to make, on every feature, before real data is on the line.",
    },
    takeaway: "Speed from AI is real, but it doesn't replace the judgment of knowing what to lock down before you ship. That's still the builder's job.",
  },
  'vibe-coding-docs-to-keep-alive': {
    title: '5 docs to keep alive for the whole AI-assisted build',
    subtitle: 'Not just at kickoff — what actually keeps a vibe-coded app coherent six weeks in',
    date: '2026-07-15',
    tags: ['AI / ML', 'Builder PM', 'Process'],
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7483232703262158850/',
    intro: "AI coding tools don't carry context forward on their own — every new session starts closer to a blank slate than you'd expect. The fix isn't a better prompt. It's a handful of docs that stay alive for the whole build, not just at kickoff, so the AI (and you) aren't re-deriving decisions you already made.",
    steps: [
      {
        title: 'PRD',
        body: "A PRD is a short doc stating what you're building, for whom, and why — the problem and what success looks like. It matters more with AI-assisted builds, not less: when you or an AI agent are moving fast enough to cut scope or add a feature on the fly, you need a written reason to check the decision against. Without it, every scope call becomes a mood in the moment instead of a decision that traces back to the actual goal.",
      },
      {
        title: 'Architecture doc',
        body: "This is the doc that explains the system's shape and the reasoning behind it — why this database, why this auth pattern, why this service boundary. The habit that makes it useful: log every deviation from the original plan, with why, as it happens. Six weeks into a build, especially one where an AI wrote large chunks of the code, this log is the only realistic way to remember why anything ended up the way it did, instead of re-litigating settled decisions or guessing.",
      },
      {
        title: 'Memory.md',
        body: "Most AI coding tools don't persist context between sessions on their own — ask a fresh session to explain a decision from last week, and it will confidently re-derive it from scratch, possibly differently. Memory.md is a running file of decisions, preferences, and context ('we chose X because Y', 'this user prefers Z') that you point the AI at, so it carries that forward instead of starting over every time.",
      },
      {
        title: 'Coding standards',
        body: "Without frozen conventions, AI-generated code drifts in style from file to file — naming, folder structure, error handling all vary depending on how a given session was prompted. A short standards doc, written early and referenced on every session, keeps that consistent whether a human or the AI wrote a particular file, which matters a lot the first time you have to read the whole codebase at once.",
      },
      {
        title: 'Build plan',
        body: "A lightweight roadmap of phases and status — what's done, what's next, what's blocked. The discipline that makes it worth keeping: update it the moment reality diverges from the plan, not just at the start. A build plan that still reflects week-one assumptions in week six isn't a plan anymore, it's a historical document, and it'll actively mislead anyone who trusts it.",
      },
    ],
    surprise: {
      label: "The part AI won't do for you",
      body: "AI writes the code fast. It won't maintain the paper trail for you — updating these five docs as reality changes is still on you, and it's the only reason any of it stays legible past week one.",
    },
    takeaway: "Docs feel like overhead until an AI-assisted build outpaces your memory of it. Five living docs, kept current instead of written once at kickoff, are cheap insurance against that.",
  },
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
        list: ['20% faster shipment processing', '11+ platform services shipped', '50% faster prototyping'],
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
