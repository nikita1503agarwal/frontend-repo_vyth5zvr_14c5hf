import { Sparkles, Zap, CreditCard, Wifi, Leaf, Shield } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Colorful UI", desc: "Animated screens that brighten up any space and invite taps." },
  { icon: Zap, title: "Fast checkout", desc: "Tap, swipe, or phone pay. Under 5 seconds to snack time." },
  { icon: CreditCard, title: "All payments", desc: "Apple Pay, Google Pay, cards and corporate wallets supported." },
  { icon: Wifi, title: "Live inventory", desc: "Machines report stock and sales in real-time for perfect assortments." },
  { icon: Leaf, title: "Health options", desc: "Curated snacks and drinks—from protein to plant-based favorites." },
  { icon: Shield, title: "Always-on", desc: "Remote monitoring, auto-alerts and proactive restocking." },
];

export default function Features() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Why QuickBites?</h2>
          <p className="mt-3 text-white/70">Everything you need for a snacking experience people talk about.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl p-6 bg-white/5 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-40 bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 group-hover:opacity-60 transition" />
              <f.icon className="w-7 h-7 text-white" />
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
