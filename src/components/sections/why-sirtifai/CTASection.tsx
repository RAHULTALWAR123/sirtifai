export const CTASection = () => {
  return (
    <section className="bg-[#FF784B] py-14 md:py-16">
      {/* Mobile (keeps new copy) */}
      <div className="md:hidden max-w-5xl mx-auto px-5 text-center">
        <h2 className="text-[30px] leading-[1.15] font-semibold tracking-tight text-white mb-6">
          <span className="block">Don&apos;t Just Learn —</span>
          <span className="block">Build Your Career With Sirtifai</span>
        </h2>
        <p className="text-white/90 text-[13px] max-w-2xl mx-auto mb-8 leading-relaxed">
          Start your journey to a better career today
        </p>
        <div className="flex flex-row justify-center gap-3 mb-4">
          <a href="#join" className="inline-flex flex-1 items-center justify-center rounded-full bg-white text-[#1E3340] font-semibold text-[12px] tracking-wide px-6 h-12 shadow-sm hover:opacity-95 transition whitespace-nowrap">
            Join PGCAP
          </a>
          {/* <a href="#plans" className="inline-flex flex-1 items-center justify-center rounded-full bg-[#1E3340] text-white font-medium text-[12px] tracking-wide px-6 h-12 shadow-sm hover:bg-[#243f4e] transition whitespace-nowrap">
            Compare Plans
          </a> */}
        </div>
        {/* <div className="flex justify-center">
          <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-white/25 text-white font-medium text-[12px] tracking-wide px-8 h-11 backdrop-blur-[2px] hover:bg-white/30 transition">
            Book Free Demo
          </a>
        </div> */}
      </div>
      {/* Desktop / Tablet (design per screenshot) */}
      <div className="hidden md:block max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-[30px] md:text-[32px] font-semibold tracking-tight text-white mb-3 flex items-center justify-center gap-2">
          <span role="img" aria-label="target" className="text-xl">🎯</span>
          <span>Be the Next Sirtifai Success Story</span>
        </h2>
        <p className="text-white/90 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
          Learn from real achievers, see your income grow, and join the events that make it happen.
        </p>
        <div className="flex flex-row items-center justify-center gap-6">
          <a href="#join" className="inline-flex items-center justify-center rounded-full bg-[#1E3340] text-white text-[12px] font-medium tracking-wide px-10 h-12 shadow-sm hover:opacity-90 transition">
            Join PGCAP
          </a>
          {/* <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-white text-[#1E3340] text-[12px] font-medium tracking-wide px-10 h-12 shadow-sm hover:bg-gray-50 transition">
            Book A Free Demo
          </a>
          <a href="#income" className="inline-flex items-center justify-center rounded-full border border-white text-white text-[12px] font-medium tracking-wide px-10 h-12 hover:bg-white/10 transition">
            See Income Tracker
          </a> */}
        </div>
      </div>
    </section>
  )
}
