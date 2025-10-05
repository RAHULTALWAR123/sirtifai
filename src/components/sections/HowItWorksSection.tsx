/* eslint-disable @typescript-eslint/no-unused-vars */
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

const MotionH3 = motion.h3 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;
const MotionH4 = motion.h4 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & import('framer-motion').MotionProps
>;

const processSteps = [
  {
    id: 1,
    number: "01.",
    title: "Partner Onboarding",
    description: "Sign up as Sirtifai Training Partner.",
    isHighlighted: true,
    delay: 0.1
  },
  {
    id: 2,
    number: "02.",
    title: "Deliver Training",
    description: "6 months aligned to pod curriculum.",
    isHighlighted: false,
    delay: 0.2
  },
  {
    id: 3,
    number: "03.",
    title: "Provide Infra",
    description: "Monitors, laptops, rooms, trainers.",
    isHighlighted: false,
    delay: 0.3
  },
  {
    id: 4,
    number: "04.",
    title: "Submit Reports",
    description: "Attendance/progress to Sirtifai BDM's.",
    isHighlighted: false,
    delay: 0.4
  },
  {
    id: 5,
    number: "05.",
    title: "Monthly Billing",
    description: "Invoice + Verification on time.",
    isHighlighted: false,
    delay: 0.5
  }
];

export const HowItWorksSection = () => {
  return (
<section className="w-full bg-[#FEF7F1] py-16 lg:py-24 px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* HOW IT WORKS Section */}
        <MotionDiv
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <MotionH2
            className="text-2xl lg:text-4xl xl:text-5xl font-bold text-black text-center mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            HOW IT WORKS
          </MotionH2>

          {/* Process Steps - Mobile: Vertical Stack, Desktop: Horizontal Flow */}
          <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-4 lg:gap-4 lg:overflow-x-auto">
            {processSteps.map((step, index) => (
              <MotionDiv
                key={step.id}
                className={`flex flex-col items-center text-center px-4 py-4 lg:py-6 rounded-lg relative w-full lg:min-w-[220px] ${
                  step.isHighlighted 
                    ? 'bg-[#FE7642] text-white' 
                    : 'bg-white text-black'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: step.delay }}
              >
                {/* Step Number */}
                <MotionH3
                  className={`text-2xl lg:text-4xl font-bold mb-2 ${
                    step.isHighlighted ? 'text-white' : 'text-black'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: step.delay + 0.1 }}
                >
                  {step.number}
                </MotionH3>

                {/* Step Title */}
                <MotionH3
                  className={`text-base lg:text-xl font-bold mb-2 ${
                    step.isHighlighted ? 'text-white' : 'text-black'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: step.delay + 0.2 }}
                >
                  {step.title}
                </MotionH3>

                {/* Step Description */}
                <MotionP
                  className={`text-sm lg:text-base leading-relaxed ${
                    step.isHighlighted ? 'text-white' : 'text-gray-700'
                  }`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: step.delay + 0.3 }}
                >
                  {step.description}
                </MotionP>

                {/* Arrow connecting to next step - Only show on desktop */}
                {index < processSteps.length - 1 && (
                  <MotionDiv
                    className={`hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[12px] border-l-current border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ${
                      step.isHighlighted ? 'text-white' : 'text-gray-400'
                    }`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: step.delay + 0.4 }}
                  />
                )}
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Sirtifai - Our Process Section */}
        <MotionDiv
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Left Column - Image */}
          <MotionDiv
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <MotionImg
              src="/assets/training partner program/how-it-works.jpg"
              alt="Sirtifai Process - How it works illustration"
              className="w-full h-[250px] lg:h-[350px] object-cover rounded-lg shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />
          </MotionDiv>

          {/* Right Column - Text and Button */}
          <MotionDiv
            className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {/* Title */}
            <MotionH2
              className="text-2xl lg:text-4xl xl:text-5xl font-bold text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Sirtifai - Our Process
            </MotionH2>

            {/* Description */}
            <MotionP
              className="text-base lg:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Sirtifai boosts career prospects with tailored training and job placement. Sign up to set personal goals and gain hands-on experience. We connect you with employers for job placement and provide ongoing support to help you succeed. Join Sirtifai today for a successful career!
            </MotionP>

            {/* CTA Button */}
            <MotionDiv
              className="mt-2 lg:mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <MotionButton
                className="px-6 py-3 lg:px-8 lg:py-4 bg-[#FE7642] text-white rounded-full font-semibold text-base lg:text-lg hover:bg-[#e65a2e] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Sirtifai
              </MotionButton>
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
};
