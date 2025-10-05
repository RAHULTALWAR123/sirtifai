/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { motion, MotionProps } from "framer-motion";

// Typed motion components
type DivMotionComponentProps = React.HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = motion.div as unknown as React.FC<DivMotionComponentProps>;

type ImgMotionComponentProps = React.ImgHTMLAttributes<HTMLImageElement> & MotionProps;
const MotionImg = motion.img as unknown as React.FC<ImgMotionComponentProps>;

type H2MotionComponentProps = React.HTMLAttributes<HTMLHeadingElement> & MotionProps;
const MotionH2 = motion.h2 as unknown as React.FC<H2MotionComponentProps>;

type Logo = { alt: string; src: string; title: string };

const DEFAULT_LOGOS: Logo[] = [
  {
    alt: "coinmarketcap",
    src: "/assets/Logos/coinmarketcamp.svg",
    title: "coinmarketcamp",
  },
  {
    alt: "coinpaprika",
    src: "/assets/Logos/coinpaprika.svg",
    title: "coinpaprika",
  },
  { alt: "nomics", src: "/assets/Logos/nomics.svg", title: "nomics" },
  { alt: "messari", src: "/assets/Logos/messari.svg", title: "messari" },
  {
    alt: "livecoinwatch",
    src: "/assets/Logos/livecoinwatch.svg",
    title: "livecoinwatch",
  },
  {
    alt: "coingeeco",
    src: "/assets/Logos/coingeeco.svg",
    title: "coingeeco",
  },
  {
    alt: "cryptocompare",
    src: "/assets/Logos/cryptocompare.svg",
    title: "cryptocompare",
  },
  {
    alt: "coinmarketcap",
    src: "/assets/Logos/coinmarketcap_2.svg",
    title: "coinmarketcap",
  },
];

export default function LogoMarquee({
  logos = DEFAULT_LOGOS,
}: {
  logos?: Logo[];
}) {
  const container = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.09 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="partners" className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
            margin: "-120px 0px -120px 0px",
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-10 place-items-center"
        >
          {logos.map((logo, idx) => (
            <MotionDiv
              key={logo.alt + idx}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-center justify-center"
            >
              <div className="flex flex-col justify-center items-center py-1">
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    width={150}
                    height={150}
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 150px"
                    className="h-full w-full object-contain"
                  />
                </MotionDiv>
                <MotionH2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.35 }}
                  className="text-sm sm:text-base font-semibold text-center"
                >
                  {logo.title}
                </MotionH2>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
