/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { MessageCircle, Mail, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>

export const ContactSupportSection = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={heroRef}
      className="relative w-full bg-black min-h-[500px] md:min-h-[560px]"
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contact/mainContact.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/70" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-[500px] md:min-h-[560px] pb-12 md:pb-16">
        {/* Top Section */}
        <div className="flex-1 flex items-start md:items-center px-5 xs:px-5 md:px-16 lg:px-24 pt-12 pb-6 md:py-0">
          <MotionDiv
            className="w-full max-w-[720px] md:pl-2 lg:pl-4 xl:pl-6"
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionH1
              className="text-[1.9rem] xs:text-[2.3rem] md:text-[3.9rem] lg:text-[4.25rem] xl:text-[4.5rem] font-bold text-white tracking-tight flex flex-col gap-1 md:gap-2 lg:gap-3 leading-[1.1] md:leading-[1.12] lg:leading-[1.15]"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MotionSpan
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Get in Touch
              </MotionSpan>
              <MotionSpan
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                with Sirtifai Support
              </MotionSpan>
            </MotionH1>
            <MotionP
              className="mt-6 md:mt-7 lg:mt-8 text-[13.25px] xs:text-[14px] md:text-[1.25rem] lg:text-[1.45rem] xl:text-[1.55rem] text-white/90 leading-relaxed max-w-[60ch]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Have a question about our programmes, payments, certifications, or career support? Our  dedicated team is here to assist you via WhatsApp, Email, or Phone.
            </MotionP>

            {/* Contact Options (list style like design) */}
            <MotionDiv
              className="mt-8 md:mt-10 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-6 sm:gap-10"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {/* WhatsApp */}
              <MotionA
                href="https://wa.me/917013540039"
                aria-label="Chat with us on WhatsApp"
                className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MotionDiv
                  className="w-10 h-10 md:w-11 md:h-11 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MessageCircle size={20} className="text-white" />
                </MotionDiv>
                <span className="text-base md:text-xl lg:text-[1.55rem] font-medium">Chat with Us</span>
              </MotionA>
              {/* Email */}
              <MotionA
                href="mailto:support@sirtifai.com"
                aria-label="Email us"
                className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MotionDiv
                  className="w-10 h-10 md:w-11 md:h-11 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail size={20} className="text-white" />
                </MotionDiv>
                <span className="text-base md:text-xl lg:text-[1.55rem] font-medium">Email Us</span>
              </MotionA>
              {/* Call */}
              <MotionA
                href="tel:+0000000000"
                aria-label="Call us"
                className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MotionDiv
                  className="w-10 h-10 md:w-11 md:h-11 bg-white/20 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone size={20} className="text-white" />
                </MotionDiv>
                <span className="text-base md:text-xl lg:text-[1.55rem] font-medium">Call Us</span>
              </MotionA>
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Bottom Join Now Bar (raised with padding below to let image peek) */}
        <MotionDiv
          className="mt-10 md:mt-14 bg-black/40 backdrop-blur-md px-5 xs:px-5 md:px-16 lg:px-24 py-4 md:py-5 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 text-white text-sm sm:text-base lg:text-lg shadow-lg md:mx-10 lg:mx-20 xl:mx-28"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#FE7642] tracking-wide">Join Now :</span>
            <nav className="flex items-center gap-x-4 gap-y-2 flex-wrap">
              <MotionA
                href="/program"
                className="hover:text-orange-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SPP 
              </MotionA>
              <span className="hidden sm:inline text-blue-400/60">|</span>
              <MotionA
                href="/freelancer"
                className="hover:text-orange-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Freelancer
              </MotionA>
              <span className="hidden sm:inline text-blue-400/60">|</span>
              <MotionA
                href="/sirtifai-international"
                className="hover:text-orange-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                International
              </MotionA>
            </nav>
          </div>
          <MotionDiv
            className="text-white/50 text-xs sm:text-sm lg:text-base"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 0.5 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            24/7 Support • Avg response &lt; 24h
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
