'use client'

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (sending) return

    const form = e.currentTarget
    setSending(true)
    setSuccess(false)
    setStatus('Sending…')

    try {
      const fd = new FormData(form)
      const body = Object.fromEntries(fd.entries())

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json().catch(() => ({
        message: 'Unexpected server response.',
      }))

      if (!res.ok) {
        throw new Error(data.message || 'Could not send your brief.')
      }

      setStatus(data.message || 'Brief sent.')
      setSuccess(true)
      form.reset()
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Could not send your brief. Please try again.'
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="two">
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>

        <label>
          Work email
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <label>
        What are we selling?
        <input
          name="company"
          placeholder="Company / product"
          required
          autoComplete="organization"
        />
      </label>

      <label>
        Where does the current advertising feel painfully normal?
        <textarea name="problem" rows={5} required />
      </label>

      <label>
        Approx. monthly paid media
        <select name="spend" defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          <option>&lt; $25k</option>
          <option>$25k–$100k</option>
          <option>$100k–$500k</option>
          <option>$500k+</option>
        </select>
      </label>

      <button className="button solid" type="submit" disabled={sending}>
        {sending ? 'SENDING…' : 'SUBMIT BRIEF →'}
      </button>

      <p
        className="form-status"
        aria-live="polite"
        data-success={success ? 'true' : 'false'}
      >
        {status}
      </p>
    </form>
  )
}
