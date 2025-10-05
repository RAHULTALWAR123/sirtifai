/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

// Typed motion components
type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type H2MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> &
  MotionProps;
const MotionH2 = motion.h2 as unknown as React.FC<H2MotionComponentProps>;

type ImgMotionComponentProps = React.ImgHTMLAttributes<HTMLImageElement> &
  MotionProps;
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

function GrenovEcoSystem() {
  return (
    <main className="h-full bg-orange-50 lg:px-20">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
            margin: "-120px 0px -120px 0px",
          }}
        >
          <MotionH2
            variants={item}
            className="text-3xl lg:text-5xl text-center font-extrabold"
          >
            Grenov Ecosystem
          </MotionH2>
          <MotionH2 variants={item} className="text-center text-xs mt-6">
            How Grenoa fits into Sirtifai: Positioned as the R&D powerhouse
            fueling innovations across Sirtifai products.
          </MotionH2>

          <MotionDiv
            variants={container}
            className="flex items-center justify-center space-x-4 w-[50%] mx-auto mt-2"
          >
            {/* Left Circle */}
            <MotionDiv
              variants={item}
              className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </MotionDiv>

            {/* Center line */}
            <MotionDiv
              variants={item}
              className="flex-1 h-px mx-1 bg-gray-800 mr-4"
            />

            {/* Right Circle */}
            <MotionDiv
              variants={item}
              className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv variants={item} className="flex justify-center">
            <Image
              src="/assets/grenov/GravonEcoSystem.svg"
              alt="GravonEcosystem"
              width={150}
              height={150}
              className="w-full h-auto object-contain mt-5 lg:mt-10 lg:w-[65%]"
              priority
            />
          </MotionDiv>
        </MotionDiv>
      </div>
    </main>
  );
}

export default GrenovEcoSystem;
