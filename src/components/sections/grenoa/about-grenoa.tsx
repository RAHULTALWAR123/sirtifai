/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

// Typed Motion components
type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type H2MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps;
const MotionH2 = motion.h2 as unknown as React.FC<H2MotionComponentProps>;

type PMotionComponentProps = React.HTMLAttributes<HTMLParagraphElement> & MotionProps;
const MotionP = motion.p as unknown as React.FC<PMotionComponentProps>;

type UlMotionComponentProps = React.HTMLAttributes<HTMLUListElement> & MotionProps;
const MotionUl = motion.ul as unknown as React.FC<UlMotionComponentProps>;

type LiMotionComponentProps = React.LiHTMLAttributes<HTMLLIElement> & MotionProps;
const MotionLi = motion.li as unknown as React.FC<LiMotionComponentProps>;

type ImgMotionComponentProps = React.ImgHTMLAttributes<HTMLImageElement> & MotionProps;
const MotionImg = motion.img as unknown as React.FC<ImgMotionComponentProps>;

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function grenovOverview() {
  return (
    <main className="h-full bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25, margin: "-120px 0px -120px 0px" }}
          className="flex justify-between flex-wrap gap-8 sm:gap-10 p-3 lg:gap-0"
        >
          {/* left */}
          <div className="w-full lg:w-1/2">
            {/* About Grenov */}
            <MotionP
              variants={item}
              className="text-center text-orange-600 font-sans text-[18px] sm:text-[21px] font-semibold tracking-widest mb-2 lg:text-start"
            >
              ABOUT GRENOV
            </MotionP>
            <MotionP
              variants={item}
              className="w-full sm:w-[95%] lg:w-[82%] text-[22px] sm:text-[28px] lg:text-[32px] text-center lg:text-start mx-auto lg:mx-0"
            >
              Grenov is Sirtifai’s advanced innovation wing, designed to push
              boundaries in AI, AR, robotics, and next-gen digital ecosystems.
            </MotionP>

            {/* Image */}
            <MotionImg
              variants={item}
              src="/assets/grenov/futuristic_ai_face.png"
              alt="AI Face"
              className="w-full max-w-[500px] h-auto rounded-lg mx-auto lg:mx-0"
            />
          </div>
          {/* Right */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Vision & Mission */}
            <MotionDiv
              variants={container}
              className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-0"
            >
              <MotionDiv variants={item} className="flex flex-col items-center md:items-start">
                <img
                  src="/assets/grenov/Frame_3.svg"
                  alt="Vision"
                  className="mb-2 object-contain"
                />
                <p className="text-sm sm:text-[15px] text-gray-700 text-center md:text-left max-w-xs">
                  Vision: <br /> Building a future where humans and AI
                  collaborate for progress, efficiency, and creativity.
                </p>
              </MotionDiv>
              <MotionDiv variants={item} className="flex flex-col items-center md:items-start lg:flex-col-reverse lg:mr-[-0rem]">
                <img
                  src="/assets/grenov/Frame_4.svg"
                  alt="Mission"
                  className="object-contain"
                />
                <p className="text-sm sm:text-[15px] text-gray-700 text-center md:text-left max-w-xs lg:mb-5">
                  Mission: <br /> To integrate intelligence seamlessly into
                  every sector of society.
                </p>
              </MotionDiv>
            </MotionDiv>

            {/* Core Capabilities */}
            <div className="mt-8 ml-0 lg:ml-12">
              <MotionH2
                variants={item}
                className="text-orange-500 font-extrabold uppercase tracking-widest text-2xl sm:text-3xl lg:text-[40px] text-center leading-relaxed  lg:text-start mb-3"
              >
                Core Capabilities
              </MotionH2>
              <MotionUl variants={container} className="list-disc ml-3 pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
                <MotionLi variants={item} className="text-sm sm:text-md">
                  <span className="font-bold text-base sm:text-lg">AI & Automation</span> –
                  Smart solutions tailored to industries.
                </MotionLi>
                <MotionLi variants={item} className="text-sm sm:text-md">
                  <span className="font-bold text-base sm:text-lg">AR & Immersive Tech</span>{" "}
                  – Bridging physical and digital experiences.
                </MotionLi>
                <MotionLi variants={item} className="text-sm sm:text-md">
                  <span className="font-bold text-base sm:text-lg">Data Intelligence</span> –
                  Harnessing big data for predictive insights.
                </MotionLi>
                <MotionLi variants={item} className="text-sm sm:text-md">
                  <span className="font-bold text-base sm:text-lg">
                    Enterprise Integration
                  </span>{" "}
                  – Cloud-ready, secure, and scalable systems.
                </MotionLi>
              </MotionUl>
            </div>
          </div>
        </MotionDiv>
      </div>
    </main>
  );
}
