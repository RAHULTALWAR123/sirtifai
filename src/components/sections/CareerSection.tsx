/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>

export default function PartnersAndCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionDiv
      ref={sectionRef}
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MotionDiv
        className="bg-[#FF6F3C] text-white py-8 px-6 sm:px-10 lg:px-20 flex flex-col md:flex-row items-start justify-between gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MotionDiv
          className="text-left max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <MotionH2
            className="text-lg sm:text-xl md:text-2xl font-bold mb-2 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Your career starts here — and grows for life
          </MotionH2>
          <MotionP
            className="text-sm sm:text-base text-white/85"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Our advisors will help you choose the right plan — domestic or international — based on your career goals.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          className="mt-4 md:mt-0 flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href={"/contact"}>
          <MotionButton
            className="bg-white cursor-pointer text-[#FF6F3C] px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            >
            Book free career call →
          </MotionButton>
            </Link>
        </MotionDiv>
      </MotionDiv>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </MotionDiv>
  )
}
