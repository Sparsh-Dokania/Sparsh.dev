import React from "react"

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 sm:px-12 lg:px-24 bg-neutral-900/40">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-sm text-white/80 mb-6">Interested in working together? Send a message or connect via social links.</p>

        <form className="grid gap-4">
          <input className="bg-neutral-900/60 rounded p-3 outline-none" placeholder="Your name" />
          <input className="bg-neutral-900/60 rounded p-3 outline-none" placeholder="Your email" />
          <textarea className="bg-neutral-900/60 rounded p-3 outline-none" rows={5} placeholder="Message" />
          <button type="submit" className="px-6 py-3 bg-white/10 rounded">Send</button>
        </form>
      </div>
    </section>
  )
}