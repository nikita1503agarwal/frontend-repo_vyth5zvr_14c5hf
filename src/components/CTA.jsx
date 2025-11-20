export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-tr from-amber-300 via-pink-400 to-fuchsia-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35),transparent_40%)] pointer-events-none" />
          <div className="p-10 sm:p-14">
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black">Bring QuickBites to your location</h3>
            <p className="mt-3 text-black/70 max-w-2xl">Share your details and we’ll tailor a plan for your space, foot traffic, and taste profile.</p>
            <form className="mt-6 grid sm:grid-cols-3 gap-3">
              <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/90 ring-1 ring-black/10 placeholder-black/50 focus:outline-none" />
              <input required placeholder="Email or phone" className="px-4 py-3 rounded-xl bg-white/90 ring-1 ring-black/10 placeholder-black/50 focus:outline-none" />
              <input placeholder="Location type (office, gym...)" className="px-4 py-3 rounded-xl bg-white/90 ring-1 ring-black/10 placeholder-black/50 focus:outline-none" />
              <button className="sm:col-span-3 mt-2 px-5 py-3 rounded-xl bg-black text-white font-semibold hover:bg-black/90">Request a quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
