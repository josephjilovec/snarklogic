'use client'

import { useMemo, useState } from 'react'

export function RoiLab() {
  const [spend, setSpend] = useState(50000)
  const [cpa, setCpa] = useState(80)
  const [improvement, setImprovement] = useState(18)
  const data = useMemo(() => {
    const baseline = spend / cpa
    const newCpa = cpa * (1 - improvement / 100)
    const projected = spend / newCpa
    return { baseline, newCpa, projected, lift: projected - baseline }
  }, [spend,cpa,improvement])
  return <div className="roi-lab">
    <div className="control-grid">
      <label>Monthly media spend<input type="number" value={spend} min="1000" onChange={e=>setSpend(Math.max(1000,Number(e.target.value)||0))}/></label>
      <label>Current CPA<input type="number" value={cpa} min="1" onChange={e=>setCpa(Math.max(1,Number(e.target.value)||0))}/></label>
      <label>Illustrative CPA improvement<input type="range" min="1" max="40" value={improvement} onChange={e=>setImprovement(Number(e.target.value))}/><b>{improvement}%</b></label>
    </div>
    <div className="result-grid">
      <div><span>Baseline acquisitions</span><b>{Math.round(data.baseline).toLocaleString()}</b></div>
      <div><span>Illustrative new CPA</span><b>${data.newCpa.toFixed(2)}</b></div>
      <div className="lime"><span>Illustrative added acquisitions</span><b>+{Math.round(data.lift).toLocaleString()}</b></div>
    </div>
    <p className="fine">Scenario model only. It demonstrates how the platform can frame unit economics; it does not predict or guarantee campaign performance.</p>
  </div>
}
