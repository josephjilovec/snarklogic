'use client'

import { useState } from 'react'

const tasks = [
  ['Behavioral read','Audience resistance map','READY'],
  ['Creative swarm','12 angle families / 48 hooks','READY'],
  ['Rights scan','Talent + source lineage','2 FLAGS'],
  ['Red team','Policy / reputational challenge','READY'],
  ['Media thesis','4-cell experiment matrix','DRAFT'],
]
const angles = [
  {name:'The Subscription Poltergeist',mechanism:'Absurd escalation',score:91,risk:'LOW'},
  {name:'Financial Archaeology',mechanism:'Specificity + confession',score:86,risk:'LOW'},
  {name:'Your Bank Statement Knows Too Much',mechanism:'Personification',score:83,risk:'MED'},
  {name:'Cancel Culture, But Useful',mechanism:'Cultural wordplay',score:71,risk:'MED'},
]

export function CampaignConsole(){
  const [selected,setSelected]=useState(0)
  const [mode,setMode]=useState<'angles'|'agents'|'experiment'>('angles')
  return <div className="console-shell">
    <aside className="console-sidebar">
      <div className="console-brand">SL//OPS <span>DEMO</span></div>
      <small>CAMPAIGN</small><h3>Ghost Charges</h3><p>Subscription cleanup app</p>
      <nav>{['angles','agents','experiment'].map(m=><button key={m} onClick={()=>setMode(m as typeof mode)} className={mode===m?'active':''}>{m.toUpperCase()}</button>)}</nav>
      <div className="console-status"><i/>SYSTEM HEALTHY<br/><span>Human approval required: 2</span></div>
    </aside>
    <div className="console-main">
      <header><div><span>WORKSPACE / CAMPAIGN-024</span><h2>{mode==='angles'?'Angle Portfolio':mode==='agents'?'Agent Run':'Experiment Matrix'}</h2></div><button>EXPORT BRIEF ↗</button></header>
      {mode==='angles' && <div className="angle-workspace"><div className="angle-table">{angles.map((a,i)=><button key={a.name} onClick={()=>setSelected(i)} className={selected===i?'selected':''}><span>{String(i+1).padStart(2,'0')}</span><b>{a.name}</b><em>{a.mechanism}</em><strong>{a.score}</strong></button>)}</div><div className="angle-inspector"><span>SELECTED ANGLE</span><h3>{angles[selected].name}</h3><div className="score-ring">{angles[selected].score}<small>/100</small></div><dl><div><dt>Mechanism</dt><dd>{angles[selected].mechanism}</dd></div><div><dt>Risk</dt><dd>{angles[selected].risk}</dd></div><div><dt>Working hook</dt><dd>“That $11.99 charge has survived three relationships and two apartments. Maybe it is time.”</dd></div></dl><button className="button solid">OPEN SCRIPT BOARD →</button></div></div>}
      {mode==='agents' && <div className="task-board">{tasks.map(([a,b,c],i)=><div key={a}><span>0{i+1}</span><div><b>{a}</b><p>{b}</p></div><strong>{c}</strong></div>)}</div>}
      {mode==='experiment' && <div className="experiment-board"><div><span>A</span><b>Deadpan confession</b><p>Creator-led / 15s / cold audience</p><strong>$5K TEST</strong></div><div><span>B</span><b>Visual escalation</b><p>Hybrid generated / 20s / cold audience</p><strong>$5K TEST</strong></div><div><span>C</span><b>Specific pain callout</b><p>UGC / 15s / retargeting</p><strong>$3K TEST</strong></div><div className="hold"><span>H</span><b>Control creative</b><p>Current best performer</p><strong>HOLDOUT</strong></div></div>}
    </div>
  </div>
}
