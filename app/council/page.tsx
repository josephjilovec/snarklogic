import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { SectionHeading } from '@/components/SectionHeading'
export const metadata: Metadata = { title:'Executive Council' }
const council=[
 ['BRAND & CELEBRITY AFFAIRS','Positioning, reputation, partnerships, public narrative, spokesperson/talent alignment, long-horizon brand equity.'],
 ['PR & CRISIS','Issue monitoring, scenario planning, response architecture, escalation thresholds, media-facing consistency.'],
 ['UX & HUMAN FACTORS','Information architecture, cognition, accessibility, interaction cost, behavioral friction, decision clarity.'],
 ['DESIGN & SPATIAL SYSTEMS','Visual identity, layout, motion, environmental/experiential consistency, production design principles.'],
 ['ENGINEERING & SECURITY','Application architecture, data boundaries, reliability, authorization, observability, vendor concentration.'],
 ['FINANCE & TAX COORDINATION','Unit economics, budgeting, reporting architecture, tax/accounting handoffs and diligence requirements.'],
 ['LEGAL & RIGHTS','IP, talent/likeness rights, contracts, disclosures, advertising rules, privacy and review escalation.'],
 ['RESEARCH & MEASUREMENT','Experiment design, causal caution, metric definitions, evidence quality, postmortems and learning systems.']
]
export default function Council(){return <><PageHero kicker="EXECUTIVE COUNCIL" title="A virtual headquarters, not one magic prompt." copy="Above the four campaign pods sits a multidisciplinary advisory ring. It defines standards, reviews consequential decisions and gives the operating system specialist lenses without pretending software itself is licensed counsel, a CPA, or a human executive."/><section className="section-pad"><SectionHeading eyebrow="ADVISORY RING" title="The disciplines behind the discipline."/><div className="council-grid">{council.map(([a,b],i)=><article key={a}><span>{String(i+1).padStart(2,'0')}</span><h3>{a}</h3><p>{b}</p></article>)}</div><p className="fine council-fine">Professional domains represented in the architecture are decision lenses and workflow roles. Actual legal, tax, accounting, regulated clinical, or other licensed professional matters should be reviewed by appropriately qualified humans.</p></section></>}
