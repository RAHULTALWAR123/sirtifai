/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionForm = motion.form as React.ComponentType<any>
const MotionInput = motion.input as React.ComponentType<any>
const MotionTextarea = motion.textarea as React.ComponentType<any>
const MotionButton = motion.button as React.ComponentType<any>
const MotionLabel = motion.label as React.ComponentType<any>
const MotionHeader = motion.header as React.ComponentType<any>
const MotionA = motion.a as React.ComponentType<any>

export const ContactFormSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <MotionSection
      ref={sectionRef}
      className="w-full pt-0 pb-14 md:py-20 bg-[#FEF7F1] font-sans"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <style>{`
        /* Mobile pill button + typography adjustments */
        @media (max-width: 767px){
          .contact-pill-btn{position:relative;display:inline-flex;align-items:center;gap:.85rem;background:#1f2937;color:#fff;font-weight:600;font-size:.9rem;padding:.8rem 1.9rem;border-radius:9999px;transition:all .3s ease;box-shadow:0 4px 6px -1px rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.06);} 
          .contact-pill-btn::before{content:'';position:absolute;inset:6px;border:1px solid rgba(255,255,255,.45);border-radius:9999px;pointer-events:none;} 
          .contact-pill-btn:hover{background:#111827;} 
        }
      `}</style>
      <div className="mx-auto px-0 sm:px-6 max-w-none md:max-w-6xl">
        <MotionDiv
          className="bg-white md:rounded-[34px] rounded-none md:shadow-[0_6px_18px_-4px_rgba(0,0,0,0.08)] shadow-none md:border border-0 relative overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-[1fr_520px] gap-14 px-14 pt-16 pb-20">
            {/* Left: Heading + Form */}
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MotionHeader
                className="mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <MotionH2
                  className="text-[3.2rem] xl:text-[3.4rem] font-semibold tracking-tight text-black leading-[1.05]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Contact <span className="text-[#D8643C] font-medium">us</span>
                </MotionH2>
                <MotionP
                  className="mt-2 text-base xl:text-lg text-neutral-600"
                  initial={{ opacity: 0, y: 15 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  Let&apos;s get in touch!
                </MotionP>
              </MotionHeader>

              <MotionForm
                className="space-y-8 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { id: "fullName", label: "Full Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone No.", type: "tel" },
                  { id: "query", label: "Query", type: "text" },
                ].map((f, index) => (
                  <MotionDiv
                    key={f.id}
                    className="group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  >
                    <MotionLabel
                      htmlFor={f.id}
                      className="block text-[14px] xl:text-[15px] tracking-wide font-medium text-black mb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    >
                      {f.label}
                    </MotionLabel>
                    <MotionInput
                      id={f.id}
                      type={f.type}
                      className="w-full bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[15px] xl:text-[16px] py-1.5"
                      placeholder=""
                      initial={{ opacity: 0, y: 10 }}
                      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </MotionDiv>
                ))}
                <MotionDiv
                  className="group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  <MotionLabel
                    htmlFor="message"
                    className="block text-[14px] xl:text-[15px] tracking-wide font-medium text-black mb-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 1.6 }}
                  >
                    Message For Us
                  </MotionLabel>
                  <MotionTextarea
                    id="message"
                    rows={3}
                    className="w-full resize-none bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[15px] xl:text-[16px] py-1.5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </MotionDiv>

                <MotionDiv
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  <MotionLabel
                    className="inline-flex items-start gap-2 text-[12px] xl:text-[13px] leading-relaxed text-neutral-600 cursor-pointer select-none"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input type="checkbox" className="mt-[3px] accent-[#D8643C]" />
                    <span>Subscribe to our Newsletter.</span>
                  </MotionLabel>
                </MotionDiv>

                <MotionDiv
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 2.0 }}
                >
                  <MotionButton
                    type="submit"
                    className="mx-auto block w-72 rounded-md bg-gradient-to-r from-[#D8643C] to-[#EA7A50] text-white text-[15px] xl:text-[16px] font-medium tracking-wide py-3.5 transition-colors hover:brightness-[1.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8643C]/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </MotionButton>
                </MotionDiv>
              </MotionForm>
            </MotionDiv>

            {/* Right: Map & Socials */}
            <MotionDiv
              className="flex flex-col items-center md:items-start"
              initial={{ opacity: 0, x: 50 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <MotionDiv
                className="relative w-full h-[250px] rounded-md overflow-hidden border border-black/15 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image src="/assets/contact/Maps.png" alt="Map" fill sizes="480px" className="object-cover" priority />
                <MotionDiv
                  className="absolute top-2 right-2 bg-white/95 backdrop-blur px-3 py-2 rounded-sm shadow ring-1 ring-black/5 w-[120px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-[10px] font-semibold text-black leading-tight">Company name</p>
                  <p className="text-[9px] text-neutral-600 leading-tight mt-0.5">
                    35 W 36th St.
                    <br />
                    NY 10018
                  </p>
                </MotionDiv>
              </MotionDiv>

              <MotionDiv
                className="mt-10 flex items-center gap-5 text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                  <MotionA
                    key={index}
                    href="#"
                    aria-label={Icon.name}
                    className="hover:text-[#D8643C] transition-colors"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </MotionA>
                ))}
              </MotionDiv>
            </MotionDiv>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col">
            <MotionDiv
              className="relative w-full h-52 sm:h-60 overflow-hidden"
              initial={{ opacity: 0, y: -30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image src="/assets/contact/Maps.png" alt="Map" fill sizes="100vw" className="object-cover" priority />
              <MotionDiv
                className="absolute top-2 right-2 bg-white/95 backdrop-blur px-3 py-2 rounded-sm shadow ring-1 ring-black/5 w-[120px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[10px] font-semibold text-black leading-tight">Company name</p>
                <p className="text-[9px] text-neutral-600 leading-tight mt-0.5">
                  35 W 36th St.
                  <br />
                  NY 10018
                </p>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv
              className="px-4 pt-6 pb-9"
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MotionHeader
                className="mb-7"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <MotionH2
                  className="text-[1.85rem] font-semibold tracking-tight text-black leading-[1.12]"
                  initial={{ opacity: 0, y: 15 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  Contact <span className="text-[#D8643C] font-medium">us</span>
                </MotionH2>
                <MotionP
                  className="mt-1 text-[12.75px] text-neutral-600 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Let&apos;s get in touch!
                </MotionP>
              </MotionHeader>
              <MotionForm
                className="space-y-5"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                {[
                  { id: "fullName_m", label: "Full Name", type: "text" },
                  { id: "email_m", label: "Email", type: "email" },
                  { id: "phone_m", label: "Phone no.", type: "tel" },
                  { id: "query_m", label: "Query", type: "text" },
                ].map((f, index) => (
                  <MotionDiv
                    key={f.id}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    <MotionLabel
                      htmlFor={f.id}
                      className="block text-[12.25px] tracking-wide font-medium text-black mb-1"
                      initial={{ opacity: 0, y: 5 }}
                      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                      transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    >
                      {f.label}
                    </MotionLabel>
                    <MotionInput
                      id={f.id}
                      type={f.type}
                      className="w-full bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[13px] py-1 tracking-tight"
                      initial={{ opacity: 0, y: 5 }}
                      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                      transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </MotionDiv>
                ))}
                <MotionDiv
                  className="group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  <MotionLabel
                    htmlFor="message_m"
                    className="block text-[12.25px] tracking-wide font-medium text-black mb-1"
                    initial={{ opacity: 0, y: 5 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                  >
                    Message For Us
                  </MotionLabel>
                  <MotionTextarea
                    id="message_m"
                    rows={3}
                    className="w-full resize-none bg-transparent border-0 border-b border-black/70 focus:border-[#D8643C] focus:outline-none focus:ring-0 placeholder:opacity-40 text-[13px] py-1 tracking-tight"
                    initial={{ opacity: 0, y: 5 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
                    transition={{ duration: 0.3, delay: 2.0 }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </MotionDiv>
                <MotionLabel
                  className="inline-flex items-start gap-2 text-[10.5px] leading-relaxed text-neutral-600 cursor-pointer select-none pt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 2.0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <input type="checkbox" className="mt-[3px] accent-[#D8643C]" />
                  <span>Subscribe to our Newsletter</span>
                </MotionLabel>
                <MotionDiv
                  className="flex justify-center pt-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                >
                  <MotionButton
                    type="submit"
                    className="contact-pill-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Submit
                  </MotionButton>
                </MotionDiv>
              </MotionForm>
              <MotionDiv
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                <MotionP
                  className="text-center text-[13.5px] font-medium text-black mb-4 tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                >
                  Follow us on :
                </MotionP>
                <div className="flex items-center justify-center gap-5 text-black">
                  {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                    <MotionA
                      key={index}
                      href="#"
                      aria-label={Icon.name}
                      className="hover:text-[#D8643C] transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 2.4 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                    </MotionA>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
