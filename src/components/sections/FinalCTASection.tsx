import type React from "react";

const features = [
  { label: "Earn ₹12K to ₹35K/month", icon: EarningsIcon },
  { label: "Build your verified freelance Profile", icon: ProfileIcon },
  { label: "Get legal & income proof", icon: DocumentIcon },
  { label: "Work from anywhere in India", icon: GlobeIcon },
];

const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#FE7642] text-white py-14">
      <div className="w-full md:max-w-7xl mx-auto px-2 md:px-6">
        <div className="w-full flex flex-col gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-start gap-3 mb-8">
              <span className="text-2xl md:text-3xl leading-none" aria-hidden="true">💬</span>
              <p className="font-semibold text-2xl md:text-3xl leading-tight">&ldquo;Still exploring? Let&apos;s help you decide.&rdquo;</p>
            </div>
            <ul className="grid grid-cols-2 lg:flex justify-center gap-x-10 gap-y-5 text-sm md:text-[15px] font-medium max-w-3xl">
              {features.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-center gap-2 text-left">
                  <span className="inline-flex items-center justify-center w-5 h-5" aria-hidden="true">
                    <Icon />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 md:gap-6 pt-2 mt-8">
            <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#173447] hover:bg-[#132B3B] text-white font-medium text-[.75rem] md:text-base px-2 md:px-10 py-2 md:py-4 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Join The PGCAP
            </button>
            <button className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-white text-gray-900 font-medium text-[.75rem] md:text-base px-10 py-4 shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Schedule A Free Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Inline icon components (stroke icons for consistency) */
const baseIcon = "w-4 h-4 stroke-current text-white/90";

function EarningsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10.5h3.25a1.75 1.75 0 1 1 0 3.5H9m3 0v1.5m0-5V9" />
    </svg>
  );
}
function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c1.5-4 6.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}
function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4h6l5 5v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5c0-.552.448-1 1-1z" />
      <path d="M13 4v5h5" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={baseIcon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3.5 2.5 14.5 0 18M12 3c-2.5 3.5-2.5 14.5 0 18" />
    </svg>
  );
}

export default FinalCTASection;