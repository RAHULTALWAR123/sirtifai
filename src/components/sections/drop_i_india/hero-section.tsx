"use client";

import Image from "next/image";
import { CtaButton } from "../../common/cta-button";
import { motion, useInView } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { useRef, useState } from "react";
import DonateModal from "./DonateModal";

// Typed motion elements accepting className and ref
type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> & MotionProps & React.RefAttributes<HTMLDivElement>;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type H1MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps;
const MotionH1 = motion.h1 as unknown as React.FC<H1MotionComponentProps>;

type PMotionComponentProps = React.HTMLAttributes<HTMLParagraphElement> & MotionProps;
const MotionP = motion.p as unknown as React.FC<PMotionComponentProps>;

// Animation variants
const textContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function HeroSection() {
  const [isDonateModalOpen, setDonateModalOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef as React.RefObject<Element>, {
    once: true,
    margin: "-120px 0px -120px 0px",
  });
  return (
    <section className="relative isolate">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 md:grid-cols-2 md:gap-10">
        <MotionDiv
          ref={containerRef}
          variants={textContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="order-2 flex flex-col justify-start md:order-1 sm:pt-[120px]"
        >
          <MotionH1
            variants={textItemVariants}
            className="text-pretty font-sans text-3xl font-extrabold leading-tight text-[#FE7743] sm:text-5xl"
          >
            One Drop Can Change Millions of Lives
          </MotionH1>

          <MotionP
            variants={textItemVariants}
            className="mt-4 font-sans text-lg font-semibold text-gray-900 sm:text-3xl"
          >
            From Learning to Lifetime Careers
          </MotionP>

          <MotionP
            variants={textItemVariants}
            className="mt-3 max-w-prose text-sm leading-6 text-gray-600 sm:text-lg"
          >
            1dropindia is Sirtifai’s flagship social mission dedicated to water
            sustainability, access and innovation for every. We integrate
            technology, community, and education to solve India’s water
            challenges.
          </MotionP>
          <MotionP
            variants={textItemVariants}
            className="mt-3 max-w-prose text-sm leading-6 text-gray-600 sm:text-lg"
          >
            Join PGCAP Now 
          </MotionP>

          <MotionDiv
            variants={textItemVariants}
            className="mt-6 flex flex-wrap md:min-w-[600px] items-center gap-2 overflow-visible"
          >
            {/* <CtaButton href="#join" variant="solid">
              Join the Movement
            </CtaButton> */}
            <button className="cursor-pointer bg-[#FE7743] px-2 py-2 sm:px-6 sm:py-[14px] rounded-lg text-[10px] sm:text-sm font-medium flex items-center justify-between gap-2 sm:min-w-[140px] group hover:shadow-md transition-all duration-300 hover:scale-105"  onClick={() => setDonateModalOpen(true)}>
              Donate A Drop
            </button>
            {/* <CtaButton href="#partner" variant="solid">
              Partner with Us
            </CtaButton> */}
          </MotionDiv>
        </MotionDiv>

        <div className="order-1 md:order-2">
          <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: -1.65 }}
            viewport={{ once: true, amount: 0.3, margin: "-120px 0px -120px 0px" }}
            animate={{ y: [0, -8, 0], rotate: [-1.65, -2.2, -1.65] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="sm:w-[1062px] sm:h-[708px] w-full rotate-[-1.651deg] flex-shrink-0 aspect-[3/2]"
          >
            <Image
              src={"/assets/drop_i_india/flat_globe.png"}
              alt="Water droplet shaped globe illustrating global impact"
              fill
              className="object-contain"
              priority
            />
          </MotionDiv>
        </div>
      </div>
      <DonateModal isOpen={isDonateModalOpen} onClose={() => setDonateModalOpen(false)} />
    </section>
  );
}
