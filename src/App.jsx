import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Documents from './components/Documents';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    /* This wrapper applies our soft off-white background to the whole site */
    <div className="bg-slate-50 min-h-screen font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      
      {/* Placeholder for the Navbar we will build next */}
      <header className="p-6 text-center text-slate-400 text-sm tracking-widest uppercase font-medium">
        Navigation Placeholder
      </header>
      <Navbar />
      {/* Rendering the component */}
      <main >
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Projects /></div>
        <div id="documents"><Documents /></div>
        <div id="contact"><Contact /></div>

      </main>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App;