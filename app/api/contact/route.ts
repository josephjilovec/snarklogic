import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const name = String(body.name || '').trim()
  const email = String(body.email || '').trim()
  const company = String(body.company || '').trim()
  const problem = String(body.problem || '').trim()
  if (!name || !email || !company || !problem || !email.includes('@')) {
    return NextResponse.json({ message: 'Please complete the required fields with a valid email.' }, { status: 400 })
  }
  // Production integration point: persist to a database/CRM and/or send email here.
  return NextResponse.json({ message: 'Brief received by the demo route. Connect an email or CRM provider to make delivery persistent.' })
}
