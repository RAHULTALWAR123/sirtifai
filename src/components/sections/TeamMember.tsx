/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "../ui/Button"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"

const MotionDiv = motion.div as React.ComponentType<any>
const MotionH2 = motion.h2 as React.ComponentType<any>
const MotionH3 = motion.h3 as React.ComponentType<any>
const MotionH4 = motion.h4 as React.ComponentType<any>
const MotionP = motion.p as React.ComponentType<any>
const MotionImg = motion.img as React.ComponentType<any>

const teamMembers = [
  {
    id: 3,
    name: "Dharmesh Gajera",
    title: "Director & Chief Executive Officer (CEO)",
    image: "/assets/about/ceo.jpeg",
    bio: "Dharmesh Gajera is an accomplished business leader with over a decade of expertise in sales, marketing, public relations, digital marketing, operations, and management. He has a proven track record of driving sustainable business growth, leading high-impact campaigns, and optimizing organizational processes. Recognized for his ability to blend strategic vision with executional excellence, Dharmesh excels at building strong teams and creating scalable systems that align with long-term organizational goals.",
    linkedin: "linkedin.com/in/dharmesh-patel-5b156625b",
    departmentOversight: "As Director & CEO, Dharmesh spearheads the sales, marketing, PR, digital outreach, operations, and business development functions. He plays a pivotal role in shaping the company's strategic direction, corporate governance, and global expansion roadmap, particularly across high-growth markets such as the UAE and Singapore. His leadership ensures ethical, growth-oriented, and customer-centric operations, while continuously fostering innovation and competitive advantage in the global marketplace."
  },
  {
    id: 1,
    name: "Jay Barochiya",
    title: "Chief Technology Officer (CTO)",
    image: "/assets/about/cto.jpeg",
    bio: "Jay Barochiya is an accomplished technology leader and senior mobile applications developer with more than 8 years of experience in designing, developing, and deploying innovative Android solutions. He brings expertise in Android app design, API integration, Room & SQLite databases, Firebase services, and e-commerce application development. Over his career, Jay has successfully delivered 50+ Android applications across diverse industries, combining strong technical execution with client-focused communication and project management. His core strength lies in creating scalable, user-friendly, and business-aligned digital products that drive organizational success.",
    linkedin: "linkedin.com/in/jay-barochiya-908a41146",
    departmentOversight: "As CTO, Jay leads the mobile technology vision and strategy, overseeing the full lifecycle of Android application development, testing, and deployment. He manages end-to-end mobile solutions, including API integration, database management, and app maintenance, while ensuring robust system performance and scalability. Beyond technology, Jay plays a key role in client communication, operational analysis, and team leadership, ensuring timely delivery of high-quality applications that align with the company's strategic objectives and growth roadmap."
  },
  {
    id: 2,
    name: "Nikunj Viradiya",
    title: "Chief Learning Officer (CLO)",
    image: "/assets/about/CLO.jpeg",
    bio: "Nikunj Viradiya is a forward-thinking IT and learning leader with 8+ years of experience in software development, IT management, and digital learning solutions. With strong expertise in PHP Core, Laravel, CodeIgniter, C# Windows, and Android development, he has transformed technical knowledge into impactful learning frameworks and training ecosystems. Passionate about empowering teams through technology-driven education, Nikunj focuses on building scalable learning platforms, fostering continuous skill development, and aligning workforce training with organizational growth objectives.",
    linkedin: "linkedin.com/in/nikunj-viradiya-a40273b3",
    departmentOversight: "As CLO, Nikunj oversees the corporate learning, training, and skill development functions. He integrates IT expertise with learning strategy, ensuring that technical and business teams remain future-ready. His role emphasizes the creation of digital learning systems, upskilling programs, and knowledge-sharing platforms, while also driving innovation in employee development, leadership training, and organizational learning culture."
  },
  
]

