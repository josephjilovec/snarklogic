import type { Metadata } from 'next'
import Link from 'next/link'
import { enterpriseCapabilities, enterpriseSegments } from '@/lib/data'

export const metadata: Metadata = { title: 'Enterprise Communications OS' }

export default function EnterprisePage() {
  return <>
    <section className="page-hero-v2 enterprise-hero">
      <span>PRIVATE LAYER / CORPORATE COMMUNICATIONS OS</span>
      <h1>Make the memo human.<br/><strong>Keep the PR team out of triage.</strong></h1>
      <p>A private tone, satire, and risk-testing layer for public statements, executive messages, internal communications, social copy, and other language where “less robotic” cannot mean “uncontrolled.”</p>
      <div className="hero-actions"><Link className="button enterprise-button" href="/contact">Discuss a private pilot →</Link><Link className="button dark-outline" href="/engine">See the shared engine →</Link></div>
    </section>

    <section className="section"><div className="section-head"><span>THE FIREWALL</span><h2>Give the sentence edge. Then attack it from every side.</h2></div><div className="capability-grid enterprise-caps">{enterpriseCapabilities.map(([n,t,d]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="risk-board section">
      <div className="section-head"><span>MESSAGE STRESS TEST</span><h2>Not a “safe / unsafe” button.</h2><p>The useful question is where the downside comes from, how severe it is, and which decisions must stay with humans.</p></div>
      <div className="risk-matrix"><div className="risk-axis y">CONSEQUENCE ↑</div><div className="risk-axis x">AMBIGUITY →</div><div className="risk-dot d1"><b>CRINGE</b><span>low consequence</span></div><div className="risk-dot d2"><b>CONTEXT COLLAPSE</b><span>medium ambiguity</span></div><div className="risk-dot d3"><b>CLAIM / POLICY</b><span>human review</span></div><div className="risk-dot d4"><b>REPUTATION</b><span>escalate</span></div></div>
    </section>

    <section className="section audience-section"><div className="section-head"><span>PRIVATE USE CASES</span><h2>Built for people who cannot ship a joke and hope for the best.</h2></div><div className="segment-grid enterprise-segments">{enterpriseSegments.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="section deployment-section"><div className="section-head"><span>DEPLOYMENT MODEL</span><h2>Private by design.</h2></div><div className="method-columns"><div><b>01</b><h3>Communication baseline</h3><p>Map voice, escalation rules, forbidden zones, claim standards, audiences, and approval ownership.</p></div><div><b>02</b><h3>Private evaluation workflow</h3><p>Run rewrites and red-team passes inside a defined communication boundary rather than a public creator workspace.</p></div><div><b>03</b><h3>Human-controlled memory</h3><p>Preserve accepted patterns and rejected failure modes without pretending software replaces counsel, HR, communications leadership, or crisis professionals.</p></div></div>
      <p className="disclosure">Enterprise Snark Logic is presented as a product/deployment concept and private-pilot offering. Risk outputs are decision support, not legal, compliance, HR, securities, regulatory, or crisis-management advice.</p>
    </section>

    <section className="page-cta enterprise-panel"><span>PRIVATE ENGAGEMENTS</span><h2>Stress-test the message before the screenshot.</h2><p>Custom pilots can focus on one narrow communication workflow before any broader deployment is considered.</p><Link href="/contact">Start an enterprise conversation →</Link></section>
  </>
}
