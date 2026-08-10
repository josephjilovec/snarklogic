import Link from 'next/link'
import { SignalWorkbench } from '@/components/SignalWorkbench'
import { businessModel, loop, pods } from '@/lib/data'

export default function Home() {
  return <>
    <section className="hero-v2">
      <div className="hero-meta"><span>DISAGREEMENT ENGINE / COMEDY R&D / COMMUNICATIONS RISK</span><span>PUBLIC + PRIVATE</span></div>
      <div className="hero-title-wrap">
        <h1>One disagreement engine.<br/><em>Two very different jobs.</em></h1>
        <p>Snark Logic is a structured disagreement system built to pressure-test language before it matters. On the public side, it helps creators develop sharper hooks, timing, humor, and narrative turns. On the private side, it helps organizations challenge tone, subtext, context, and reputational risk before communications or autonomous agents reach an audience.</p>
        <div className="hero-actions"><Link className="button creator-button" href="/creators">Enter the writers’ room →</Link><Link className="button enterprise-button" href="/enterprise">Explore enterprise risk →</Link></div>
      </div>
      <div className="dual-band" aria-label="Snark Logic dual-engine model">
        <div className="creator-band"><span>01 / PUBLIC</span><b>ALGORITHMIC WRITERS’ ROOM</b><p>Hooks. Timing. Humor tolerance. Narrative subversion. Retention.</p></div>
        <div className="enterprise-band"><span>02 / PRIVATE</span><b>SEMANTIC RISK & COMMUNICATIONS OS</b><p>Tone. Subtext. Backlash. Agent guardrails. Cross-cultural interpretation.</p></div>
      </div>
    </section>

    <section className="section split-thesis">
      <div className="section-kicker">THE OPERATING IDEA</div>
      <div><h2>Better output starts<br/>with better disagreement.</h2></div>
      <div><p>Most systems optimize for a single answer. Snark Logic is built around the opposite instinct: generate multiple interpretations, let specialized perspectives challenge one another, expose weak reasoning and weak phrasing, then route the result through the right human threshold.</p><p>The same architecture can improve a joke, stress-test a public statement, or challenge an autonomous agent response. The objective changes. The disagreement engine does not.</p></div>
    </section>

    <section className="engine-pair">
      <article className="creator-panel">
        <span>PUBLIC ENGINE / CREATOR R&D</span>
        <h2>Comedy systems for feeds.</h2>
        <p>An algorithmic writers’ room for creators, meme pages, content studios, and entertainment brands that need more premise velocity without flattening voice into generic output.</p>
        <ul><li>High-velocity hook families</li><li>Timing and payoff analysis</li><li>Humor tolerance mapping</li><li>Narrative subversion</li><li>Retention-oriented creative notes</li></ul>
        <Link href="/creators">Explore Creator R&D →</Link>
      </article>
      <article className="enterprise-panel">
        <span>PRIVATE ENGINE / ENTERPRISE</span>
        <h2>Disagreement systems for boardrooms.</h2>
        <p>A private communications-risk layer for teams that need language to sound human without letting ambiguity, irony, rhetorical framing, or autonomous-agent drift become unmanaged reputation risk.</p>
        <ul><li>Backlash Probability Index</li><li>Adversarial Writers’ Room</li><li>Tone & Satire Firewall</li><li>Autonomous Agent Guardrails</li><li>Cross-Cultural Tone Mapping</li><li>Semantic evaluation API</li></ul>
        <Link href="/enterprise">Explore Enterprise Communications Risk →</Link>
      </article>
    </section>

    <section className="workbench-section"><SignalWorkbench /></section>

    <section className="section engine-section">
      <div className="section-head"><span>THE DISAGREEMENT ENGINE</span><h2>Structured opposition is the shared infrastructure.</h2><p>Behavioral, cultural, creative, and risk perspectives are designed to disagree with one another for explicit reasons. What changes between creator and enterprise use is the objective, data boundary, output, and escalation threshold.</p></div>
      <div className="pod-grid">{pods.map(p => <article key={p.index}><span>{p.index} / {p.signal}</span><h3>{p.name}</h3><p>{p.line}</p><div>{p.agents.map(a => <small key={a[0]}><b>{a[0]}</b>{a[1]}</small>)}</div></article>)}</div>
      <div className="section-link"><Link href="/engine">Open the engine architecture →</Link></div>
    </section>

    <section className="loop-section section"><div className="section-head"><span>THE DISAGREEMENT LOOP</span><h2>Frame. Generate. Challenge. Escalate. Learn.</h2></div><div className="loop-list">{loop.map(([n,t,d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><i>↘</i></div>)}</div></section>

    <section className="business-section section"><div className="section-head"><span>ONE CORE / TWO MARKETS</span><h2>Shared intelligence. Separate products.</h2><p>The public and private surfaces can share core evaluation architecture while remaining distinct in customer data, deployment boundaries, workflow, and go-to-market motion.</p></div><div className="business-table">{businessModel.map(([lane,model,copy,status]) => <article key={lane}><span>{lane}</span><h3>{model}</h3><p>{copy}</p><b>{status}</b></article>)}</div></section>

    <section className="final-cta-v2"><span>SNARK WITHOUT LOGIC IS NOISE.</span><h2>The useful part<br/>is the disagreement.</h2><div><Link className="button creator-button" href="/creators">Explore the public engine →</Link><Link className="button enterprise-button" href="/enterprise">Explore the private engine →</Link></div></section>
  </>
}
