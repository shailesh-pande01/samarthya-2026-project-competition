"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { siteConfig } from "@/constants/data"
import { motion } from "framer-motion"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.04]"></div>

      {/* Decorative corners */}
      <div className="hidden md:block absolute top-0 left-0 w-16 h-16 border-t-brutal border-l-brutal border-dark" />
      <div className="hidden md:block absolute top-0 right-0 w-16 h-16 border-t-brutal border-r-brutal border-dark" />
      <div className="hidden md:block absolute bottom-0 left-0 w-16 h-16 border-b-brutal border-l-brutal border-dark" />
      <div className="hidden md:block absolute bottom-0 right-0 w-16 h-16 border-b-brutal border-r-brutal border-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title={`About ${siteConfig.name}`} />
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-bg border-brutal border-dark p-8 md:p-12 shadow-brutal-accent relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Inner accent */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary border-[3px] border-dark" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-dark border-[3px] border-primary" />

            <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
              <motion.p variants={childVariants}>
                <strong className="text-primary font-bold">Samarthya 2026</strong> is a national-level project competition organized by <strong className="font-bold text-dark">{siteConfig.organizer}</strong>, aimed at inspiring students to develop innovative and impactful solutions for real-world challenges.
              </motion.p>
              
              <motion.div variants={childVariants} className="bg-white border-[3px] border-dark p-6 my-8 -mx-4 md:mx-0 shadow-brutal-sm relative">
                {/* Circuit trace accent */}
                <div className="absolute top-1/2 -left-10 w-10 h-[3px] bg-dark hidden md:block" />
                <div className="absolute top-1/2 -right-10 w-10 h-[3px] bg-dark hidden md:block" />
                
                <p className="mb-4">The competition revolves around two major themes:</p>
                <ul className="list-none space-y-3 font-bold font-heading text-xl">
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-primary block border-2 border-dark" /> Women Empowerment
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-4 h-4 bg-dark block border-2 border-primary" /> Open Innovation
                  </li>
                </ul>
              </motion.div>

              <motion.p variants={childVariants}>
                It follows a hybrid format involving online submissions and offline/online final presentations.
              </motion.p>
              <motion.p variants={childVariants} className="text-primary font-bold">
                Students can showcase creativity, technical excellence, research and entrepreneurship.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
