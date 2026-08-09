'use client'

import { useMemo, useState } from 'react'

type Mode = 'creator' | 'enterprise'

const creatorHooks = [
  'The category keeps saying “authentic.” That is usually how you know nobody talks like this.',
  'You have three seconds to earn the fourth. Start with the thing the audience already suspects.',
  'Open on the expectation. Break it before the viewer can finish the sentence for you.',
  'Specific beats loud: name the tiny behavior everyone recognizes and nobody advertises.',
]

const enterpriseLines = [
  'We are changing the process. Here is what changes, what does not, and what we still do not know.',
  'This update is important, but it does not need to sound like a hostage note written by committee.',
  'Say the difficult part plainly first. The human tone can come after the factual spine is secure.',
  'If a sentence needs “we remain deeply committed” to sound sincere, the sentence probably needs another pass.',
]

export function SignalWorkbench({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<Mode>('creator')
  const [tolerance, setTolerance] = useState(58)
  const [context, setContext] = useState('A product launch that sounds exactly like every other launch')
  const [seed, setSeed] = useState(0)

  const output = useMemo(() => {
    const source = mode === 'creator' ? creatorHooks : enterpriseLines
    const line = source[seed % source.length]
    const surprise = Math.min(96, Math.round(42 + tolerance * .48 + (seed % 3) * 4))
    const clarity = Math.max(52, Math.round(94 - tolerance * .24 + (seed % 2) * 3))
    const risk = Math.min(91, Math.round(16 + tolerance * .62 + (mode === 'enterprise' ? 4 : 0)))
    return { line, surprise, clarity, risk }
  }, [mode, tolerance, seed])

  return (
    <div className={compact ? 'workbench compact' : 'workbench'}>
      <div className="workbench-head">
        <div><span>LIVE PROTOTYPE</span><b>Signal Workbench</b></div>
        <div className="mode-toggle" role="group" aria-label="Workbench mode">
          <button className={mode === 'creator' ? 'active creator' : ''} onClick={() => setMode('creator')}>Creator</button>
          <button className={mode === 'enterprise' ? 'active enterprise' : ''} onClick={() => setMode('enterprise')}>Enterprise</button>
        </div>
      </div>
      <div className="workbench-body">
        <div className="workbench-controls">
          <label>Context<textarea value={context} onChange={e => setContext(e.target.value)} rows={4} /></label>
          <label>Humor / edge tolerance <b>{tolerance}</b><input type="range" min="10" max="90" value={tolerance} onChange={e => setTolerance(Number(e.target.value))} /></label>
          <button className="button dark" onClick={() => setSeed(v => v + 1)}>Run another pass ↻</button>
          <p>This is a deterministic interface demo. It shows the evaluation logic and product behavior without pretending a model or customer dataset is connected.</p>
        </div>
        <div className={mode === 'creator' ? 'workbench-output creator-output' : 'workbench-output enterprise-output'}>
          <span>{mode === 'creator' ? 'HOOK / NARRATIVE PASS' : 'TONE / RISK PASS'}</span>
          <small>INPUT: {context || 'Untitled context'}</small>
          <blockquote>{output.line}</blockquote>
          <div className="score-row"><div><b>{output.surprise}</b><span>Surprise</span></div><div><b>{output.clarity}</b><span>Clarity</span></div><div><b>{output.risk}</b><span>Edge / risk</span></div></div>
          <p>{mode === 'creator' ? 'Next challenge: can the turn arrive sooner without flattening the voice?' : 'Next challenge: preserve the factual spine, then ask whether the wit creates an avoidable hostile reading.'}</p>
        </div>
      </div>
    </div>
  )
}
