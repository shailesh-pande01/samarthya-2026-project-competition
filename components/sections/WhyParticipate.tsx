"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { benefits } from "@/constants/data"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function WhyParticipate() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
  }

  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Why Participate?" subtitle="Unlock your potential and showcase your skills on a national platform." />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              variants={cardVariants}
              key={index} 
              className="bg-white border-brutal border-dark p-6 flex flex-col items-center justify-center text-center shadow-brutal-sm hover:translate-y-[calc(var(--brutal-offset)/4)] hover:shadow-brutal transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] min-h-[160px]"
            >
              <Sparkles size={24} className="text-primary mb-4" />
              <p className="font-heading font-bold uppercase text-sm md:text-base leading-tight">{benefit}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
