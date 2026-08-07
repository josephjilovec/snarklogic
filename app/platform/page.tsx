import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
import { BriefSimulator } from '@/components/BriefSimulator'
import { workflow } from '@/lib/data'

export const metadata: Metadata = { title: 'Platform' }

const modules = [
  ['BRIEF INTELLIGENCE','Normalize product truth, audience tension, economics, claims, brand boundaries and channel constraints into one structured campaign object.'],
  ['ANGLE ENGINE','Generate concept families—not random one-liners—with hooks, comedic mechanisms, proof points, scripts, boards and variants.'],
  ['RIGHTS LEDGER','Track creators, synthetic assets, source material, approvals, usage windows and territory/channel constraints.'],
  ['RED-TEAM GATE','Surface policy, IP, reputational, ambiguity and brand-fit risks before production spend compounds.'],
  ['EXPERIMENT MATRIX','Attach hypothesis, audience, format, spend tier and success criteria to every creative version.'],
  ['LEARNING GRAPH','Turn results into reusable evidence: which hooks, mechanisms, claims and audiences actually moved.']
]

export default function PlatformPage(){ return <>
  <PageHero kicker="B2B SAAS ENGINE" title="The campaign operating system for people allergic to generic ads." copy="One workspace for turning a commercial brief into differentiated concepts, governed production, structured experiments, and accumulated creative intelligence." cta="Request platform access"/>
  <section className="section-pad"><SectionHeading eyebrow="PRODUCT ARCHITECTURE" title="Six modules. One campaign object."/><div className="feature-cards">{modules.map(([t,c],i)=><article key={t}><b>0{i+1}</b><h3>{t}</h3><p>{c}</p></article>)}</div></section>
  <section className="dark-section section-pad"><SectionHeading eyebrow="SYSTEM FLOW" title="Every handoff is explicit."/><div className="workflow compact">{workflow.map(([n,t,d])=><div className="workflow-row" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><span>→</span></div>)}</div></section>
  <section className="lab-link-strip"><a href="/lab">OPEN THE CAMPAIGN LAB PRODUCT CONCEPT →</a></section><section className="section-pad"><SectionHeading eyebrow="TRY THE SERVER ROUTE" title="A tiny version of the orchestration flow."/><BriefSimulator/></section>
</> }
