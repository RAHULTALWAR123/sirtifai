/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionSpan = motion.span as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>

export const ContactCTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null)
  const ctaInView = useInView(ctaRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={ctaRef}
      className="w-full bg-[#FE7642] text-white font-sans py-14 md:py-20 px-5"
      initial={{ opacity: 0 }}
      animate={ctaInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <style>{`
        .cta-pill{position:relative;display:inline-flex;align-items:center;justify-content:center;font-weight:600;border-radius:9999px;transition:.25s cubic-bezier(.4,0,.2,1);letter-spacing:.05em;white-space:nowrap;}
        .cta-pill:focus-visible{outline:2px solid #fff;outline-offset:2px;}
        @media (max-width: 767px){
          /* Match global mobile pill sizing (.contact-pill-btn pattern) */
          .cta-group-mobile .cta-pill{font-size:.9rem;padding:.8rem 1.9rem;}
          .cta-group-mobile .cta-row .cta-pill{width:100%;}
          .cta-group-mobile .cta-call{width:70%;}
        }
      `}</style>
      <div className="max-w-4xl md:max-w-4xl mx-auto text-center space-y-8 md:space-y-8">
        <MotionH2
          className="font-semibold tracking-tight leading-[1.18] md:leading-[1.12] text-[2rem] xs:text-[2.2rem] md:text-[2.85rem] lg:text-[3.05rem] xl:text-[3.2rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MotionSpan
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            &ldquo;Your Career Questions
          </MotionSpan>
          <MotionSpan
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Deserve Instant Answers&rdquo;
          </MotionSpan>
        </MotionH2>
        <MotionP
          className="max-w-xl md:max-w-[52ch] mx-auto text-[13.75px] xs:text-[14.25px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] leading-relaxed md:leading-relaxed text-white/95 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 0.95, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Choose the contact method that works best for you — and let us help you take the next step in your career
          journey.
        </MotionP>
        <MotionDiv
          className="cta-group-mobile flex flex-col gap-5 md:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-row flex items-center gap-4">
            <MotionA
              href="https://wa.me/0000000000"
              className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Chat With Us
            </MotionA>
            <MotionA
              href="mailto:support@sirtifai.com"
              className="cta-pill bg-[#1f2937] text-white shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Us An Email
            </MotionA>
          </div>
          <MotionA
            href="tel:+0000000000"
            className="cta-pill cta-call mx-auto bg-[#FF8B5C] text-white/95 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </MotionA>
        </MotionDiv>
        <MotionDiv
          className="hidden md:flex items-center justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MotionA
            href="https://wa.me/0000000000"
            className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md px-9 py-3.5 text-[12.5px] lg:text-[13px] xl:text-[13.5px] min-w-[170px] justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chat With Us
          </MotionA>
          <MotionA
            href="mailto:support@sirtifai.com"
            className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md px-9 py-3.5 text-[12.5px] lg:text-[13px] xl:text-[13.5px] min-w-[170px] justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Us An Email
          </MotionA>
          <MotionA
            href="tel:+0000000000"
            className="cta-pill bg-white text-[#1f2937] shadow-sm hover:shadow-md px-9 py-3.5 text-[12.5px] lg:text-[13px] xl:text-[13.5px] min-w-[170px] justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </MotionA>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
