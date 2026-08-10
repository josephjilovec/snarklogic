export const creatorCapabilities = [
  ['01', 'Hook Forge', 'Generate families of openings around tension, specificity, misdirection, reversal, and pattern interruption—not random one-liners.'],
  ['02', 'Timing Lab', 'Map when the premise reveals itself, where the turn lands, and how quickly the viewer understands why they should keep watching.'],
  ['03', 'Humor Tolerance Map', 'Model audience resistance, irony tolerance, taboo boundaries, fatigue, and how far a creator can push without losing the room.'],
  ['04', 'Narrative Subversion', 'Identify the expected category story, then bend, reverse, undercut, or escalate it while preserving a clear point.'],
  ['05', 'Retention Notes', 'Score openings and beat structures against clarity, surprise, payoff distance, rewatch potential, and likely drop-off moments.'],
  ['06', 'Pattern Library', 'Turn strong mechanisms into reusable creative patterns without flattening every creator into the same house voice.'],
] as const

export const enterpriseCapabilities = [
  ['01', 'Backlash Probability Index', 'Score outbound language across mockery potential, ambiguity, tone mismatch, context collapse, claim exposure, and escalation risk—with reasons instead of a black-box safe/unsafe label.'],
  ['02', 'Adversarial Writers’ Room', 'Simulate cynical journalists, hostile audiences, competitors, skeptical customers, employees, and other plausible readers trying to reinterpret, screenshot, parody, or weaponize the message.'],
  ['03', 'Tone & Satire Firewall', 'Intercept language before publication and flag unintended irony, sarcastic overtones, accidental condescension, false warmth, rhetorical contradictions, and brand-damaging subtext.'],
  ['04', 'Autonomous Agent Guardrails', 'Place a communications policy layer between customer-facing agents and public channels to catch conversational drift, excessive familiarity, risky improvisation, and messages that require human approval.'],
  ['05', 'Cross-Cultural Tone Mapping', 'Compare how humor, directness, hierarchy, apology language, idioms, and corporate phrasing may land differently across markets without treating culture as a deterministic score.'],
  ['06', 'Claim & Context Gate', 'Separate stylistic experimentation from factual, legal, policy, disclosure, employment, securities, safety, or regulated claims that require qualified human review.'],
  ['07', 'Approval & Incident Memory', 'Preserve accepted patterns, rejected failure modes, escalation decisions, reviewer notes, and organization-specific communication rules for future evaluations.'],
  ['08', 'Semantic Firewall API', 'Expose the evaluation layer as a pre-publication API for CMS workflows, marketing automation, support agents, social tooling, and other systems that generate outbound language.'],
] as const

export const enterpriseWorkflow = [
  ['01', 'INTERCEPT', 'Capture a draft, agent response, campaign variant, announcement, or other outbound language before it reaches a public channel.'],
  ['02', 'INTERPRET', 'Evaluate literal meaning alongside tone, implication, irony, rhetorical framing, audience context, and organization-specific policy.'],
  ['03', 'ATTACK', 'Run adversarial readings: hostile screenshot, cynical headline, competitor framing, employee interpretation, regulator-sensitive claim, and cultural-context stress tests.'],
  ['04', 'SCORE', 'Return a multidimensional Backlash Probability Index with evidence, uncertainty, and the specific passages driving risk.'],
  ['05', 'ROUTE', 'Pass low-risk language, request revision, or escalate consequential questions to communications, legal, HR, policy, or another designated human owner.'],
  ['06', 'REMEMBER', 'Write approved and rejected patterns into controlled organizational memory so the system becomes more specific to the institution over time.'],
] as const

export const bpiDimensions = [
  ['MOCKERY', 'Could a reasonable hostile reader turn the wording into an obvious joke, contradiction, meme, or damaging screenshot?'],
  ['TONE', 'Does the emotional register fit the event, audience, authority relationship, and seriousness of the underlying message?'],
  ['SUBTEXT', 'Does the copy imply arrogance, indifference, opportunism, insincerity, blame, or another meaning that the literal words do not state?'],
  ['CONTEXT', 'What changes when the sentence is detached from the full document and circulated as a headline, clip, quote card, or screenshot?'],
  ['CLAIMS', 'Does humor or simplification obscure a factual, policy, legal, financial, employment, safety, or regulatory assertion that needs human review?'],
  ['CULTURE', 'Could idiom, humor, hierarchy, directness, apology language, or local context materially change interpretation in another market?'],
] as const

