"use client"

import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

const MotionDiv = motion.div as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>

export default function UpcomingProjectsHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionDiv
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-12 pb-24 md:py-20"
      style={{ backgroundColor: "#FFEAD6" }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MotionDiv
        className="absolute top-1/2 left-0 h-[300px] w-[300px] -translate-x-1/4 -translate-y-1/2 transform rounded-full bg-orange-200 opacity-80 sm:h-[500px] sm:w-[500px] lg:left-[50px]"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-8 lg:px-8">
        <MotionDiv
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionH1
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Upcoming
            <br />
            Projects
          </MotionH1>
          <MotionP
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-700 sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Inclusive Support, Mentorship, and Resources for Underrepresented Students
          </MotionP>
          <MotionDiv
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href={"/freelancer"}>
            <MotionButton
              className="transform  cursor-pointer rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition-transform hover:scale-105 hover:bg-orange-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Apply Now
            </MotionButton>
              </Link>
              <Link href={"/contact"}>
            <MotionButton
              className="transform  cursor-pointer rounded-full border border-orange-300 px-8 py-3 font-medium text-orange-600 transition-transform hover:scale-105 hover:bg-orange-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Contact
            </MotionButton>
              </Link>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="flex flex-1 flex-col items-center w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Mobile / Tablet Layered Images */}
          <MotionDiv
            className="relative w-full flex justify-center lg:hidden mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-[260px] sm:w-[320px] h-[230px] sm:h-[280px]">
              <MotionDiv
                className="absolute -bottom-4 -left-6 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-tr from-orange-300 via-orange-200 to-orange-100 rounded-full blur-2xl opacity-70"
                initial={{ scale: 0, rotate: 90 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 90 }}
                transition={{ duration: 1.0, delay: 0.7 }}
              />
              <MotionDiv
                className="absolute top-0 left-0 w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white z-20 bg-white rotate-[-2deg]"
                initial={{ opacity: 0, y: 50, rotate: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: -2 } : { opacity: 0, y: 50, rotate: -20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <img
                  src="/assets/about/project-first.png"
                  alt="Students collaborating"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </MotionDiv>
              <MotionDiv
                className="absolute top-6 left-20 sm:left-24 w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white z-10 bg-white rotate-3"
                initial={{ opacity: 0, y: 50, rotate: 20 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 3 } : { opacity: 0, y: 50, rotate: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <img
                  src="/assets/about/project-second.png"
                  alt="Focused student at computer"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </MotionDiv>
            </div>
          </MotionDiv>

          <MotionDiv
            className="lg:hidden w-full flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <MotionDiv
              className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm rounded-2xl bg-white/90 backdrop-blur shadow-lg border border-orange-100 p-4"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
                All the help you can get in one place. I feel supported by members and I know that I can get any kind of
                help.
              </p>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            className="hidden lg:flex relative w-full justify-center gap-6 mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <MotionDiv
              className="h-96 w-64 overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <img
                src="/assets/about/project-first.png"
                alt="Students working together"
                className="h-full w-full object-cover"
              />
            </MotionDiv>
            <MotionDiv
              className="h-96 w-64 overflow-hidden rounded-2xl shadow-lg mt-24"
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: 5 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <img
                src="/assets/about/project-second.png"
                alt="Student at computer"
                className="h-full w-full object-cover"
              />
            </MotionDiv>
            <MotionDiv
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 max-w-md rounded-full bg-white p-5 shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
                All the help you can get in one place. I feel supported by members and I know that I can get any kind of
                help.
              </p>
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}
