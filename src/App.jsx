import { useState } from 'react'
import Robo from './components/ui/Robo';
import ShootingStarsAndStarsBackground from './Bg';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen bg-black h-full w-full overflow-hidden">
      <div className="absolute min-h-screen inset-0 w-full h-screen z-0 overflow-hidden">
        <ShootingStarsAndStarsBackground />
      </div>
      <Navbar />
      <section className="flex items-center justify-center h-screen pt-20 relative z-10">
        <div className="flex-1 text-white flex flex-col justify-center items-start pl-16 gap-8">
          <h1 className="text-5xl font-bold mb-4">Hello, I am Sparsh</h1>
          <p className="text-xl max-w-lg mb-8">
            I am a passionate developer crafting beautiful web experiences. Explore my portfolio to see my work and get in touch!
          </p>
          <a href="#contact" className="px-8 py-3 bg-white/20 text-white font-bold text-lg rounded-full backdrop-blur-md shadow-lg no-underline transition-colors hover:bg-white/30">Contact Me</a>
        </div>
        <div className="flex-1 flex justify-center items-center h-full relative z-20">
          <Robo />
        </div>
      </section>
    </div>
  )
}

export default App;
