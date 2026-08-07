import Link from 'next/link'
import { MetricStrip } from '@/components/MetricStrip'
import { SectionHeading } from '@/components/SectionHeading'
import { SnarkDial } from '@/components/SnarkDial'
import { AgentGraph } from '@/components/AgentGraph'
import { BriefSimulator } from '@/components/BriefSimulator'
import { RoiLab } from '@/components/RoiLab'
import { workflow, roadmap } from '@/lib/data'

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span>AI ADVERTISING / COMEDIC INTELLIGENCE / PERFORMANCE SYSTEMS</span><b>EST. NOW</b></div>
        <h1>Make them <em>laugh.</em><br/>Make the numbers <strong>move.</strong></h1>
        <p className="hero-lede">SnarkLogic is the operating system for advertising that refuses to sound like advertising: comedic strategy, structured agent debate, production workflows, risk controls, and performance feedback in one loop.</p>
        <div className="hero-actions"><Link className="button solid" href="/platform">EXPLORE THE SYSTEM →</Link><Link className="button ghost" href="/contact">BRING A BRIEF</Link></div>
      </div>
      <div className="hero-side">
        <div className="ticker"><span>ATTENTION ≠ POLISH</span><span>TASTE + DATA + DISSENT</span><span>FUNNY, NOT RECKLESS</span></div>
        <SnarkDial />
      </div>
    </section>
    <MetricStrip />

    <section className="manifesto section-pad">
      <SectionHeading eyebrow="THE CONTRARIAN THESIS" title="Advertising got optimized until it became ignorable." copy="Generative tools made content abundant. That makes taste, differentiation, governance, and learning velocity more valuable—not less."/>
      <div className="manifesto-grid">
        <div className="huge-quote">“SAFE”<br/><span>IS NOT THE SAME AS</span><br/>MEMORABLE.</div>
        <div className="principles">
          <div><b>01</b><h3>Comedy is a strategy, not decoration.</h3><p>The joke must sharpen the product truth, not distract from it.</p></div>
          <div><b>02</b><h3>Agents should disagree on purpose.</h3><p>Creative, behavioral, finance, and risk perspectives are designed to challenge one another.</p></div>
          <div><b>03</b><h3>Performance closes the loop.</h3><p>Every angle becomes structured evidence for the next round of creative decisions.</p></div>
        </div>
      </div>
    </section>

    <section className="dark-section section-pad">
      <SectionHeading eyebrow="MULTI-AGENT OPERATING MODEL" title="Four pods. One shared decision graph." copy="The point is not to pretend software replaces experts. The point is to encode expert perspectives so important tradeoffs become explicit, reviewable, and reusable."/>
      <AgentGraph />
      <div className="center"><Link className="button light" href="/agents">MEET THE AGENT SYSTEM →</Link></div>
    </section>

    <section className="section-pad workflow-section">
      <SectionHeading eyebrow="THE CLOSED LOOP" title="From brief to learning system." copy="A campaign is not a folder of assets. It is a chain of decisions, rights, hypotheses, experiments, and observed outcomes."/>
      <div className="workflow">
        {workflow.map(([n,t,d]) => <div className="workflow-row" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><span>→</span></div>)}
      </div>
    </section>

    <section className="section-pad split-feature">
      <div><SectionHeading eyebrow="INTERACTIVE PROTOTYPE" title="Give the orchestrator something to chew on." copy="This demo calls a real Next.js server route. It is intentionally deterministic now, so the prototype works with zero API keys; the route is ready to be swapped for a production model/orchestration layer later."/></div>
      <BriefSimulator />
    </section>

    <section className="paper-grid section-pad">
      <SectionHeading eyebrow="CAPITAL ALLOCATION" title="Creative is a portfolio of hypotheses." copy="The finance pod frames angle-level testing in the language operators actually care about: spend, acquisition economics, marginal efficiency, and confidence."/>
      <RoiLab />
    </section>

    <section className="roadmap-section section-pad">
      <SectionHeading eyebrow="15-YEAR TRAJECTORY" title="Build the creative OS first. Earn the right to automate more."/>
      <div className="roadmap">
        {roadmap.map(([year,title,copy],i)=><article key={year}><span>{year}</span><i>{String(i+1).padStart(2,'0')}</i><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>

    <section className="final-cta">
      <span>SNARK WITHOUT LOGIC IS JUST A LIABILITY.</span>
      <h2>Logic without snark<br/>is an ad you already skipped.</h2>
      <Link className="button solid" href="/contact">START WITH A BRIEF →</Link>
    </section>
  </>
}
