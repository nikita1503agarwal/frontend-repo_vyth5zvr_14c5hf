import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-40 -left-20 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center relative">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 ring-1 ring-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-lime-300 animate-pulse" /> New-gen Vending
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              QuickBites — colorful, smart vending that people really love
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl">
              Bring delightful snacking to offices, gyms, campuses and events. Interactive machines, real-time inventory, tap-to-pay and curated assortments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition">Get a quote</a>
              <a href="#machines" className="px-5 py-3 rounded-xl bg-black/40 ring-1 ring-white/20 text-white hover:bg-black/60 transition">See machines</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="w-7 h-7 rounded-full ring-2 ring-black/30" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-7 h-7 rounded-full ring-2 ring-black/30" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-7 h-7 rounded-full ring-2 ring-black/30" />
              </div>
              <span>200+ happy locations</span>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/10 to-white/5">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
