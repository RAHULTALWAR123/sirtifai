"use client"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export const InsuranceCTASection = () => {
  return (
    <motion.section
      className="w-full py-6 sm:py-10 md:py-16 bg-[#FFF9F5]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full bg-[#FE7642] px-2 xs:px-4 sm:px-8 py-8 xs:py-10 md:py-16 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-4xl">
          <motion.h2
            className="text-2xl xs:text-3xl md:text-4xl font-bold text-white mb-2 xs:mb-4 text-left sm:text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            className="text-white text-sm sm:text-base lg:text-xl mb-6 xs:mb-8 max-w-2xl text-left sm:text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Join thousands of learners who have transformed their careers with Sirtifai&apos;s structured programs.
          </motion.p>

          <motion.div
            className="flex flex-row gap-3 xs:gap-5 w-full sm:justify-center sm:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="w-full xs:w-auto px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3.5 sm:py-4 bg-white text-[#FE7642] rounded-full text-base xs:text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 xs:gap-3 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Take Career Quiz
            </motion.button>
            <motion.button
              className="w-full xs:w-auto px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3.5 sm:py-4 bg-[#FE7642] text-white border-2 border-white rounded-full text-base xs:text-lg font-semibold hover:bg-white hover:text-[#FE7642] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 xs:gap-3 cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Join SPP Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