export const pods = [
  { index:'01', name:'Behavioral Intelligence', signal:'Audience resistance', line:'Read the room before trying to own it.', agents:[['Behavioral Analyst','Maps skepticism, status dynamics, attention friction, audience defensiveness, and humor tolerance.'],['Retention Analyst','Looks at opening clarity, payoff distance, beat density, novelty, and likely attention drop-off points.']] },
  { index:'02', name:'Cultural Signal', signal:'Timing + context', line:'The joke has a half-life.', agents:[['Cultural Signal Scout','Tracks formats, language, meme structures, context shifts, and ideas moving from fresh to exhausted.'],['Context Editor','Checks whether the premise still works when it leaves the intended feed, room, team, or audience.']] },
  { index:'03', name:'Creative & Narrative', signal:'Distinctiveness', line:'Make the turn earn its place.', agents:[['Comedic Director','Builds hooks through specificity, misdirection, escalation, reversal, contrast, and controlled absurdity.'],['Narrative Editor','Protects clarity, voice, setup/payoff logic, and the underlying point when the concept gets sharper.']] },
  { index:'04', name:'Risk & Anti-Fragility', signal:'Downside exposure', line:'Funny is not a permission slip.', agents:[['Red-Team Operator','Searches for cringe, backlash, ambiguity, context collapse, brand mismatch, and predictable hostile readings.'],['Human Review Gate','Escalates legal, HR, regulated, reputational, safety, or factual questions instead of pretending a model should decide them.']] },
] as const

export const loop = [
  ['01','Frame','Define the audience, context, voice, objective, forbidden zones, and what a successful message must actually communicate.'],
  ['02','Generate','Build multiple hooks, angles, turns, rewrites, and narrative mechanisms rather than polishing one premature answer.'],
  ['03','Disagree','Behavioral, cultural, creative, and risk roles challenge one another with explicit reasons.'],
  ['04','Stress-test','Test timing, clarity, humor tolerance, cringe, backlash, context collapse, and escalation requirements.'],
  ['05','Human gate','Keep consequential brand, legal, HR, regulatory, and public-risk decisions approval-based.'],
  ['06','Learn','Write accepted and rejected patterns back into a reusable creative and communication memory.'],
] as const

export const creatorSegments = [['Independent creators','High-volume ideation without sacrificing a recognizable voice.'],['Meme & culture pages','Fast premise testing, format timing, and sharper pattern selection.'],['Content studios','Structured ideation across multiple creators, shows, clients, or recurring formats.'],['Entertainment brands','A repeatable R&D layer for social-native story mechanics and audience response.']] as const

export const enterpriseSegments = [
  ['Corporate communications', 'Stress-test announcements, executive statements, restructuring language, apologies, policy changes, and other messages where subtext can become the story.'],
  ['PR & reputation teams', 'Model hostile readings and screenshot risk before the public performs the red-team exercise in real time.'],
  ['Legal / compliance partners', 'Route consequential claims and ambiguous language to the right human reviewer instead of confusing semantic risk scoring with legal advice.'],
  ['AI & agent platform teams', 'Insert a semantic communications gate between autonomous systems and customer-facing or public channels.'],
  ['Global brand teams', 'Compare tone and rhetorical interpretation across markets while preserving local human ownership.'],
  ['Customer experience teams', 'Detect when automated agents drift into sarcasm, excessive familiarity, argument, overpromising, or language outside approved boundaries.'],
] as const

export const businessModel = [['PUBLIC / CREATOR','Self-serve software','Creator, studio, and network tiers; high-velocity content R&D and reusable pattern libraries.','Planned'],['PRIVATE / ENTERPRISE','Semantic risk infrastructure','Private pilots, API evaluation, agent guardrails, red-team workflows, organization-specific policy layers, and retained support.','Private engagement']] as const

export const investorStory = [
  ['01','Category','Semantic communications risk infrastructure: a pre-publication layer for tone, subtext, satire, context collapse, and adversarial interpretation.'],
  ['02','Enterprise wedge','Organizations are putting generative systems into public communication workflows faster than literal keyword and data-governance controls can understand rhetorical risk.'],
  ['03','Product wedge','The Backlash Probability Index and adversarial writers’ room turn vague “this feels risky” judgments into a repeatable evaluation workflow.'],
  ['04','Runtime expansion','Agent guardrails and the Semantic Firewall API move Snark Logic from draft review into machine-speed communications governance.'],
  ['05','Shared engine','Behavioral, cultural, creative, and risk roles provide structured disagreement rather than one-model approval.'],
  ['06','Data flywheel','Accepted, rejected, escalated, and incident-linked patterns can form controlled organization-specific evaluation memory.'],
  ['07','Defensibility','Workflow memory, proprietary evaluation sets, organization-specific guardrails, adversarial test libraries, and cross-context interpretation data.'],
  ['08','Expansion','Text first; then multimodal campaign review, voice agents, support systems, localization workflows, and broader autonomous communications QA.'],
] as const
