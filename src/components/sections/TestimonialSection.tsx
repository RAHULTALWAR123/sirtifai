/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react";
import { FaShieldAlt, FaWallet } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const vectorPath = "/assets/freelancer/Vector.svg";

// Circular check icon per design
const Check: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={"inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6A2D] mt-[2px] " + className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      className="w-3 h-3"
    >
      <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const features = [
  {
    icon: <FaWallet className="text-[#FF5C35]" />,
    title: 'Receive every task payment',
  },
  {
    icon: <FaMoneyBillTransfer className="text-[#FF5C35]" />,
    title: 'All payment methods supported',
  },
  {
    icon: <FaShieldAlt className="text-[#FF5C35]" />,
    title: 'Secure payment protection',
  },
  {
    icon: <MdAccessTimeFilled className="text-[#FF5C35]" />,
    title: 'Transparent payment processing',
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] aspect-square">
          <div className="absolute -top-5 -left-5 w-full h-full bg-orange-500 rounded-md" aria-hidden="true" />
          <div className="relative w-full h-full border-2 border-sky-500 rounded-sm overflow-hidden shadow-sm">
            <img
              src="/assets/freelancer/man-front-view-freelance.png"
              alt="Professional working with tablet"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl mx-auto lg:mx-0">
          <div className="relative w-[60%] lg:w-full">
            <h2 className="text-[2rem] md:text-4xl font-bold text-slate-900 leading-snug">
              Get Paid Professionally, Like a Full-Time Employee
            </h2>
            {/* <img
              src={vectorPath}
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-15 -left-20 ml-60 mt-12 w-14 h-14"
            /> */}
          </div>
          <p className="mt-5 text-sm md:text-base text-slate-600 hidden lg:flex">
            Your income goes through Deel™, giving you:
          </p>
          <ul className="mt-6 space-y-4">
            {features.map((f, index) => (
              <li key={index} className="flex gap-3 text-sm md:text-base text-slate-700">
                <div className="bg-[#FF5C351A] rounded-full w-[40px] h-[40px] flex justify-center items-center">
                  {f.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[#1A1A1A] text-[1.125rem] font-semibold">{f.title}</h3>
                  {/* Removed text rendering as per your request */}
                </div>
              </li>
            ))}
          </ul>
          <p className="hidden text-xl  lg:flex mt-8 italic font-bold text-slate-800 leading-relaxed">
            &ldquo;This isn&apos;t freelancing with guesswork—it&apos;s verified, traceable, and legal.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
