"use client"

import type React from "react"

import { Sun, Folder, QrCode, Eye } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionH4 = motion.h4 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>

interface BenefitItem {
  id: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
}

const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: "nsqf-certifications",
    icon: Sun,
    title: "NSQF Aligned Certifications",
    description: "Government-recognized skill qualifications that validate your expertise.",
  },
  {
    id: "digital-portfolio",
    icon: Folder,
    title: "Digital Portfolio",
    description: "Showcase real-world projects completed during your learning journey.",
  },
  {
    id: "verifiable-credentials",
    icon: QrCode,
    title: "Verifiable Credentials",
    description: "QR-code verified certificates that employers can instantly validate.",
  },
]

export const PortfolioCertificationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const rightContentRef = useRef<HTMLDivElement>(null)

  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-50px" })
  const leftInView = useInView(leftContentRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const rightInView = useInView(rightContentRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-white py-20 px-3 sm:px-0"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionDiv
            ref={leftContentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionDiv
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MotionH2
                className="sm:text-4xl text-3xl font-semibold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Portfolio & Certification
              </MotionH2>
              <MotionP
                className="sm:text-xl text-sm text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Build a professional portfolio and earn industry-recognized certifications that help you stand out to
                employers.
              </MotionP>
            </MotionDiv>

            <MotionDiv
              className="space-y-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {BENEFIT_ITEMS.map((benefit, index) => (
                <MotionDiv
                  key={benefit.id}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  <MotionDiv
                    className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={leftInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                  >
                    <benefit.icon size={24} className="text-orange-500" />
                  </MotionDiv>
                  <div>
                    <MotionH3
                      className="text-lg font-semibold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.2 }}
                    >
                      {benefit.title}
                    </MotionH3>
                    <MotionP
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 1.4 + index * 0.2 }}
                    >
                      {benefit.description}
                    </MotionP>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* <MotionA
              href="#"
              className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.8 }}
              whileHover={{ x: 5 }}
            >
              Learn more about our certifications →
            </MotionA> */}
          </MotionDiv>

          <MotionDiv
            ref={rightContentRef}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MotionDiv
              className="absolute inset-0 bg-orange-100 rounded-3xl transform rotate-3 scale-105"
              initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
              animate={rightInView ? { opacity: 1, rotate: 3, scale: 1.05 } : { opacity: 0, rotate: -10, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <MotionDiv
              className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={rightInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <MotionDiv
                className="flex items-start justify-between mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div>
                  <MotionH3
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0, x: -20 }}
                    animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                  >
                    Rahul Sharma
                  </MotionH3>
                  <MotionP
                    className="text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={rightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                  >
                    Full Stack Developer
                  </MotionP>
                </div>
                <MotionDiv
                  className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={rightInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  Certified
                </MotionDiv>
              </MotionDiv>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-500 text-sm mb-1">NSQF Level</p>
                  <p className="text-orange-500 font-bold">6 Advanced</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Projects</p>
                  <p className="text-orange-500 font-bold">12 Completed</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-gray-900 font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {["React.js", "Node.js", "MongoDB", "AWS"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    +5 more
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-green-600 text-sm font-medium">Verified</span>
                </div>
              </div>

              <MotionDiv
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                {/* <MotionButton
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={20} className="mr-2" />
                  View Full Portfolio
                </MotionButton> */}
              </MotionDiv>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
