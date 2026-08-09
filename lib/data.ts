export const creatorCapabilities = [
  ['01', 'Hook Forge', 'Generate families of openings around tension, specificity, misdirection, reversal, and pattern interruption—not random one-liners.'],
  ['02', 'Timing Lab', 'Map when the premise reveals itself, where the turn lands, and how quickly the viewer understands why they should keep watching.'],
  ['03', 'Humor Tolerance Map', 'Model audience resistance, irony tolerance, taboo boundaries, fatigue, and how far a creator can push without losing the room.'],
  ['04', 'Narrative Subversion', 'Identify the expected category story, then bend, reverse, undercut, or escalate it while preserving a clear point.'],
  ['05', 'Retention Notes', 'Score openings and beat structures against clarity, surprise, payoff distance, rewatch potential, and likely drop-off moments.'],
  ['06', 'Pattern Library', 'Turn strong mechanisms into reusable creative patterns without flattening every creator into the same house voice.'],
] as const

export const enterpriseCapabilities = [
  ['01', 'Tone Translation', 'Rewrite stiff corporate language into human language while preserving the factual payload and approval boundaries.'],
  ['02', 'Cringe Scan', 'Flag inflated phrasing, fake warmth, empty jargon, accidental condescension, and lines that sound like a committee wrote them.'],
  ['03', 'Backlash Map', 'Stress-test plausible hostile readings, context collapse, ambiguity, screenshot risk, and audience-specific failure modes.'],
  ['04', 'Satire Dial', 'Explore how much wit, irony, or self-awareness a message can carry before the tone stops fitting the organization or moment.'],
  ['05', 'Claim & Context Gate', 'Separate stylistic experimentation from factual, legal, policy, disclosure, or regulated claims that require human review.'],
  ['06', 'Approval Memory', 'Preserve what changed, why it changed, who objected, and which communication rules should survive into the next draft.'],
] as const

export const pods = [
  {
    index: '01',
    name: 'Behavioral Intelligence',
    signal: 'Audience resistance',
    line: 'Read the room before trying to own it.',
    agents: [
      ['Behavioral Analyst', 'Maps skepticism, status dynamics, attention friction, audience defensiveness, and humor tolerance.'],
      ['Retention Analyst', 'Looks at opening clarity, payoff distance, beat density, novelty, and likely attention drop-off points.'],
    ],
  },
  {
    index: '02',
    name: 'Cultural Signal',
    signal: 'Timing + context',
    line: 'The joke has a half-life.',
    agents: [
      ['Cultural Signal Scout', 'Tracks formats, language, meme structures, context shifts, and ideas moving from fresh to exhausted.'],
      ['Context Editor', 'Checks whether the premise still works when it leaves the intended feed, room, team, or audience.'],
    ],
  },
  {
    index: '03',
    name: 'Creative & Narrative',
    signal: 'Distinctiveness',
    line: 'Make the turn earn its place.',
    agents: [
      ['Comedic Director', 'Builds hooks through specificity, misdirection, escalation, reversal, contrast, and controlled absurdity.'],
      ['Narrative Editor', 'Protects clarity, voice, setup/payoff logic, and the underlying point when the concept gets sharper.'],
    ],
  },
  {
    index: '04',
    name: 'Risk & Anti-Fragility',
    signal: 'Downside exposure',
    line: 'Funny is not a permission slip.',
    agents: [
      ['Red-Team Operator', 'Searches for cringe, backlash, ambiguity, context collapse, brand mismatch, and predictable hostile readings.'],
      ['Human Review Gate', 'Escalates legal, HR, regulated, reputational, safety, or factual questions instead of pretending a model should decide them.'],
    ],
  },
] as const

export const loop = [
  ['01', 'Frame', 'Define the audience, context, voice, objective, forbidden zones, and what a successful message must actually communicate.'],
  ['02', 'Generate', 'Build multiple hooks, angles, turns, rewrites, and narrative mechanisms rather than polishing one premature answer.'],
  ['03', 'Disagree', 'Behavioral, cultural, creative, and risk roles challenge one another with explicit reasons.'],
  ['04', 'Stress-test', 'Test timing, clarity, humor tolerance, cringe, backlash, context collapse, and escalation requirements.'],
  ['05', 'Human gate', 'Keep consequential brand, legal, HR, regulatory, and public-risk decisions approval-based.'],
  ['06', 'Learn', 'Write accepted and rejected patterns back into a reusable creative and communication memory.'],
] as const

export const creatorSegments = [
  ['Independent creators', 'High-volume ideation without sacrificing a recognizable voice.'],
  ['Meme & culture pages', 'Fast premise testing, format timing, and sharper pattern selection.'],
  ['Content studios', 'Structured ideation across multiple creators, shows, clients, or recurring formats.'],
  ['Entertainment brands', 'A repeatable R&D layer for social-native story mechanics and audience response.'],
] as const

export const enterpriseSegments = [
  ['Corporate communications', 'Humanize announcements, executive notes, internal messages, and change communications.'],
  ['PR & reputation teams', 'Red-team public statements before the internet does it for free.'],
  ['Brand & social teams', 'Explore wit and self-awareness inside explicit brand and escalation boundaries.'],
  ['People / internal comms', 'Reduce robotic language while preserving seriousness, clarity, and review requirements.'],
] as const

export const businessModel = [
  ['PUBLIC / CREATOR', 'Self-serve software', 'Creator, studio, and network tiers; high-velocity content R&D and reusable pattern libraries.', 'Planned'],
  ['PRIVATE / ENTERPRISE', 'Custom deployment', 'Private pilots, communication stress-testing, guardrail design, evaluation workflows, and retained support.', 'Private engagement'],
] as const

export const investorStory = [
  ['01', 'Category', 'Comedy and communication R&D infrastructure—not another ad-buying dashboard.'],
  ['02', 'Public wedge', 'Creators and content studios need more ideas, faster testing, and better retention logic without flattening voice.'],
  ['03', 'Private wedge', 'Enterprises need more human communication without turning tone experimentation into unmanaged reputation risk.'],
  ['04', 'Shared engine', 'Both products use the same disagreement architecture: behavioral, cultural, creative, and risk roles.'],
  ['05', 'Data flywheel', 'Accepted, rejected, and observed patterns can become structured memory around audience tolerance, timing, voice, and failure modes.'],
  ['06', 'Business model', 'Self-serve MediaTech on one side; high-ticket private enterprise deployments on the other.'],
  ['07', 'Defensibility', 'Workflow memory, proprietary evaluation data, organization-specific guardrails, and creator-specific pattern libraries.'],
  ['08', 'Expansion', 'From text and short-form ideation into episodic formats, live social operations, internal comms, and communication QA APIs.'],
] as const
