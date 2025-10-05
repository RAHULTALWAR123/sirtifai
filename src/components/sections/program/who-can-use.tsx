/* eslint-disable @next/next/no-img-element */
const WhoCanUse = () => {
  return (
    <section className="min-h-screen w-screen bg-[#FEF7F1] mt-4 md:mt-16">
      <div className="max-w-7xl mx-auto min-h-screen w-screen flex flex-col justify-center items-start">
        <h1 className="text-[30px] font-open-sans  md:text-[60px] font-[600] text-black capitalize text-center w-full">
          Who is this For?
        </h1>

        <div className="flex flex-row gap-4 md:gap-8 mt-8">
          <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
            <img
              src="/assets/programs/student.png"
              alt=""
              className="h-16 w-16 object-cover"
            />

            <h2 className="text-[#1F2937] font-inter text-xl font-[600]">
              Final Year Students
            </h2>

            <p className="text-[#4B5563] text-base font-inter font-normal">
              Start early, build skill + portfolio.
            </p>
          </div>
          <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
            <img
              src="/assets/programs/seeker.png"
              alt=""
              className="h-16 w-16 object-cover"
            />

            <h2 className="text-[#1F2937] font-inter text-xl font-[600]">
              Freshers & Job Seekers
            </h2>

            <p className="text-[#4B5563] font-inter text-base font-normal">
              Learn, earn, and get placed.
            </p>
          </div>
          <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
            <img
              src="/assets/programs/freelancers.png"
              alt=""
              className="h-16 w-16 object-cover"
            />

            <h2 className="text-[#1F2937] text-xl font-inter font-[600]">
              Freelancers
            </h2>

            <p className="text-[#4B5563] text-base font-inter font-normal">
              Get verified client projects + monthly income.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-4 md:gap-8 mt-8">
          <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
            <img
              src="/assets/programs/career-switchers.png"
              alt=""
              className="h-16 w-16 object-cover"
            />

            <h2 className="text-[#1F2937] font-inter text-xl font-[600]">
              Career Switchers
            </h2>

            <p className="text-[#4B5563] font-inter text-base font-normal">
              Transition to high-paying domains.
            </p>
          </div>
          <div className="bg-white rounded-[12px] border-1 w-[400px] border-white shadow-[0 1px 2px 0 rgba(0, 0, 0, 0.05)] flex flex-col p-4 gap-4 items-center justify-center">
            <img
              src="/assets/programs/immigrants.png"
              alt=""
              className="h-16 w-16 object-cover"
            />

            <h2 className="text-[#1F2937] font-inter text-xl font-[600]">
              Immigration Aspirants
            </h2>

            <p className="text-[#4B5563] font-inter text-center text-base font-normal">
              Elite plan helps build visa-friendly global profiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanUse;
