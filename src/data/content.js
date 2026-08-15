export const personal = {
  name: 'Apoorv Jain Deshmukh, CSPO',
  title: 'Senior Product Manager',
  location: 'New York, NY',
  email: 'apoorv.jdeshmukh@gmail.com',
  linkedin: 'https://www.linkedin.com/in/apoorvdeshmukh',
  github: 'https://github.com/apoorvjdeshmukh',
  phone: '201-884-0572',
  photo: '/avatar.jpg',
  availability: 'Open to PM & Senior PM roles · Major US cities or Remote · No sponsorship needed',
  headline: ['Building products where', 'AI meets real stakes.'],
  bio: "Senior PM with 6+ years in product management and 2+ years in data analytics, specializing in AI-native products, agentic workflows, and 0-to-1 builds. I prototype with code, ship production RAG systems, and compress delivery cycles by de-risking decisions early with working software.",
  tags: ['AI / ML Products', 'RAG Systems', '0-to-1 Builds', 'FinTech', 'Healthcare', 'Logistics', 'B2B SaaS', 'Compliance Workflows', 'LLM Evals'],
}

export const recommendations = [
  {
    name: 'Clayton Karges',
    photo: '/clayton-karges.jpg',
    title: 'Director of Data & AI Product',
    company: 'Eze Castle Integration',
    relationship: 'Managed Apoorv directly',
    date: 'July 15, 2022',
    quote: "I am fortunate to have had the opportunity to work alongside Apoorv for the past 15 months. While Apoorv joined the team relatively new to the Product Management space, he quickly excelled at the role. From defining product requirements to managing client relationships, I have been continuously impressed with his ability to learn new skills (hard and soft alike) in short time. I would be delighted to have Apoorv as a part of my team on any future project. Not only has he demonstrated consistent business acumen, technical knowledge and effective communication but also a reputation as a co-worker who people enjoy working with.",
  },
  {
    name: 'Himanshu Niranjani',
    photo: '/himanshu-niranjani.jpg',
    title: 'CTO',
    company: 'AgileCatalyst.ai and BeHuman Capital',
    relationship: 'Managed Apoorv at AgileCatalyst.ai',
    date: 'June 16, 2026',
    quote: "I worked with Apoorv as AI Product Manager at AgileCatalyst, where he built our 0→1 RAG system for a fintech marketplace from concept to production.\n\nApoorv designed a hybrid retrieval architecture achieving MRR=1.0 across English and Arabic, delivering answers in under 1.2 seconds. He benchmarked 20+ embedding models, navigated multilingual OCR (95% EN, 90%+ AR), and built guardrails ensuring trustworthy AI for high-stakes decisions.\n\nWhat stands out: end-to-end ownership. Apoorv owned infrastructure decisions, coordinated across engineering/legal/compliance under GCC regulatory constraints, and shipped features with urgency.\n\nFor Senior PM roles in AI-native products or regulated spaces, Apoorv is exceptional. He ships.\n\nHighly recommended.",
  },
  {
    name: 'Arnav Chachra',
    photo: '/arnav-chachra.jpg',
    title: 'IT Administration and Automation',
    company: 'Nurdsoft',
    relationship: 'Reported to Apoorv directly',
    date: 'July 14, 2026',
    quote: "I had the opportunity to work under Apoorv as my Product Manager. He brought clarity to priorities, communicated decisions thoughtfully, and worked closely with the team through complex product challenges.\n\nWhat stood out most was how calm and composed he remained during critical incidents, including urgent production hotfixes. He kept both the team and the client informed throughout, which helped everyone stay focused and resolve issues faster.\n\nI appreciated his steady leadership and the confidence he placed in the team, and I would gladly recommend him for product management and leadership roles.",
  },
]

export const metrics = [
  {
    value: 'MRR 1.0',
    counter: { type: 'decimal', from: 0.0, to: 1.0, decimals: 1, prefix: 'MRR ' },
    label: 'Multilingual AI retrieval — Arabic + English, 42ms latency',
  },
  {
    value: '$500K+',
    counter: { type: 'integer', from: 0, to: 500, prefix: '$', suffix: 'K+' },
    label: 'Annual compliance savings delivered per logistics client',
  },
  {
    value: '70→95%',
    counter: { type: 'range', from: 70, to: 95, suffix: '%' },
    label: 'Shipment tracking accuracy across 100K+ shipments/year',
  },
]

