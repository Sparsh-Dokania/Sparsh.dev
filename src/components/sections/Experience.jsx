import React from "react"

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>

        <div className="space-y-6">
          <div className="bg-neutral-900/40 rounded-lg p-4">
            <h3 className="font-semibold">Role / Company</h3>
            <p className="text-sm text-white/80">Short description of responsibilities and achievements.</p>
          </div>

          <div className="bg-neutral-900/40 rounded-lg p-4">
            <h3 className="font-semibold">Role / Company</h3>
            <p className="text-sm text-white/80">Short description of responsibilities and achievements.</p>
          </div>
        </div>
      </div>
    </section>
  )
}