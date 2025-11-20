import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Machines from './components/Machines'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-32 left-10 w-72 h-72 rounded-full blur-3xl bg-fuchsia-500/30" />
        <div className="absolute top-40 right-10 w-96 h-96 rounded-full blur-3xl bg-cyan-400/30" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl bg-lime-300/25" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Machines />
      <CTA />

      <footer id="about" className="py-12 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70">
          <p>© {new Date().getFullYear()} QuickBites. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App