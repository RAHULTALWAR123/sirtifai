/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';


import { motion } from 'framer-motion';
import React from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH1 = motion.h1 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

export const TrainingPartnerHeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center pt-[20px] lg:pt-[100px] px-8 lg:px-20 xl:px-32 overflow-hidden">
      {/* Left Section - Text and Buttons */}
      <MotionDiv
        className="relative w-full lg:max-w-[800px] xl:max-w-[900px] flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-8 order-2 lg:order-none"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex flex-col gap-3 lg:gap-6">
          {/* Main Headline */}
          <div className="relative w-full text-center lg:text-left">
            <MotionImg
              className="absolute right-[10%] lg:right-[-1%] top-[8%] lg:top-[-8%] w-[18px] h-[18px] lg:w-[30px] lg:h-[30px] hidden lg:block"
              src="/assets/star.png"
              alt="Star"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <MotionH1
              className="text-[5.5vw] sm:text-[1.1rem] lg:text-[3.2rem] xl:text-[3.5rem] leading-tight sm:leading-tight font-semibold pt-6 sm:pt-10 lg:pt-0 font-open-sans text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ascend B2B welcomes small and mid-sized training companies from across the world as official Sirtifai partners.
            </MotionH1>
          </div>

          {/* First Sub-text */}
          <MotionP
            className="text-sm lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            You provide the trainers, classrooms, laptops & infra →{' '}
            <span className="text-[#FE7642] font-semibold">
              Sirtifai provides candidates, exams, placement, and guaranteed monthly billing.
            </span>
          </MotionP>

          {/* Second Sub-text */}
          <MotionP
            className="text-sm lg:text-xl text-gray-600 leading-relaxed text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Join Ascend B2B. A small company can make a big impact.
          </MotionP>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-row gap-2 sm:gap-4 mb-6">
            {/* Become a Partner Button */}
            <button
              className="relative bg-orange-500 xl:bg-[#1f2937] lg:bg-[#1f2937] text-white rounded-full px-4 sm:px-8 py-3 sm:py-4 font-semibold text-xs sm:text-sm md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:bg-[#111827] whitespace-nowrap"
            >
              Become a Partner
            </button>

            {/* Request B2B Prospectus Button */}
            <button className="px-4 sm:px-8 py-3 sm:py-4 bg-orange-500 text-white rounded-full font-semibold text-xs sm:text-sm md:text-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap">
              Request B2B Prospectus
            </button>
          </div>

        </div>
      </MotionDiv>

      {/* Right Section - Circular Image */}
      <MotionDiv
        className="relative flex justify-center items-center w-full lg:w-auto order-1 lg:order-none mt-4 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Mobile Stars - Top Left */}
        <MotionImg
          className="absolute top-[-10px] left-[10%] w-[16px] h-[16px] lg:hidden z-10"
          src="/assets/star.png"
          alt="Star Top"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Mobile Stars - Bottom Right */}
        <MotionImg
          className="absolute bottom-[-10px] right-[10%] w-[16px] h-[16px] lg:hidden z-10"
          src="/assets/star.png"
          alt="Star Bottom"
          initial={{ opacity: 0, scale: 0, rotate: 180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Circular Container with Gradient Border */}
        <div className="relative w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px]">
          {/* Image */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <MotionImg
              className="w-full h-full object-cover"
              src="/assets/training partner program/hero-section-pic.png"
              alt="Training Companies Meeting - Sirtifai Partners"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};