export const projects = [
  {
    id: 'logixa',
    title: 'Logixa',
    company: 'Nurdsoft',
    companyType: 'nurd',
    tags: ['0-to-1', 'Infrastructure', 'Compliance & Regulatory', 'Data & Analytics'],
    platform: 'Web · GCP',
    win: 'Replaced spreadsheet chaos with a role-based, multi-persona B2B SaaS platform across 11+ services on GCP — 100% adoption across 5+ departments, tracking accuracy up 70→95%, $500K+ compliance savings per client.',
  },
  {
    id: 'logixa-drivers',
    title: 'Logixa Drivers App',
    company: 'Nurdsoft',
    companyType: 'nurd',
    tags: ['Compliance & Regulatory', 'iOS & Android', '0-to-1'],
    platform: 'iOS & Android',
    win: 'Engineered cross-platform mobile app automating CA Labor Law break compliance and DOT vehicle inspections — eliminated manual tracking errors, delivered 100% verifiable audit trail for legal defense.',
  },
  {
    id: 'logixa-warehouse',
    title: 'Logixa Warehouse App',
    company: 'Nurdsoft',
    companyType: 'nurd',
    tags: ['Compliance & Regulatory', 'Tablet / iOS', '0-to-1'],
    platform: 'Tablet (iOS)',
    win: 'Built a tablet-native warehouse app replacing paper staging sheets with RFID scanning and guided location selection — giving warehouse staff a single, auditable flow from intake to freight breakdown.',
  },
  {
    id: 'rag',
    title: 'Bilingual RAG System — GCC FinTech',
    company: 'AgileCatalyst',
    companyType: 'agile',
    tags: ['AI / ML', 'FinTech', '0-to-1'],
    platform: 'API / Backend',
    win: 'Built production bilingual RAG pipeline from scratch. Benchmarked 20+ models. Fixed Arabic retrieval from MRR 0.12 → 1.0 via embedding model switch. 42ms latency, sub-1.2s end-to-end.',
  },
  {
    id: 'fintech-mp',
    title: 'GCC Investment Marketplace',
    company: 'AgileCatalyst',
    companyType: 'agile',
    tags: ['FinTech', 'Compliance & Regulatory', 'Web'],
    platform: 'Web',
    win: 'Led 0-to-1 UAE-regulated investment marketplace — KYC, Stripe credit system, admin approval gates across 6 epics and 20+ features. Cut scope creep 60%, limited delivery delay to 4 weeks vs. projected 2-month overrun.',
  },
  {
    id: 'union-platform',
    title: 'Union Worker Consumer Platform',
    company: 'Eze Castle Integration',
    companyType: 'eze',
    tags: ['Consumer', 'Growth', 'iOS & Android', 'Data & Analytics'],
    platform: 'iOS & Android · Web',
    win: 'Drove 150% DAU growth (20K→50K) and 200K+ downloads. Redesigned onboarding from 60→95% completion through 40+ user interviews. Built 300-dimension GCP data warehouse enabling real-time dashboards and experimentation.',
  },
  {
    id: 'pitch',
    title: 'Pitch: Interview Prep That Compounds',
    company: 'Personal Project',
    companyType: 'personal',
    tags: ['0-to-1', 'AI / ML', 'Personal Project', 'Open Source'],
    platform: 'Web · Next.js',
    win: 'Built and shipped a free, open-source interview prep tool solo — round-specific prep, a reusable STAR story bank, and a one-page Day Before Brief. Self-hosted for cents per campaign versus $100+ subscriptions.',
  },
]

export const stack = [
  {
    icon: 'cpu',
    title: 'AI / ML',
    items: ['RAG pipelines & LLM evaluation', 'Prompt engineering (hands-on)', 'Embedding & retrieval architectures', 'Claude Code + Cursor (daily)', 'AI cost & capacity planning', 'Conversational AI design'],
  },
  {
    icon: 'chess-knight',
    title: 'Strategy & Leadership',
    items: ['Agile / Scrum (CSPO)', 'GTM strategy & roadmap ownership', 'Continuous discovery', 'Stakeholder alignment', '0→1 product building', 'Cross-functional collaboration'],
  },
  {
    icon: 'cloud',
    title: 'Infrastructure & Cloud',
    items: ['AWS Certified Solutions Architect', 'GCP, Docker, FastAPI, Qdrant', 'Multi-tenant RBAC & data isolation', 'OAuth, OIDC, SSO', 'CI/CD pipelines', 'Stripe payment integration'],
  },
  {
    icon: 'chart-bar',
    title: 'Analytics & Data',
    items: ['SQL, BigQuery, Tableau', 'A/B testing & experimentation', 'Metrics instrumentation (PostHog)', 'CDP & behavioral data pipelines', 'GCP data warehouse design', 'HIPAA-regulated environments'],
  },
]

