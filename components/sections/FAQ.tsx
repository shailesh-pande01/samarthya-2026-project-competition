"use client"

import * as React from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { faqs } from "@/constants/data"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faqs" className="py-20 bg-white border-y-brutal border-dark">
      <div className="container mx-auto px-4">
        <SectionTitle title="Frequently Asked Questions" />
        
        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-bg border-brutal border-dark shadow-brutal-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-accent transition-colors"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
