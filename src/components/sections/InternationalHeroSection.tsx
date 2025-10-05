/* eslint-disable @next/next/no-img-element */
"use client"
import { Download } from 'lucide-react';

export const InternationalHeroSection = () => {
  return (
    <section className="w-full py-20">
          <style>
            {`
        .double-border-btn {
            position: relative;
            background: #1f2937;
            color: white;
            border-radius: 9999px;
            padding: 1rem 2rem;
            font-weight: 600;
            font-size: 1.125rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .double-border-btn::before {
            content: '';
            position: absolute;
            top: 6px;
            left: 6px;
            right: 6px;
            bottom: 6px;
            background: transparent;
            // border: 1px solid white;
            border: 1px solid rgba(255, 255, 255, 0.45);


            border-radius: 9999px;
            z-index: 1;
            pointer-events: none;
        }
        
        .double-border-btn:hover {
            background: #111827;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
            `}
    </style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content and CTA */}
          <div className=' sm:block'>
            {/* Headline with Star Icon */}
            <div className="-mb-14 sm:mb-8 -mt-7">
              <h1 className="text-4xl  md:text-6xl font-semibold sm:font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Your Global Career In Just 18 Months
                <span className="inline-block ml-3">
              <div><img src='assets/star.svg' alt="" /></div>
                </span>
              </h1>
              
              <p className=" hidden  sm:block text-xl text-gray-700 leading-relaxed font-normal ">
                A comprehensive roadmap to international opportunities with complete visa support and placement assistance.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4">
              {/* Start Your Global Career Button */}
<button className=" double-border-btn ">
  Start Your Global Career
</button>

              {/* Download Brochure Button */}
              <button className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                <Download size={20} />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Side - Combined/Overlapping Images */}
          <div className="relative">
            {/* Main Large Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="International Career Opportunities"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className=" w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">International Career Image</p>
                </div>
              </div>
            </div>
{/* mobile view paragraph */}
            <div className="w-96 sm:hidden inline-flex flex-col justify-start items-start gap-4  mt-12">
    <div className="self-stretch justify-start text-gray-600 text-base font-normal font-['Inter'] leading-normal pt-16">A comprehensive roadmap to international opportunities with complete visa support and placement assistance.</div>
    <div className="flex flex-col justify-center items-start gap-4">
        <div className="px-[5px] py-[3px] bg-slate-700 rounded-[114px] flex flex-col justify-start items-start gap-2.5">
            <div className="px-2.5 py-2.5 rounded-[114px]  outline-1 outline-offset-[-1px] outline-gray-400 inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-xs font-semibold font-['Open_Sans'] capitalize leading-3 tracking-wide">Start Your Golbal Carrier</div>
            </div>
        </div>
        <div className="h-10 px-[5px] py-[3px] bg-orange-400 rounded-[114px] flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch px-[5px] py-2.5 rounded-[114px] inline-flex justify-center items-center gap-1">
                <div className="w-4 h-4 bg-white" />
                <div className="justify-start text-white text-xs font-semibold font-['Open_Sans'] capitalize leading-3 tracking-wide">Download Brochure</div>
            </div>
        </div>
    </div>
</div>

            {/* Smaller Second Image - Overlapping the bottom */}
            <div className="absolute bottom-[50%] right-[-10%] sm:bottom-0 sm:right-0 w-60 sm:w-3/4 transform translate-y-1/4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Global Opportunities"
                className="w-full h-auto rounded-lg shadow-lg  "
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className=" w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center border-4 border-white">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Global Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <div className="w-full bg-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold sm:font-bold text-gray-900">
            Transforming Careers Through Skills, Practice, And Progress
          </h2>
        </div>
      </div>

    </section>
  );
};
