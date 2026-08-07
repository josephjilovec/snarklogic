import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { AgentGraph } from '@/components/AgentGraph'
import { SectionHeading } from '@/components/SectionHeading'
import { pods } from '@/lib/data'
export const metadata: Metadata = { title:'Agent System' }
export default function AgentsPage(){return <>
  <PageHero kicker="MULTI-AGENT ARCHITECTURE" title="Structured disagreement is the feature." copy="SnarkLogic separates creative enthusiasm from behavioral judgment, capital discipline, and risk review—then forces the perspectives back into one traceable decision process."/>
  <section className="dark-section section-pad"><AgentGraph/></section>
  <section className="section-pad"><SectionHeading eyebrow="POD RESPONSIBILITIES" title="Specialists with different failure modes."/><div className="pod-deep-grid">{pods.map(p=><article key={p.id}><span>{p.index} / {p.metric}</span><h2>{p.name}</h2><p>{p.role}</p>{p.agents.map(a=><div key={a.name}><b>{a.name}</b><p>{a.detail}</p></div>)}</article>)}</div></section>
  <section className="decision-protocol section-pad"><SectionHeading eyebrow="DECISION PROTOCOL" title="No invisible hand-waving."/><ol><li><b>Proposal.</b> One pod makes a recommendation with an explicit reason.</li><li><b>Challenge.</b> Other pods identify failure modes, missing evidence, or conflicting incentives.</li><li><b>Revision.</b> The proposal is changed—or the disagreement is recorded.</li><li><b>Human gate.</b> High-risk legal, brand, rights, or spend decisions stay approval-based.</li><li><b>Outcome.</b> Observed results are written back into the evidence graph.</li></ol></section>
</>}
