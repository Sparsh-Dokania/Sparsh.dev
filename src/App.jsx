"use client"

import { useState } from 'react'
import Robo from './components/ui/Robo';
import ShootingStarsAndStarsBackground from './Bg';
import { Facebook, Link, Link2, Linkedin, Twitter } from "lucide-react"

import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function ShareButton({ links, className, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        aria-expanded={open}
      >
        {children}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg p-2 z-50">
          {links.map((l, i) => {
            const Icon = l.icon
            return (
              <button
                key={i}
                onClick={() => {
                  l.onClick?.()
                  setOpen(false)
                }}
                className="w-full text-left flex items-center gap-3 px-2 py-2 rounded hover:bg-neutral-800 text-white"
              >
                <Icon size={18} />
                <span className="text-sm">{l.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Example usage
export function ShareButtonDemo() {
  const shareLinks = [
    {
      icon: Twitter,
      onClick: () => window.open("https://twitter.com/share"),
      label: "",
    },
    {
      icon: Facebook,
      onClick: () => window.open("https://facebook.com/share"),
      label: "",
    },
    {
      icon: Linkedin,
      onClick: () => window.open("https://linkedin.com/share"),
      label: "",
    },
    {
      icon: Link,
      onClick: () => navigator.clipboard.writeText(window.location.href),
      label: "",
    },
  ]

  return (
    <div>
      <ShareButton links={shareLinks} className="text-lg font-medium">
        <Link size={15} />
        Let's Connect
      </ShareButton>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative w-screen min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <ShootingStarsAndStarsBackground />
      </div>

      {/* HERO */}
      <section id="hero" className="relative z-10 flex flex-col-reverse md:flex-row items-stretch justify-center w-full h-screen max-w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-16 gap-8 md:gap-16">
        <div className="w-full md:w-2/3 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 md:gap-8 max-w-3xl px-4 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Hello, I am Sparsh
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-xl">
            I am a passionate developer crafting beautiful web experiences. Explore my portfolio to see my work and get in touch!
          </p>
          <div className="mt-4">
            <ShareButtonDemo />
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center h-64 md:h-full mt-8 md:mt-0 px-4 md:px-0">
          <div className="h-full w-full flex items-center justify-end pr-4 md:pr-6">
            <div className="h-full w-full max-w-full mr-4 md:mr-6">
              <Robo />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (after hero) */}
      <main className="relative z-20">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
