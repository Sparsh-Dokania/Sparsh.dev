import React from "react"

const sampleProjects = [
  { title: "Project One", desc: "Short summary, tech used, and link." },
  { title: "Project Two", desc: "Short summary, tech used, and link." },
  { title: "Project Three", desc: "Short summary, tech used, and link." },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 sm:px-12 lg:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((p, i) => (
            <article key={i} className="bg-neutral-900/40 rounded-lg p-6 hover:scale-[1.01] transition">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-white/80 mb-4">{p.desc}</p>
              <div className="flex gap-3">
                <a className="text-sm px-3 py-2 bg-white/10 rounded">Live</a>
                <a className="text-sm px-3 py-2 bg-white/10 rounded">Source</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}