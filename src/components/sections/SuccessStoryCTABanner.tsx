/* eslint-disable @next/next/no-img-element */
// import { Target } from 'lucide-react';

export const SuccessStoryCTABanner = () => {
  return (
    <section className="w-full bg-[#FF7846] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Target Icon */}
        <div className="mb-6 mx-auto flex justify-center items-center">
          <img className='h-12 w-12' src="../../assets/aim.png" alt="aim" />
        </div>

        {/* Main Heading */}
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Be the Next Sirtifai Success Story
        </h2>

        {/* Description */}
        <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Learn from real achievers, see your income grow, and join the events that make it happen.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Join SPP Now Button */}
          <button className="px-8 py-4 bg-white text-gray-600 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
            Join SPP Now
          </button>

          {/* Book a Free Demo Button */}
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Book a Free Demo
          </button>

          {/* See Income Tracker Button */}
          <button className="px-8 py-4 bg-[#FF936B] text-white rounded-full font-semibold text-lg hover:bg-orange-300 transition-colors shadow-md hover:shadow-lg">
            See Income Tracker
          </button>
        </div>
      </div>
    </section>
  );
};
