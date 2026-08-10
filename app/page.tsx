import Link from 'next/link'
import { SignalWorkbench } from '@/components/SignalWorkbench'
import { businessModel, loop, pods } from '@/lib/data'

export default function Home() {
  return <>
    <section className="hero-v2">
      <div className="hero-meta"><span>SEMANTIC RISK / ADVERSARIAL COMMUNICATIONS / COMEDY R&D</span><span>ENTERPRISE + CREATOR</span></div>
      <div className="hero-title-wrap">
        <h1>A firewall for the part<br/><em>literal filters miss.</em></h1>
        <p>Snark Logic analyzes tone, irony, subtext, rhetorical framing, context collapse, and adversarial interpretation before corporate language or autonomous-agent responses reach the public. The same disagreement engine also powers a separate creator R&D surface for humor and narrative experimentation.</p>
        <div className="hero-actions"><Link className="button enterprise-button" href="/enterprise">Enter the semantic firewall →</Link><Link className="button creator-button" href="/creators">Explore creator R&D →</Link></div>
      </div>
      <div className="dual-band" aria-label="Snark Logic dual-engine model">
        <div className="enterprise-band"><span>01 / ENTERPRISE</span><b>SEMANTIC RISK FIREWALL</b><p>Subtext. Tone. Backlash. Agent guardrails. Cross-cultural interpretation.</p></div>
        <div className="creator-band"><span>02 / CREATOR</span><b>ALGORITHMIC WRITERS’ ROOM</b><p>Hooks. Timing. Humor tolerance. Narrative subversion. Retention.</p></div>
      </div>
    </section>

    <section className="section split-thesis">
      <div className="section-kicker">THE ENTERPRISE GAP</div>
      <div><h2>Security sees the payload.<br/>Snark Logic reads the room.</h2></div>
      <div><p>Data-loss prevention, access controls, PII detection, moderation, and compliance tooling solve important literal problems. But a sentence can pass every literal check and still become a reputational problem because of what it implies, how it sounds, or what happens when a hostile reader reframes it.</p><p>Snark Logic is designed for that semantic layer: the space between technically permissible language and language an organization should actually send.</p></div>
    </section>

    <section className="engine-pair">
      <article className="enterprise-panel">
        <span>PRIMARY PLATFORM / ENTERPRISE</span>
        <h2>Red-team the message before the internet does.</h2>
        <p>An adversarial tone-and-subtext firewall for corporate communications and autonomous agents, built to evaluate plausible hostile readings before publication.</p>
        <ul><li>Backlash Probability Index</li><li>Adversarial Writers’ Room</li><li>Tone & Satire Firewall</li><li>Autonomous Agent Guardrails</li><li>Cross-Cultural Tone Mapping</li><li>Semantic Firewall API</li></ul>
        <Link href="/enterprise">Explore Enterprise Semantic Risk →</Link>
      </article>
      <article className="creator-panel">
        <span>SEPARATE SURFACE / CREATOR R&D</span>
        <h2>The feed is the focus group.</h2>
        <p>A distinct creative workspace for digital creators, meme pages, content studios, and entertainment brands. It shares underlying disagreement architecture—not enterprise customer data or deployment boundaries.</p>
        <ul><li>High-velocity hook families</li><li>Timing and payoff analysis</li><li>Humor tolerance mapping</li><li>Narrative subversion</li><li>Retention-oriented creative notes</li></ul>
        <Link href="/creators">Explore Creator R&D →</Link>
      </article>
    </section>

    <section className="workbench-section"><SignalWorkbench /></section>

    <section className="section engine-section">
      <div className="section-head"><span>THE SHARED REASONING ENGINE</span><h2>Structured disagreement instead of one-model approval.</h2><p>Behavioral, cultural, creative, and risk perspectives challenge one another. Enterprise deployments change the objective, policy boundary, data handling, output, and escalation threshold.</p></div>
      <div className="pod-grid">{pods.map(p => <article key={p.index}><span>{p.index} / {p.signal}</span><h3>{p.name}</h3><p>{p.line}</p><div>{p.agents.map(a => <small key={a[0]}><b>{a[0]}</b>{a[1]}</small>)}</div></article>)}</div>
      <div className="section-link"><Link href="/engine">Open the engine architecture →</Link></div>
    </section>

    <section className="loop-section section"><div className="section-head"><span>THE DISAGREEMENT LOOP</span><h2>Generate. Challenge. Escalate. Remember.</h2></div><div className="loop-list">{loop.map(([n,t,d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><i>↘</i></div>)}</div></section>

    <section className="business-section section"><div className="section-head"><span>BUSINESS MODEL</span><h2>Enterprise infrastructure first. Creator experimentation separate.</h2><p>The surfaces can share core evaluation architecture while remaining commercially, operationally, and technically distinct.</p></div><div className="business-table">{businessModel.map(([lane,model,copy,status]) => <article key={lane}><span>{lane}</span><h3>{model}</h3><p>{copy}</p><b>{status}</b></article>)}</div></section>

    <section className="final-cta-v2"><span>THE SCREENSHOT IS THE NEW ATTACK SURFACE.</span><h2>Find the hostile reading<br/>before it finds the brand.</h2><div><Link className="button enterprise-button" href="/enterprise">Explore the enterprise platform →</Link><Link className="button dark-outline" href="/contact">Talk to Snark Logic →</Link></div></section>
  </>
}
