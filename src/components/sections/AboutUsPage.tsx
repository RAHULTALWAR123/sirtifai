"use client"
import { Button } from "../ui/Button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const heroIllustration = "/assets/about-header.png"
const dontQuit = "/assets/dont-quit.jpg"
const bulbsImage = "/assets/blb.jpg"
const aboutStart = "/assets/about-start.png"
const avatar1 = "/assets/user-1.png"
const avatar2 = "/assets/user-2.png"
const avatar3 = "/assets/user-3.jpg"
const avatar4 = "/assets/user-4.jpg"
const avatar5 = "/assets/user-5.jpg"
const avatar6 = "/assets/user-6.jpg"

import UniversityPartners from "./UniversityPartners"
import UpcomingProjectsHero from "./UpcomingProjects"
import TeamMemberCarousel from "./TeamMember"
import CareerSection from "./CareerSection"

const industries = ["HR", "Finance", "Legal", "Education", "Construction", "Healthcare", "Aerospace", "BFSI"]

// import { AboutSection } from "./AboutSection"

// Strongly typed motion components to fix TypeScript errors
const MotionDiv = motion.div as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>
const MotionH1 = motion.h1 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionUl = motion.ul as React.ComponentType<any>
const MotionLi = motion.li as React.ComponentType<any>
const MotionSection = motion.section as React.ComponentType<any>

