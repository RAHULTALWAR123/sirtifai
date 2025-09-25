'use client';

import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SPP_OPTIONS } from '../../constants/data';
import React from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

const MotionH1 = motion.h1 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionA = motion.a as React.ComponentType<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & import('framer-motion').MotionProps
>;

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start pt-[20px] lg:pt-[100px] overflow-hidden">
      {/* Text Content */}
      <MotionDiv
        className="relative w-full lg:max-w-[700px] lg:mx-10 flex flex-col justify-start items-start gap-8 px-8 xl:px-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex flex-col gap-6 sm:gap-10">
          <div className="relative w-[100%] sm:w-full">
            <MotionImg
              className="absolute right-[10%] lg:right-[-1%] top-[12%] lg:top-[-8%] w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
              src="/assets/star.png"
              alt="Star"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <MotionH1
              className="text-[13vw] sm:text-[2.5rem] lg:text-[4rem] leading-12 sm:leading-tight font-semibold pt-10 sm:pt-16 lg:pt-0 font-open-sans text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Unlock Your Potential <br /> Launch Your{' '}
              <span className="text-[#FE7642]">Career</span>
            </MotionH1>
          </div>

          <MotionDiv
            className="flex flex-col sm:flex-row justify-start gap-5 items-start sm:items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Button */}
            <MotionDiv
              className="bg-[#284050] text-white rounded-full text-sm sm:text-base font-semibold flex items-center justify-between gap-3 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-[72vw] lg:w-full sm:w-[226px] h-[56px] sm:h-[64px] p-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="border border-gray-border rounded-full w-[71vw] lg:w-full h-full flex justify-between pl-4 pr-1 py-4 sm:pl-6 sm:py-5 items-center gap-2 font-open-sans">
                Book A Call
                <div className="rounded-full p-3 bg-[#bdbdbd] flex justify-center items-center">
                  <Phone size={18} />
                </div>
              </button>
            </MotionDiv>

            {/* Paragraph */}
            <MotionP
              className="text-[#b1ada9] font-inter font-normal text-[0.875rem] leading-[136%] sm:w-[60%] w-[76vw]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Accelerate Your Growth with Hands-on Projects and Personalised Career Support from Start to Success.
            </MotionP>
          </MotionDiv>
        </div>

        {/* Join SPP Now Section */}
        <MotionDiv
          className="flex flex-col justify-start items-start gap-4 sm:gap-6 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-[0.875rem] font-inter font-normal leading-[120%] text-[#191619]">
            Join SPP Now
          </h2>

          <div className="flex  sm:flex-row  pb-12 lg:pb-0 gap-3 sm:gap-4 w-full">
            {SPP_OPTIONS.map((option, index) => (
              <MotionA
                key={option.id}
                className="cursor-pointer px-2 py-2 sm:px-6 sm:py-[25px] bg-white text-gray-700 rounded-lg text-[10px] sm:text-sm font-medium flex items-center justify-between gap-3 sm:min-w-[140px] hover:bg-gray-50 transition-all duration-300 hover:shadow-md group hover:scale-105"
                href={option.href}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[#FE7642]">{option.label}</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </MotionA>
            ))}
          </div>
        </MotionDiv>
      </MotionDiv>

      {/* Right Side with Image */}
      <MotionDiv
        className="relative flex justify-center items-center -mt-10 lg:mt-0 h-auto lg:h-[500px] w-full lg:w-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <MotionImg
          className="hidden sm:block object-contain max-w-[99%] sm:max-w-[600px]"
          src="/assets/home/girl.png"
          alt="Woman Holding Book"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Mobile Image */}
        <MotionImg
          className="block sm:hidden object-contain max-w-[100%]"
          src="/assets/home/girl-book-home-img.png"
          alt="Woman Holding Book"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </MotionDiv>
    </div>
  );
};
