'use client'

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return
    const form = event.currentTarget
    setSending(true)
    setStatus('Sending…')
    try {
      const data = new FormData(form)
      data.set('_subject', `New Snark Logic inquiry — ${String(data.get('lane') || 'General')}`)
      data.set('_template', 'table')
      data.set('_captcha', 'false')
      const response = await fetch('https://formsubmit.co/ajax/realjjemail@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const payload = await response.json().catch(() => ({}))
      if (!response.ok || payload.success === false) throw new Error('Could not send the inquiry.')
      form.reset()
      setStatus('Sent. Your inquiry is on its way.')
    } catch {
      setStatus('Could not send right now. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="two">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>Which side are you interested in?
        <select name="lane" defaultValue="Creator / MediaTech">
          <option>Creator / MediaTech</option>
          <option>Enterprise communications</option>
          <option>Studio / entertainment brand</option>
          <option>Partnership / investment</option>
        </select>
      </label>
      <label>Company, channel, studio, or project<input name="organization" autoComplete="organization" placeholder="Optional" /></label>
      <label>What are you trying to make sharper?<textarea name="message" rows={7} required placeholder="Content workflow, hook generation, internal comms, public statement stress-test, private pilot…" /></label>
      <button className="button creator-button" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send inquiry →'}</button>
      <p className="form-status" aria-live="polite">{status}</p>
    </form>
  )
}
