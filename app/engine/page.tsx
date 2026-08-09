import type { Metadata } from 'next'
import Link from 'next/link'
import { loop, pods } from '@/lib/data'

export const metadata: Metadata = { title: 'Shared Engine' }

export default function EnginePage() {
  return <>
    <section className="page-hero-v2 engine-hero"><span>SHARED INFRASTRUCTURE</span><h1>One engine.<br/><em>Different consequences.</em></h1><p>The creator product and enterprise product share a structured disagreement model, but the objectives and escalation thresholds are deliberately different.</p></section>
    <section className="section"><div className="section-head"><span>THE FOUR PODS</span><h2>No single “creative AI” gets the final word.</h2></div><div className="pod-grid expanded">{pods.map(p => <article key={p.index}><span>{p.index} / {p.signal}</span><h3>{p.name}</h3><p>{p.line}</p>{p.agents.map(([n,d]) => <div className="agent-line" key={n}><b>{n}</b><p>{d}</p></div>)}</article>)}</div></section>
    <section className="section loop-section"><div className="section-head"><span>DECISION PROTOCOL</span><h2>Disagreement becomes data.</h2></div><div className="loop-list">{loop.map(([n,t,d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><i>↘</i></div>)}</div></section>
    <section className="section evidence-section"><div className="section-head"><span>WHAT GETS REMEMBERED</span><h2>Not just outputs. Reasons.</h2></div><div className="evidence-grid"><article><b>ACCEPTED</b><h3>Mechanisms that survived challenge</h3><p>Hooks, turns, tones, and phrasing patterns that fit the creator or organization.</p></article><article><b>REJECTED</b><h3>Failure modes worth preserving</h3><p>Cringe patterns, stale devices, ambiguous wording, context problems, and high-risk edges.</p></article><article><b>ESCALATED</b><h3>Questions the system should not decide</h3><p>Legal, HR, regulated, crisis, factual, policy, and material public-risk decisions remain human-owned.</p></article></div></section>
    <section className="final-cta-v2 compact-cta"><span>THE SYSTEM IS NOT THE JOKE.</span><h2>The system makes the joke explain itself.</h2><Link className="button creator-button" href="/lab">Open the lab →</Link></section>
  </>
}
