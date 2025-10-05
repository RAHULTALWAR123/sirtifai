/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Shield, Users, HeartPulse, Globe, FileCheck, Truck } from "lucide-react"
import { motion } from "framer-motion"

// Strongly typed motion components to fix TypeScript errors
const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionUl = motion.ul as React.ComponentType<any>
const MotionLi = motion.li as React.ComponentType<any>

export const CoverageAtAGlanceSection = () => {
  return (
    <MotionSection
      className="w-full bg-white py-10 sm:py-16 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto text-center">
        {/* Title */}
        <MotionH2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Coverage At A Glance
        </MotionH2>
        <MotionP
          className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our insurance plans are tailored to your specific program needs, ensuring comprehensive protection throughout
          your journey.
        </MotionP>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {/* Card 1 - Domestic Freelancer Protection */}
          <MotionDiv
            className="relative bg-white rounded-2xl shadow-xl shadow-black/10 p-8 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-yellow-400 to-orange-400" />

            {/* Badge */}
            <MotionDiv
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">Up to ₹40,000/month</span>
            </MotionDiv>

            {/* Icon */}
            <MotionDiv
              className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 500, delay: 1.0 }}
            >
              <Shield className="w-6 h-6 text-orange-500" />
            </MotionDiv>

            {/* Heading */}
            <MotionH3
              className="text-xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Domestic Freelancer Protection
            </MotionH3>

            {/* Features */}
            <MotionUl className="space-y-4 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Payment Guarantee",
                  desc: "Ensures you receive payment for all completed work",
                },
                { icon: Users, title: "EPF & ESI Coverage", desc: "Social security benefits through formal payroll" },
                {
                  icon: HeartPulse,
                  title: "Health & Accident Coverage",
                  desc: "Basic medical and accident protection",
                },
              ].map((item, index) => (
                <MotionLi
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-3 h-3 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </MotionLi>
              ))}
            </MotionUl>

            {/* CTA Button */}
            {/* <MotionDiv
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
View Detailed Coverage              </button>
            </MotionDiv> */}
          </MotionDiv>

          {/* Card 2 - International Student Protection */}
          <MotionDiv
            className="relative bg-white rounded-2xl shadow-xl shadow-black/10 p-8 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r from-blue-400 to-purple-400" />

            {/* Badge */}
            <MotionDiv
              className="absolute top-6 right-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">Up to ₹80,000/month</span>
            </MotionDiv>

            {/* Icon */}
            <MotionDiv
              className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 500, delay: 1.2 }}
            >
              <Globe className="w-6 h-6 text-blue-500" />
            </MotionDiv>

            {/* Heading */}
            <MotionH3
              className="text-xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              International Student Protection
            </MotionH3>

            {/* Features */}
            <MotionUl className="space-y-4 mb-8">
              {[
                {
                  icon: FileCheck,
                  title: "Global Placement Assurance",
                  desc: "Compensation if placement doesn't materialize",
                },
                { icon: Truck, title: "Visa Process Coverage", desc: "Financial protection during visa application" },
                {
                  icon: HeartPulse,
                  title: "Relocation Support",
                  desc: "Coverage for initial relocation expenses",
                },
              ].map((item, index) => (
                <MotionLi
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-3 h-3 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </MotionLi>
              ))}
            </MotionUl>

            {/* CTA Button */}
            {/* <MotionDiv
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                View Detailed Coverage
              </button>
            </MotionDiv> */}
          </MotionDiv>
        </div>

        {/* Bottom CTA */}
        <MotionDiv
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <MotionP
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Ready to get protected? Choose the plan that fits your needs.
          </MotionP>
          {/* <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors">
              Get Domestic Coverage
            </button>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors">
              Get International Coverage
            </button>
          </MotionDiv> */}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
