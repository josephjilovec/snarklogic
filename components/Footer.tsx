import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <b>SNARK / LOGIC</b>
        <p>Comedy systems for feeds and boardrooms.</p>
      </div>
      <div className="footer-grid">
        <div><span>PUBLIC</span><Link href="/creators">Creator R&D</Link><Link href="/lab">Product lab</Link></div>
        <div><span>PRIVATE</span><Link href="/enterprise">Enterprise OS</Link><Link href="/contact">Private inquiry</Link></div>
        <div><span>COMPANY</span><Link href="/engine">Shared engine</Link><Link href="/about">About</Link></div>
      </div>
      <p className="footer-fine">© {new Date().getFullYear()} Snark Logic. Product and company architecture presented as a working prototype. Enterprise risk outputs are decision-support concepts, not legal, HR, compliance, or crisis-management advice.</p>
    </footer>
  )
}
