import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://snarklogic.com'),
  title: { default: 'SnarkLogic — Comedy, with a quant desk behind it.', template: '%s — SnarkLogic' },
  description: 'A comedic advertising operating system combining creative direction, behavioral intelligence, risk controls, talent infrastructure, and performance feedback.',
  openGraph: { title: 'SnarkLogic', description: 'Make them laugh. Make the numbers move.', type: 'website', url: 'https://snarklogic.com' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="noise" aria-hidden="true"/><Nav/><main>{children}</main><Footer/></body></html>
}
