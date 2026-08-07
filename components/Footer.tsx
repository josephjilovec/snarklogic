import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div><Logo /><p>Comedy engineered with taste, controls, and feedback.</p></div>
      <div className="footer-links">
        <Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/investors">Investors</Link>
      </div>
      <p className="fine">© {new Date().getFullYear()} SnarkLogic. Prototype product architecture. Performance examples are illustrative, not guarantees.</p>
    </footer>
  )
}