export const AboutUsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const whySertifaiRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const howDifferentRef = useRef<HTMLDivElement>(null)

  const heroInView = useInView(heroRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const whySertifaiInView = useInView(whySertifaiRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const industriesInView = useInView(industriesRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const howDifferentInView = useInView(howDifferentRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-[#FEF7F1]">
      {/* Hero Section (Figma: Learn. Earn. Get Placed. Rise.) */}
      <MotionSection
        ref={heroRef}
        className="pt-2 sm:pt-10 md:pt-16 pb-10 bg-white"
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Heading */}
            <MotionH1
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn. Earn. Get
              <br />
              Placed. Rise.
            </MotionH1>

            {/* Subheading */}
            <MotionP
              className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-5 text-[#989491] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              India's first Job-First Education Ecosystem, building skilled professionals with real work experience and
              lifetime career support.
            </MotionP>

            {/* Join Now Section */}
            <MotionDiv
              className="mt-6 sm:mt-8 w-full overflow-hidden text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-nowrap items-center justify-start gap-2 sm:gap-4 w-full whitespace-nowrap leading-none text-[clamp(0.95rem,3vw,1rem)] md:text-[clamp(0.85rem,2vw,1.4rem)]">
                {/* Label */}
                <span className="font-semibold text-orange-600 text-xs sm:text-md">Join Now :</span>

                {/* Links */}
                {/* <a href="/sirtifai-international" className="text-orange-600 font-medium">
                  International
                </a> */}
                {/* <span className="text-orange-600">|</span> */}
                <a href="/freelancer" className="text-orange-600 font-medium text-xs sm:text-md">
                  Post Graduation Certificate in Applied Profession
                </a>
                {/* <span className="text-orange-600">|</span> */}
                {/* <a href="/program" className="text-orange-600 font-medium">
                  SPP Student
                </a> */}
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Right illustration */}
          <MotionDiv
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MotionImg
              src={heroIllustration}
              alt="Hero illustration"
              className="w-full max-w-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </MotionDiv>
        </div>
            </MotionSection>

      {/* Why Sertifai (Figma) */}
      <MotionSection
        ref={whySertifaiRef}
        className="py-10 sm:py-14 bg-[RGB 254 247 241]"
        initial={{ opacity: 0 }}
        animate={whySertifaiInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image collage (hidden on mobile) */}
          <MotionDiv
            className="relative hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            animate={whySertifaiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MotionImg
                src={dontQuit}
                alt="Don't Quit"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
                initial={{ opacity: 0, y: 30 }}
                animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02, y: -5 }}
              />
              <MotionImg
                src={bulbsImage}
                alt="Bulbs"
                className="rounded-2xl shadow-xl object-cover h-72 w-full md:h-[320px]"
                initial={{ opacity: 0, y: 30 }}
                animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              />
            </div>

            {/* KPI card */}
            <MotionDiv
              className="absolute -top-8 left-8 md:left-16 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg border border-orange-100 w-[220px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={whySertifaiInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <p className="text-lg font-extrabold text-gray-900">30,000+</p>
              <p className="text-[10px] text-gray-500">Sales in July 2021 with 5 star ratings and happy clients.</p>
              <div className="mt-3 h-px bg-gray-200" />
              <div className="mt-3 flex -space-x-2">
                {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map((a, i) => (
                  <MotionImg
                      key={i}
                      src={a}
                      alt="avatar"
                      className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={whySertifaiInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 1.0 + i * 0.1 }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    />
                ))}
              </div>
            </MotionDiv>

            {/* Ratings badge */}
            <MotionDiv
              className="absolute bottom-4 left-10 bg-white/95 backdrop-blur rounded-xl shadow p-3 border border-gray-100"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={whySertifaiInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <p className="text-[11px] text-gray-700 font-semibold mb-1">Best ratings</p>
              <div className="flex gap-1 text-base">
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
                <span>🙂</span>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Copy */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={whySertifaiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MotionP
              className="tracking-[0.25em] sm:tracking-[0.4em] text-[11px] sm:text-xs text-orange-600 font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ABOUT
            </MotionP>
            <MotionH2
              className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug"
              initial={{ opacity: 0, y: 30 }}
              animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Why Sirtifai
            </MotionH2>
            <MotionP
              className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Sirtifai is a career transformation platform that connects learning directly with earning and job
              placement. Through our flagship SPP (Skill → Practice → Progress) model, we ensure learners gain:
            </MotionP>
            <MotionUl
              className="space-y-2 text-gray-700 list-disc pl-5 text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={whySertifaiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Practical skills through structured, industry-aligned training.
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={whySertifaiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                Paid work experience with real companies via verified projects.
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={whySertifaiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                Career support for job switches, re-entry, and global placement across 24 industries.
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={whySertifaiInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 1.8 }}
              >
                Trusted by employers and universities in India, MENA, and SEA.
              </MotionLi>
            </MotionUl>
            <MotionDiv
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={whySertifaiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              {/* <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="rounded-full" variant="primary" size="md">
                View More
              </Button>
              </MotionDiv> */}
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* White gap between Why Sertifai and ribbon */}
      <div className="h-8 md:h-12 bg-white w-full"></div>

      {/* Industries ribbon */}
      <MotionSection
        ref={industriesRef}
        className="bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        animate={industriesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
      <div className="max-w-7xl mx-auto px-6 py-4 overflow-hidden">
        <div className="relative w-full">
          {/* Marquee wrapper */}
          <div className="flex whitespace-nowrap animate-marquee">
            {industries.concat(industries).map((item, idx) => (
                <MotionDiv
                key={idx}
                className="italic mx-5 opacity-90 text-lg flex-shrink-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={industriesInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
              >
                {item}
                </MotionDiv>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind + custom animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
      </MotionSection>

   {/* How Sirtifai is different? */}
      <MotionSection
        ref={howDifferentRef}
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={howDifferentInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Left column */}
          <MotionDiv
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
      {/* Intro text */}
            <div className="text-center lg:text-left">
              <MotionH2
                className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
          How Sirtifai is different?
              </MotionH2>
              <MotionP
                className="text-sm ext-gray-600 sm:text-lg max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Sirtifai is a career transformation platform that connects learning directly with earning and job
                placement.
              </MotionP>
      </div>

      {/* Global Certifications card */}
            <MotionDiv
              className="hidden md:block rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mt-0 sm:mt-5"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={howDifferentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
        <div className="flex items-start gap-4 mb-4">
                <MotionImg
            src={aboutStart}
            alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={howDifferentInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                />
                <MotionH3
                  className="text-base md:text-lg font-semibold text-gray-900 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
            Global Certifications
                </MotionH3>
        </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <MotionP
                className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
          NSQF Certification: Globally recognized certification, trusted by employers in India, MENA, and SEA.
              </MotionP>
            </MotionDiv>
          </MotionDiv>

          {/* Right column (2×2 grid on desktop, stacked on mobile) */}
          <MotionDiv
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Income from Day 1 */}
            <MotionDiv
              className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={howDifferentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <MotionImg
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={howDifferentInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                />
                <MotionH3
                  className="text-base md:text-lg font-semibold text-gray-900 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >
                  Income from Day 1
                </MotionH3>
      </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <MotionP
                className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Earn ₹12K–₹35K/month during the Practice Phase.
              </MotionP>
            </MotionDiv>

            {/* Verified Payroll */}
            <MotionDiv
              className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={howDifferentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <MotionImg
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={howDifferentInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                />
                <MotionH3
                  className="text-base md:text-lg font-semibold text-gray-900 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Verified Payroll (Peairlo™)
                </MotionH3>
    </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <MotionP
                className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                EPF/ESI coverage for domestic plans, and international payroll for overseas roles.
              </MotionP>
            </MotionDiv>

            {/* Mobile-only Global Certifications (reordered) */}
            <MotionDiv
              className="md:hidden rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={howDifferentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-start gap-4 mb-4">
                <MotionImg
              src={aboutStart}
              alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={howDifferentInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                />
                <MotionH3
                  className="text-base md:text-lg font-semibold text-gray-900 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  Global Certifications
                </MotionH3>
          </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <MotionP
                className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.6 }}
              >
                NSQF Certification: Globally recognized certification, trusted by employers in India, MENA, and SEA.
              </MotionP>
            </MotionDiv>

            {/* Lifetime Re-entry */}
            <MotionDiv
              className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={howDifferentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <MotionImg
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={howDifferentInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                />
                <MotionH3
                  className="text-base md:text-lg font-semibold text-gray-900 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  Lifetime Re-entry & Career Switch Support
                </MotionH3>
    </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <MotionP
                className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.8 }}
              >
                Switch industries, upgrade skills, and re-enter the job market without extra programme cost.
              </MotionP>
            </MotionDiv>

            {/* Skill-to-job */}
            <MotionDiv
              className="rounded-[28px] border border-[#000] bg-white shadow-[0_6px_0_0_#D4D4D4] p-4 sm:p-6 min-h-0 md:min-h-[210px] lg:min-h-[250px] h-auto w-full lg:max-w-[360px] mx-auto"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={howDifferentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <MotionImg
                  src={aboutStart}
                  alt="feature icon"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1 drop-shadow-[2px_4px_0_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={howDifferentInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                />
                <MotionH3
                  className="text-base md:text-lg font-semibold text-gray-900 leading-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={howDifferentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                >
                  Skill-to-job execution gap
                </MotionH3>
              </div>
              <div className="h-px w-full bg-black my-4 sm:my-5" />
              <MotionP
                className="text-sm sm:text-[15px] text-gray-700 leading-6 sm:leading-7"
                initial={{ opacity: 0, y: 10 }}
                animate={howDifferentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 2.0 }}
              >
                Solved for all learners, from Tier 1 to Tier 3. Built-in career analytics and AI resume tools.
              </MotionP>
            </MotionDiv>
          </MotionDiv>
          </div>
      </MotionSection>

      {/* <AboutSection /> */}
      {/* Gap between Our Mission (AboutSection) and Upcoming Projects */}
      <div className="h-8 md:h-12 bg-white w-full" />

      <UpcomingProjectsHero />

      {/* Gap between Upcoming Projects and Team Members */}
      <div className="h-8 md:h-12 bg-white w-full" />

      <TeamMemberCarousel />

      {/* Gap between Team Members and University Partners */}
      <div className="h-8 md:h-12 bg-white w-full" />

      <UniversityPartners />

      {/* Gap between University Partners and Career Section */}
      <div className="h-8 md:h-12 bg-white w-full" />

      <CareerSection />
    </div>
  )
}
