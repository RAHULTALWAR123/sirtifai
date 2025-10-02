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
            const isHighlighted = track.variant === 'highlighted';
            
            return (
              <MotionDiv
                key={track.id}
                className={`rounded-2xl w-full ${index % 2 === 0 ? 'h-[408px]' : 'h-[570px]'} p-8 transition-all duration-300 hover:scale-105 ${
                  isHighlighted
                    ? 'order-1 md:order-none bg-orange-500 text-white shadow-2xl'
                    : 'order-2 md:order-none bg-white text-gray-900 shadow-lg hover:shadow-xl'
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                
                {/* <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  isHighlighted ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  <IconComponent 
                    size={32} 
                    className={isHighlighted ? 'text-white' : 'text-gray-600'} 
                  />
                </div> */}

                {/* Title */}
                <MotionH4 
                  className="text-2xl font-bold mb-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {track.title}
                </MotionH4>

                {/* Subtitle */}
                <MotionP 
                  className={`text-center mb-8 ${
                    isHighlighted ? 'text-white/80' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                >
                  {track.subtitle}
                </MotionP>

                <div className={`w-1/2 mx-auto flex flex-col justify-center items-center p-6 rounded-xl gap-6 text-gray-900 ${
                  isHighlighted
                    ? ' bg-white'
                    : 'bg-[#F9FAFB]'
                }`}>
                {/* Features */}
                <div className="sm:space-y-4 mb-4">
                  {track.features?.map((feature, featureIndex) => (
                    <MotionDiv 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 + featureIndex * 0.1 }}
                    >
                      <BsCheckCircleFill 
                        size={20} 
                        className={`flex-shrink-0 mt-0.5 text-orange-500`} 
                      />
                      <span className={`text-sm ${
                        isHighlighted ? '' : 'text-gray-700'
                      }`}>
                        {feature}
                      </span>
                    </MotionDiv>
                  ))}
                </div>

                {/* Button */}
                <MotionDiv 
                  className="text-center w-60"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                >
                  <a href={track.href} >
                  <Button
                    variant={isHighlighted ? 'primary' : 'outline'}
                    size="md"
                    className={`w-full h-[60px] cursor-pointer ${
                      isHighlighted 
                        ? 'bg-orange-50 text-orange-500 hover:bg-gray-50 border-white' 
                        : 'border-orange-500 text-orange-500 hover:bg-white'
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
