/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { MessageCircle, ImageIcon, HeadphonesIcon } from "lucide-react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>

export const SupportServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <style>{`
        @media (max-width: 767px){
          .double-border-btn{position:relative;background:#1f2937;color:#fff;border-radius:9999px;padding:.9rem 2.3rem;font-weight:600;font-size:.95rem;display:inline-flex;align-items:center;gap:.9rem;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.06);} 
          .double-border-btn::before{content:'';position:absolute;top:6px;left:6px;right:6px;bottom:6px;border:1px solid rgba(255,255,255,.45);border-radius:9999px;pointer-events:none;} 
          .double-border-btn:hover{background:#111827;}
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Heading */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mobile Single-Line Heading */}
            <MotionH2
              className="block md:hidden text-[1.85rem] xs:text-[2.05rem] font-bold text-gray-900 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              What we Support you with
            </MotionH2>
            {/* Desktop / Tablet Multi-Line Heading (unchanged) */}
            <MotionH2
              className="hidden md:block text-[3.6rem] lg:text-[3.9rem] xl:text-[4.1rem] font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MotionSpan
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                What we
              </MotionSpan>
              <MotionSpan
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Support you
              </MotionSpan>
              <MotionSpan
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                with
              </MotionSpan>
            </MotionH2>
          </MotionDiv>

          {/* Right Column - Support Image with Overlay Cards */}
          <MotionDiv
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={sectionInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Background Support Image */}
            <div className="relative w-3/4 md:w-full h-[460px] md:h-[600px] ml-0 md:ml-auto">
              <MotionImg
                src="/assets/contact/support.jpg"
                alt="Support Services"
                className="object-cover rounded-lg w-full h-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const fallback = (e.target as HTMLElement).parentElement?.querySelector(
                    ".image-fallback",
                  ) as HTMLElement
                  if (fallback) fallback.classList.remove("hidden")
                }}
              />

              {/* Fallback if image fails to load */}
              <div className="image-fallback hidden absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full opacity-60"></div>
                  </div>
                  <p className="text-gray-600">Support Services</p>
                </div>
              </div>

              {/* Overlay Support Service Cards */}

              {/* Program Support Card - Desktop */}
              <MotionDiv
                className="hidden md:block absolute top-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[300px]"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={sectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/contact/program.png"
                    alt="Program Support"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-gray-900 font-medium text-sm">Program Support</span>
                  <MotionDiv
                    className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <MessageCircle size={14} className="text-white" />
                  </MotionDiv>
                </div>
              </MotionDiv>

              {/* Certification Verification Card - Desktop */}
              <MotionDiv
                className="hidden md:block absolute top-8 right-0 md:right-auto md:-left-8 bg-white rounded-lg p-4 shadow-lg max-w-[300px]"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={sectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/contact/certfication.png"
                    alt="Certification Verification"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-gray-900 font-medium text-sm">Certification Verification</span>
                  <MotionDiv
                    className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <MessageCircle size={14} className="text-white" />
                  </MotionDiv>
                </div>
              </MotionDiv>

              {/* Technical Support Card - Desktop */}
              <MotionDiv
                className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[300px]"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={sectionInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/contact/technical.png"
                    alt="Technical Support"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-gray-900 font-medium text-sm">Technical Support</span>
                  <MotionDiv
                    className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <MessageCircle size={14} className="text-white" />
                  </MotionDiv>
                </div>
              </MotionDiv>

              {/* Career Services Card - Desktop */}
              <MotionDiv
                className="hidden md:block absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white rounded-lg p-4 shadow-lg max-w-[300px]"
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={sectionInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: -20 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/contact/career.png"
                    alt="Career Services"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-gray-900 font-medium text-sm">Career Services</span>
                  <MotionDiv
                    className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <MessageCircle size={14} className="text-white" />
                  </MotionDiv>
                </div>
              </MotionDiv>

              {/* Payment Assistance Card - Desktop */}
              <MotionDiv
                className="hidden md:block absolute bottom-8 -right-8 bg-white rounded-lg p-4 shadow-lg max-w-[300px]"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={sectionInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/contact/payment.png"
                    alt="Payment Assistance"
                    width={40}
                    height={40}
                    className="rounded-full shrink-0"
                  />
                  <span className="text-gray-900 font-medium text-sm">Payment Assistance</span>
                  <MotionDiv
                    className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center shadow-sm ml-auto shrink-0"
                    whileHover={{ rotate: 10 }}
                  >
                    <MessageCircle size={14} className="text-white" />
                  </MotionDiv>
                </div>
              </MotionDiv>

              {/* Floating Icon - Desktop Only */}
              <MotionDiv
                className="hidden md:flex absolute top-3/4 -right-4 w-6 h-6 bg-orange-500 rounded-lg items-center justify-center"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={sectionInView ? { opacity: 1, scale: 1, rotate: 12 } : { opacity: 0, scale: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.2, rotate: 22 }}
              >
                <ImageIcon size={14} className="text-white" />
              </MotionDiv>

              {/* Mobile Vertical Cards */}
              <div className="md:hidden absolute top-4 left-1/2 -translate-x-[5%] flex flex-col items-end gap-3.5">
                {[
                  "Program Support",
                  "Certification Verification",
                  "Technical Support",
                  "Career Services",
                  "Payment Assistance",
                ].map((label, index) => {
                  const imgMap: Record<string, string> = {
                    "Program Support": "/assets/contact/program.png",
                    "Certification Verification": "/assets/contact/certfication.png",
                    "Technical Support": "/assets/contact/technical.png",
                    "Career Services": "/assets/contact/career.png",
                    "Payment Assistance": "/assets/contact/payment.png",
                  }
                  return (
                    <MotionDiv
                      key={label}
                      className="bg-[#FFF6EE]/95 backdrop-blur-sm w-[230px] rounded-md px-3.5 py-2.5 shadow-lg flex items-center gap-3"
                      initial={{ opacity: 0, x: 30, scale: 0.9 }}
                      animate={sectionInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: -5 }}
                    >
                      <Image src={imgMap[label] || "/placeholder.svg"} alt={label} width={40} height={40} />
                      <span className="text-gray-900 font-medium text-[12.5px] leading-snug tracking-tight">
                        {label}
                      </span>
                    </MotionDiv>
                  )
                })}
                {/* Overlapping Contact Button */}
                <MotionButton
                  className="double-border-btn mt-1.5 flex items-center justify-between w-[230px] px-5 py-3 text-[0.9rem] gap-3 shadow-lg"
                  initial={{ opacity: 0, x: 30, scale: 0.9 }}
                  animate={sectionInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="tracking-wide">Contact Us</span>
                  <span className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center border border-white/40">
                    <HeadphonesIcon size={14} className="text-gray-700" />
                  </span>
                </MotionButton>
              </div>
            </div>

            {/* Contact Us Button - Desktop (retain original) */}
            <MotionDiv
              className="hidden md:block mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <MotionButton
                className="flex items-center gap-3 bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors shadow-md border-2 border-blue-500 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <HeadphonesIcon size={20} className="text-blue-700" />
                </div>
              </MotionButton>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
