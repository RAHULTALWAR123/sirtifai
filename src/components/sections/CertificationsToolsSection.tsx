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

interface CertificationTool {
  id: string
  title: string
  description: string
  features: string[]
  image: string
}

const CERTIFICATION_TOOLS: CertificationTool[] = [
  {
    id: "digital-certificates",
    title: "Digital Certificates with Verification QR - Anti-Fraud & Instant Proof",
    description: "Explain the security and convenience of Sirtifai's certification system.",
    features: [
      "Every certificate has a unique QR code",
      "Employers can verify within seconds — no calls or emails required",
      "Stored in the Sirtifai Digital Wallet for lifetime access.",
    ],
    image: "/assets/certification/certificate.png", // 🔹 add your image path here
  },
  {
    id: "certification-showcase",
    title: "Certification Showcase - Real Examples",
    description: "Display the design, detail, and prestige of Sirtifai certificates.",
    features: [
      "Skill Phase Certificate - Proof of domain learning & foundational project work.",
      "Practice Phase Certificate - Confirms paid project experience with payroll verification.",
      "Progress Phase Certificate - Confirms employability readiness and career track completion.",
    ],
    image: "/assets/certification/certificate2.png",
  },
  {
    id: "recruitment-help",
    title: "How Certifications Help You in Recruitment - Real-World Value",
    description: "Show tangible benefits of having a Sirtifai certificate during hiring.",
    features: [
      "Cuts Hiring Time: Employers can instantly verify skills without additional testing.",
      "Boosts Salary Negotiation: Verified work + NSQF credential allows higher initial offers.",
      "Unlocks Global Roles: Meets skill verification requirements for overseas job applications.",
      "Adds LinkedIn Credibility: Certificates link directly to public recruiter-facing pages.",
    ],
    image: "/assets/certification/certificate3.png",
  },
]

export const CertificationsToolsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-[#FEF7F1] py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionH2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tools To Accelerate Your Journey
          </MotionH2>
          <MotionP
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Free resources to help you identify your strengths, plan your career path, and showcase your skills.
          </MotionP>
        </MotionDiv>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATION_TOOLS.map((tool, index) => (
            <MotionDiv
              key={tool.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* 🔹 Top Image Section with Overlay */}
              <MotionDiv
                className="relative p-6 text-white h-40 flex flex-col justify-end"
                style={{
                  backgroundImage: `url(${tool.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
              >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10">
                  <MotionH3
                    className="text-lg font-bold mb-2 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  >
                    {tool.title}
                  </MotionH3>
                  <MotionP
                    className="text-sm leading-relaxed text-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.2 }}
                  >
                    {tool.description}
                  </MotionP>
                </div>
              </MotionDiv>

              {/* Bottom White Section */}
              <MotionDiv
                className="p-6"
                initial={{ opacity: 0 }}
                animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
                <div className="space-y-3">
                  {tool.features.map((feature, featureIndex) => (
                    <MotionDiv
                      key={featureIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 1.0 + index * 0.2 + featureIndex * 0.1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={sectionInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
