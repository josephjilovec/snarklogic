import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

function clean(value: unknown, max = 2000) {
  return String(value ?? '').trim().slice(0, max)
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}))

    const name = clean(body.name, 120)
    const email = clean(body.email, 254)
    const company = clean(body.company, 200)
    const problem = clean(body.problem, 4000)
    const spend = clean(body.spend, 100) || 'Not provided'

    if (!name || !email || !company || !problem || !isEmail(email)) {
      return NextResponse.json(
        { message: 'Please complete the required fields with a valid email address.' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.BRIEF_TO_EMAIL
    const fromEmail =
      process.env.BRIEF_FROM_EMAIL || 'SnarkLogic Briefs <onboarding@resend.dev>'

    if (!resendApiKey || !toEmail) {
      console.error('Missing RESEND_API_KEY or BRIEF_TO_EMAIL')
      return NextResponse.json(
        { message: 'Email delivery is not configured yet. Please try again later.' },
        { status: 500 }
      )
    }

    const subject = `New SnarkLogic brief — ${company}`

    const text = [
      'NEW SNARKLOGIC BRIEF',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Product: ${company}`,
      `Monthly Paid Media: ${spend}`,
      '',
      'Where the current advertising feels painfully normal:',
      problem,
      '',
      `Submitted: ${new Date().toISOString()}`,
    ].join('\n')

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        text,
      }),
    })

    const resendData = await resendResponse.json().catch(() => ({}))

    if (!resendResponse.ok) {
      console.error('Resend error:', resendData)
      return NextResponse.json(
        { message: 'Your brief could not be emailed. Please try again.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      message: 'Brief sent. We received your submission.',
      id: resendData?.id ?? null,
    })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json(
      { message: 'Something went wrong while sending your brief.' },
      { status: 500 }
    )
  }
}
