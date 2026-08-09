import Link from 'next/link'
import { SignalWorkbench } from '@/components/SignalWorkbench'
import { businessModel, loop, pods } from '@/lib/data'

export default function Home() {
  return <>
    <section className="hero-v2">
      <div className="hero-meta"><span>MEDIATEK / COMEDY R&D / BRAND DEFENSE</span><span>PUBLIC + PRIVATE</span></div>
      <div className="hero-title-wrap">
        <h1>Comedy systems for <em>feeds</em> and <strong>boardrooms.</strong></h1>
        <p>Snark Logic is one disagreement engine with two very different jobs: help creators build harder-to-skip digital content, and help companies make human communication without turning tone experiments into a PR incident.</p>
        <div className="hero-actions"><Link className="button creator-button" href="/creators">Enter the writers’ room →</Link><Link className="button enterprise-button" href="/enterprise">See the enterprise firewall →</Link></div>
      </div>
      <div className="dual-band" aria-label="Snark Logic dual-engine model">
        <div className="creator-band"><span>01 / PUBLIC</span><b>ALGORITHMIC WRITERS’ ROOM</b><p>Hooks. Timing. Humor tolerance. Narrative subversion. Retention.</p></div>
        <div className="enterprise-band"><span>02 / PRIVATE</span><b>COMMUNICATIONS FIREWALL</b><p>Tone. Cringe. Backlash. Context. Brand-risk review.</p></div>
      </div>
    </section>

    <section className="workbench-section"><SignalWorkbench /></section>

    <section className="section split-thesis">
      <div className="section-kicker">THE PIVOT</div>
      <div><h2>Stop optimizing media.<br/>Start optimizing the idea.</h2></div>
      <div><p>Snark Logic is no longer an advertising spend or CPA optimization platform. The product is now focused on the thing upstream of distribution: what gets said, when the turn lands, how much edge an audience tolerates, and where a message becomes funny, stale, robotic, confusing, or risky.</p></div>
    </section>

    <section className="engine-pair">
      <article className="creator-panel">
        <span>PUBLIC ENGINE / MEDIA</span>
        <h2>The feed is the focus group.</h2>
        <p>An algorithmic writers’ room for digital creators, meme pages, content studios, and entertainment brands that need premise velocity without becoming generic.</p>
        <ul><li>High-velocity hook families</li><li>Timing and payoff analysis</li><li>Humor tolerance mapping</li><li>Narrative subversion</li><li>Retention-oriented creative notes</li></ul>
        <Link href="/creators">Explore Creator R&D →</Link>
      </article>
      <article className="enterprise-panel">
        <span>PRIVATE ENGINE / ENTERPRISE</span>
        <h2>Make it human. Keep the blast radius small.</h2>
        <p>A private corporate tone-and-satire firewall for teams that want less robotic communication without letting an “intern with a flamethrower” define the brand voice.</p>
        <ul><li>Tone translation</li><li>Cringe and backlash scans</li><li>Satire / wit tolerance controls</li><li>Context-collapse stress tests</li><li>Human approval gates</li></ul>
        <Link href="/enterprise">Explore Enterprise OS →</Link>
      </article>
    </section>

    <section className="section engine-section">
      <div className="section-head"><span>ONE ENGINE / TWO SURFACES</span><h2>Structured disagreement is the shared infrastructure.</h2><p>The public and private products use the same four-lens architecture. What changes is the objective, data boundary, output, and risk threshold.</p></div>
      <div className="pod-grid">{pods.map(p => <article key={p.index}><span>{p.index} / {p.signal}</span><h3>{p.name}</h3><p>{p.line}</p><div>{p.agents.map(a => <small key={a[0]}><b>{a[0]}</b>{a[1]}</small>)}</div></article>)}</div>
      <div className="section-link"><Link href="/engine">Open the engine architecture →</Link></div>
    </section>

    <section className="loop-section section">
      <div className="section-head"><span>THE DISAGREEMENT LOOP</span><h2>Generate. Challenge. Escalate. Remember.</h2></div>
      <div className="loop-list">{loop.map(([n,t,d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><i>↘</i></div>)}</div>
    </section>

    <section className="business-section section">
      <div className="section-head"><span>BUSINESS MODEL</span><h2>Self-serve creativity outside. Private risk infrastructure inside.</h2><p>The two sides share technology but do not need to share customer data, deployment boundaries, or go-to-market motion.</p></div>
      <div className="business-table">{businessModel.map(([lane,model,copy,status]) => <article key={lane}><span>{lane}</span><h3>{model}</h3><p>{copy}</p><b>{status}</b></article>)}</div>
    </section>

    <section className="final-cta-v2">
      <span>SNARK WITHOUT LOGIC IS A LIABILITY.</span>
      <h2>Logic without snark<br/>sounds like everybody else.</h2>
      <div><Link className="button creator-button" href="/lab">Try the product surface →</Link><Link className="button dark-outline" href="/contact">Talk to Snark Logic →</Link></div>
    </section>
  </>
}
