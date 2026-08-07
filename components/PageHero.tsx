import Link from 'next/link'

export function PageHero({kicker,title,copy,cta}: {kicker:string;title:string;copy:string;cta?:string}) {
  return <section className="page-hero"><span>{kicker}</span><h1>{title}</h1><p>{copy}</p>{cta && <Link className="button solid" href="/contact">{cta} →</Link>}</section>
}
