/* eslint-disable @next/next/no-img-element */
"use client"
import { STEPS } from "../../constants/data";
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionH4 = motion.h4 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & import('framer-motion').MotionProps
>;

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
  <section ref={ref} className="w-full bg-[#fef7f1] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        {/* Header */}
        <MotionDiv 
          className="w-full flex flex-col justify-start items-start gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <MotionP 
            className="text-orange-500 text-xs sm:text-sm font-semibold font-open-sans uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our
          </MotionP>
          <MotionH2 
            className="text-4xl sm:text-6xl lg:text-7xl text-gray-900 leading-tight font-open-sans tracking-tight font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mission • Vision • Future Goals
          </MotionH2>
        </MotionDiv>

        {/* Content */}
  <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-20">
          {/* Left - Images & Button (hidden on small screens to avoid empty space) */}
          <MotionDiv 
            className="hidden md:flex md:w-1/2 justify-center items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Male Image */}
            <div className="relative hidden md:block">
              <MotionImg 
                src="/assets/male.png" 
                alt="Male" 
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <MotionImg
                className="absolute bottom-[-30%] left-4"
                src="/assets/male-name.png"
                alt="Male Name"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              />
            </div>

            <div className="flex flex-col gap-6">
              {/* Button */}
              <MotionButton 
                className="hidden md:flex px-6 sm:px-8 py-3 sm:py-4 bg-[#FC4C03] text-white rounded-full text-sm sm:text-lg font-semibold items-center gap-3 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <img src="/assets/home/transform-icon.svg" alt="Share Icon" />
                Transform Your Career With Sirtifai
              </MotionButton>

              {/* Female Image */}
              <div className="relative hidden md:block">
                <MotionImg
                  src="/assets/female.png"
                  alt="Female"
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
                <MotionImg
                  className="absolute bottom-[-50%] right-[-40%]"
                  src="/assets/female-name.png"
                  alt="Female Name"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                />
              </div>
            </div>
          </MotionDiv>

          {/* Right - Steps */}
          <MotionDiv 
            className="w-full lg:w-1/2 flex flex-col gap-8 sm:gap-10"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {STEPS.map((step, index) => {
              // Determine image path based on step id (expects step1.png, step2.png, step3.png)
              const imgSrc = `/assets/about/step${step.id}.png`;
              return (
                <MotionDiv 
                  key={step.id} 
                  className="flex items-start gap-4 sm:gap-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
                    <MotionImg
                      src={imgSrc}
                      alt={`Step ${step.id}`}
                      className="w-full h-full object-contain"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <MotionP 
                      className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-1 sm:mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    >
                      Step {step.id}
                    </MotionP>
                    <MotionH4 
                      className="text-lg sm:text-2xl lg:text-3xl text-gray-900 mb-1 sm:mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                    >
                      {step.title}
                    </MotionH4>
                    <MotionP 
                      className="text-gray-600 text-sm sm:text-base leading-relaxed whitespace-pre-line"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    >
                      {step.description}
                    </MotionP>
                  </div>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};