export const experience = [
  {
    period: 'Jul 2025 – Present',
    role: 'AI Product Manager',
    company: 'AgileCatalyst.ai',
    type: 'Part-time · Remote',
    bullets: [
      'Built 0-to-1 bilingual RAG system — MRR 0.12 → 1.0 on Arabic retrieval, 42ms latency, sub-1.2s end-to-end.',
      'Led greenfield UAE investment platform from brief to KYC-compliant MVP across 6 epics and 20+ features.',
      'Eliminated scope creep by 60% via code POC prototyping; limited delivery delay to 4 weeks vs. projected 2-month overrun.',
    ],
  },
  {
    period: 'Sep 2023 – Jun 2026',
    role: 'Senior Product Manager',
    company: 'Nurdsoft',
    type: 'Full-time · Remote',
    bullets: [
      'Architected multi-tenant B2B SaaS (web, iOS, Android) across 11+ platform services on GCP supporting 7 personas and 100K+ shipments/year.',
      'Drove tracking accuracy 70 → 95% and delivered $500K+ compliance savings per client with zero unplanned downtime across bi-weekly releases.',
      'Built and shipped production AI-powered manifest scraping tool end-to-end, reducing operations processing time by 20%.',
      'Set roadmap prioritization across 11+ platform services; built observability framework enabling proactive failure detection.',
    ],
  },
  {
    period: 'Feb 2021 – Jan 2023',
    role: 'Product Manager',
    company: 'Eze Castle Integration',
    type: 'Full-time · Boston, USA',
    bullets: [
      'Grew daily active users 20K → 50K (+150%) and downloads to 200K+ on a consumer platform serving union workers.',
      'Conducted 40+ user interviews; redesigned onboarding flows increasing completion rate 60 → 95%.',
      'Built GCP data warehouse (300+ dimensions) enabling real-time dashboards and data-driven experimentation.',
    ],
  },
  {
    period: 'Aug 2018 – Jan 2021',
    role: 'Data Analyst / Product Manager',
    company: 'Aaron E. Henry Community Health Services',
    type: 'Full-time · Clarksdale, USA',
    bullets: [
      'Built cross-department analytics infrastructure in HIPAA-regulated environment; queried 10,000+ patient population datasets across clinical, billing, compliance, and finance.',
      'Managed medical billing operations and EHR integrations using CCD, ICD-10, CPT standards to optimize revenue cycle.',
    ],
  },
]

export const certifications = [
  'Certified Scrum Product Owner (CSPO) — Scrum Alliance',
  'Generative AI for Product Managers — IBM',
  'Building AI-Powered Products — IBM',
  'AWS Certified Solutions Architect Associate',
]

