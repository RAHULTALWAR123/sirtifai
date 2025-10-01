import React from 'react'

function Fail() {
  return (
    <div className="mt-10 pb-10">
      <h1 className="text-3xl sm:text-5xl text-[#FF6200] font-semibold mb-8 text-center">
        What if I Fail ?
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-20 gap-8">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/ss2.jpg"
            alt="fail"
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="text-base sm:text-lg text-center sm:text-left px-4 sm:px-0">
          If you <span className="text-orange-400">don’t clear the exam on your first <br /> attempt, </span> don’t worry — you can simply <br /> <span className="text-orange-400">reattempt by paying the ₹799 exam fee <br /> again.</span> And yes, if you clear the exam, the <br /> <span className="text-orange-400">program is completely free, with the full <br /> ₹70,800 </span>value covered by the scholarship. <br /> Seats, however, are <span className="text-orange-400">limited per cohort, <br /> and admission is based on performance </span> — <br /> so the best performers get priority. You <br /> can attempt <span className="text-orange-400">multiple times </span>, but only until <br /> all seats are filled .
        </div>
      </div>
    </div>
  )
}

export default Fail
