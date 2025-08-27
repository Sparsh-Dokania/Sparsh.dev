"use client"

import { useState } from 'react'
import Robo from './components/ui/Robo';
import ShootingStarsAndStarsBackground from './Bg';
  // import share button from its component file
import { ShareButtonDemo } from './components/ui/share-button-demo';

import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

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
