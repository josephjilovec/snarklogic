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
    <div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
</footer>
  )
}
