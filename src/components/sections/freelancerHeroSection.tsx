import React from 'react';
import { Play, ArrowRight, Calendar, Menu, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';




// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-[#FEF7F1] min-h-screen flex items-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Sirtifai PGCAP Earn from
Day 1, Grow for Life.
                <span className="inline-block ml-2">
                  <svg
                    className="w-8 h-8 text-[#ff7847]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
Work on real projects, get paid monthly, build a verified              
PGCAP career with payroll, legal, and client access.              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-slate-800 rounded-full hover:bg-slate-700 text-white text-lg font-medium gap-3">
                <Play className="w-5 h-5 fill-white" />
                Watch Stories
              </Button>
              <Button
                variant="outline"
                className=" bg-[#FE7743] text-white text-lg rounded-full font-medium gap-3"
              >
                <Calendar className="w-5 h-5" />
                Join Next Event
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10">
              {/* Geometric Background Shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-200 transform rotate-45 opacity-80"></div>
              <div className="absolute -top-4 right-0 w-24 h-24 bg-orange-300 transform rotate-12 opacity-70"></div>
              <div className="absolute bottom-0 -left-4 w-20 h-20 bg-purple-200 transform -rotate-12 opacity-60"></div>
              <div className="absolute -bottom-8 right-8 w-28 h-28 bg-pink-200 transform rotate-45 opacity-70"></div>

              {/* Central Image */}
              <img
                src="/assets/freelancer/hero.png"
                alt="Hero"
                className="relative rounded-3xl shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default HeroSection;