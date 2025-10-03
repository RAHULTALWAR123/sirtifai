"use client";

import Image from "next/image";
import { CtaButton } from "../../common/cta-button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const heroIllustration = "/assets/investors_page/hero-illustration.png";

const MotionDiv = motion.div as React.ComponentType<any>;
const MotionImg = motion.img as React.ComponentType<any>;
const MotionH1 = motion.h1 as React.ComponentType<any>;
const MotionP = motion.p as React.ComponentType<any>;
const MotionSection = motion.section as React.ComponentType<any>;

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whySertifaiRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const howDifferentRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef as React.RefObject<Element>, {
    once: true,
    margin: "-100px",
  });

  return (
    <MotionSection
      ref={heroRef}
      className="pt-2 sm:pt-10 md:pt-16 pb-10 bg-white"
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={"/assets/investors_page/rightStick.png"}
        alt="Hero illustration"
        width={600}
        height={600}
        className="absolute right-0 bottom-24 hidden lg:block"
      />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Mobile illustration (shown only on mobile) */}
        <MotionDiv
          className="relative lg:hidden order-first"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
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

        {/* Left copy */}
        <MotionDiv
          initial={{ opacity: 0, x: -50 }}
          animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Heading */}
          <MotionH1
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FE7743] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Invest in the
            <br />
            Future of Work
          </MotionH1>

          {/* Subheading */}
          <MotionH1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 mt-2 sm:mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            From Learning to Lifetime Careers
          </MotionH1>

          {/* Description */}
          <MotionP
            className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-5 text-[#989491] max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Sirtifai bridges the Skill-to-Job Execution Gap with its three
            flagship programs
          </MotionP>

          {/* Join Now Section */}
          <MotionDiv
            className="mt-6 sm:mt-8 w-full overflow-hidden text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-nowrap items-center justify-start gap-0 sm:gap-4 w-full whitespace-nowrap leading-none text-[clamp(0.95rem,3vw,1rem)] md:text-[clamp(0.85rem,2vw,1.4rem)]">
              {/* Label */}
              <span className="font-semibold text-[#273F4F] text-xs sm:text-md">Join Now: </span>

              {/* Links */}
              {/* <a
                href="/sirtifai-international"
                className="text-orange-600 font-medium"
              >
                International
              </a> */}
              {/* <span className="text-orange-600">|</span> */}
              <a href="/freelancer" className="text-orange-600 font-medium text-xs sm:text-md">
                Post Graduate Certificate in Applied Profession
              </a>
              {/* <span className="text-orange-600">|</span> */}
              {/* <a href="/program" className="text-orange-600 font-medium">
                SPP
              </a> */}
            </div>

            {/* CTA Buttons */}
            <MotionDiv
              className="flex sm:flex-row gap-4 mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {/* <MotionDiv
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1C9 0.446875 8.55313 0 8 0C7.44688 0 7 0.446875 7 1V8.58438L4.70625 6.29063C4.31563 5.9 3.68125 5.9 3.29063 6.29063C2.9 6.68125 2.9 7.31563 3.29063 7.70625L7.29063 11.7063C7.68125 12.0969 8.31563 12.0969 8.70625 11.7063L12.7063 7.70625C13.0969 7.31563 13.0969 6.68125 12.7063 6.29063C12.3156 5.9 11.6812 5.9 11.2906 6.29063L9 8.58438V1ZM2 11C0.896875 11 0 11.8969 0 13V14C0 15.1031 0.896875 16 2 16H14C15.1031 16 16 15.1031 16 14V13C16 11.8969 15.1031 11 14 11H10.8281L9.4125 12.4156C8.63125 13.1969 7.36562 13.1969 6.58437 12.4156L5.17188 11H2ZM13.5 12.75C13.6989 12.75 13.8897 12.829 14.0303 12.9697C14.171 13.1103 14.25 13.3011 14.25 13.5C14.25 13.6989 14.171 13.8897 14.0303 14.0303C13.8897 14.171 13.6989 14.25 13.5 14.25C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75Z"
                    fill="white"
                  />
                </svg>
                Investor Deck
              </MotionDiv> */}

              {/* <MotionDiv
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-full font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book A Call With Founders
              </MotionDiv> */}
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>

        {/* Right illustration (hidden on mobile) */}
        <MotionDiv
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={
            heroInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 50, scale: 0.9 }
          }
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
  );
}
