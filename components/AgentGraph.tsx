'use client'

import { useState } from 'react'
import { pods } from '@/lib/data'

export function AgentGraph() {
  const [active, setActive] = useState(pods[0].id)
  const pod = pods.find(p => p.id === active) || pods[0]
  return <div className="agent-graph">
    <div className="agent-ring" aria-label="Interactive agent pod selector">
      <div className="core"><small>SHARED</small><b>DECISION<br/>GRAPH</b><span>evidence ↔ dissent</span></div>
      {pods.map((p,i)=><button key={p.id} className={`node node-${i+1} ${active===p.id?'active':''}`} onClick={()=>setActive(p.id)}><span>{p.index}</span>{p.name}</button>)}
    </div>
    <div className="agent-detail">
      <span>{pod.metric}</span><h3>{pod.name}</h3><p>{pod.role}</p>
      {pod.agents.map(a=><div className="agent-row" key={a.name}><b>{a.name}</b><p>{a.detail}</p></div>)}
    </div>
  </div>
}
