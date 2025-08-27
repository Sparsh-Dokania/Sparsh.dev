import React from "react"

const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Vite / Next"]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 sm:px-12 lg:px-24 bg-neutral-900/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}