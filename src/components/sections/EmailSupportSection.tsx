/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Check, Mail, MessageCircle, BarChart3, ImageIcon } from "lucide-react"
import { Button } from "../ui/Button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>

export const EmailSupportSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full bg-white py-10 sm:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Reuse hero double-border button styling */}
      <style>{`
        .double-border-btn {position:relative;background:#1f2937;color:#fff;border-radius:9999px;padding:0.85rem 1.9rem;font-weight:600;font-size:0.95rem;line-height:1;display:inline-flex;align-items:center;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);}
        .double-border-btn::before {content:'';position:absolute;top:6px;left:6px;right:6px;bottom:6px;border:1px solid rgba(255,255,255,0.45);border-radius:9999px;pointer-events:none;}
        .double-border-btn:hover {background:#111827;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);}        
        @media (max-width: 640px){
          .email-card{backdrop-filter:blur(6px);background:rgba(255,248,243,0.92)!important;border:1px solid rgba(0,0,0,0.05);padding:10px 12px;border-radius:10px;box-shadow:0 4px 10px -2px rgba(0,0,0,0.08);} 
          .email-card h4{font-size:11px;margin-bottom:3px;} 
          .email-card p, .email-card li, .email-card span, .email-card div, .email-card ul{font-size:10px;line-height:1.2;} 
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-5 xs:px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Column - Text Content */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <MotionH2
              className="text-[1.9rem] xs:text-[2.25rem] md:text-[3.6rem] lg:text-[3.9rem] xl:text-[4.1rem] font-bold text-gray-900 mb-6 md:mb-10 leading-[1.07] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Email Support from us...
            </MotionH2>

            {/* Service Details */}
            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
              {/* Email ID */}
              <MotionDiv
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <MotionDiv
                  className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  initial={{ scale: 0 }}
                  animate={sectionInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Check size={14} className="text-white" />
                </MotionDiv>
                <div className="text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] text-gray-700">
                  <span className="font-medium">Email ID: </span>
                  <MotionA
                    href="mailto:support@sirtifai.com"
                    className="text-blue-600 hover:text-blue-700 underline break-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    support@sirtifai.com
                  </MotionA>
                </div>
              </MotionDiv>

              {/* Availability */}
              <MotionDiv
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <MotionDiv
                  className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  initial={{ scale: 0 }}
                  animate={sectionInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Check size={14} className="text-white" />
                </MotionDiv>
                <span className="text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] text-gray-700 leading-relaxed">
                  <span className="font-medium">Availability: </span>
                  <span className="text-green-600 font-medium">24/7 Support</span>
                </span>
              </MotionDiv>

              {/* Response Time */}
              <MotionDiv
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <MotionDiv
                  className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  initial={{ scale: 0 }}
                  animate={sectionInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Check size={14} className="text-white" />
                </MotionDiv>
                <span className="text-[13.5px] sm:text-[15px] md:text-xl lg:text-[1.55rem] text-gray-700 leading-relaxed">
                  <span className="font-medium">Response Time: </span>
                  <span className="text-green-600 font-medium">&lt; 24 hours</span>
                </span>
              </MotionDiv>
            </div>

            {/* CTA Button */}
            <MotionDiv
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button className="double-border-btn" variant="primary" size="lg">
                <Mail size={20} className="mr-2" />
                Send Email
              </Button>
              <Button className="double-border-btn" variant="secondary" size="lg">
                <MessageCircle size={20} className="mr-2" />
                Chat Support
              </Button>
            </MotionDiv>
          </MotionDiv>

          {/* Right Column - Visual Content */}
          <MotionDiv
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Image */}
            <MotionDiv
              className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MotionImg
                src="/assets/contact/email-support.jpg"
                alt="Email Support Team"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid grid-cols-2 gap-4">
                  <MotionDiv
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </MotionDiv>
                  <MotionDiv
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <div className="text-2xl font-bold text-gray-900">&lt;24h</div>
                    <div className="text-xs text-gray-600">Response</div>
                  </MotionDiv>
                </div>
              </div>
            </MotionDiv>

            {/* Floating cards */}
            <MotionDiv
              className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={sectionInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: -20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 size={16} className="text-orange-500" />
                <span className="text-sm font-semibold text-gray-900">Response Rate</span>
              </div>
              <p className="text-xs text-gray-600">99.8% of emails responded within 24 hours</p>
            </MotionDiv>

            <MotionDiv
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={sectionInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <ImageIcon size={16} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-900">Multilingual</span>
              </div>
              <p className="text-xs text-gray-600">Support in English, Hindi, and regional languages</p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  )
}
