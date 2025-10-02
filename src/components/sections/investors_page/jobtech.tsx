"use client";
import { CtaButton } from "../../common/cta-button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionDiv = motion.div as React.ComponentType<any>;
const MotionImg = motion.img as React.ComponentType<any>;
const MotionH1 = motion.h1 as React.ComponentType<any>;
const MotionP = motion.p as React.ComponentType<any>;
const MotionSection = motion.section as React.ComponentType<any>;

export default function JobTech() {
  const jobTechRef = useRef<HTMLDivElement>(null);
  const jobTechInView = useInView(jobTechRef as React.RefObject<Element>, {
    once: true,
    margin: "-100px",
  });
  // Animation variants for grid items
  const gridItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.2 + i * 0.15 },
    }),
  };

  // Divider animation
  const dividerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.7, delay: 0.5 },
    },
  };

  // CTA animation
  const ctaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 1.2 },
    },
  };

  return (
    <MotionSection
      ref={jobTechRef}
      className="w-full bg-[#fff] py-16"
      initial={{ opacity: 0 }}
      animate={jobTechInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MotionDiv
        className=" mx-auto "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          jobTechInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Header */}
        <MotionDiv
          className="mb-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            jobTechInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm font-semibold tracking-wide text-[#FC4C03] uppercase mb-2">
            About Sirtifai
          </p>
          <h2 className="text-2xl sm:text-3xl font-light md:text-4xl lg:text-5xl mb-2 sm:mb-4">
            Sirtifai Is World's First
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] md:text-3xl lg:text-4xl">
            <span className="">EdTech</span> • <span className="">JobTech</span>{" "}
            • <span className="hidden sm:inline">Project Stack Ecosystem</span>
            <span className="sm:hidden">Project Stack</span> •{" "}
            <span className="font-normal">Integrating</span>
          </h3>
        </MotionDiv>

        {/* Divider with animation */}
        <MotionDiv
          className="h-8 w-full bg-[#FE7743] mb-10 origin-left"
          initial="hidden"
          animate={jobTechInView ? "visible" : "hidden"}
          variants={dividerVariants}
        ></MotionDiv>

        {/* Content Grid with staggered animation */}
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 gap-10 text-sm text-gray-800">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Skilling With Certified Training.
              </h4>
              <ul className="list-disc list-inside space-y-1 ">
                <li>Skilling with certified training.</li>
                <li>Practice through verified, mentor-backed paid projects.</li>
                <li>Progress with lifetime placement and re-entry support.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Market Opportunity
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>TAM (Global EdTech + Employment): $160B+</li>
                <li>SAM (India Skilling + Placement): ₹65,000 Cr</li>
                <li>SOM (Youth 18–28, initial target in India): ₹2,000 Cr</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Traction
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>50,000+ Active Learners (SPP & PGCAP)</li>
                <li>
                  10,000+ Target Monthly Closures in AP, Telangana, and UP
                </li>
                <li>78% Retention Rate (PGCAP)</li>
                <li>34% Learner Referral Rate</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Revenue Streams
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Subscriptions (PGCAP)</li>
                {/* <li>One-time Programs (International)</li> */}
                <li>Add-ons (Payroll, Legal, Insurance)</li>
                <li>
                  Partnerships (Colleges, influencers, immigration agents)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Financial Snapshot
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>CAC: ₹1,500–3,000</li>
                <li>LTV per Learner: ₹15,000–62,000</li>
                <li>Gross Margins: 60–72%</li>
                <li>Revenue Projection (2026): ₹200 Cr+</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Programs & Business Models
              </h4>
              {/* <h5 className="font-bold mb-1">
                SPP (Skill • Practice • Progress)
              </h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>
                  Skill (6 months): AI-powered LMS, NSF/NSQF certification.
                </li>
                <li>
                  Practice (3 months): Earn ₹12K–₹35K/month on verified
                  projects.
                </li>
                <li>
                  Progress (Lifetime): Placement, re-entry, job-switch, global
                  track.
                </li>
              </ul> */}
              {/* <p className="mt-1">💰 Pricing: ₹5,999 – ₹5,99,999/month</p> */}

              {/* <h5 className="font-bold mt-4 mb-1">Sirtifai International</h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Global placements in US, Canada, Germany.</li>
                <li>One-time fee programs with visa-ready tracks.</li>
                <li>ROI: ₹59,000–₹3L investment → ₹20–35L/year jobs abroad.</li>
              </ul>
              <p className="mt-1">
                💰 Pricing: Basic – ₹79,999 | Pro – ₹2,12,999 | Elite –
                ₹6,37,999
              </p> */}

              <h5 className="font-bold mt-4 mb-1">
                Post Graduation Certificate in Applied Profession (PGCAP)
              </h5>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>One-time payment → immediate verified income.</li>
                <li>Payroll + ESI/EPF benefits.</li>
                <li>Income range: ₹12K–₹35K/month.</li>
              </ul>
              <p className="mt-1">
                💰 Pricing: ₹60,000
              </p>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">
                Impact
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700  ">
                <li>
                  Economic Mobility: Verified monthly income for learners.
                </li>
                <li>Global Careers: Visa-ready international placements.</li>
                <li>Social Security: ESI/EPF, payroll, legal coverage.</li>
                <li>
                  Inclusivity: Women, rural youth, Tier-3 learners uplifted.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional CTA Button with animation */}
        <MotionDiv
          className="mt-12 text-center"
          initial="hidden"
          animate={jobTechInView ? "visible" : "hidden"}
          variants={ctaVariants}
        >
          {/* <CtaButton>Learn More</CtaButton> */}
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
}
