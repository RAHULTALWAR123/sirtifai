/* eslint-disable @next/next/no-img-element */
const Features = () => {
  return (
    <section className="md:min-h-[450px] w-full flex flex-col items-center justify-center pb-4 md:pb-0">
      <h1 className="text-[30px] font-open-sans md:text-[60px] font-[600] text-black capitalize">
        What makes SPP Unique
      </h1>
      <div className="flex flex-col md:flex-row md:gap-16 items-center gap-4 mt-8 md:mt-24">
        {/* card */}
        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/programs/payroll.png"
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
          <div>
            <h2 className="text-[#1F2937] font-inter text-lg font-[600]">
              Payroll Benefits
            </h2>
            <p className="text-[#4B5563] font-inter text-base">
              ESI, EPF, Payslips, Tax-compliant
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/programs/career.png"
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
          <div>
            <h2 className="text-[#1F2937] font-inter text-lg font-[600]">
              Lifetime Career Help
            </h2>
            <p className="text-[#4B5563] font-inter text-base">
              Re-entry, job switch, global access
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/programs/tools.png"
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
          <div>
            <h2 className="text-[#1F2937] font-inter text-lg font-[600]">
              Tools Access
            </h2>
            <p className="text-[#4B5563] font-inter text-base">
              AI Resume, Portfolio, Analytics.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-16 items-center gap-4 mt-8 md:mt-24">
        {/* card */}

        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/programs/career.png"
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
          <div>
            <h2 className="text-[#1F2937] font-inter text-lg font-[600]">
              Lifetime Career Help
            </h2>
            <p className="text-[#4B5563] font-inter text-base">
              Re-entry, job switch, global access
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/programs/tools.png"
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
          <div>
            <h2 className="text-[#1F2937] font-inter text-lg font-[600]">
              Tools Access
            </h2>
            <p className="text-[#4B5563] font-inter text-base">
              AI Resume, Portfolio, Analytics.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4">
          <img
            src="/assets/programs/industries.png"
            alt=""
            className="w-[40px] h-[40px] object-contain"
          />
          <div>
            <h2 className="text-[#1F2937] font-inter text-lg font-[600]">
              24+ Industries
            </h2>
            <p className="text-[#4B5563] font-inter text-base">
              Choose your career – not just tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
