"use client"

import { ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionH2 = motion.h2
const MotionP = motion.p
const MotionButton = motion.button

export const SkillsProofBanner = () => {
  const bannerRef = useRef(null)
  const bannerInView = useInView(bannerRef, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={bannerRef}
      className="w-full py-16"
      style={{ backgroundColor: "#FE7743" }}
      initial={{ opacity: 0 }}
      animate={bannerInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side - Text Content */}
          <MotionDiv
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={bannerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionH2
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Skills Deserve Proof Employers Can Trust
            </MotionH2>
            <MotionP
              className="text-xl text-white opacity-90 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={bannerInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Get certified with Sirtifai and turn your learning into job-ready credentials accepted worldwide.
            </MotionP>
          </MotionDiv>

          {/* Right Side - Call-to-Action Button */}
          <MotionDiv
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={bannerInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MotionButton
              className="bg-white text-[#FE7743] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Join a certified program
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <ChevronRight size={20} className="text-[#FE7743]" />
              </motion.div>
            </MotionButton>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
