'use client';

import { motion } from 'framer-motion';
import React from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & import('framer-motion').MotionProps
>;

export const CTABannerSection = () => {
  return (
    <section className="w-full bg-[#FE7642] py-16 lg:py-20 px-8 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Question */}
        <MotionDiv
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2
            className="sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your career with real skills, income, and global placement?
          </MotionH2>
        </MotionDiv>

        {/* Price Text */}
        <MotionDiv
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MotionP
            className="text-xl lg:text-2xl text-white font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Start with just ₹1,999/month.
          </MotionP>
        </MotionDiv>

        {/* CTA Buttons */}
      <MotionDiv
  className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  {/* Join SPP Button */}
  <MotionButton
    className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white text-[#FE7642] rounded-full font-semibold text-xs sm:text-sm lg:text-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Join PGCAP
  </MotionButton>

  {/* Talk to a Career Advisor Button */}
  {/* <MotionButton
    className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-[#FE7642] text-white border-2 border-white rounded-full font-semibold text-xs sm:text-sm lg:text-lg hover:bg-[#e65a2e] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 whitespace-nowrap"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Talk to a Career Advisor
  </MotionButton> */}
</MotionDiv>

      </div>
    </section>
  );
};