export const education = [
  { degree: 'M.S., Business Analytics', school: 'University of Texas at Dallas', year: '2018' },
  { degree: 'B.E., Mechanical Engineering', school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya', year: '2016' },
]

export const caseStudies = {
  'logixa': {
    title: 'Logixa',
    company: 'Nurdsoft',
    companyType: 'nurd',
    role: 'Senior Product Manager',
    timeline: 'Sep 2023 – Jun 2026',
    platform: 'Web · GCP',
    tags: ['0-to-1', 'B2B SaaS', 'Multi-persona', 'Compliance'],
    diagram: 'logixa',
    diagramLabel: 'How it works',
    links: [
      { label: 'logixa.io', url: 'https://logixa.io/', icon: 'world' },
    ],
    screenshots: [
      { src: '/logixa/web-hero.png', alt: 'Logixa — freight and logistics management platform' },
    ],
    tldr: 'Replaced spreadsheet chaos with a role-based multi-product logistics ecosystem. 100% adoption across 5+ departments. Tracking accuracy up from 70% to 95%. $500K+ compliance savings per client.',
    metrics: [
      { value: '100%', label: 'Adoption across 5+ departments' },
      { value: '70→95%', label: 'Shipment tracking accuracy' },
      { value: '$500K+', label: 'Compliance savings per client' },
      { value: '11+', label: 'Platform services shipped' },
    ],
    sections: [
      {
        heading: 'The problem',
        content: 'Before this initiative, the client tracked 100+ trucks across multiple disjointed apps, manual whiteboards, and constant phone calls. Operations and Dispatch were trapped in a cycle of manual updates across fragmented Google Sheets. High operational lag and data mangling threatened the company\'s ability to scale.',
      },
      {
        heading: 'Phase 1 — MVP: Internal Operations Core',
        content: 'The MVP created a single source of truth for the most critical departments. I designed an RBAC architecture enforcing strict sequential business logic:\n\n1. Operations (Intake) converts customer emails into digital Shipments\n2. Only after digitalization can Dispatch view and act on a shipment\n3. Dispatchers tally against MAWB manifests and trigger driver assignments\n\nThis sequential dependency prevented data mangling at the source.',
      },
      {
        heading: 'Phase 2 — Governance & Financial Integrity',
        content: 'Once the core was stable, I introduced the Admin Command Center and financial modules. Super Admin approval gates were added to all bills created by Accounting — eliminating manual fraud risk. Built BI dashboards tracking tonnage, shipment trends, and pickup/delivery completion by week, month, and year. Audit-ready invoices link directly to verified shipment milestones in the GCP data warehouse.',
      },
      {
        heading: 'Phase 3 — External Transparency',
        content: 'Final phase reduced manual support load on Operations. Built a Customer Admin Portal for self-service shipment tracking and a visual inquiry system for raising concerns with image attachments. Added a public MAWB tracking layer — consignees and external partners can track history without a login.',
      },
      {
        heading: 'Observability framework',
        content: 'Defined baseline latency targets for core API endpoints. Dispatch confirmation: p50 < 300ms, p99 < 1.5s (beyond 1.5s dispatchers double-tapped, causing duplicate entries). Set automated alerts: 5XX rate > 2% over 5-minute rolling window triggered on-call engineer before a support ticket was created. PDF queue depth > 50 docs triggered auto-scale. Reduced silent failures by 30%.',
      },
    ],
    bigWin: 'Orchestrated a 0-to-1 multi-product B2B ecosystem to centralize fragmented trucking operations. Replaced legacy Google Sheets with a role-based, sequential workflow architecture. 100% adoption across 5+ departments and tracking accuracy up from 70% to 95%.',
  },

  'logixa-drivers': {
    title: 'Logixa Drivers App',
    company: 'Nurdsoft',
    companyType: 'nurd',
    role: 'Senior Product Manager',
    timeline: 'Sep 2023 – Jun 2026',
    platform: 'iOS & Android (Cross-platform)',
    tags: ['Mobile', 'CA Labor Law', 'DOT Compliance', 'DVIR'],
    diagram: 'logixa-drivers',
    diagramLabel: 'Compliance flow',
    links: [
      { label: 'logixa.io/driver-app', url: 'https://logixa.io/driver-app', icon: 'world' },
    ],
    screenshots: [
      { src: '/logixa/driver-home.png', alt: 'Logixa Driver — home screen with the driver on duty and a live shift timer' },
      { src: '/logixa/driver-inspection.png', alt: 'Logixa Driver — pre-trip vehicle inspection form' },
      { src: '/logixa/driver-assignments.png', alt: 'Logixa Driver — today\'s assignments with pickup and delivery loads' },
    ],
    tldr: 'Cross-platform mobile app automating CA Labor Law break compliance and DOT vehicle inspections. Eliminated manual tracking errors. Delivered 100% verifiable audit trail for legal defense.',
    metrics: [
      { value: '100%', label: 'Verifiable audit trail for all shifts' },
      { value: '0', label: 'After-hours dispatch calls required' },
      { value: '$500K+', label: 'Annual liability mitigated — part of the Logixa compliance program' },
      { value: '2', label: 'Compliance systems shipped (Break + DVIR)' },
    ],
    sections: [
      {
        heading: 'The problem',
        content: 'Two critical risks threatened operational stability. First, significant exposure to California labor law penalties — no documented evidence for driver meal and rest periods. Second, increased DOT requirements for pre-trip inspections following a surge in national road safety incidents. Both were entirely manual, entirely undocumented.',
      },
      {
        heading: 'Stage 1 — CA Break Compliance (Legal Shield)',
        content: 'Designed MVP focused on automated labor law enforcement. Push notifications triggered by elapsed shift time prompt mandatory breaks. Drivers accept, reject, or sign waivers — creating a digital record replacing manual logs. Built error-handling to prevent overlapping logs and automatic clock-out to ensure shift accuracy. Every interaction timestamped and stored for legal defense.',
      },
      {
        heading: 'Stage 2 — DVIR & Assignment Management',
        content: 'Once the legal core was stable, integrated the Driver Vehicle Inspection Report module. Digital checklist requires photo proof of vehicle condition (Truck, Trailer, Chassis) before any truck leaves the warehouse. Status-driven asset tracking: by tracking assignment status (Pending, In-Progress, Completed), the system maintains real-time visibility into asset locations without GPS logging.',
      },
      {
        heading: 'Pivot — solving the after-hours dispatch gap',
        content: 'A major operational bottleneck surfaced: vehicles failing inspection after dispatchers had left. Drivers had to call dispatchers to re-assign a truck, or the system stayed inaccurate until morning. Solution: empowered drivers to self-assign alternative vehicles within the app if an inspection failed. A failed inspection automatically tags the asset as Needs Repair, instantly alerting the maintenance team. Eliminated after-hours calls entirely and ensured single source of truth stays accurate in real-time.',
      },
      {
        heading: 'Web-app integration',
        content: 'The mobile app is the final node of the Logixa ecosystem — sharing the same GCP infrastructure as the Logixa web platform. Inspection data feeds an asset health logic system tracking Available, Assigned, or Needs Repair status. Historical log data is now positioned for predictive maintenance based on actual driver feedback.',
      },
    ],
    bigWin: 'Engineered a cross-platform mobile compliance engine. Eliminated manual tracking errors. Provided a 100% verifiable audit trail for legal defense and road safety audits. Solved the after-hours dispatch gap by empowering drivers to self-assign vehicles.',
  },

  'logixa-warehouse': {
    title: 'Logixa Warehouse App',
    company: 'Nurdsoft',
    companyType: 'nurd',
    role: 'Senior Product Manager',
    timeline: 'Sep 2023 – Jun 2026',
    platform: 'Tablet (iOS)',
    tags: ['Tablet', 'RFID', 'Warehouse Ops', '0-to-1'],
    links: [
      { label: 'logixa.io/warehouse-mgmt', url: 'https://logixa.io/warehouse-mgmt', icon: 'world' },
    ],
    screenshots: [
      { src: '/logixa/warehouse-location.webp', alt: 'Logixa Warehouse — interactive warehouse map for staging location selection' },
      { src: '/logixa/warehouse-rfid.webp', alt: 'Logixa Warehouse — scanning an RFID tag' },
      { src: '/logixa/warehouse-unit.webp', alt: 'Logixa Warehouse — unit creation form for warehouse packages' },
    ],
    tldr: 'Built a tablet-native app that replaced paper staging sheets and whiteboards with a guided, scan-based workflow for warehouse floor staff — from staging location to unit creation to freight breakdown, feeding the same shipment records as the Logixa web platform and driver app.',
    metrics: [
      { value: '3', label: 'Core workflows shipped: stage, build unit, break down freight' },
      { value: '0', label: 'Paper staging sheets — fully digital intake' },
      { value: 'RFID', label: 'Scan-based location & stack assignment' },
      { value: 'iOS', label: 'Tablet-native, built for the warehouse floor' },
    ],
    sections: [
      {
        heading: 'The problem',
        content: 'Warehouse floor staff were staging freight using paper sheets and whiteboards — noting which stack and row a shipment landed in by hand, with no direct link back to the shipment record dispatchers and customers were tracking in the web platform. Handwriting errors and delayed updates meant the "single source of truth" the rest of Logixa promised broke down at the one place freight physically moved.',
      },
      {
        heading: 'A guided, scan-based staging flow',
        content: 'Rather than a free-form form, the app walks staff through an interactive warehouse map to pick a staging location, then narrows to the specific stack and row. An RFID scan step ties the physical unit to that location the moment it\'s placed — replacing a handwritten note with a scan that updates the shipment record in real time.',
      },
      {
        heading: 'Unit creation & freight breakdown',
        content: 'Once staged, staff build the unit directly on the tablet — creating package-level records instead of a single bulk line item — and the freight breakdown view rolls those units up into a package summary tied to the shipment. This is the same data model dispatchers and customers see on the web platform, so a warehouse update is visible everywhere else immediately.',
      },
      {
        heading: 'Built for tablet, built for the floor',
        content: 'The interface is tablet-native rather than a scaled-down phone or desktop layout — large tap targets, a map-first location picker, and a scan step designed for gloved hands and a device mounted on a cart, not a desk. It shares login and account infrastructure with the rest of Logixa, so a warehouse operator\'s credentials work the same way across the ecosystem.',
      },
    ],
    bigWin: 'Replaced paper staging sheets and whiteboards with a tablet-native, RFID-backed workflow that keeps the warehouse floor on the same shipment record as dispatch and customers — closing the last gap in the Logixa ecosystem\'s single source of truth.',
  },

  'rag': {
    title: 'Bilingual RAG System',
    company: 'AgileCatalyst',
    companyType: 'agile',
    role: 'AI Product Manager',
    timeline: 'Jul 2025 – Apr 2026',
    platform: 'API / Backend · AWS',
    tags: ['RAG', 'AI / ML', 'FinTech', 'Arabic NLP', '0-to-1'],
    externalCaseStudy: { label: 'Published Case Study', url: 'https://www.behuman.capital/library/case/hybrid-rag-multilingual-financial-intelligence/' },
    tldr: 'Built a production bilingual RAG pipeline from scratch for a GCC fintech marketplace. Investment analysts can now query hundreds of financial documents in English and Arabic via natural language and get grounded answers in under 2 seconds.',
    metrics: [
      { value: 'MRR 1.0', label: 'Arabic retrieval accuracy (was 0.12)' },
      { value: '42ms', label: 'Retrieval latency' },
      { value: '<1.2s', label: 'End-to-end response time' },
      { value: '20+', label: 'Embedding models benchmarked' },
    ],
    diagram: 'rag',
    diagramLabel: 'Architecture',
    sections: [
      {
        heading: 'The problem',
        content: 'Investment analysts at a UAE-based fintech marketplace spent 2-3 days per deal manually extracting insights from financial documents — many in Arabic. Documents included cap tables, term sheets, and regulatory filings in mixed formats and languages. No existing tool handled Arabic financial documents reliably.',
      },
      {
        heading: 'Architecture decisions',
        content: 'Designed a 6-stage pipeline: async ingestion via /kb_train endpoint (redesigned from sync after container crashes on 50MB+ files), OCR via Gemini Pro for digital PDFs and Tesseract + Arabic Reshaper + BiDi for scanned/RTL documents, hybrid chunking (Header + Recursive + custom table logic preserving row/column structure at ~500 tokens), multilingual embeddings into Qdrant with hard company-scoped namespace isolation, and hybrid BM25 + dense retrieval merged via Reciprocal Rank Fusion.',
      },
      {
        heading: 'The Arabic problem',
        content: 'Initial embedding model returned MRR 0.12 on Arabic queries — effectively random retrieval. Benchmarked 20+ models across retrieval quality, latency, and cost. Switched to paraphrase-multilingual-MiniLM-L12-v2. MRR jumped to 1.0. BM25 handles Arabic morphological variation that dense embeddings miss — the hybrid approach was critical, not optional.',
      },
      {
        heading: 'Generation layer',
        content: 'GPT-4o with a 3-prompt system (system + context + user). FIFO memory retaining last 3 exchanges. Faithfulness scorer, context window guard, and cost spike alert running on every response. Answers grounded strictly in retrieved context — no hallucination fallback.',
      },
      {
        heading: 'Infra & data isolation',
        content: 'FastAPI on AWS App Runner, Vite/AWS Amplify frontend, MongoDB, Docker. Company-scoped metadata filter enforced as a hard architectural constraint in Qdrant — Client A never sees Client B\'s documents. File limits: 50MB+ max file size, 100-200 document KB cap per company, 10-20 files per batch session.',
      },
    ],
    bigWin: 'Built a bilingual RAG system that moved Arabic retrieval from MRR 0.12 to 1.0. Analysts who previously spent 2-3 days per deal on manual research can now query their full document knowledge base and get grounded answers in under 2 seconds.',
  },

  'fintech-mp': {
    title: 'GCC Investment Marketplace',
    company: 'AgileCatalyst',
    companyType: 'agile',
    role: 'Product Manager',
    timeline: 'Jul 2025 – Feb 2026',
    platform: 'Web · ReactJS + Node.js',
    tags: ['FinTech', 'KYC', '0-to-1', 'UAE Compliance', 'Stripe'],
    diagram: 'fintech-mp',
    diagramLabel: 'Scope timeline',
    tldr: 'Led 0-to-1 build of a UAE-regulated investment marketplace for GCC retail investors and HNWIs. Shipped KYC-compliant, Stripe-integrated MVP across 6 epics and 20+ features. Cut scope creep by 60%, limited delivery delay to 4 weeks vs. projected 2-month overrun.',
    metrics: [
      { value: '60%', label: 'Scope creep eliminated' },
      { value: '4 wks', label: 'Delivery delay vs. projected 2 months' },
      { value: '6', label: 'Epics shipped end-to-end' },
      { value: '20+', label: 'Features in MVP' },
    ],
    sections: [
      {
        heading: 'The problem',
        content: 'Institutional-grade investment deals in the Middle East are structurally inaccessible to retail investors and HNWIs. Growth-stage tech companies (Series A/B) have limited capital access channels in the GCC. The client\'s LLC needed a structured, compliant digital vehicle to connect both sides — with no existing product and no technical foundation.',
      },
      {
        heading: 'Discovery approach',
        content: 'Instead of commissioning Figma designs upfront, I used Cursor to build a functional POC — a multi-page, navigable web prototype stakeholders could experience in real-time. This surfaced scope issues early rather than at dev handoff, and enabled seamless knowledge transfer to engineering and design, eliminating the "lost in translation" phase. Key discovery: credit-based transactions were essential (UAE regulations prevented direct fiat transfers), investment limits needed to be membership-gated, and admin approval was non-negotiable for all fund movements.',
      },
      {
        heading: 'What we built',
        content: 'Six-epic marketplace: investor onboarding with automated KYC via third-party integration, credit and membership system (users purchase credits via Stripe; tiers gate investment limits), investment shop (credits, vouchers, boosters, combo packs), admin approval workflow (LLC staff review and approve/reject all investment applications), real-time activity feed and investor chat via GetStream, event and meeting hosting via Luma integration.',
      },
      {
        heading: 'The scope pivot',
        content: 'Post-MVP scoping, the client introduced 4 additional epics — 15+ features — that would have pushed launch by 2 months. Response: deconstructed all proposed features into a granular timeline with engineering hour estimates, ran a trade-off analysis session presenting data on delivery risk vs. revenue impact, negotiated 60% of new requests into a V2 backlog. Delivery delay held to 4 weeks instead of 8.',
      },
    ],
    bigWin: 'Shipped a KYC-compliant, Stripe-integrated investment marketplace MVP on a compressed timeline. Eliminated the "lost in translation" dev handoff phase through code POC prototyping. Negotiated scope creep from 4 unplanned epics to 2, protecting engineering momentum and limiting delay to 4 weeks.',
  },

  'union-platform': {
    title: 'Union Worker Consumer Platform',
    company: 'Eze Castle Integration',
    companyType: 'eze',
    role: 'Product Manager',
    timeline: 'Feb 2021 – Jan 2023',
    platform: 'iOS & Android · Web',
    tags: ['Consumer', 'Growth', '0-to-1', 'Data Analytics'],
    diagram: 'union-platform',
    diagramLabel: 'The funnel, before & after',
    tldr: 'Led product strategy for a consumer platform serving union workers. Drove 150% DAU growth (20K→50K), 200K+ downloads, and lifted onboarding completion from 60% to 95% through 40+ user interviews and a systematic redesign.',
    metrics: [
      { value: '+150%', label: 'Daily active user growth (20K → 50K)' },
      { value: '200K+', label: 'Total app downloads' },
      { value: '60→95%', label: 'Onboarding completion rate' },
      { value: '40+', label: 'User interviews conducted' },
    ],
    sections: [
      {
        heading: 'The problem',
        content: 'A consumer platform serving unionized workers was experiencing stagnant engagement and high onboarding drop-off. Despite a growing install base, the majority of new users were abandoning the app before completing setup — silently killing every downstream retention and engagement metric.',
      },
      {
        heading: 'Discovery — 40+ user interviews',
        content: 'Rather than guessing at fixes, I ran 40+ structured interviews across diverse worker segments. The signal was consistent: the onboarding flow assumed context new users didn\'t have, required too many steps before delivering any value, and gave no feedback on progress. The first meaningful action was 7 screens deep. Users weren\'t confused — they were bored before they got started.',
      },
      {
        heading: 'Onboarding redesign — 60→95% completion',
        content: 'Rebuilt onboarding around a single principle: deliver perceived value before asking for anything. Collapsed a 7-step setup into 3 high-value moments. Added inline progress indicators. Deferred optional profile data to a post-activation session. Completion rate moved from 60% to 95% within two sprints of shipping.',
      },
      {
        heading: 'Growth — 20K→50K DAU',
        content: 'With the onboarding funnel fixed, retention improved which amplified the growth loop. Coordinated product and marketing on activation triggers, push notification sequences, and re-engagement flows for dormant users. The platform crossed 200K downloads and DAU grew 150% — from 20K to 50K.',
      },
      {
        heading: 'GCP data warehouse & experimentation',
        content: 'Built a 300+ dimension GCP data warehouse enabling real-time dashboards and a repeatable A/B testing framework. This made every subsequent product decision data-backed rather than intuition-driven — and allowed the team to detect and respond to behavioral shifts within hours instead of weeks.',
      },
    ],
    bigWin: 'Turned a stagnating consumer platform into a growth engine. 40+ user interviews revealed a root-cause onboarding problem that was silently destroying retention. Post-redesign: 60→95% onboarding completion, 150% DAU growth, 200K+ downloads — without changing the core product, just the path into it.',
  },

  'pitch': {
    title: 'Pitch: Interview Prep That Compounds Across Every Job',
    company: 'Personal Project',
    companyType: 'personal',
    role: 'Solo PM, spec-writer, and product owner — built end-to-end with Claude Code',
    timeline: '~2 weeks active build, Jul – Aug 2026',
    platform: 'Next.js · TypeScript · Supabase · Claude API',
    tags: ['0-to-1', 'AI / ML', 'Personal Project', 'Open Source', 'Self-hosted'],
    links: [
      { label: 'GitHub', url: 'https://github.com/apoorvjdeshmukh/pitch', icon: 'brand-github' },
      { label: '60s demo', url: 'https://youtu.be/bEZ5ZFo7k0Q', icon: 'world' },
      { label: 'Full walkthrough', url: 'https://youtu.be/iPyjZsyJncg', icon: 'world' },
    ],
    tldr: 'Every job search, I was rebuilding the same prep from scratch — a fit read on the role, notes for each interview round, research on who I was talking to, stories scattered across docs. I built the tool I actually wanted: paste a job description, get round-specific prep, a reusable story bank, and a day-before brief pulling it all together. Free and open-source, self-hosted for cents per campaign instead of a $100+ subscription.',
    metrics: [
      { value: '~$0.26', label: 'Claude API cost for a 7-round campaign' },
      { value: '2 wks', label: 'Active solo build time' },
      { value: '8', label: 'Core features shipped' },
      { value: '2', label: 'Tracks: PM and Software Engineer' },
    ],
    screenshots: [
      { src: 'https://raw.githubusercontent.com/apoorvjdeshmukh/pitch/main/docs/screenshots/fit-analysis.png', alt: 'Fit analysis screen scoring a candidate against a pasted job description' },
      { src: 'https://raw.githubusercontent.com/apoorvjdeshmukh/pitch/main/docs/screenshots/round-prep.png', alt: 'Round-specific interview prep screen' },
      { src: 'https://raw.githubusercontent.com/apoorvjdeshmukh/pitch/main/docs/screenshots/day-before-brief.png', alt: 'Day Before Brief — a single-page pre-interview summary' },
    ],
    video: { youtubeId: 'iPyjZsyJncg', label: 'Full walkthrough', title: 'Pitch — full walkthrough' },
    sections: [
      {
        heading: 'The problem',
        content: 'Every interview loop, I found myself rebuilding the same scaffolding from scratch: a read on how I actually fit the role, prep tailored to each round type in that company\'s specific process, research on whoever I was about to talk to, and stories I could tell under pressure — usually scattered across a Google Doc, a notes app, and a dozen browser tabs, **none of it reusable for the next company**.\n\nGeneric AI chat tools (ChatGPT, Claude directly) could answer any one of these questions if I prompted them well, but **they didn\'t know my process, didn\'t remember my stories from the last interview**, and gave me a wall of text instead of something structured enough to actually use the night before.',
      },
      {
        heading: 'The approach',
        content: 'I scoped this as a PM would scope any 0-to-1 product: define the job to be done, cut everything that wasn\'t load-bearing, and build the smallest version that actually replaced my own scattered workflow.\n\nThe core insight that shaped the whole product: **interview prep isn\'t one task, it\'s a pipeline with distinct stages that each need different inputs**. A Recruiter Screen and a Bar Raiser round test completely different things — generic "interview tips" are close to useless for either. So the product is **built around round-specific prep, not a single chatbot interface**.',
      },
      {
        heading: 'Key product decisions',
        content: '**Round-type taxonomy, not free-form chat.** Every round (Recruiter Screen, Hiring Manager, Product Sense, Technical, Bar Raiser, etc.) has its own competency map driving what gets generated — a Bar Raiser round pulls different competencies than a Recruiter Screen, on purpose.\n\n**The story bank compounds instead of resetting.** Rather than writing STAR stories cold for every application, a guided Q&A flow interviews you about a real moment, asks good follow-up questions, and turns it into a reusable story. Every future campaign draws from the same bank — **the third job search is easier than the first**. This was the single highest-leverage feature decision in the whole product; everything else is generation, this is compounding value.\n\n**A "read once" endpoint, not another dashboard.** The Day Before Brief is a deliberate full-ink takeover screen — one page, pulling your best stories, company facts, and interviewer notes together, designed to be read once the night before and then closed. Interview prep tools tend to pile on more surface area; this one has an explicit exit.\n\n**PM and Software Engineer tracks.** Round types and competencies are keyed per track rather than being one-size-fits-all — a SWE loop gets Coding and System Design rounds in place of Product Sense and Analytical Thinking.\n\n**Self-hosted by design, not as an afterthought.** Every generation call runs through the user\'s own Claude API key, and data lives in their own Supabase project. This was a deliberate constraint, not a limitation I ran into — it meant designing a real cost-control mechanism (a server-side allowlist gating who can trigger generation) rather than assuming a trusted single-tenant environment.\n\n**Licensing as a product decision, not an afterthought.** Released under PolyForm Noncommercial rather than MIT — free for anyone to self-host and use personally, but commercial use requires reaching out first. This was a deliberate tradeoff between "maximally open" and "protects the option to build a paid product on this later" — I chose to keep that door open rather than default to the most permissive license out of habit.',
      },
      {
        heading: 'What shipped',
        content: '**Fit analysis** against a pasted job description — a score, concrete strengths, and gaps, each with a specific way to close it before the interview. Auto-generated company and vocabulary flashcards from the JD. **Round-specific prep** for every stage of a company\'s process. Interviewer research from a pasted LinkedIn bio. A guided Q&A story-capture flow feeding a **STAR story bank** that resurfaces automatically wherever a story is relevant, across every campaign. The **Day Before Brief** — one page, read once. Per-campaign file uploads, an offline snapshot mode, and installable PWA support.',
      },
      {
        heading: 'Proof it\'s actually cheap to run',
        content: '**I measured this rather than estimating it**: reading real token usage off the Claude API responses for an actual campaign run.\n\nA 4-round campaign runs about $0.16 in Claude API cost. A 6-round campaign runs about $0.22. A full 7-round campaign — the max — runs about **$0.26**.\n\nA full job search running several campaigns in parallel is **still under a dollar in AI spend — versus $100+** for a single coaching session or a prep subscription.',
      },
      {
        heading: 'What I\'d do differently',
        content: '**Editable AI-generated content.** Every generated section already discloses its limits (e.g. company cards note they\'re not verified against live data), but the only fix for a wrong fact today is regenerating the whole section. **Letting people correct a flashcard, fact, or story in place** — with the edit surviving future regenerations instead of being silently overwritten — is the highest-leverage next step for actually trusting the output rather than just being warned about it. Not just an editing-UI problem: the real complexity is **tracking which fields are user-corrected versus AI-generated** so a regenerate respects the correction.\n\n**A real sign-up flow.** I\'d have liked to build one, but it wasn\'t just a missing feature — it was a scope boundary I chose to hold. This app is self-hosted per person, so there\'s no shared account system to build in the first place. The moment I let people sign up instead of self-host, that drags in an admin portal to manage users and billing, a real security posture for holding other people\'s interview data, and a recurring monthly cost to run — real infrastructure for what\'s currently a zero-cost side project.\n\n**Speech-to-text and text-to-speech.** This is the change I keep coming back to — it would unlock mock interviews you actually talk through out loud instead of just reading prep. I scoped it out for now because voice API usage runs meaningfully higher than the text generation this currently uses, and I wanted the headline claim — cents per campaign — to stay true rather than become an asterisk.\n\n**Self-hosted LLM support.** Every generation call goes to Claude today, by design — the prompts are tuned against it, including expecting reliable structured JSON back. Letting people point the app at a local model instead (Ollama, LM Studio, anything OpenAI-compatible) would push the cost story from "cents per campaign" to "literally free." I held off because smaller local models are meaningfully less reliable at strict JSON output than Claude is, so shipping it without testing against real local models first risks flaky generation for exactly the users trying to spend the least money.',
      },
    ],
    bigWin: 'Built and shipped a free, open-source interview prep tool solo, end-to-end with Claude Code. The story bank turns interview prep from a one-time cost into a compounding asset across every future job search — and the whole thing runs on the user\'s own API key for cents per campaign, not a $100+ subscription.',
  },
}
