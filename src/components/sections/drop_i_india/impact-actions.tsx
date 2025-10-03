"use client"

import { motion } from "framer-motion"
import type { MotionProps } from "framer-motion"
import React, { useState } from "react"
import DonateModal from "./DonateModal"

// Typed motion components
const MotionDiv = motion.div as unknown as React.FC<React.HTMLAttributes<HTMLDivElement> & MotionProps>
const MotionH2 = motion.h2 as unknown as React.FC<React.HTMLAttributes<HTMLHeadingElement> & MotionProps>
const MotionP = motion.p as unknown as React.FC<React.HTMLAttributes<HTMLParagraphElement> & MotionProps>
const MotionButton = motion.button as unknown as React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps>

// Variants
const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export default function ImpactActions() {
    const [isDonateModalOpen, setDonateModalOpen] = useState(false)

  return (
    <section className="relative mx-auto px-4 pb-12 sm:pb-16">
      {/* Background Image (optional) */}
      {/* <div className="absolute inset-0 z-0">
    <Image
      src="/assets/drop_i_india/autumn.jpg"
      alt="autumn"
      fill
      className="object-cover opacity-20 w-[100vw]"
      priority
    />
  </div> */}

      {/* Quote Box */}
      <MotionDiv
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4, margin: "-100px 0px -100px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto w-full sm:w-[70%] rounded-md bg-[#FEF7F1] py-4 sm:py-6 shadow-2xl relative z-10 px-3 sm:px-0"
     >
        <MotionH2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center font-sans text-base sm:text-4xl font-extrabold tracking-wide text-[#FE7743]"
        >
          “Every Drop Counts. Make Yours Matter.”
        </MotionH2>
      </MotionDiv>

      {/* Description + Buttons */}
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
        className="max-w-2xl mx-auto px-2 sm:px-4 pb-12 pt-10 sm:pt-20 relative z-10"
      >
        <div className="space-y-4 text-gray-700">
          <MotionP variants={itemVariants} className="text-sm sm:text-lg leading-5 sm:leading-6 text-center">
            “Every Drop Counts. Make Yours Matter.” is a powerful reminder that even the smallest
            actions can create meaningful impact. Just like a single drop of water contributes
            to filling an ocean, every individual effort—whether it’s donating, volunteering, or
            spreading awareness—adds up to create lasting change. The phrase emphasizes both
            collective responsibility and personal accountability, inspiring people not to
            underestimate their contribution. It’s a call to action that urges everyone to
            recognize the value of their role and to use it for something bigger than themselves.
            Ultimately, it means that no effort is too small, and when we choose to make our
            “drop” count, we help shape a better, brighter future.
          </MotionP>
        </div>

        {/* Buttons */}
        <MotionDiv variants={itemVariants} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
           <MotionButton
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            onClick={() => setDonateModalOpen(true)}
            className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#FE7743] hover:bg-[#FE7743] text-white font-medium text-sm md:text-base px-4 md:px-10 py-2 md:py-4 shadow-sm transition-colors"
          >
            Donate Now

          </MotionButton>
          {/* <MotionButton
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-[#284050] hover:bg-[#284050] text-white font-medium text-sm md:text-base px-4 md:px-10 py-2 md:py-4 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Schedule A Free Call
          </MotionButton> */}
        </MotionDiv>
      </MotionDiv>
            <DonateModal isOpen={isDonateModalOpen} onClose={() => setDonateModalOpen(false)} />


    </section>

  )
}
