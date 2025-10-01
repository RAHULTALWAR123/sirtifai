// src/components/HowItWorksAbout.tsx
import Image from "next/image";
import React from "react";

const HowItWorksAbout = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold text-[#FF6B2C] mb-6">
        How It Works?
      </h2>

      {/* Flex Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Text */}
        <p className="text-gray-800 text-base leading-relaxed md:w-2/3">
          To get started, simply register and pay a nominal fee of{" "}
          <span className="font-semibold">₹799</span> to book your scholarship
          exam. Once registered, you’ll take a secure online proctored exam that
          lasts 60–90 minutes and covers essential skills through 50–60
          questions. If you clear the exam with the required score, you’ll
          unlock a 100% scholarship that gives you free access to our full{" "}
          <span className="font-semibold">₹70,800</span> freelance program,
          including training, projects, mentorship, and placement support.
        </p>

        {/* Right Image */}
        <img
          src="/how-it-works.png"
          alt="Scholarship Globe"
          className="w-[150px] md:w-[450px]"
        />
      </div>

      {/* Exam At A Glance */}
        {/* Exam At A Glance */}
<h3 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-10">
  Exam At A <span className="text-[#FF6B2C]">Glance</span>
</h3>

<div className="mt-5 bg-gradient-to-b from-[#FF6B2C] to-[#FF9159] rounded-xl relative py-10">

  {/* Left Label */}
  <div className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm font-medium 
                   px-5 py-3 rounded-r-lg shadow-md leading-tight">
    Format: 50–60 questions,<br />60–90 minutes,<br />online proctored
  </div>

  {/* White Center Card */}
  <div className="bg-white sm:rounded-xl p-10 text-center mx-auto max-w-lg relative z-10">
    <ul className="text-gray-900 sm:text-lg text-sm space-y-3 font-medium">
      <li>Domain Knowledge — <span className="font-semibold">40%</span></li>
      <li>Practical Case Scenarios — <span className="font-semibold">30%</span></li>
      <li>Communication Skills — <span className="font-semibold">15%</span></li>
      <li>Aptitude & Reasoning — <span className="font-semibold">15%</span></li>
    </ul>
  </div>

  {/* Right Label */}
  <div className="absolute right-20 top-1/2 -translate-y-1/2 text-white text-sm font-medium 
                 px-5 py-3 rounded-l-lg shadow-md leading-tight">
    Eligibility to qualify:<br />Score ≥ 70%
  </div>


        
      </div>
    </section>
  );
};

export default HowItWorksAbout;
