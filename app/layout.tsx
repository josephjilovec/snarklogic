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
  return <html lang="en"><body><div className="grain" aria-hidden="true"/><Nav/><main>{children}</main><Footer/></body></html>
}
