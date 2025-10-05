/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center space-y-4 sm:space-y-6 max-w-7xl mx-auto px-4">
      {/* Subtitle */}
      <span className="text-[#FC4C03] uppercase font-open-sans text-sm sm:text-base md:text-lg font-medium tracking-wider text-center">
        What Is SPP ?
      </span>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-[60px] font-open-sans font-[600] text-black capitalize text-center leading-tight">
        Our Three-Phase Approach
      </h1>

      {/* Description */}
      <span className="text-[#4B5563] max-w-[880px] tracking-tight font-inter text-sm sm:text-base md:text-lg font-[400] text-center px-2">
        SPP is designed as a comprehensive career development program with three
        distinct phases that work together to transform your professional
        journey.
      </span>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 mt-12 md:mt-24 w-full items-center justify-center">
        {/* SKILL */}
        <div className="flex flex-col items-center text-center px-4">
          <img
            src="/assets/programs/skill.png"
            alt="Skill"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <h2 className="text-[#1F2937] text-lg font-inter sm:text-xl md:text-2xl font-[600] my-3">
            SKILL
          </h2>
          <p className="text-[#4B5563] font-inter text-sm sm:text-base font-[400]">
            Build industry-relevant skills through structured learning and
            hands-on projects
          </p>
        </div>

        {/* PRACTICE */}
        <div className="flex flex-col items-center text-center px-4">
          <img
            src="/assets/programs/code.png"
            alt="Practice"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <h2 className="text-[#1F2937] font-inter text-lg sm:text-xl md:text-2xl font-[600] my-3">
            PRACTICE
          </h2>
          <p className="text-[#4B5563] font-inter text-sm sm:text-base font-[400]">
            Work on real client projects and earn while gaining professional
            experience
          </p>
        </div>

        {/* PROGRESS */}
        <div className="flex flex-col items-center text-center px-4">
          <img
            src="/assets/programs/bar.png"
            alt="Progress"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <h2 className="text-[#1F2937] font-inter text-lg sm:text-xl md:text-2xl font-[600] my-3">
            PROGRESS
          </h2>
          <p className="text-[#4B5563] font-inter text-sm sm:text-base font-[400]">
            Secure job placement and receive ongoing career support for
            continued growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
