/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>

interface JourneyStep {
  id: string
  number: number
  title: string
  description: string
  features: string[]
  color: string
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "skill",
    number: 1,
    title: "SKILL",
    description: "Master in-demand skills through structured learning paths and hands-on projects.",
    features: ["Expert-led live sessions", "Industry-relevant curriculum", "Practical assignments"],
    color: "bg-[#607294]",
  },
  {
    id: "practice",
    number: 2,
    title: "PRACTICE",
    description: "Apply your skills on real client projects while earning a steady income.",
    features: ["Verified client projects", "₹12K-₹35K monthly earnings", "Professional portfolio building"],
    color: "bg-orange-500",
  },
  {
    id: "progress",
    number: 3,
    title: "PROGRESS",
    description: "Get placed in your dream job with ongoing career support.",
    features: ["Job placement assistance", "Interview preparation", "Lifetime career support"],
    color: "bg-green-500",
  },
]

export const LearningJourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-50px" })
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const stepsInView = useInView(stepsRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-[#FEF7F1] py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <MotionDiv
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <MotionH2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Learning Journey
          </MotionH2>
          <MotionP
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A structured path that takes you from skill acquisition to career success.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          ref={stepsRef}
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionDiv
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={stepsInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-16">
            {JOURNEY_STEPS.map((step, index) => (
              <MotionDiv
                key={step.id}
                className="relative flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.3 }}
              >
                <MotionDiv
                  className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg z-10 relative`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={stepsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                >
                  {step.number}
                </MotionDiv>

                <MotionDiv
                  className="w-1 h-8 bg-blue-200"
                  initial={{ scaleY: 0 }}
                  animate={stepsInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.3 }}
                />

                <MotionDiv
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 w-full max-w-2xl"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={stepsInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <MotionH3
                    className={`text-2xl font-bold mb-4 text-left ${
                      index === 0 ? "text-[#607294]" : index === 1 ? "text-orange-500" : "text-green-500"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.3 }}
                  >
                    {step.title}
                  </MotionH3>

                  <MotionP
                    className="text-gray-600 mb-6 text-left leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.3 }}
                  >
                    {step.description}
                  </MotionP>

                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <MotionDiv
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 1.4 + index * 0.3 + featureIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </MotionDiv>
                    ))}
                  </div>
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
