/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const MotionDiv = motion.div as React.ComponentType<any>;
const MotionImg = motion.img as React.ComponentType<any>;
const MotionH2 = motion.h2 as React.ComponentType<any>;
const MotionH3 = motion.h3 as React.ComponentType<any>;
const MotionP = motion.p as React.ComponentType<any>;
const MotionSection = motion.section as React.ComponentType<any>;

export default function PrimeInvestor() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef as React.RefObject<Element>, {
    once: true,
    margin: "-100px",
  });
  const tick = (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20.8066C12.6522 20.8066 15.1957 19.7531 17.0711 17.8777C18.9464 16.0023 20 13.4588 20 10.8066C20 8.15448 18.9464 5.61094 17.0711 3.73557C15.1957 1.86021 12.6522 0.806641 10 0.806641C7.34784 0.806641 4.8043 1.86021 2.92893 3.73557C1.05357 5.61094 0 8.15448 0 10.8066C0 13.4588 1.05357 16.0023 2.92893 17.8777C4.8043 19.7531 7.34784 20.8066 10 20.8066ZM14.4141 8.9707L9.41406 13.9707C9.04688 14.3379 8.45312 14.3379 8.08984 13.9707L5.58984 11.4707C5.22266 11.1035 5.22266 10.5098 5.58984 10.1465C5.95703 9.7832 6.55078 9.7793 6.91406 10.1465L8.75 11.9824L13.0859 7.64258C13.4531 7.27539 14.0469 7.27539 14.4102 7.64258C14.7734 8.00977 14.7773 8.60352 14.4102 8.9668L14.4141 8.9707Z"
        fill="#FF7846"
      />
    </svg>
  );
  return (
    <MotionSection
      ref={heroRef}
      className="w-full bg-[#FFF9F6] py-16 z-10"
      initial={{ opacity: 0 }}
      animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/assets/investors_page/elipse.png"
        alt="Left Stick"
        width={400}
        height={400}
        className="absolute left-0 bottom-[-545px] z-0 hidden md:block"
      />
      <MotionDiv
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Left Side - Image */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <MotionDiv
            className="overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/assets/investors_page/vakati.jpg"
              alt="Vakati Ravichandra Reddy"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <MotionP
              className="bg-white p-3 text-sm italic text-gray-800 border-t border-gray-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              - I believe every learner deserves not just skills, but verified
              income and lifelong career security. Sirtifai is the bridge
              between today’s talent and tomorrow’s opportunities.
            </MotionP>
          </MotionDiv>
        </MotionDiv>

        {/* Right Side - Text */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <MotionH2
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-bold text-[#FC4C03] md:text-3xl"
          >
            Vakati Ravichandra Reddy
          </MotionH2>
          <MotionH3
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-1 text-lg font-semibold text-gray-800"
          >
            Prime Investor & Visionary
          </MotionH3>
          <MotionP className="mt-4 text-gray-700 text-sm leading-relaxed font-medium">
            Vakati Ravichandra Reddy is the founding visionary and prime
            investor behind Sirtifai. A serial entrepreneur and global investor,
            he has led diverse ventures across education, technology, finance,
            aerospace, and civic innovation. With his strategic backing,
            Sirtifai is set to become the world’s first true career
            transformation engine.
          </MotionP>

          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              {tick}
              <span>
                Spearheading Sirtifai’s global vision to empower learners across
                India and international markets.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {tick}
              <span>
                Driving investments into SPP, International, and Freelancer
                editions for large-scale adoption.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {tick}
              <span>
                Championing Tier-2 & Tier-3 inclusivity, ensuring rural and
                underprivileged talent get global opportunities.
              </span>
            </li>
            <li className="flex items-start gap-2">
              {tick}
              <span>
                Positioning Sirtifai within the Raador Holdings innovation
                ecosystem.
              </span>
            </li>
          </ul>
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
}
