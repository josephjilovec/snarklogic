'use client'

import { FormEvent, useState } from 'react'

type Result = { audience: string; angle: string; hook: string; risk: string; experiment: string }

export function BriefSimulator() {
  const [product,setProduct] = useState('A budgeting app that automatically finds forgotten subscriptions')
  const [audience,setAudience] = useState('busy professionals who hate financial admin')
  const [loading,setLoading] = useState(false)
  const [result,setResult] = useState<Result | null>(null)
  async function submit(e: FormEvent) {
    e.preventDefault(); setLoading(true)
    try {
      const res = await fetch('/api/brief',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({product,audience})})
      setResult(await res.json())
    } finally { setLoading(false) }
  }
  return <div className="simulator">
    <form onSubmit={submit}>
      <label>PRODUCT / OFFER<textarea value={product} onChange={e=>setProduct(e.target.value)} /></label>
      <label>AUDIENCE<textarea value={audience} onChange={e=>setAudience(e.target.value)} /></label>
      <button className="button solid" disabled={loading}>{loading?'ORCHESTRATING…':'RUN MINI ORCHESTRATOR →'}</button>
    </form>
    <div className="sim-output">
      {result ? <>
        <span>SIMULATED OUTPUT</span><h3>{result.angle}</h3><blockquote>“{result.hook}”</blockquote>
        <dl><div><dt>Audience read</dt><dd>{result.audience}</dd></div><div><dt>Red-team note</dt><dd>{result.risk}</dd></div><div><dt>Experiment</dt><dd>{result.experiment}</dd></div></dl>
      </> : <div className="empty-output"><span>NO BRIEF RUN YET</span><p>The server route will return a deterministic demo analysis. Swap it later for your preferred model provider or internal orchestration layer.</p></div>}
    </div>
  </div>
}
