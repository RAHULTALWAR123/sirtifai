"use client";

import Image from "next/image";
import { CtaButton } from "../../common/cta-button";
import { Button } from "@/components/ui/Button";
import { motion, MotionProps } from "framer-motion";

type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;
type H1MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> &
  MotionProps;
const MotionH1 = motion.h1 as unknown as React.FC<H1MotionComponentProps>;
type PMotionComponentProps = React.HTMLAttributes<HTMLParagraphElement> &
  MotionProps;
const MotionP = motion.p as unknown as React.FC<PMotionComponentProps>;

export default function HeroSection() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="h-full bg-orange-50 lg:px-20 lg:bg-gradient-to-br from-gray-50 to-white">
      {/* <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 md:grid-cols-2 md:gap-10">
        <div className="order-2 flex flex-col justify-start md:order-1 pt-[120px]">
          <h1 className="text-pretty font-sans text-xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            One Drop Can Change Millions of Lives
          </h1>

          <p className="mt-4 font-sans text-lg font-semibold text-gray-900 sm:text-3xl">
            From Learning to Lifetime Careers
          </p>

          <p className="mt-3 max-w-prose text-sm leading-6 text-gray-600 sm:text-lg">
            1dropindia is Sirtifai’s flagship social mission dedicated to water sustainability, access and innovation for every. We integrate technology, community, and education to solve India’s water challenges.
          </p>
          <p className="mt-3 max-w-prose text-sm leading-6 text-gray-600 sm:text-lg">
            Join SPP Now
          </p>

          <div className="mt-6 flex flex-wrap md:min-w-[600px] items-center gap-2 overflow-visible">
            <CtaButton href="#join" variant="solid">
              Join the Movement
            </CtaButton>
            <CtaButton href="#donate" variant="solid">
              Donate A Drop
            </CtaButton>
            <CtaButton href="#partner" variant="solid">
              Partner with Us
            </CtaButton>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="w-[1062px] h-[708px] rotate-[-1.651deg] flex-shrink-0 aspect-[3/2]">
            <Image
              src={"/assets/drop_i_india/flat_globe.png"}
              alt="Water droplet shaped globe illustrating global impact"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-4 py-16 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-12 items-center">
          {/* Image Section - appears first on mobile, second on desktop */}
          <MotionDiv
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.4,
              margin: "-120px 0px -120px 0px",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src="/assets/grenov/image.png"
                alt="AI Brain Innovation - 3D illustration of a brain connected to circuit boards representing AI-driven technology"
                width={1500}
                height={1500}
                className="w-full h-auto hidden lg:block object-contain scale-230 lg:absolute right-[150px] -top-[150px] z-0 pointer-events-none"
                priority
              />
              <Image
                src="/Grenov_brain.png"
                alt="AI Brain Innovation - 3D illustration of a brain connected to circuit boards representing AI-driven technology"
                width={500}
                height={500}
                className="w-full h-auto block lg:hidden object-contain"
                priority
              />

              {/* Decorative elements */}
              {/* <MotionDiv
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-orange-200 opacity-60"
              ></MotionDiv>
              <MotionDiv
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-orange-200 opacity-60"
              ></MotionDiv>
              <MotionDiv
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="absolute top-1/4 -right-2 w-4 h-4 bg-orange-100 rounded-full opacity-40"
              ></MotionDiv>
              <MotionDiv
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="absolute bottom-1/3 -left-2 w-6 h-6 bg-blue-100 rounded-full opacity-30"
              ></MotionDiv> */}
            </div>
          </MotionDiv>

          {/* Content Section */}
          <MotionDiv
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
              margin: "-120px 0px -120px 0px",
            }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="space-y-4">
              <MotionH1
                variants={item}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
              >
                <span className="text-orange-500">Grenov</span>
                <span className="text-gray-900">
                  {" "}
                  – The Next Frontier in AI-Driven Innovation&quot;
                </span>
              </MotionH1>

              <MotionP
                variants={item}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Empowering industries with advanced automation, intelligence,
                and connectivity.
              </MotionP>
            </div>

            <MotionDiv
              variants={container}
              className="flex gap-2 justify-center lg:justify-start"
            >
              {/* <MotionDiv
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 h-12 rounded-full text-md font-medium lg:text-base"
                >
                  Discover More
                </Button>
              </MotionDiv> */}
              {/* <MotionDiv
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-gray-800 hover:bg-gray-900 text-white py-2 h-12 rounded-full text-md font-medium lg:text-base"
                >
                  Get Started
                </Button>
              </MotionDiv> */}
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
      <div className="hidden lg:block w-[95%] mx-auto">
        <hr className="border-t border-gray-300" />
      </div>
    </main>
  );
}
