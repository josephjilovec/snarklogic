import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const product = String(body.product || '').trim().slice(0, 500)
  const audience = String(body.audience || '').trim().slice(0, 300)
  if (!product || !audience) return NextResponse.json({ error: 'Product and audience are required.' }, { status: 400 })
  const lower = product.toLowerCase()
  let angle = 'The painfully specific problem nobody puts in the category ad'
  let hook = `You could keep doing ${product.slice(0,65).toLowerCase()} the old way. It builds character. Mostly the wrong kind.`
  if (lower.includes('subscription')) {
    angle = 'Financial admin as a tiny recurring horror movie'
    hook = 'That $11.99 charge has survived three relationships and two apartments. Maybe it is time.'
  } else if (lower.includes('coffee')) {
    angle = 'Your morning personality has a supply chain'
    hook = 'Technically you can talk to people before coffee. Legally, we cannot recommend it.'
  } else if (lower.includes('software') || lower.includes('app')) {
    angle = 'Tool-stack absurdity'
    hook = 'Your “simple workflow” has more tabs than a conspiracy documentary.'
  }
  return NextResponse.json({
    audience: `${audience}. Likely resistance: category sameness, exaggerated claims, and anything that sounds like a brand workshop wrote it.`,
    angle,
    hook,
    risk: 'Keep the joke aimed at the situation, not a protected class or vulnerable customer. Verify any savings/performance claim before publishing.',
    experiment: 'Test three opening mechanisms: deadpan confession, visual escalation, and specific pain-point callout. Hold the offer constant and compare downstream conversion, not just watch time.'
  })
}
