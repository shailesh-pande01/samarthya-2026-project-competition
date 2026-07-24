"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { timeline } from "@/constants/data"
import { CheckCircle2, FileText, PlaySquare, Users } from "lucide-react"
import { motion } from "framer-motion"

export function Timeline() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <FileText size={32} />
      case 1: return <PlaySquare size={32} />
      case 2: return <Users size={32} />
      default: return <CheckCircle2 size={32} />
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 220, damping: 24 } }
  }

  return (
    <section id="timeline" className="py-24 md:py-32 bg-white border-y-[var(--border-width-brutal)] border-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Competition Process" />
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-16 space-y-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main vertical circuit trace */}
          <div className="absolute inset-0 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-full w-[4px] bg-dark z-0" />

          {timeline.map((item, index) => (
            <motion.div variants={itemVariants} key={item.round} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Central Node */}
              <div className="flex items-center justify-center w-12 h-12 rounded-none border-[3px] border-dark bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-brutal-sm z-10 group-hover:scale-110 transition-transform duration-300 relative">
                <span className="font-heading font-black text-xl tabular-nums">{index + 1}</span>
              </div>
              
              {/* Horizontal circuit trace linking node to card */}
              <div className="hidden md:block absolute top-1/2 left-1/2 w-[calc(50%-2rem)] h-[4px] bg-dark -z-0 group-odd:origin-left group-even:origin-right group-odd:-translate-x-full group-even:translate-x-0 opacity-50" />

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white border-brutal border-dark p-6 md:p-8 shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative z-20">
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-primary bg-bg p-3 border-[3px] border-dark">
                      {getIcon(index)}
                    </div>
                    <div>
                      <span className="text-primary font-bold text-sm tracking-widest uppercase block">{item.round}</span>
                      <h3 className="text-2xl font-black font-heading uppercase">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="font-medium text-dark/80 mb-6 leading-relaxed">{item.description}</p>
                  
                  {item.evaluation.length > 0 && (
                    <div className="mb-6">
                      <p className="font-bold text-sm uppercase text-dark mb-3">Evaluation based on:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.evaluation.map(evalItem => (
                          <span key={evalItem} className="bg-accent px-3 py-1.5 text-xs font-bold border-[2px] border-dark uppercase tracking-wide">
                            {evalItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.details && (
                    <div className="mb-6 space-y-3">
                      {item.details.map(detail => (
                        <div key={detail.mode} className="flex items-center gap-3 bg-bg p-3 border-[2px] border-dark">
                          <span className="font-bold text-primary min-w-[70px] uppercase text-xs tracking-wider">{detail.mode}:</span>
                          <span className="text-sm font-bold">{detail.target}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-5 border-t-[3px] border-dashed border-dark flex items-center gap-3 bg-primary/5 -mx-6 -mb-6 px-6 py-4">
                    <CheckCircle2 size={20} className="text-primary" />
                    <p className="font-bold text-sm uppercase tracking-wide">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
