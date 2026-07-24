"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { pricing, siteConfig } from "@/constants/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Registration() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <section className="py-24 md:py-32 bg-white border-y-[var(--border-width-brutal)] border-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Registration Fees" />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricing.map((plan, index) => (
            <motion.div 
              variants={cardVariants}
              key={plan.category} 
              className={`bg-white border-[3px] border-dark p-8 flex flex-col items-center text-center shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${index === 1 ? 'border-primary shadow-[8px_8px_0_0_#E10600] relative hover:shadow-[4px_4px_0_0_#E10600]' : ''}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 bg-primary text-white text-xs font-bold px-3 py-1 border-[2px] border-dark uppercase tracking-widest z-10">
                  Popular
                </div>
              )}
              <h3 className="font-heading font-black text-xl uppercase mb-6 h-12 flex items-center justify-center">{plan.category}</h3>
              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-primary mb-2 tabular-nums tracking-tighter">{plan.fee}</div>
              <p className="text-sm font-medium text-dark/60 font-sans uppercase tracking-widest">per team</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring", stiffness: 400, damping: 28 }}
        >
          <Button size="lg" className="w-full max-w-md h-16 text-xl" asChild>
            <Link href={siteConfig.registrationLink}>
              Register Now
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
