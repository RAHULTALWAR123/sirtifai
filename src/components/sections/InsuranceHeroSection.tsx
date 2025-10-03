"use client"
import Image from "next/image"
import { motion } from "framer-motion"

// Strongly typed motion components to fix TypeScript errors
const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>

const insuranceImage = "/assets/insurance/Rectangle-9.png"
const star = "/assets/star.png"

export const InsuranceHeroSection = () => {
  return (
    <>
      <style>
        {`
          .double-border-btn { position: relative; background: #1f2937; color: white; border-radius: 9999px; padding: 0.65rem 1.25rem; font-weight: 600; font-size: 0.95rem; transition: all 0.3s ease; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06); }
          @media (min-width:640px){ .double-border-btn { padding: 1rem 2rem; font-size: 1.125rem; } }
          .double-border-btn::before { content:''; position:absolute; top:6px; left:6px; right:6px; bottom:6px; background:transparent; border:1px solid rgba(255,255,255,0.45); border-radius:9999px; z-index:1; pointer-events:none; }
          .double-border-btn:hover { background:#111827; box-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05); }
          .mobile-hex-clip { clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%); }
        `}
      </style>

      {/* Insurance Hero Section */}
      <MotionSection
        className="w-full flex flex-col md:flex-row justify-between items-start overflow-hidden relative px-5 sm:px-6 md:px-8 xl:px-12 pt-8 md:pt-14 pb-10 md:pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side - Content */}
        <div className="flex-1 max-w-[1150px] md:pr-6 lg:pr-10">
          <MotionH1
            className="font-sans font-medium text-[2.45rem] xs:text-[2.9rem] sm:text-6xl md:text-[4.2rem] lg:text-[5.3rem] leading-[1.1] tracking-tight text-[#0F0F0F]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionSpan
              className="block font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your Career.
              <span className="inline-block align-middle ml-1 sm:ml-2">
                <MotionDiv
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Image
                    src={star || "/placeholder.svg"}
                    alt="Star"
                    width={30}
                    height={30}
                    className="inline w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px] relative -top-1 sm:-top-2 md:-top-3 lg:-top-4"
                    priority
                  />
                </MotionDiv>
              </span>
            </MotionSpan>
            <MotionSpan
              className="block font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your Earnings.
            </MotionSpan>
            <MotionSpan
              className="block font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Fully Protected.
            </MotionSpan>
          </MotionH1>

          <MotionDiv
            className="mt-8 ml-20 overflow-hidden mb-4 md:hidden w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div
              className="relative w-[300px] xs:w-[320px] h-[180px] xs:h-[190px] overflow-hidden"
              style={{
                clipPath: "polygon(20px 0%, 100% 0%, 100% 100%, 20px 100%, 0% 50%)",
              }}
            >
              <Image
                src={insuranceImage || "/placeholder.svg"}
                alt="Insurance coverage visual"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </MotionDiv>

          <MotionP
            className="text-[#666666] text-base sm:text-lg md:text-xl lg:text-2xl max-w-[600px] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We understand the importance of security in your career journey. Our comprehensive insurance coverage ensures your skills, earnings, and career progression are protected at every step.
          </MotionP>

          {/* CTA Buttons */}
          {/* <MotionDiv
            className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <MotionButton className="double-border-btn">
              Check Your Coverage
            </MotionButton>
            <MotionButton className="double-border-btn bg-white text-[#1f2937] border-2 border-[#1f2937] hover:bg-[#1f2937] hover:text-white">
              File A Claim
            </MotionButton>
          </MotionDiv> */}
        </div>

        {/* Right Side - Image */}
        <MotionDiv
          className="hidden md:block flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full h-[500px] lg:h-[600px]">
            <Image
              src={insuranceImage || "/placeholder.svg"}
              alt="Insurance coverage visual"
              fill
              className="object-cover object-center rounded-2xl"
              priority
            />
            
            {/* Floating stats card */}
            <MotionDiv
              className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FE7642] mb-2">₹50L+</div>
                <div className="text-sm text-gray-600">Total Coverage Provided</div>
              </div>
            </MotionDiv>

            <MotionDiv
              className="absolute -bottom-6 -right-6 bg-[#FE7642] text-white rounded-xl shadow-lg p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.8%</div>
                <div className="text-sm opacity-90">Claim Success Rate</div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </MotionSection>
    </>
  )
}
