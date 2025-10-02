import { Button } from "../../ui/Button";
import Image from "next/image";

// Asset paths (correct folder name 'why-sirtifai')
const heroBack = "/assets/why-sirtifai/hero_back.png"; // large curved background image
const realProject = "/assets/why-sirtifai/real_project_work.png"; // floating card top
const monthlyEarnings = "/assets/why-sirtifai/monthly_earnings.png"; // floating card bottom
const ideaIcon = "/assets/mingcute_transformation-line.svg"; // bulb/transformation icon
const vectorStar = "/assets/why-sirtifai/Vector.svg"; // star vector icon for end of heading

export const WhySirtifaiHero = () => {
  return (
    <section className="relative bg-[#FFF8F5] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 md:pt-20 md:pb-16 lg:pt-28 lg:pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start lg:items-center">
          {/* Left */}
          <div className="relative z-10 max-w-xl">
            <div className="hidden md:flex items-start gap-2 mb-4 md:mb-6">
              <Image src={ideaIcon} alt="" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="relative">
              <h1 className="font-bold text-black text-[42px] leading-[1.07] sm:text-5xl md:text-6xl tracking-tight">
                <span className="block text-orange-500">Why Sirtifai?</span>
                <span className="block">Because Your Career</span>
                <span className="block">Deserves More</span>
                <span className="block">Than Just A Course</span>
              </h1>
              {/* Star accent positioned beside 'More' */}
              <Image
                src={vectorStar}
                alt=""
                aria-hidden="true"
                width={54}
                height={54}
                className="hidden lg:block absolute top-[52%] translate-y-[-50%] left-[calc(100%+0.75rem)] lg:left-[calc(100%+1rem)] w-8 h-8 md:w-12 md:h-12"
              />
            </div>
            <p className="hidden lg:block mt-8 md:mt-10 text-[#374151] text-base md:text-lg leading-relaxed">
              We don&apos;t just train you — we make you work-ready, connect you to real projects, pay you while you learn, and support your career for life.
            </p>
            <div className="mt-8 md:mt-10 flex flex-row flex-wrap gap-3 sm:gap-5 items-center">
              {/* <Button
                variant="primary"
                size="sm"
                className="order-1 sm:order-2 rounded-full px-5 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg"
              >
                Book Free Demo
              </Button> */}
              <Button
                variant="secondary"
                size="sm"
                className="order-2 sm:order-1 relative rounded-full px-5 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg bg-[#1F3644] hover:bg-[#214050] text-white overflow-hidden before:absolute before:inset-0 before:rounded-full before:border before:border-white/10 after:absolute after:inset-[3px] after:rounded-full after:border after:border-white/35 shadow-lg"
              >
                Explore PGCAP
              </Button>
            </div>
          </div>
          {/* Right visual */}
          <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
            <div className="relative">
              {/* Background curved hero image */}
              <Image
                src={heroBack}
                alt="Curved decorative background"
                width={900}
                height={750}
                priority
                className="w-full h-auto select-none"
              />
              {/* Top floating image (hidden on mobile) */}
              <div className="hidden md:block absolute top-[9.5%] right-[-8%] w-[280px] md:w-[320px] rounded-[46px] overflow-hidden">
                <Image
                  src={realProject}
                  alt="Real project work"
                  width={640}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating info card */}
              <div className="absolute top-[6%] md:top-[38%] left-4 md:left-auto md:right-[-2%] w-[200px] md:w-[240px] bg-white rounded-xl px-5 py-4 z-10 shadow-sm md:shadow-none">
                <p className="text-sm md:text-[15px] font-semibold text-gray-900 leading-snug">Real Project Work</p>
                <p className="text-[11px] md:text-xs text-gray-600 mt-1 leading-snug">Live industry projects</p>
              </div>
              {/* Bottom primary media card */}
              <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 md:bottom-[-2%] md:right-[-15%] md:left-auto md:translate-x-0 w-[92%] sm:w-[85%] md:w-[500px] rounded-[28px] md:rounded-[34px] overflow-hidden z-20 shadow-lg md:shadow-none">
                <Image
                  src={monthlyEarnings}
                  alt="Cohort session"
                  width={900}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                {/* Earnings gradient overlay */}
                <div
                  className="hidden md:flex absolute bottom-0 left-0 h-[46%] w-[62%] md:w-[55%] flex-col justify-end px-7 md:px-8 py-6 md:py-7 text-white"
                  style={{ background: "linear-gradient(97deg, rgba(255,127,31,0.94) 0%, rgba(255,127,31,0.82) 55%, rgba(255,127,31,0.00) 100%)" }}
                >
                  <div className="text-xl md:text-2xl font-semibold leading-none tracking-tight">₹25,000</div>
                  <div className="text-[11px] md:text-xs font-medium mt-2 opacity-95">Monthly Earnings</div>
                  <div className="flex items-center gap-2 mt-3">
                    <Image
                      src="/assets/why-sirtifai/verified_industry_projects_logo.png"
                      alt="Verified projects"
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-[11px] md:text-xs font-medium">Verified Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile paragraph below visuals */}
        <p className="mt-10 lg:hidden text-[#374151] text-base leading-relaxed">
          We don&apos;t just train you — we make you work-ready, connect you to real projects, pay you while you learn, and support your career for life.
        </p>
      </div>
    </section>
  );
};
