/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { motion } from "framer-motion"
import Image from "next/image"

// Strongly typed motion components to fix TypeScript errors
const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>
const PROVIDERS = [
  { name: "Tata AIG", logo: "/assets/insurance/tata.png" },
  { name: "New India Assurance", logo: "/assets/insurance/new_India.png" },
  { name: "HDFC ERGO", logo: "/assets/insurance/hdfc.png" },
  { name: "ICICI Lombard", logo: "/assets/insurance/icici.png" },

  { name: "Chubb", logo: "/assets/insurance/chubb.png" },
  { name: "Hiscox", logo: "/assets/insurance/hiscox.png" },
  { name: "Lloyd's", logo: "/assets/insurance/llyod.webp" },
]

const firstRow = PROVIDERS.slice(0, 4);
const secondRow = PROVIDERS.slice(4);


export const InsuranceNetworkSection = () => {
  return (
    <MotionSection
      className="w-full bg-white py-8 sm:py-12 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <MotionH2
            className="text-[2.2rem] xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Insurance Network
          </MotionH2>
           <MotionP
            className="text-gray-600 text-base xs:text-lg lg:text-xl mb-8 max-w-3xl xl:max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We&apos;ve partnered with leading insurance providers to ensure comprehensive and reliable coverage.
          </MotionP>

           <MotionDiv
  className="flex flex-col items-center gap-y-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  {/* First row (4 items) */}
  <div className="flex justify-center flex-wrap gap-x-8">
    {firstRow.map((provider, index) => (
      <MotionDiv
        key={provider.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="flex justify-center"
      >
        <Image
          src={provider.logo}
          alt={provider.name}
          width={140}
          height={60}
          className="object-contain"
        />
      </MotionDiv>
    ))}
  </div>

  {/* Second row (3 items) */}
  <div className="flex justify-center flex-wrap gap-x-8">
    {secondRow.map((provider, index) => (
      <MotionDiv
        key={provider.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="flex justify-center"
      >
        <Image
          src={provider.logo}
          alt={provider.name}
          width={140}
          height={60}
          className="object-contain"
        />
      </MotionDiv>
    ))}
  </div>
</MotionDiv>

        </div>

        <MotionDiv
          className="bg-[#FFE5D6] rounded-xl sm:rounded-2xl overflow-hidden max-w-full mx-auto shadow-2xl shadow-black/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <MotionDiv
            className="text-center py-5 sm:py-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <MotionH3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Available Insurance Add-ons</MotionH3>
          </MotionDiv>

          {/* Table Header */}
          <MotionDiv
            className="hidden sm:grid grid-cols-12 border-t border-b border-white/40 px-4 sm:px-6 py-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <span className="text-[#FE7642] font-semibold col-span-2">Add-on</span>
            <span className="text-[#FE7642] font-semibold col-span-6">Description</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Availability</span>
            <span className="text-[#FE7642] font-semibold col-span-2">Cost</span>
          </MotionDiv>

          {/* Mobile Table Header */}
          <MotionDiv
            className="grid sm:hidden grid-cols-4 border-t border-b border-white/40 px-2 py-2 text-xs font-semibold text-[#FE7642]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <span className="col-span-1">Add-on</span>
            <span className="col-span-1">Description</span>
            <span className="col-span-1">Availability</span>
            <span className="col-span-1">Cost</span>
          </MotionDiv>

          {/* Table Rows */}
          {[
            {
              addon: "Health Insurance",
              description: "Comprehensive health coverage including hospitalization, OPD, and critical illness",
              availability: "All Programs",
              cost: "₹500/month",
            },
            {
              addon: "Accident Coverage",
              description: "Protection against accidents with disability and death benefits",
              availability: "All Programs",
              cost: "₹200/month",
            },
            {
              addon: "Professional Liability",
              description: "Coverage for professional errors, omissions, and negligence claims",
              availability: "Freelancer Programs",
              cost: "₹300/month",
            },
            {
              addon: "Income Protection",
              description: "Monthly income replacement if unable to work due to illness or injury",
              availability: "All Programs",
              cost: "₹400/month",
            },
            {
              addon: "Travel Insurance",
              description: "Coverage for domestic and international travel including medical emergencies",
              availability: "International Programs",
              cost: "₹150/month",
            },
          ].map((row, index) => (
            <MotionDiv
              key={index}
              className="grid grid-cols-4 sm:grid-cols-12 border-b border-white/40 px-2 sm:px-6 py-3 sm:py-4 hover:bg-white/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
            >
              <div className="col-span-1 sm:col-span-2 font-semibold text-gray-900 text-sm sm:text-base">
                {row.addon}
              </div>
              <div className="col-span-1 sm:col-span-6 text-gray-700 text-xs sm:text-sm leading-relaxed">
                {row.description}
              </div>
              <div className="col-span-1 sm:col-span-2 text-gray-600 text-xs sm:text-sm">
                {row.availability}
              </div>
              <div className="col-span-1 sm:col-span-2 font-semibold text-[#FE7642] text-xs sm:text-sm">
                {row.cost}
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Bottom CTA */}
        <MotionDiv
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <MotionP
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            Customize your insurance coverage based on your specific needs and program requirements.
          </MotionP>
          {/* <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <button className="bg-[#FE7642] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FE7642]/90 transition-colors">
              Get Insurance Quote
            </button>
            <button className="bg-white text-[#FE7642] border-2 border-[#FE7642] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FE7642] hover:text-white transition-colors">
              View All Add-ons
            </button>
          </MotionDiv> */}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
