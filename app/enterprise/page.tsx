import type { Metadata } from 'next'
import Link from 'next/link'
import { bpiDimensions, enterpriseCapabilities, enterpriseSegments, enterpriseWorkflow } from '@/lib/data'

export const metadata: Metadata = { title: 'Enterprise Semantic Risk Firewall | Snark Logic', description: 'Adversarial tone, subtext, satire, context-collapse, and autonomous-agent communications governance.' }

export default function EnterprisePage() {
  return <>
    <section className="page-hero-v2 enterprise-hero">
      <span>PRIVATE LAYER / ENTERPRISE SEMANTIC RISK</span>
      <h1>The internet reads the subtext.<br/><strong>Your firewall should too.</strong></h1>
      <p>Snark Logic is a pre-publication semantic risk layer for corporate communications and autonomous agents. It looks beyond forbidden words and literal policy checks to examine tone, irony, rhetorical framing, hostile interpretation, context collapse, and the human meaning hiding between the lines.</p>
      <div className="hero-actions"><Link className="button enterprise-button" href="/contact">Discuss a private pilot →</Link><a className="button dark-outline" href="#bpi">See the Backlash Index ↓</a></div>
    </section>

    <section className="section split-thesis">
      <div className="section-kicker">THE MISSING LAYER</div>
      <div><h2>Literal controls protect data.<br/>Semantic controls protect meaning.</h2></div>
      <div><p>Traditional security and governance systems are essential for access, data handling, privacy, policy, and known prohibited content. They are not designed to answer a different class of question: could this perfectly permissible sentence sound smug, callous, sarcastic, absurd, evasive, culturally wrong, or devastating when somebody screenshots only twelve words of it?</p><p>That is the layer Snark Logic is designed to evaluate.</p></div>
    </section>

    <section className="section"><div className="section-head"><span>THE PLATFORM</span><h2>From draft review to machine-speed communications governance.</h2><p>The enterprise product combines adversarial simulation, semantic scoring, policy routing, and controlled organizational memory.</p></div><div className="capability-grid enterprise-caps">{enterpriseCapabilities.map(([n,t,d]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="risk-board section" id="bpi">
      <div className="section-head"><span>BACKLASH PROBABILITY INDEX / BPI</span><h2>Not one magic number. A map of where the sentence can break.</h2><p>BPI is conceived as an explainable evaluation surface. A composite severity band can summarize the result, but reviewers still see the dimensions, passages, uncertainty, and reasons underneath it.</p></div>
      <div className="risk-matrix"><div className="risk-axis y">CONSEQUENCE ↑</div><div className="risk-axis x">AMBIGUITY →</div><div className="risk-dot d1"><b>SAFE</b><span>low semantic friction</span></div><div className="risk-dot d2"><b>WATCH</b><span>plausible hostile read</span></div><div className="risk-dot d3"><b>REVIEW</b><span>human decision</span></div><div className="risk-dot d4"><b>VIRAL LIABILITY</b><span>rewrite / escalate</span></div></div>
      <div className="segment-grid enterprise-segments">{bpiDimensions.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="section engine-section">
      <div className="section-head"><span>ADVERSARIAL WRITERS’ ROOM</span><h2>Red-team the message before the internet does.</h2><p>Instead of asking one model whether copy is “good,” specialized perspectives try to break it: the cynical journalist, hostile screenshotter, skeptical employee, irritated customer, competitor, cultural-context reviewer, and policy gate. Their job is not to manufacture controversy. Their job is to surface plausible failure modes while there is still time to edit.</p></div>
      <div className="method-columns"><div><b>01</b><h3>Hostile interpretation</h3><p>What is the least charitable reasonable reading of the sentence?</p></div><div><b>02</b><h3>Context collapse</h3><p>What happens when one line escapes the memo and becomes the entire story?</p></div><div><b>03</b><h3>Rhetorical contradiction</h3><p>Does the wording accidentally undermine the claim, apology, policy, or brand position around it?</p></div></div>
    </section>

    <section className="section loop-section">
      <div className="section-head"><span>SEMANTIC FIREWALL PIPELINE</span><h2>Intercept. Interpret. Attack. Score. Route. Remember.</h2></div>
      <div className="loop-list">{enterpriseWorkflow.map(([n,t,d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><i>↘</i></div>)}</div>
    </section>

    <section className="section audience-section"><div className="section-head"><span>ENTERPRISE SURFACES</span><h2>One semantic layer. Multiple communication systems.</h2></div><div className="segment-grid enterprise-segments">{enterpriseSegments.map(([t,d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="section deployment-section"><div className="section-head"><span>AUTONOMOUS AGENT GUARDRAILS</span><h2>Put policy between the model and the send button.</h2><p>Customer-facing agents create a new problem: communication can be generated at machine speed, in contexts no static campaign review ever saw. The Comms Layer is designed to evaluate a proposed response before delivery and route exceptions according to organization-defined thresholds.</p></div><div className="method-columns"><div><b>PASS</b><h3>Within bounds</h3><p>Language stays inside approved tone, claim, context, and escalation policy.</p></div><div><b>REVISE</b><h3>Semantic friction</h3><p>The system identifies the risky passage and requests a constrained rewrite before delivery.</p></div><div><b>ESCALATE</b><h3>Human ownership</h3><p>Consequential or uncertain cases go to the designated human reviewer rather than being silently decided by automation.</p></div></div></section>

    <section className="section deployment-section"><div className="section-head"><span>CROSS-CULTURAL TONE MAPPING</span><h2>Meaning does not cross borders unchanged.</h2></div><div className="method-columns"><div><b>01</b><h3>Local interpretation</h3><p>Test directness, hierarchy, apology language, humor, idiom, and emotional register against the intended market.</p></div><div><b>02</b><h3>Translation stress test</h3><p>Look for phrases whose literal translation preserves words while losing status, warmth, seriousness, or intent.</p></div><div><b>03</b><h3>Local human gate</h3><p>Use cultural modeling as decision support—not as a substitute for native-language reviewers and local expertise.</p></div></div></section>

    <section className="section deployment-section"><div className="section-head"><span>DEPLOYMENT MODEL</span><h2>Private, explainable, approval-based.</h2></div><div className="method-columns"><div><b>01</b><h3>Communication baseline</h3><p>Map voice, escalation rules, claims, audiences, markets, forbidden zones, and approval ownership.</p></div><div><b>02</b><h3>Evaluation layer</h3><p>Deploy as a review workspace, workflow integration, or pre-publication API around a defined communication surface.</p></div><div><b>03</b><h3>Controlled memory</h3><p>Preserve accepted patterns and rejected failure modes under organization-defined retention and access controls.</p></div></div>
      <p className="disclosure">Snark Logic is an enterprise product/deployment concept and private-pilot offering. BPI and other semantic-risk outputs are decision support, not predictions of public behavior and not legal, compliance, HR, securities, regulatory, localization, or crisis-management advice. Human review remains the authority for consequential decisions.</p>
    </section>

    <section className="page-cta enterprise-panel"><span>PRIVATE PILOTS</span><h2>Stress-test the message<br/>before the screenshot.</h2><p>Start with one bounded workflow: public statements, executive communications, social publishing, customer-service agents, or another high-value outbound language surface.</p><Link href="/contact">Start an enterprise conversation →</Link></section>
  </>
}
