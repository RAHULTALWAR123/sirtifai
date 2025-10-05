/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { BarChart3 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionDiv = motion.div as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>
const MotionSection = motion.section as React.ComponentType<any>
const MotionUl = motion.ul as React.ComponentType<any>
const MotionLi = motion.li as React.ComponentType<any>

export const CertificationsHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={heroRef}
      className="w-full py-20"
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Headline */}
            <MotionH1
              className="text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get Certified. Get Hired. Globally.
            </MotionH1>

            {/* Description */}
            <MotionP
              className="text-xl text-gray-700 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sirtifai certifications are NSQF-aligned, globally valid, and instantly verifiable — proof that your
              skills meet industry and employer standards worldwide.
            </MotionP>

            {/* Call-to-Action Links */}
            <MotionDiv
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-lg font-semibold text-gray-900">Join Now :</span>
              <div className="flex items-center gap-4">
                {/* <MotionA
                  href="/sirtifai-international"
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  International
                </MotionA> */}
                {/* <span className="text-gray-400">|</span> */}
                <MotionA
                  href="/freelancer"
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Post Graduate Certificate in Applied Profession
                </MotionA>
                {/* <span className="text-gray-400">|</span> */}
                {/* <MotionA
                  href="/program"
                  className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SPP
                </MotionA> */}
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Right Side - Graphic & Information Box */}
          <MotionDiv
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main 3D Illustration */}
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <MotionImg
                src="/assets/certification/main.png"
                alt="Sirtifai Certifications 3D Illustration"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = "flex"
                }}
              />

              {/* Fallback if image fails to load */}
              <MotionDiv
                className=" w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-orange-600 font-semibold">3D Illustration</p>
                </div>
              </MotionDiv>
            </div>

            {/* "Best For" Box */}
            <MotionDiv
              className="absolute bottom-8 right-8 bg-white rounded-xl p-6 shadow-xl border border-gray-100 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={heroInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Icon */}
              <div className="flex justify-end mb-3">
                <MotionDiv
                  className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={heroInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  <BarChart3 size={20} className="text-orange-500" />
                </MotionDiv>
              </div>

              {/* Title */}
              <MotionH3
                className="text-lg font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Best For
              </MotionH3>

              {/* Bullet Points */}
              <MotionUl
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <MotionLi
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">NSQF-certified and employer-approved.</span>
                </MotionLi>
                <MotionLi
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Verification QR on every certificate.</span>
                </MotionLi>
                <MotionLi
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 2.0 }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">
                    Recognized in India, MENA, SEA, and other global regions.
                  </span>
                </MotionLi>
              </MotionUl>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
