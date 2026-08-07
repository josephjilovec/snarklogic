import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { investorSlides } from '@/lib/data'
export const metadata: Metadata = { title:'Investor Narrative' }
export default function Investors(){return <><PageHero kicker="INVESTOR NARRATIVE" title="The creative layer is becoming software. Taste and governance become infrastructure." copy="A 10-slide institutional pitch architecture for the SnarkLogic thesis. This page is strategic narrative, not an offering memorandum or investment solicitation."/><section className="section-pad"><div className="pitch-stack">{investorSlides.map(([n,t,c])=><article key={n}><span>{n}</span><div><h2>{t}</h2><p>{c}</p></div></article>)}</div></section><section className="final-cta"><span>THE MOAT</span><h2>Structured creative data.<br/>Rights-aware workflows.<br/>Performance memory.</h2></section></>}
