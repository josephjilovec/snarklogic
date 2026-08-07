export type Pod = {
  id: string
  index: string
  name: string
  role: string
  agents: { name: string; detail: string }[]
  metric: string
}

export const pods: Pod[] = [
  {
    id: 'behavioral', index: '01', name: 'Behavioral Intelligence', role: 'Attention without the cringe.', metric: 'Signal: audience resistance',
    agents: [
      { name: 'Behavioral Analyst', detail: 'Maps skepticism, ad fatigue, status anxiety, and humor tolerance into usable creative constraints.' },
      { name: 'Cultural Signal Scout', detail: 'Tracks fast-moving language, formats, and meme structures before they become stale.' },
    ],
  },
  {
    id: 'creative', index: '02', name: 'Creative & Talent', role: 'Make the joke earn its media spend.', metric: 'Signal: concept velocity',
    agents: [
      { name: 'Comedic Director', detail: 'Builds concepts using misdirection, escalation, contrast, specificity, and controlled absurdity.' },
      { name: 'Talent & Rights Agent', detail: 'Keeps creator voice, licensing boundaries, approvals, and usage rights visible throughout production.' },
    ],
  },
  {
    id: 'capital', index: '03', name: 'Capital Allocation', role: 'Treat creative like a portfolio.', metric: 'Signal: marginal ROAS',
    agents: [
      { name: 'Media Arbitrage Agent', detail: 'Compares angle-level CPA and ROAS signals and recommends budget shifts toward stronger performers.' },
      { name: 'Unit Economics Agent', detail: 'Tracks contribution margin, production cost, platform cost, and pricing pressure.' },
    ],
  },
  {
    id: 'risk', index: '04', name: 'Risk & Anti-Fragility', role: 'Funny, not reckless.', metric: 'Signal: downside exposure',
    agents: [
      { name: 'IP & Compliance Counsel', detail: 'Flags trademark, copyright, disclosure, endorsement, and platform-policy risks for human review.' },
      { name: 'Red-Team Operator', detail: 'Stress-tests punchlines for backlash, ambiguity, brand mismatch, and operational failure modes.' },
    ],
  },
]

export const workflow = [
  ['01', 'Ingest', 'Product URL, offer, audience, economics, brand boundaries.'],
  ['02', 'Map', 'Audience defenses, humor tolerance, cultural signals, competitive sameness.'],
  ['03', 'Generate', 'Angle families, hooks, scripts, boards, variants, creator briefs.'],
  ['04', 'Challenge', 'Policy, IP, reputational and “would this age badly?” red-team pass.'],
  ['05', 'Produce', 'Human/AI production routing, approvals, asset lineage, version control.'],
  ['06', 'Deploy', 'Experiment matrix by audience, channel, angle and spend tier.'],
  ['07', 'Learn', 'Feed observed performance into the next creative allocation cycle.'],
]

export const roadmap = [
  ['NOW → 5Y', 'Fastvertising OS', 'High-velocity short-form creative, absurdist UGC systems, measurable angle libraries.'],
  ['5 → 10Y', 'Adaptive Humor', 'Context-aware creative assembly with guardrails, cohort-level personalization, dynamic sequencing.'],
  ['10 → 15Y+', 'Conversational Brands', 'Interactive comedic brand agents across commerce, live environments, and spatial interfaces.'],
]

export const investorSlides = [
  ['01', 'The Contrarian Thesis', 'Advertising got optimized until it became ignorable. SnarkLogic makes distinctiveness measurable.'],
  ['02', 'The Pain', 'Creative fatigue, slow production cycles, expensive testing, fragmented rights and compliance workflows.'],
  ['03', 'The Product', 'One operating system spanning insight, comedic ideation, production, risk review and media feedback.'],
  ['04', 'The Wedge', 'Start with rapid comedic performance creative where iteration speed is directly visible in economics.'],
  ['05', 'Why Now', 'Generative production collapsed asset cost; the bottleneck moved to taste, governance, and learning velocity.'],
  ['06', 'The Multi-Agent Moat', 'Specialist agents create structured disagreement, traceable decisions, and reusable institutional memory.'],
  ['07', 'Business Model', 'SaaS + marketplace take rate + enterprise studio + performance-aligned services.'],
  ['08', 'Economics', 'Software gross-margin core with selective service layers that create proprietary performance data.'],
  ['09', 'Expansion', 'From ad concepts to talent infrastructure, media allocation, brand agents, and creative intelligence APIs.'],
  ['10', 'The Ask', 'Capital to deepen product, data flywheel, creator network, enterprise distribution, and governance systems.'],
]
