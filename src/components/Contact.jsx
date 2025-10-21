import React, { useState } from 'react'

/*
Contact component: simple contact form (client-side only) and direct contact links.
- The form doesn't send messages server-side. For production, hook it to an email service
  (Formspree, Netlify Forms, or a server endpoint). Comments explain options.
- Form includes basic accessibility attributes and client-side validation.
*/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Client-side validation example
    if (!form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please provide an email and a message.' })
      return
    }

    // For this static demo we won't actually send the message.
    // Production options:
    // - Use Formspree (https://formspree.io/) and set form action to their endpoint.
    // - Use Netlify/Vercel built-in forms if hosting there.
    // - Implement a server endpoint (Express, serverless function) that sends mail via SES/SendGrid.

    setStatus({ type: 'success', message: 'Message prepared. Replace this handler with a server endpoint to send messages.' })
  }

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-slate-700">Prefer email? <a className="underline" href="mailto:pruffi791@outlook.com">pruffi791@outlook.com</a></p>

      <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 p-2" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-200 p-2" required />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="mt-1 block w-full rounded-md border-gray-200 p-2" required />
        </div>

        <div className="sm:col-span-2 flex items-center gap-3">
          <button type="submit" className="px-4 py-2 rounded-md bg-primary-500 text-white">Send Message</button>
          <div className="text-sm text-slate-600">Or email me at <a href="mailto:pruffi791@outlook.com" className="underline">pruffi791@outlook.com</a></div>
        </div>

        {status && (
          <div className={`sm:col-span-2 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{status.message}</div>
        )}
      </form>
    </section>
  )
}
