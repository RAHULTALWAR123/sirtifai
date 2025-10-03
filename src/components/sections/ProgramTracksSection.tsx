'use client';
import { CheckCircle } from 'lucide-react';
import { PROGRAM_TRACKS } from '../../constants/data';
import { Button } from '../ui/Button';
import { BsCheckCircleFill } from 'react-icons/bs';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionH3 = motion.h3 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionH4 = motion.h4 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

export const ProgramTracksSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#FEF7F1]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <MotionDiv 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2 
            className="text-orange-500 font-open-sans text-lg font-semibold uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Program Tracks Overview
          </MotionH2>
          <MotionH3 
            className="text-[10vw] leading-tight sm:leading-none sm:text-5xl font-semibold sm:font-bold text-gray-900 font-open-sans"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose Your Path To <span className="text-orange-500">Success</span>
          </MotionH3>
        </MotionDiv>

        {/* Program Tracks Grid */}
        <div className="gap-8 justify-items-end place-items-end">
          {PROGRAM_TRACKS.map((track, index) => {
  const IconComponent = track.icon;
  const isHighlighted = track.variant === "highlighted";

  return (
    <MotionDiv
      key={track.id}
      className={`
        rounded-2xl w-full p-6 sm:p-8 transition-all duration-300 hover:scale-105 
        flex flex-col items-center
        ${
          isHighlighted
            ? "order-1 md:order-none bg-orange-500 text-white shadow-2xl"
            : "order-2 md:order-none bg-white text-gray-900 shadow-lg hover:shadow-xl"
        }
      `}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Title */}
      <MotionH4
        className="text-xl sm:text-2xl font-bold mb-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
      >
        {track.title}
      </MotionH4>

      {/* Subtitle */}
      <MotionP
        className={`text-center mb-6 sm:mb-8 text-sm sm:text-base ${
          isHighlighted ? "text-white/80" : "text-gray-600"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
      >
        {track.subtitle}
      </MotionP>

      {/* Features Container */}
      <div
        className={`w-full sm:w-3/4 lg:w-2/3 mx-auto flex flex-col justify-center items-center sm:items-center p-4 sm:p-6 rounded-xl gap-4 sm:gap-6 text-gray-900 ${
          isHighlighted ? "bg-white" : "bg-[#F9FAFB]"
        }`}
      >
        <div className="space-y-2 sm:space-y-3 w-full">
          {track.features?.map((feature, featureIndex) => (
            <MotionDiv
              key={featureIndex}
              className="flex items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.2 + featureIndex * 0.1,
              }}
            >
              <BsCheckCircleFill
                className="flex-shrink-0 mt-0.5 text-orange-500"
                size={16}
              />
              <span
                className={`text-xs sm:text-sm leading-snug sm:leading-normal ${
                  isHighlighted ? "" : "text-gray-700"
                }`}
              >
                {feature}
              </span>
            </MotionDiv>
          ))}
        </div>

        {/* Button */}
        <MotionDiv
          className="text-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
        >
          <a href={track.href}>
            <Button
              variant={isHighlighted ? "primary" : "outline"}
              size="md"
              className={`w-full sm:w-60 h-[50px] sm:h-[60px] cursor-pointer ${
                isHighlighted
                  ? "bg-orange-50 text-orange-500 hover:bg-gray-50 border-white"
                  : "border-orange-500 text-orange-500 hover:bg-white"
              }`}
            >
              {track.buttonText}
            </Button>
          </a>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
})}

        </div>
      </div>
    </section>
  );
};
