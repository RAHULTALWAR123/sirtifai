/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>

export const NSQFCredibilitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-[#FEF7F1] py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Orange Banner */}
        <MotionDiv
          className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionDiv
            className="bg-orange-500 text-white sm:px-6 px-2 py-3 rounded-lg font-bold text-xs sm:text-lg whitespace-nowrap"
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            NSQF-Certified Programs - Credibility & Compliance
          </MotionDiv>
          <MotionP
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, x: 30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Establish that Sirtifai certifications are officially recognized and structured to national skill standards.
          </MotionP>
        </MotionDiv>

        {/* Main Content Box - Dark Blue with Three Columns */}
        <MotionDiv
          className="bg-gray-900 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 - What is NSQF? */}
            <MotionDiv
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <MotionH3
                className="text-xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.0 }}
              >
                What is NSQF?
              </MotionH3>
              <MotionP
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                National Skills Qualifications Framework, a government-approved standard aligning learning outcomes with
                job roles.
              </MotionP>
            </MotionDiv>

            {/* Column 2 - Why it matters */}
            <MotionDiv
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <MotionH3
                className="text-xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Why it matters:
              </MotionH3>
              <MotionP
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                Ensures your qualification matches the skill level employers expect.
              </MotionP>
            </MotionDiv>

            {/* Column 3 - How Sirtifai applies it */}
            <MotionDiv
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <MotionH3
                className="text-xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                How Sirtifai applies it:
              </MotionH3>
              <MotionP
                className="text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                Every Skill, Practice, and Progress phase is mapped to specific NSQF levels for accurate, job-ready
                skill benchmarking.
              </MotionP>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
