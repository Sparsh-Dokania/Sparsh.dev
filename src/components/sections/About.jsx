import React from "react"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-16 px-6 sm:px-12 lg:px-24 bg-neutral-900/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
        <p className="text-base md:text-lg text-white/90 mb-6">
          Short introduction — who you are, what you build, tech you enjoy. Keep it concise and scannable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">What I do</h3>
            <p className="text-sm text-white/80">Frontend & UI, performance-minded apps, accessible experiences, and clean code.</p>
          </div>
          <div>
            <h3 className="font-semibold">Tools & stack</h3>
            <p className="text-sm text-white/80">React, Next.js, Tailwind, TypeScript, Node, Vercel, Git.</p>
          </div>
        </div>
      </div>
    </section>
  )
}