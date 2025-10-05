/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import React from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

const MotionH2 = motion.h2 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const partners = [
  {
    id: 1,
    name: "CODEBRIDGE TRAINING",
    logo: "/assets/training partner program/logo-1.jpg",
    delay: 0.1
  },
  {
    id: 2,
    name: "BRIGHTMIND EDTECH",
    logo: "/assets/training partner program/logo-2.jpg",
    delay: 0.2
  },
  {
    id: 3,
    name: "SKILLSTACK ACADEMY",
    logo: "/assets/training partner program/Logo-3.jpg",
    delay: 0.3
  },
  {
    id: 4,
    name: "FUTURECODE LEARNING",
    logo: "/assets/training partner program/Logo-4.jpg",
    delay: 0.4
  },
  {
    id: 5,
    name: "TECHPRO LEARNING",
    logo: "/assets/training partner program/logo-5.png",
    delay: 0.5
  },
  {
    id: 6,
    name: "SKILLEDGE ACADEMY",
    logo: "/assets/training partner program/logo-6.jpg",
    delay: 0.6
  }
];

export const PartnerNetworkSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SAMPLE PARTNER NETWORK
          </MotionH2>
        </MotionDiv>

        {/* Partners Grid */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 lg:gap-8 xl:gap-12 sm:overflow-x-auto">
          {partners.map((partner, index) => (
            <MotionDiv
              key={partner.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: partner.delay }}
            >
              {/* Logo Container */}
              <MotionDiv
                className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 mb-4 rounded-2xl bg-white shadow-lg overflow-hidden border border-gray-100 flex-shrink-0"
                initial={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <MotionImg
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-cover object-center"
                />
              </MotionDiv>

              {/* Company Name */}
              <MotionP
                className="text-sm lg:text-base font-semibold text-gray-800 leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: partner.delay + 0.2 }}
              >
                {partner.name}
              </MotionP>
            </MotionDiv>
          ))}
        </div>



      </div>
    </section>
  );
};
