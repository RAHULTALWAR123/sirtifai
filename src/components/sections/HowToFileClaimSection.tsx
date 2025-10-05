/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Clock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Strongly typed motion components to fix TypeScript errors
const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>

export const HowToFileClaimSection = () => {
  return (
    <MotionSection
      className="w-full bg-[#FEF7F1] py-8 sm:py-12 px-2 xs:px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl sm:max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <MotionH2
            className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How To File A Claim
          </MotionH2>
          <MotionP
            className="text-gray-600 text-base xs:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We&apos;ve made the claim process simple and straightforward to ensure you get the support you need quickly.
          </MotionP>
        </div>

        {/* Four-Step Process Flow */}
        <div className="ml-2 md:ml-0 relative flex flex-col gap-0 pl-4 xs:pl-5 sm:pl-4 pr-2 xs:pr-3 sm:pr-4">
          {/* Vertical Line */}
          <MotionDiv
            className="absolute left-6 xs:left-8 sm:left-12 top-8 bottom-0 w-px bg-gray-300 z-0"
            style={{ height: "calc(100% - 2rem)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />

          {[
            {
              title: "Submit Claim Request",
              desc: "Log in to your Sirtifai account and navigate to the Insurance section. Select 'File a Claim' and choose the appropriate claim type.",
              info: [
                "Your SPP ID and program details",
                "Date and nature of the issue",
                "Brief description of your claim",
              ],
            },
            {
              title: "Documentation Submission",
              desc: "Upload all required documentation to support your claim. Our system will guide you through the specific documents needed based on your claim type.",
              info: [
                "Proof of completed work (for payment claims)",
                "Communication records with clients/employers",
                "Any relevant contracts or agreements",
                "Additional documentation specific to your claim"
              ],
            },
            {
              title: "Claim Review",
              desc: "Our insurance team will review your claim and documentation. You'll receive regular updates on the status of your claim through your preferred communication channel.",
              icon: Clock,
              iconText: "Most claims are reviewed within 5-7 business days.",
            },
            {
              title: "Resolution & Payment",
              desc: "Once your claim is approved, you'll receive the appropriate compensation or support based on your coverage. Payments are typically processed within 3-5 business days after approval.",
              icon: CheckCircle,
              iconText: "Direct deposit to your registered bank account",
            },
          ].map((step, index) => (
            <MotionDiv
              key={index}
              className="relative flex items-start gap-3 xs:gap-5 sm:gap-8 mb-10 sm:mb-12 pl-2 xs:pl-4 sm:pl-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
            >
              <MotionDiv
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#FE7642] rounded-full flex items-center justify-center z-10 mt-0.5 translate-x-[-55%] sm:translate-x-[-50%]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 500, delay: 1.0 + index * 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </MotionDiv>

              {/* Step Content */}
              <div className="flex-1">
                <MotionH2
                  className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.3 }}
                >
                  {step.title}
                </MotionH2>
                <MotionP
                  className="text-gray-600 text-sm xs:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.3 }}
                >
                  {step.desc}
                </MotionP>

                {/* Step-specific content */}
                {step.info && (
                  <MotionDiv
                    className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.3 }}
                  >
                    <ul className="space-y-2 text-sm text-gray-700">
                      {step.info.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FE7642] rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </MotionDiv>
                )}

                {/* Icon and additional info for specific steps */}
                {step.icon && step.iconText && (
                  <MotionDiv
                    className="mt-4 flex items-center gap-3 bg-[#FE7642]/10 rounded-lg p-3 sm:p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.3 }}
                  >
                    <step.icon className="w-5 h-5 text-[#FE7642] flex-shrink-0" />
                    <span className="text-sm text-[#FE7642] font-medium">{step.iconText}</span>
                  </MotionDiv>
                )}
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Bottom CTA */}
        <MotionDiv
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <MotionP
            className="text-gray-600 text-base sm:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            Need help with your claim? Our support team is here to assist you every step of the way.
          </MotionP>
          <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            {/* <button className="bg-[#FE7642] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FE7642]/90 transition-colors">
              File a Claim
            </button> */}
            <Link href={"/contact"}>
            <button className="bg-white text-[#FE7642] border-2 border-[#FE7642] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FE7642] hover:text-white transition-colors">
              Contact Support
            </button>
            </Link>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
