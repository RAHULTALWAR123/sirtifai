/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Mail,ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Strongly typed motion components to fix TypeScript errors
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>

export const InsuranceSupportFAQSection = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <MotionDiv
        className="w-full lg:w-1/2 bg-white flex items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <MotionH2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Need Assistance?
          </MotionH2>
          <MotionP
            className="text-gray-600 mb-8 text-base lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our dedicated insurance support team is here to help you with any questions or concerns about your coverage.
          </MotionP>

          <div className="space-y-20">
            {[
              {
                icon: Mail,
                title: "Email Support",
                subtitle: "24-hour response time",
                action: "insurance@sirtifai.com",
                isLink: true,
              },
              // {
              //   icon: MessageCircle,
              //   title: "Live Chat",
              //   subtitle: "Available Monday-Friday, 9am-6pm IST",
              //   action: "Start Chat",
              //   isButton: true,
              // },
            ].map((contact, index) => (
              <MotionDiv
                key={index}
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              >
                <MotionDiv
                  className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <contact.icon className="w-6 h-6 text-[#FE7642]" />
                </MotionDiv>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg lg:text-xl">{contact.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{contact.subtitle}</p>
                  {contact.isLink ? (
                    <MotionA
                      href={`mailto:${contact.action}`}
                      className="text-[#FE7642] font-medium break-all text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      {contact.action}
                    </MotionA>
                  ) : (
                    <MotionButton
                      className="px-6 py-2 bg-[#FE7642] text-white rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {contact.action}
                    </MotionButton>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>

      <MotionDiv
        className="w-full lg:w-1/2 bg-[#FEE0D4] flex items-start py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <MotionH2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Frequently Asked Questions
          </MotionH2>
          <MotionP
            className="text-gray-600 mb-8 text-base lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Find quick answers to common questions about our insurance coverage and support services.
          </MotionP>

          <div className="space-y-6">
            {[
              {
                question: "What is covered under the basic insurance plan?",
                answer: "Our basic plan covers health insurance, accident coverage, and income protection for all program participants.",
              },
              {
                question: "How do I file a claim?",
                answer: "You can file a claim through your Sirtifai dashboard or contact our support team directly for assistance.",
              },
              {
                question: "Are pre-existing conditions covered?",
                answer: "Coverage for pre-existing conditions depends on the specific insurance provider and plan selected.",
              },
              {
                question: "What is the claim processing time?",
                answer: "Most claims are processed within 5-7 business days, with payments typically issued within 3-5 days after approval.",
              },
            ].map((faq, index) => (
              <MotionDiv
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              >
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </MotionDiv>
            ))}
          </div>

          {/* View All FAQ Button */}
          <MotionDiv
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <MotionButton
              className="flex items-center gap-2 text-[#FE7642] font-semibold hover:text-[#FE7642]/80 transition-colors"
              whileHover={{ x: 5 }}
            >
              View All FAQs
              <ArrowRight className="w-4 h-4" />
            </MotionButton>
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  )
}
