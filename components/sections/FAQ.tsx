"use client"

import * as React from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { faqs } from "@/constants/data"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
  }

  return (
    <section id="faqs" className="py-24 md:py-32 bg-white border-y-[var(--border-width-brutal)] border-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Frequently Asked Questions" />
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto mt-12 space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="bg-bg border-brutal border-dark shadow-brutal-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent active:bg-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-heading font-bold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`shrink-0 transition-transform duration-300 stroke-[3] ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 border-t-brutal border-dark bg-white font-medium text-dark/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
