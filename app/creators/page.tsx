import type { Metadata } from 'next'
import Link from 'next/link'
import { SignalWorkbench } from '@/components/SignalWorkbench'
import { creatorCapabilities, creatorSegments } from '@/lib/data'

export const metadata: Metadata = { title: 'Creator R&D' }

export default function CreatorsPage() {
  return <>
    <section className="page-hero-v2 creator-hero">
      <span>PUBLIC LAYER / ALGORITHMIC WRITERS’ ROOM</span>
      <h1>A writers’ room that starts with the <em>hook.</em></h1>
      <p>Snark Logic is a content R&D system for creators and studios that need more premises, faster challenges, and better timing—not an auto-posting machine and not a replacement for taste.</p>
      <div className="hero-actions"><Link className="button creator-button" href="/lab">Open the lab →</Link><Link className="button dark-outline" href="/contact">Creator inquiry →</Link></div>
    </section>

    <section className="section"><div className="section-head"><span>THE R&D STACK</span><h2>Build the idea before the algorithm judges it.</h2></div><div className="capability-grid creator-caps">{creatorCapabilities.map(([n,t,d]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="creator-workbench"><SignalWorkbench compact /></section>

    <section className="section audience-section"><div className="section-head"><span>WHO IT IS FOR</span><h2>Different feeds. Same pressure: earn the next second.</h2></div><div className="segment-grid">{creatorSegments.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="section creator-method"><div className="section-head"><span>METHOD</span><h2>Velocity without creative amnesia.</h2><p>Every good result should teach the next run something: which setup, turn, format, audience tension, and edge level actually worked for this creator—not for an imaginary average user.</p></div><div className="method-columns"><div><b>01</b><h3>Generate families.</h3><p>Produce multiple premise mechanics instead of twenty cosmetic rewrites of the same idea.</p></div><div><b>02</b><h3>Challenge the turn.</h3><p>Ask whether surprise arrives before attention expires and whether the joke preserves the point.</p></div><div><b>03</b><h3>Build pattern memory.</h3><p>Keep what worked as creator-specific evidence, not a generic “viral template.”</p></div></div></section>

    <section className="page-cta creator-panel"><span>PUBLIC ACCESS MODEL</span><h2>Creator, Studio, Network.</h2><p>The commercial model is designed around self-serve creator tiers and higher-volume studio/network workflows. Pricing and access remain prototype-stage until product validation is complete.</p><Link href="/contact">Ask about early access →</Link></section>
  </>
}
