/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>

export const ContactFeaturesBanner = () => {
  const bannerRef = useRef<HTMLDivElement>(null)
  const bannerInView = useInView(bannerRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={bannerRef}
      className="hidden md:block w-full bg-[#FFF8F3] py-8"
      initial={{ opacity: 0 }}
      animate={bannerInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-orange-500">
          {/* Fast Response */}
          <MotionDiv
            className="flex-1 text-center px-6 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <MotionH3
              className="text-xl font-bold text-[#FF6B35]"
              initial={{ opacity: 0, y: 20 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              Fast Response
            </MotionH3>
            <MotionP
              className="text-black mt-1"
              initial={{ opacity: 0, y: 15 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              during working hours
            </MotionP>
          </MotionDiv>

          {/* Dedicated Support */}
          <MotionDiv
            className="flex-1 text-center px-6 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <MotionH3
              className="text-xl font-bold text-[#FF6B35]"
              initial={{ opacity: 0, y: 20 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Dedicated support
            </MotionH3>
            <MotionP
              className="text-black mt-1"
              initial={{ opacity: 0, y: 15 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              for learners, employers, and partners.
            </MotionP>
          </MotionDiv>

          {/* Multi-language Assistance */}
          <MotionDiv
            className="flex-1 text-center px-6 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <MotionH3
              className="text-xl font-bold text-[#FF6B35]"
              initial={{ opacity: 0, y: 20 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Multi-language assistance
            </MotionH3>
            <MotionP
              className="text-black mt-1"
              initial={{ opacity: 0, y: 15 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              for wider reach
            </MotionP>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
