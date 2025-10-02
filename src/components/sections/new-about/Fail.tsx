import React from 'react'

function Fail() {
  return (
    <div className="mt-10 pb-10">
      <h1 className="text-3xl sm:text-5xl text-[#FF6200] font-semibold mb-8 text-center">
        What if I Fail ?
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-40 gap-8">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/ss2.jpg"
            alt="fail"
            className="w-56 h-56 sm:w-72 sm:h-60 rounded-2xl"
          />
        </div>

        {/* Text */}
        <div className="text-base sm:text-lg text-center sm:text-left px-4 sm:px-0">
          If you <span className="text-orange-400">don’t clear the exam on your first attempt, </span> don’t worry —  <br />you can simply <span className="text-orange-400">reattempt by paying the ₹799 exam fee again. <br /></span> And yes, if you clear the exam, the <span className="text-orange-400">program is completely free, <br /> with the full ₹70,800 </span>value covered by the scholarship. <br /> Seats, however, are <span className="text-orange-400">limited per cohort, and admission <br /> is based on performance </span> —so the best performers <br /> get priority. You can attempt <span className="text-orange-400">multiple times </span>, but only <br /> until all seats are filled .
        </div>
      </div>
    </div>
  )
}

export default Fail
