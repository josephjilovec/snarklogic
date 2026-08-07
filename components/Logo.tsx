import Link from 'next/link'

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="SnarkLogic home">
      <span>SNARK</span><i>//</i><span>LOGIC</span>
    </Link>
  )
}
