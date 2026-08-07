'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Logo } from './Logo'

const links = [
  ['Platform','/platform'], ['Lab','/lab'], ['Agents','/agents'], ['Studio','/studio'], ['Marketplace','/marketplace'], ['Council','/council'], ['Investors','/investors']
]

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-nav">
      <Logo />
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle navigation">{open ? 'CLOSE' : 'MENU'}</button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {links.map(([label,href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a brief ↗</Link>
      </nav>
    </header>
  )
}
