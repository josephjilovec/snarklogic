'use client'
import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [status,setStatus] = useState('')
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus('Sending…')
    const fd = new FormData(e.currentTarget)
    const body = Object.fromEntries(fd.entries())
    const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
    const data = await res.json(); setStatus(data.message)
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="two"><label>Name<input name="name" required /></label><label>Work email<input name="email" type="email" required /></label></div>
    <label>What are we selling?<input name="company" placeholder="Company / product" required /></label>
    <label>Where does the current advertising feel painfully normal?<textarea name="problem" rows={5} required /></label>
    <label>Approx. monthly paid media<select name="spend" defaultValue=""><option value="" disabled>Select a range</option><option>&lt; $25k</option><option>$25k–$100k</option><option>$100k–$500k</option><option>$500k+</option></select></label>
    <button className="button solid">SUBMIT BRIEF →</button><p className="form-status" aria-live="polite">{status}</p>
  </form>
}
