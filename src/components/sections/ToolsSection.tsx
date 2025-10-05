/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { CheckCircle2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>

interface ToolCard {
  id: string
  title: string
  description: string
  features: string[]
  buttonText: string
  image: string
}

const TOOL_CARDS: ToolCard[] = [
  {
    id: "career-quiz",
    title: "Career Quiz",
    description: "Discover your ideal career path based on your skills and interests",
    features: ["5-minute assessment", "Personalized recommendations", "Industry-specific insights"],
    buttonText: "Take Quiz Now",
    image: "/assets/learners/career_quiz.png", // <-- new field
  },
  {
    id: "ai-resume-score",
    title: "AI Resume Score",
    description: "Get instant feedback on your resume with AI-powered analysis",
    features: ["Interactive career paths", "Industry-specific scoring", "Actionable improvement tips"],
    buttonText: "Check Your Resume",
    image: "/assets/learners/resume.png",
  },
  {
    id: "job-role-mapping",
    title: "Career Quiz",
    description: "Discover your ideal career path based on your skills and interests",
    features: ["5-minute assessment", "Skill gap analysis", "Salary insights by location"],
    buttonText: "Explore Job Roles",
    image: "/assets/learners/job_role_mapping.png",
  },
]


export const ToolsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-50px" })
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const cardsInView = useInView(cardsRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-[#FEF7F1] py-20 px-3 sm:px-0"
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
            className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tools To Accelerate Your Journey
          </MotionH2>
          <MotionP
            className="text-sm sm:text-xl  text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Free resources to help you identify your strengths, plan your career path, and showcase your skills.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {TOOL_CARDS.map((tool, index) => (
            <MotionDiv
  key={tool.id}
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
  initial={{ opacity: 0, y: 50, scale: 0.9 }}
  animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
  transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
  whileHover={{ scale: 1.02, y: -5 }}
>
  {/* Card Header with Background Image */}
  <MotionDiv
    className="relative p-6 text-white h-80 flex flex-col justify-end"
    style={{
      backgroundImage: `url(${tool.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    initial={{ opacity: 0, y: -20 }}
    animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
    transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Text content */}
    <div className="relative z-10">
      <MotionH3
        className="text-xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.3, delay: 0.8 + index * 0.2 }}
      >
        {tool.title}
      </MotionH3>
      <MotionP
        className="text-sm leading-relaxed text-gray-100"
        initial={{ opacity: 0, x: -20 }}
        animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.3, delay: 1.0 + index * 0.2 }}
      >
        {tool.description}
      </MotionP>
    </div>
  </MotionDiv>

  {/* Card Body */}
  <MotionDiv
    className="p-6"
    initial={{ opacity: 0, y: 20 }}
    animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
  >
    <div className="space-y-3 mb-6">
      {tool.features.map((feature, featureIndex) => (
        <MotionDiv
          key={featureIndex}
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.3, delay: 1.0 + index * 0.2 + featureIndex * 0.1 }}
        >
          <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0" />
          <span className="text-gray-700 text-sm">{feature}</span>
        </MotionDiv>
      ))}
    </div>

    {/* <MotionButton
      className="w-full bg-orange-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-600 transition-colors"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {tool.buttonText}
    </MotionButton> */}
  </MotionDiv>
</MotionDiv>

          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
