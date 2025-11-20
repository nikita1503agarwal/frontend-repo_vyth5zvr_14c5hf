import { Candy, Coffee, Utensils, Popcorn } from "lucide-react";

const machines = [
  {
    name: "QB Mini",
    tag: "Compact",
    desc: "Perfect for lobbies and studios. 24". Small footprint, big impact.",
    colors: "from-rose-500 via-orange-400 to-yellow-300",
    icon: Candy,
  },
  {
    name: "QB Chill",
    tag: "Cold Drinks",
    desc: "Dual-zone cooling for drinks + fresh snacks.",
    colors: "from-sky-500 via-cyan-400 to-emerald-400",
    icon: Coffee,
  },
  {
    name: "QB XL",
    tag: "High Traffic",
    desc: "Large capacity with dynamic shelves and 55" screen.",
    colors: "from-fuchsia-500 via-violet-500 to-indigo-400",
    icon: Popcorn,
  },
];

export default function Machines() {
  return (
    <section id="machines" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Machines that turn heads</h2>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white text-black font-medium hover:bg-white/90">Get pricing</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {machines.map((m) => (
            <div key={m.name} className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 group">
              <div className={`h-40 bg-gradient-to-tr ${m.colors}`} />
              <div className="p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80 ring-1 ring-white/20">{m.tag}</div>
                <div className="mt-3 flex items-center gap-3">
                  <m.icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-semibold text-white">{m.name}</h3>
                </div>
                <p className="mt-2 text-white/70">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
