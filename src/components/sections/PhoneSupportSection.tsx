/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Check, Phone, MessageCircle, BarChart3, ImageIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>
const MotionLi = motion.li as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>

export const PhoneSupportSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-[#FFF8F3] py-10 sm:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Local style for hero-style double border pill button */}
      <style>{`
        .double-border-btn {position:relative;background:#1f2937;color:#fff;border-radius:9999px;padding:.85rem 1.9rem;font-weight:600;font-size:.95rem;display:inline-flex;align-items:center;gap:1rem;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);} 
        .double-border-btn::before {content:'';position:absolute;top:6px;left:6px;right:6px;bottom:6px;border:1px solid rgba(255,255,255,.45);border-radius:9999px;pointer-events:none;} 
        .double-border-btn:hover {background:#111827;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);} 
      `}</style>
      <div className="max-w-7xl mx-auto px-5 xs:px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
          {/* Image (hidden on small to match mobile design focus) */}
          <MotionDiv
            className="relative hidden sm:block"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={sectionInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[380px] md:h-[460px]">
              <MotionImg
                src="/assets/contact/contact.jpg"
                alt="Typewriter with Contact"
                className="object-cover rounded-lg w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const fallback = (e.target as HTMLElement).parentElement?.querySelector(
                    ".image-fallback",
                  ) as HTMLElement
                  if (fallback) fallback.classList.remove("hidden")
                }}
              />
              <div className="image-fallback hidden absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg items-center justify-center">
                <div className="text-center">
                  <div className="w-28 h-28 bg-gray-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-600 text-sm">Typewriter with Contact</p>
                </div>
              </div>

              {/* Desktop overlay cards */}
              <div className="hidden lg:block">
                {/* Availability Card */}
                <MotionDiv
                  className="absolute -top-4 left-4 bg-white rounded-md shadow-lg px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={sectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-gray-500" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[13px] font-medium text-gray-900 leading-none">Availability</p>
                      <p className="text-[11px] text-gray-600 leading-none">10:00 AM–6:00PM</p>
                    </div>
                  </div>
                  <MotionDiv
                    className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <MessageCircle size={14} className="text-white" />
                  </MotionDiv>
                </MotionDiv>

                {/* Best For Card */}
                <MotionDiv
                  className="absolute top-24 md:top-28 right-0 bg-white rounded-md shadow-lg px-4 py-3 w-[180px]"
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={sectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-[12px] font-semibold text-gray-800">Best For</p>
                    <MotionDiv
                      className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                    >
                      <BarChart3 size={13} className="text-white" />
                    </MotionDiv>
                  </div>
                  <ul className="text-[11px] leading-[1.15rem] text-gray-700 space-y-0.5">
                    <li>• Verify Certificates</li>
                    <li>• Refund/payment Issues</li>
                    <li>• Tech issue Reports</li>
                    <li>• Formal Communication</li>
                  </ul>
                </MotionDiv>

                {/* Support Message Card */}
                <MotionDiv
                  className="absolute bottom-6 left-6 bg-white rounded-md shadow-lg px-4 py-2.5 flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={sectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <MotionDiv
                    className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 10 }}
                  >
                    <Check size={12} className="text-white" />
                  </MotionDiv>
                  <p className="text-[12px] text-gray-700">We are always there for you</p>
                </MotionDiv>

                {/* Floating orange square icon */}
                <MotionDiv
                  className="absolute top-32 -left-3 w-8 h-8 bg-orange-500 rounded-md rotate-12 flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={sectionInView ? { opacity: 1, scale: 1, rotate: 12 } : { opacity: 0, scale: 0, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.1, rotate: 22 }}
                >
                  <ImageIcon size={18} className="text-white -rotate-12" />
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>

          {/* Content Column */}
          <MotionDiv
            className="bg-[#FFF8F3] rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MotionH2
              className="text-[1.85rem] xs:text-[2.2rem] md:text-[3.4rem] lg:text-[3.7rem] xl:text-[3.9rem] font-bold text-gray-900 leading-[1.07] mb-6 md:mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <MotionSpan
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Phone Support-
              </MotionSpan>
              <MotionSpan
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Direct & Personal
              </MotionSpan>
            </MotionH2>

            {/* Purpose */}
            <MotionDiv
              className="flex items-start gap-2.5 mb-5"
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <MotionDiv
                className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                initial={{ scale: 0 }}
                animate={sectionInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                whileHover={{ scale: 1.1 }}
              >
                <Check size={12} className="text-white" />
              </MotionDiv>
              <MotionP
                className="text-gray-800 text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                <span className="font-semibold">Purpose: </span>
                For urgent, time-sensitive, or complex queries
              </MotionP>
            </MotionDiv>

            {/* Content Details */}
            <MotionDiv
              className="flex items-start gap-2.5 mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <MotionDiv
                className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                initial={{ scale: 0 }}
                animate={sectionInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <Check size={12} className="text-white" />
              </MotionDiv>
              <div className="text-gray-800 text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] leading-relaxed max-w-xl w-full">
                <span className="font-semibold block mb-1">Content:</span>
                <ul className="list-disc pl-5 space-y-1.5 marker:text-gray-600">
                  {/* <MotionLi
                    initial={{ opacity: 0, x: -10 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                  >
                    <span className="font-semibold">Number:</span> 91-xxxxxxxxxxx
                  </MotionLi> */}
                  <MotionLi
                    initial={{ opacity: 0, x: -10 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                  >
                    <span className="font-semibold">Availability:</span> 10:00 AM-6:00PM
                  </MotionLi>
                  <MotionLi
                    initial={{ opacity: 0, x: -10 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                  >
                    <span className="font-semibold">Languages Supported:</span>
                    <br />
                    English, Hindi, Telugu & Tamil
                  </MotionLi>
                </ul>
              </div>
            </MotionDiv>

            {/* Call Button aligned right (mobile too) */}
            {/* <MotionDiv
              className="mt-8 flex w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <MotionA
                href="tel:+919000000000"
                className="double-border-btn ml-auto lg:ml-0 !px-8 !py-3 !text-sm sm:!text-base font-semibold group"
                aria-label="Call Support"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Call Now</span>
                <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center border border-white/40 group-hover:bg-gray-100 transition-colors">
                  <Phone size={14} className="text-gray-700" />
                </span>
              </MotionA>
            </MotionDiv> */}
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
