'use client'

import { useMemo, useState } from 'react'

const lines = [
  'A competent ad. It explains the product. Everyone survives.',
  'Your old workflow had 14 tabs. We brought a tiny fire extinguisher.',
  'Your “streamlined stack” needs a family tree. Ours needs a login.',
  'Congratulations on your 11-tool martech lasagna. We brought a forklift.'
]

export function SnarkDial() {
  const [level, setLevel] = useState(2)
  const label = useMemo(() => ['Polite','Dry','Sharp','Unsupervised-ish'][level], [level])
  return <div className="dial-card">
    <div className="dial-top"><span>LIVE BRAND CONTROL</span><b>{label}</b></div>
    <p className="sample-copy">“{lines[level]}”</p>
    <input aria-label="Snark intensity" type="range" min="0" max="3" step="1" value={level} onChange={e => setLevel(Number(e.target.value))}/>
    <div className="dial-scale"><span>POLITE</span><span>DRY</span><span>SHARP</span><span>CHAOS*</span></div>
    <small>*Still subject to brand and risk controls. We are not handing the intern a flamethrower.</small>
  </div>
}
