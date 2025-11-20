import { Menu, ChevronDown, Phone, Star } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="inline-block w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-500 via-amber-400 to-lime-400 shadow-[0_10px_40px_rgba(255,99,132,0.35)]"></span>
            <span className="absolute inset-0 animate-ping rounded-xl bg-white/20" />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-tight text-white">QuickBites</div>
            <div className="text-xs text-white/60 -mt-0.5">Smart Vending</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#machines" className="hover:text-white transition">Machines</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-black bg-white hover:bg-white/90 transition">
            <Phone className="w-4 h-4" /> Talk to sales
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 text-white/80 space-y-2">
          <a href="#machines" className="block py-2">Machines</a>
          <a href="#solutions" className="block py-2">Solutions</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2 font-semibold text-white">Talk to sales</a>
        </div>
      )}
    </header>
  );
}
