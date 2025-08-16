'use client';

import { RotatingGlobe } from '../ui/RotatingGlobe';
import { ACADEMIC_PARTNERS } from '../../constants/data';
import { motion } from 'framer-motion';
import React from 'react';

import PartnerLogo0 from "../../assets/Company logo.svg";
import PartnerLogo1 from "../../assets/Company logo (1).svg";
import PartnerLogo2 from "../../assets/Company logo (2).svg";
import PartnerLogo3 from "../../assets/Company logo (3).svg";
import PartnerLogo4 from "../../assets/Company logo (4).svg";
import PartnerLogo5 from "../../assets/Company logo (5).svg";
import PartnerLogo6 from "../../assets/Company logo (6).svg";

import { Morquee } from '../ui/Morquee';

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

export const PartnersSection = () => {
  const logos = [
    PartnerLogo0,
    PartnerLogo1,
    PartnerLogo2,
    PartnerLogo3,
    PartnerLogo4,
    PartnerLogo5,
    PartnerLogo6,
  ];
  const accLogos = [
    "/assets/about/university_logos/AU_University_Horizontal_COLOR_RGB.png",
    "/assets/about/university_logos/Arcadia-logo-color.jpg",
    "/assets/about/university_logos/CWRU_University_Formal_No_Tag_RGB_Blue.jpg",
    "/assets/about/university_logos/columbia_logo_1.png",
    "/assets/about/university_logos/ECON_logo.jpg",
  ];
  return (
    <section className="relative w-full bg-white pb-8">
      <div className=" sm:max-w-7xl mx-auto px-6">
        <MotionDiv 
          className="flex flex-col justify-center items-center gap-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side - Large Wireframe Globe */}

          {/* Right Side - Partner Categories */}
          <MotionDiv 
            className="flex flex-col justify-center items-center space-y-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <MotionDiv 
              className="text-center mt-6 sm:mt-24" 
              style={{ display: 'flex', justifyContent: 'center' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MotionH2 
                className="text-[10vw] text-shadow sm:text-6xl font-semibold sm:font-bold text-gray-900 mb-16 w-[80%] bg-white/10 backdrop-blur-xs rounded-lg p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Trusted By Leading Organisations..
              </MotionH2>
            </MotionDiv>

            {/* ACADEMIC PARTNERS */}
            <MotionDiv 
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MotionH3 
                className="text-2xl text-center font-bold text-gray-900 uppercase tracking-wider mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                ACADEMIC PARTNERS
              </MotionH3>
              <MotionDiv 
                className="w-full overflow-hidden bg-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="relative py-8">
                {/* flex animate-marquee space-x-32 */}
                  <div className="">
                    <Morquee logos={accLogos} />

                    
                  </div>
         
                </div>
              </MotionDiv>
            </MotionDiv>

          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
