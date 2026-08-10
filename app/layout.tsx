import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://snarklogic.josephjilovec.com'),
  title: { default: 'Snark Logic — Comedy systems for feeds and boardrooms.', template: '%s — Snark Logic' },
  description: 'A two-engine MediaTech company: a public algorithmic writers’ room for creators and a private enterprise communications firewall for tone, satire, cringe, backlash, and brand-risk testing.',
  openGraph: {
    title: 'Snark Logic',
    description: 'Comedy systems for feeds and boardrooms.',
    type: 'website',
    url: 'https://snarklogic.josephjilovec.com',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="grain" aria-hidden="true"/><Nav/><main>{children}</main><Footer/>
<div className="jj-venture-nav" style={{margin:'0 auto 1.5rem',padding:'1rem 0',textAlign:'center',fontSize:'.78rem',letterSpacing:'.04em',opacity:.78}}><a href="https://www.josephjilovec.com/ventures" style={{color:'inherit',textDecoration:'none'}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{margin:'0 .6rem'}}>·</span><a href="https://www.josephjilovec.com/ventures" style={{color:'inherit',textDecoration:'none',fontWeight:600}}>Explore the Venture Studio →</a></div>
</body></html>
}