export default function TeamMemberCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [expandedMembers, setExpandedMembers] = useState<number[]>([])

  const sectionInView = useInView(sectionRef as React.RefObject<Element>, { once: true, margin: "-50px" })
  const headerInView = useInView(headerRef as React.RefObject<Element>, { once: true, margin: "-100px" })
  const carouselInView = useInView(carouselRef as React.RefObject<Element>, { once: true, margin: "-100px" })

  const toggleMemberExpansion = (memberId: number) => {
    setExpandedMembers(prev => 
      prev.includes(memberId) 
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    )
  }

  return (
    <MotionDiv
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
      initial={{ opacity: 0 }}
      animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MotionImg
        src="/assets/about/team_member_background.png"
        alt="decorative background"
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-8 -left-8 w-60 sm:w-72 opacity-60"
        initial={{ opacity: 0, x: -50, rotate: -10 }}
        animate={sectionInView ? { opacity: 0.6, x: 0, rotate: 0 } : { opacity: 0, x: -50, rotate: -10 }}
        transition={{ duration: 1.0, delay: 0.5 }}
      />

      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            position: static !important;
            margin-top: 0 !important;
            width: auto !important;
            height: auto !important;
          }

          .swiper-button-prev:after,
          .swiper-button-next:after {
            display: none !important;
          }

          .swiper-button-disabled {
            opacity: 0.5 !important;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 4.5rem;
          }
        `}
      </style>

      <MotionDiv
        ref={headerRef}
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <MotionH2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-orange-400">~</span> Team Member <span className="text-orange-400">~</span>
        </MotionH2>
        <MotionH3
          className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          &quot;Leaders, Innovators, Mentors – All in One Team&quot;
        </MotionH3>
        <MotionP
          className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our team combines the energy of startup culture with the expertise of industry veterans, uniting EdTech,
          HRTech, and CareerTech to change how Bharat learns and works.
        </MotionP>
      </MotionDiv>

      <MotionDiv
        ref={carouselRef}
        className="flex items-center gap-2 sm:gap-4 md:gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={carouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-prev w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-orange-50 shadow-lg border border-orange-200 hover:border-orange-300 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          </Button>
        </motion.div>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            spaceBetween={16}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              480: { slidesPerView: 1.25, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="pb-6 sm:pb-8"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={member.id}>
                <MotionDiv
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={carouselInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Member Image */}
                  <MotionDiv
                    className="aspect-[3/4] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className={`w-full h-full object-cover ${
                        member.id === 2 ? 'object-center scale-110' : ''
                      }`}
                      style={member.id === 2 ? { objectPosition: 'center 30%' } : {}}
                    />
                  </MotionDiv>

                  <MotionDiv
                    className="h-1 bg-orange-500"
                    initial={{ scaleX: 0 }}
                    animate={carouselInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 + index * 0.1 }}
                  />

                  <MotionDiv
                    className="p-4 sm:p-5 text-center flex-grow flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <MotionH4
                      className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    >
                      {member.name}
                    </MotionH4>
                    <MotionP
                      className="text-orange-500 text-sm sm:text-base font-medium mb-2 sm:mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                    >
                      {member.title}
                    </MotionP>
                    <MotionP
                      className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 line-clamp-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={carouselInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                    >
                      {member.bio.substring(0, 100)}...
                    </MotionP>

                    {/* Read More Button */}
                    <MotionDiv
                      className="mt-auto"
                      initial={{ opacity: 0 }}
                      animate={carouselInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 2.0 + index * 0.1 }}
                    >
                      <Button
                        onClick={() => toggleMemberExpansion(member.id)}
                        variant="outline"
                        size="sm"
                        className="w-full text-orange-500 border-orange-300 hover:bg-orange-50 hover:border-orange-400 transition-all duration-200 text-xs sm:text-sm"
                      >
                        {expandedMembers.includes(member.id) ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-2" />
                            Read Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-2" />
                            Read More
                          </>
                        )}
                      </Button>
                    </MotionDiv>

                    {/* Expanded Content */}
                    {expandedMembers.includes(member.id) && (
                      <MotionDiv
                        className="mt-4 text-left"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm mb-1">Brief Bio</h5>
                            <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                          </div>
                          
                          {/* <div>
                            <h5 className="font-semibold text-gray-800 text-sm mb-1">LinkedIn</h5>
                            <a 
                              href={`https://${member.linkedin}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-orange-500 text-xs hover:underline"
                            >
                              {member.linkedin}
                            </a>
                          </div> */}

                          <div>
                            <h5 className="font-semibold text-gray-800 text-sm mb-1">Department Oversight</h5>
                            <p className="text-gray-600 text-xs leading-relaxed">{member.departmentOversight}</p>
                          </div>
                        </div>
                      </MotionDiv>
                    )}
                  </MotionDiv>
                </MotionDiv>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={carouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="swiper-button-next w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-orange-50 shadow-lg border border-orange-200 hover:border-orange-300 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          </Button>
        </motion.div>
      </MotionDiv>
    </MotionDiv>
  )
}
