import React from "react"

export default function Footer() {
  return (
    <footer className="py-8 px-6 sm:px-12 lg:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/70">© {new Date().getFullYear()} Sparsh — Built with ❤️</div>
        <div className="flex gap-4">
          <a href="#projects" className="text-sm text-white/70">Projects</a>
          <a href="#contact" className="text-sm text-white/70">Contact</a>
        </div>
      </div>
    </footer>
  )
}