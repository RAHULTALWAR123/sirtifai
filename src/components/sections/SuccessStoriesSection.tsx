'use client';

import { ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../../constants/data';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

// ✅ Strongly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;

const MotionH3 = motion.h3 as React.ComponentType<
  React.HTMLAttributes<HTMLHeadingElement> & import('framer-motion').MotionProps
>;

const MotionP = motion.p as React.ComponentType<
  React.HTMLAttributes<HTMLParagraphElement> & import('framer-motion').MotionProps
>;

const MotionImg = motion.img as React.ComponentType<
  React.ImgHTMLAttributes<HTMLImageElement> & import('framer-motion').MotionProps
>;

const MotionButton = motion.button as React.ComponentType<
  React.ButtonHTMLAttributes<HTMLButtonElement> & import('framer-motion').MotionProps
>;

export const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(SUCCESS_STORIES.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(SUCCESS_STORIES.length / 3)) % Math.ceil(SUCCESS_STORIES.length / 3));
  };

  // Create groups of 3 testimonials
  const testimonialGroups = [];
  for (let i = 0; i < SUCCESS_STORIES.length; i += 3) {
    testimonialGroups.push(SUCCESS_STORIES.slice(i, i + 3));
  }

  return (
    <section ref={ref} className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <MotionDiv 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-orange-500 text-white px-3 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="mr-2">⭐</span>
            Success Stories
          </div>
          <MotionH3 
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real Career Transformations
          </MotionH3>
          <MotionP 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join <span className='font-bold text-orange-500'>50,000+</span> professionals who transformed their careers with SPP&apos;s 
            <br />
            <span className='text-gray-600 font-bold mx-1'>
            Learn • Work • Earn • Rise   
            </span>
             framework
          </MotionP>
        </MotionDiv>

        {/* Success Stories Carousel - 3 Cards at once */}
        <MotionDiv 
          className="relative overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.map((story, storyIndex) => (
                    <MotionDiv 
                      key={story.id} 
                      className="bg-white rounded-lg shadow-lg p-6"
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                      transition={{ duration: 0.8, delay: 0.8 + storyIndex * 0.2 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Quote Icon */}
                      <div className="text-orange-500 text-2xl mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"><svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg></div>
                        
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex text-orange-500 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span className="text-gray-700 font-semibold">{story.rating}.0</span>
                      </div>

                      {/* Quote */}
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {story.quote}
                      </p>

                      {/* Profile Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <MotionImg
                            src={story.image}
                            alt={story.name}
                            className="w-12 h-12 rounded-full object-cover mr-3"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 + storyIndex * 0.2 }}
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{story.name}</p>
                            <p className="text-sm text-gray-600">{story.designation} at {story.company}</p>
                          </div>
                        </div>

                        {/* Salary Tag */}
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                          {story.salary}
                        </div>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Navigation Controls */}
        <MotionDiv 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <MotionButton 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="rotate-180" size={25} />
          </MotionButton>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonialGroups.map((_, index) => (
              <MotionButton
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          <MotionButton 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight size={25} />
          </MotionButton>
        </MotionDiv>
      </div>
    </section>
  );
};