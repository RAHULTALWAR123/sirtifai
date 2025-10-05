'use client';

import { MEMBERSHIP_RECOGNITION } from '../../constants/data';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import { Morquee } from '../ui/Morquee';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH3 = motion.h3 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionH6 = motion.h6 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

export const PartnersRecognitionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  const corpLogos = [
    "/assets/home/Logos/sonyLogo.svg",
    "/assets/home/Logos/hpLogo.webp",
    "/assets/home/Logos/adobeLogo.webp",
    "/assets/home/Logos/adobeLogo.webp",
    "/assets/home/Logos/amazonLogo.png",
    "/assets/home/Logos/dropbox.svg",
    "/assets/home/Logos/firefoxLogo.png",
    "/assets/home/Logos/intelLogo.png",
    "/assets/home/Logos/ytLogo.webp",
    "/assets/home/Logos/netFlixLogo.webp",
    "/assets/home/Logos/IBM.webp",
    "/assets/home/Logos/sapLogo.jpeg",
    "/assets/home/Logos/zoomLogo.png",
    "/assets/home/Logos/walmartLogo.png",
    "/assets/home/Logos/cocacola.png",
    "/assets/home/Logos/fedexLogo.png",
    "/assets/home/Logos/fbLogo.jpg",
    "/assets/home/Logos/oracleLogo.jpg",
    "/assets/home/Logos/xLogo.webp",
    "/assets/home/Logos/GoogleLogo.png",
    "/assets/home/Logos/mircrosoftLogo.jpg",
    "/assets/home/Logos/linkiedLogo.webp",
    "/assets/about/salesPartner.jpeg"
  ];
  return (
    <section ref={ref} className="w-full bg-white pt-0 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* CORPORATE PARTNERS Section */}
        <MotionDiv 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH3 
            className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CORPORATE PARTNERS
          </MotionH3>
          <MotionDiv 
            className="flex justify-center gap-8 sm:gap-30 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative py-8">
              <div className="">
                <Morquee logos={corpLogos} />
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* MEMBERSHIP & RECOGNITION Section */}
 
        <MotionDiv
  className="text-center relative z-10"
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <div className="flex justify-center">
    <MotionDiv
      className="bg-white rounded-4xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-100 w-full max-w-6xl relative -mb-24"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.8, delay: 0.8 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <MotionH6
        className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 uppercase tracking-wider mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        MEMBERSHIP & RECOGNITION
      </MotionH6>

      {/* Responsive Grid instead of fixed flex gap */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center lg:gap-16 gap-6 sm:gap-8">
        {MEMBERSHIP_RECOGNITION.map((cert, index) => (
          <MotionDiv
            key={cert.id}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-28 sm:w-32 lg:w-36 h-16 sm:h-20 flex items-center justify-center mb-1">
              <MotionImg
                src={cert.logo}
                alt={cert.name}
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain max-w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              {/* Fallback text */}
              <div
                className={`text-sm sm:text-base font-bold ${cert.color} hidden`}
              >
                {cert.name}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  </div>
</MotionDiv>

      </div>
    </section>
  );
};
