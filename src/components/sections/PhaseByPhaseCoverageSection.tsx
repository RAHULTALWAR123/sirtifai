"use client"
import { GraduationCap, Monitor, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

// Strongly typed motion components to fix TypeScript errors
const MotionSection = motion.section as React.ComponentType<any>
const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>

export const PhaseByPhaseCoverageSection = () => {
  return (
    <MotionSection
      className="w-full bg-[#FEF7F1] py-10 sm:py-16 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[1400px] xl:max-w-[1550px] 2xl:max-w-[1700px] mx-auto text-center">
        <MotionH2
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Phase-By-Phase Coverage
        </MotionH2>
        <MotionP
          className="text-gray-600 text-sm sm:text-base lg:text-xl max-w-3xl xl:max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our insurance protection follows you through each phase of your SPP journey, adapting to your evolving needs.
        </MotionP>

        <MotionDiv
          className="bg-white rounded-lg shadow-2xl shadow-black/10 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <MotionDiv
            className="bg-[#1f2937] text-white px-3 py-3 md:px-6 md:py-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6">
              <div className="text-left font-bold text-sm md:text-lg">Program Phase</div>
              <div className="text-left font-bold text-sm md:text-lg">Coverage Type</div>
              <div className="text-left font-bold text-sm md:text-lg">Protection Details</div>
            </div>
          </MotionDiv>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {[
              {
                icon: GraduationCap,
                phase: "Skill Phase",
                coverage: ["Access", "Protection"],
                details: [
                  "Course completion guarantee",
                  "Platform access assurance",
                  "Learning materials availability",
                ],
                color: "bg-[#FE7642]",
              },
              {
                icon: Monitor,
                phase: "Practice Phase",
                coverage: ["Payment", "Guarantee"],
                details: [
                  "Client payment assurance",
                  "Monthly minimum income protection",
                  "Project continuity coverage",
                ],
                color: "bg-[#FE7642]",
              },
              {
                icon: TrendingUp,
                phase: "Progress Phase",
                coverage: ["Career", "Continuity"],
                details: [
                  "Placement guarantee (program-specific)",
                  "Career transition support",
                  "Re-entry assistance if needed",
                ],
                color: "bg-green-500",
              },
            ].map((row, index) => (
              <MotionDiv
                key={index}
                className="p-3 md:p-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                whileHover={{ backgroundColor: "#f9fafb" }}
              >
                <div className="grid grid-cols-[1.5fr_1.5fr_2fr] gap-3 md:gap-6 items-start">
                  {/* Phase Column */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${row.color} rounded-lg flex items-center justify-center`}>
                      <row.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">{row.phase}</h3>
                    </div>
                  </div>

                  {/* Coverage Column */}
                  <div className="text-left">
                    <div className="flex flex-wrap gap-1">
                      {row.coverage.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className="text-left">
                    <ul className="space-y-1">
                      {row.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-600 text-xs md:text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FE7642] rounded-full mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Bottom CTA */}
        <MotionDiv
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <MotionP
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            Ready to get comprehensive coverage for your entire learning journey?
          </MotionP>
          {/* <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <button className="bg-[#FE7642] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FE7642]/90 transition-colors">
              Get Coverage Now
            </button>
            <button className="bg-white text-[#FE7642] border-2 border-[#FE7642] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FE7642] hover:text-white transition-colors">
              Learn More
            </button>
          </MotionDiv> */}
        </MotionDiv>
      </div>
    </MotionSection>
  )
}
