/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>

interface AudienceCard {
  id: string
  title: string
  description: string
  topBorderColor: string
  iconBgColor: string
  iconColor: string
}

const AUDIENCE_CARDS: AudienceCard[] = [
  {
    id: "students",
    title: "Students",
    description: "Build industry-ready skills while completing your education",
    topBorderColor: "border-orange-500",
    iconBgColor: "bg-blue-100",
    iconColor: "bg-blue-500",
  },
  {
    id: "jobseekers",
    title: "Jobseekers",
    description: "Gain practical experience and get placed in your dream role",
    topBorderColor: "border-yellow-400",
    iconBgColor: "bg-orange-100",
    iconColor: "bg-orange-500",
  },
  {
    id: "freelancers",
    title: "Freelancers",
    description: "Upgrade your skills and earn more with verified projects",
    topBorderColor: "border-yellow-300",
    iconBgColor: "bg-orange-100",
    iconColor: "bg-orange-400",
  },
  {
    id: "women",
    title: "Women",
    description: "Flexible programs for career starters and returners",
    topBorderColor: "border-pink-400",
    iconBgColor: "bg-purple-100",
    iconColor: "bg-purple-500",
  },
  {
    id: "tier-cities",
    title: "Tier-2/3 Cities",
    description: "Access global opportunities from anywhere in India",
    topBorderColor: "border-pink-300",
    iconBgColor: "bg-blue-100",
    iconColor: "bg-blue-500",
  },
]

export const WhoCanJoinSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-50px" })
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const cardsInView = useInView(cardsRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-white py-20"
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
            Who Can Join Sirtifai
          </MotionH2>
          <MotionP
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our programs are designed to support learners from diverse backgrounds and career stages.
          </MotionP>
        </MotionDiv>

        <MotionDiv
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {AUDIENCE_CARDS.map((card, index) => (
            <MotionDiv
              key={card.id}
              className={`bg-white rounded-xl shadow-lg border-t-4 ${card.topBorderColor} p-6 text-center hover:shadow-xl transition-shadow`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <MotionDiv
                className={`w-16 h-16 ${card.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                initial={{ opacity: 0, scale: 0 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ rotate: 360 }}
              >
                <div className={`w-8 h-8 ${card.iconColor} rounded-full flex items-center justify-center`}>
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </MotionDiv>
              <MotionH3
                className="text-lg font-semibold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                {card.title}
              </MotionH3>
              <MotionP
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
              >
                {card.description}
              </MotionP>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
