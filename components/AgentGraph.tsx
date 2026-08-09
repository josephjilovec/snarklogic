'use client'

import { useState } from 'react'
import { pods } from '@/lib/data'

export function AgentGraph() {
  const [active, setActive] = useState(0)
  const pod = pods[active] ?? pods[0]

  return (
    <div className="pod-grid expanded">
      {pods.map((item, index) => (
        <article key={item.index}>
          <button className="button dark" type="button" onClick={() => setActive(index)} aria-pressed={active === index}>
            {item.index} / {item.name}
          </button>
          {active === index && <>
            <span>{pod.signal}</span>
            <h3>{pod.name}</h3>
            <p>{pod.line}</p>
            {pod.agents.map(([name, detail]) => <div className="agent-line" key={name}><b>{name}</b><p>{detail}</p></div>)}
          </>}
        </article>
      ))}
    </div>
  )
}
