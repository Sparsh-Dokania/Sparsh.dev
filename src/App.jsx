"use client"

import { useState } from 'react'
import ShootingStarsAndStarsBackground from './Bg'
import Navbar from './components/Navbar'
// import the new Hero component
import Hero from './components/Hero'

import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative w-full min-h-screen bg-transparent text-white overflow-x-hidden">
      {/* global background (fixed) */}
      <ShootingStarsAndStarsBackground />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div id="hero" className="relative z-10">
        <Hero />
      </div>

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
