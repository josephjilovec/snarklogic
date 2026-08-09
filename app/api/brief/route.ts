import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const mode = body.mode === 'enterprise' ? 'enterprise' : 'creator'
  const context = String(body.context || '').trim().slice(0, 1200)
  const tolerance = Math.max(0, Math.min(100, Number(body.tolerance) || 50))
  if (!context) return NextResponse.json({ error: 'Context is required.' }, { status: 400 })

  if (mode === 'enterprise') {
    return NextResponse.json({
      mode,
      rewrite: 'Lead with the concrete change, remove the ceremonial language, and add warmth only after the factual spine is clear.',
      cringe: tolerance > 65 ? 'Elevated: self-aware phrasing may read as performative if the underlying issue is serious.' : 'Moderate: remove committee language and fake intimacy.',
      backlash: 'Check hostile readings, screenshot context, audience asymmetry, and whether the joke makes light of the people affected.',
      escalation: 'Human review required for legal, HR, regulated, crisis, or material public claims.',
    })
  }

  return NextResponse.json({
    mode,
    hook: 'Open with the specific behavior the audience already recognizes, then break the expected category sentence before it finishes.',
    timing: tolerance > 65 ? 'Reveal the turn early; the concept is edgy enough that clarity must arrive before escalation.' : 'You have room for a slightly longer setup, but the premise still needs to land inside the opening beat.',
    tolerance: `Current edge setting: ${tolerance}/100. Treat this as a creative constraint, not a safety score.`,
    challenge: 'Can the hook become more specific without becoming louder? Can the payoff arrive sooner without making the premise obvious?',
  })
}
