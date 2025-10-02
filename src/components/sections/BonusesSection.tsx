import type React from "react";

interface Bonus {
  icon: string; // image path
  title: string;
  subtitle: string;
}

const bonuses: Bonus[] = [
  {
    icon: "/assets/freelancer/resume.svg",
    title: "Free Resume Review",
    subtitle: "₹999 value",
  },
  {
    icon: "/assets/freelancer/job.svg",
    title: "1 Extra Paid Project",
    subtitle: "Additional income opportunity",
  },
  {
    icon: "/assets/freelancer/document.svg",
    title: "Bonus Legal Contract Templates",
    subtitle: "Professional documentation",
  },
  {
    icon: "/assets/freelancer/tick.svg",
    title: "7-Day Income Challenge Guarantee*",
    subtitle: "Start earning in your first week",
  },
];

const BonusesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FCF8F5]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-14 leading-tight">
          Enroll Today And Get These Bonuses Free:
        </h2>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mb-10">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-md border border-gray-200 shadow-lg hover:shadow-lg transition-shadow px-6 py-8 text-center flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded bg-orange-50 mb-5">
                <img src={b.icon} alt="" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="font-semibold text-[13px] md:text-sm text-gray-900 leading-snug mb-2">
                {b.title}
              </h3>
              <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed max-w-[180px]">
                {b.subtitle}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center">
          {/* <button className="inline-flex justify-center items-center rounded-sm bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-8 py-3 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40">
            Apply Now
          </button>
          <button className="inline-flex justify-center items-center rounded-sm border border-orange-300 text-orange-600 font-medium text-sm px-8 py-3 bg-white hover:bg-orange-50 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/30">
            Talk to a Career Advisor
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;