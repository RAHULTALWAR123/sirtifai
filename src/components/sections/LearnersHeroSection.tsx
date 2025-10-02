"use client"
import { CalendarCheck } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>

export const LearnersHeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)

  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-50px" })
  const leftInView = useInView(leftContentRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const rightInView = useInView(rightContentRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-80 items-center">
          <MotionDiv
            ref={leftContentRef}
            className="-mt-16"
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionDiv
              className="mb-8 relative pt-12 sm:pt-0"
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MotionSpan
                className="absolute right-[10%] sm:-right-[26vw] -top-[1%] sm:-top-12"
                initial={{ opacity: 0, rotate: -45, scale: 0 }}
                animate={leftInView ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -45, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <img className="sm:h-14 sm:w-20 h-8 w-12" src="/assets/15.svg" alt="star" />
              </MotionSpan>
              <MotionH1
                className=" text-4xl sm:text-7xl text-wrap sm:text-nowrap font-semibold font-Open Sans text-gray-900 mb-6 tracking-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Find Your Path To Success
              </MotionH1>

              <MotionP
                className="text-sm sm:text-lg text-gray-700 leading-relaxed font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Discover personalised learning paths, industry-relevant tools, and support tailored to your career
                goals.
              </MotionP>
            </MotionDiv>

            <MotionDiv
              className="sm:flex flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {/* <MotionButton
                className="flex relative w-fit sm:w-auto items-center justify-between pl-4 pr-2 py-2 sm:px-[12px] sm:-mr-2 sm:mb-0 mb-7 sm:py-1 bg-[#243946] text-white rounded-full border border-white hover:bg-[#1b2c38] transition-colors font-semibold text-base shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex -ml-2 items-center border  rounded-full px-5 py-1.5 border-zinc-300">
                  <span className="tracking-wide ">Book A Demo</span>
                  <MotionDiv
                    className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center ml-3"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CalendarCheck size={20} className="text-white" />
                  </MotionDiv>
                </div>
              </MotionButton> */}

              <MotionDiv
                className="sm:hidden flex items-center gap-4 sm:-mt-0 -mt-7"
                initial={{ opacity: 0, y: 20 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <span className="sm:text-lg text-xs sm:font-semibold text-orange-500 sm:text-gray-900">Join Now :</span>
                <div className="flex items-center gap-4">
                  <MotionA
                    href="#"
                    className="text-orange-500 sm:text-lg text-xs sm:font-semibold hover:text-orange-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    SPP Int
                  </MotionA>
                  <span className="text-gray-400">|</span>
                  <MotionA
                    href="#"
                    className="text-orange-500 sm:text-lg text-xs sm:font-semibold hover:text-orange-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    SPP Freelance
                  </MotionA>
                  <span className="text-gray-400">|</span>
                  <MotionA
                    href="#"
                    className="text-orange-500 sm:text-lg text-xs sm:font-semibold hover:text-orange-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    SPP Student
                  </MotionA>
                </div>
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            ref={rightContentRef}
            className=" relative w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] sm:flex hidden  items-center justify-center sm:ml-12 sm:mt-14  "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={rightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.svg
              className=" absolute inset-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0, rotate: -90 }}
              animate={rightInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -90 }}
              transition={{ duration: 1.0, delay: 0.5 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <motion.circle
                cx="50%"
                cy="63%"
                r="80"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={rightInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 0.7 }}
              />
            </motion.svg>

            <div className="flex items-center justify-center relative">
              <MotionDiv
                className="absolute -mt-16 sm:-mt-12 h-18 w-18 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={rightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src="/assets/learners/center.gif"
                  alt="Center Animation"
                  className="w-full h-full rounded-full object-cover"
                />
              </MotionDiv>

              <MotionDiv
                className="absolute mt-52 sm:mt-65 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={rightInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.1, rotate: 360 }}
              >
                <img src="/assets/ic_round-wifi-tethering.svg" alt="Wifi Icon" className="w-10 h-10" />
              </MotionDiv>
            </div>

            <MotionImg
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute top-[-1%] left-1/2 -translate-x-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              initial={{ opacity: 0, y: -50, scale: 0 }}
              animate={rightInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              whileHover={{ scale: 1.1, y: -5 }}
            />
            <MotionImg
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute top-[42%] right-0 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              initial={{ opacity: 0, x: 50, scale: 0 }}
              animate={rightInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              whileHover={{ scale: 1.1, x: 5 }}
            />
            <MotionImg
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute bottom-[12%] right-0 translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              initial={{ opacity: 0, y: 50, x: 50, scale: 0 }}
              animate={rightInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y: 50, x: 50, scale: 0 }}
              transition={{ duration: 0.4, delay: 1.6 }}
              whileHover={{ scale: 1.1, y: 5, x: 5 }}
            />
            <MotionImg
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute bottom-[12%] left-0 translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              initial={{ opacity: 0, y: 50, x: -50, scale: 0 }}
              animate={rightInView ? { opacity: 1, y: 0, x: 0, scale: 1 } : { opacity: 0, y: 50, x: -50, scale: 0 }}
              transition={{ duration: 0.4, delay: 1.8 }}
              whileHover={{ scale: 1.1, y: 5, x: -5 }}
            />
            <MotionImg
              src="/assets/learners/l.png"
              alt="Profile"
              className="absolute top-[42%] left-0 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg object-cover"
              initial={{ opacity: 0, x: -50, scale: 0 }}
              animate={rightInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0 }}
              transition={{ duration: 0.4, delay: 2.0 }}
              whileHover={{ scale: 1.1, x: -5 }}
            />
          </MotionDiv>

          <MotionDiv
            className="block sm:hidden w-[350px] h-[370px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={rightInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <img src="/assets/image.png" alt="Mobile Version" className="w-full h-full object-contain" />
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
