'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  ['Creators', '/creators'],
  ['Enterprise', '/enterprise'],
  ['Engine', '/engine'],
  ['Lab', '/lab'],
  ['About', '/about'],
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-nav">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="Snark Logic home">
        <span>SNARK</span><i>/</i><span>LOGIC</span>
      </Link>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? 'CLOSE' : 'MENU'}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Work with us ↗</Link>
      </nav>
    </header>
  )
}
