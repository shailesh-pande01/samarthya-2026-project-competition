"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { prizes } from "@/constants/data"
import { Trophy, Medal, Award } from "lucide-react"
import { motion } from "framer-motion"

export function PrizeSection() {
  const getPrizeIcon = (type: string) => {
    switch (type) {
      case "winner":
        return <Trophy size={48} className="text-primary" />
      case "runner-up":
        return <Medal size={40} className="text-dark" />
      case "special":
        return <Award size={40} className="text-primary" />
      default:
        return <Award size={40} />
    }
  }

  const winner = prizes.categories.find(p => p.type === "winner")
  const runnerUps = prizes.categories.filter(p => p.type === "runner-up")
  const special = prizes.categories.find(p => p.type === "special")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 220, damping: 24 } }
  }

  return (
    <section id="prizes" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-dark -z-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title={`Prize Pool ${prizes.pool}`} />
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Winner Card (Centered & Larger) */}
          {winner && (
            <motion.div variants={cardVariants} className="flex justify-center mb-12 relative z-20">
              <div className="bg-white border-brutal border-dark p-8 shadow-[12px_12px_0_0_#E10600] flex flex-col items-center text-center hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_#E10600] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] min-w-[300px] group">
                <div className="mb-4 bg-bg rounded-full p-4 border-[3px] border-dark group-hover:scale-105 transition-transform duration-300">
                  {getPrizeIcon(winner.type)}
                </div>
                <h3 className="font-heading font-black text-3xl uppercase mb-2">{winner.title}</h3>
                <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-primary border-t-[3px] border-dark pt-4 mt-2 w-full tabular-nums tracking-tighter">{winner.amount}</p>
              </div>
            </motion.div>
          )}

          {/* Runners up & Special Prize */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {runnerUps.map((prize, index) => (
              <motion.div variants={cardVariants} key={prize.title} className="bg-white border-brutal border-dark p-6 shadow-brutal flex flex-col items-center text-center hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group">
                <div className="mb-4 bg-bg rounded-full p-3 border-[3px] border-dark group-hover:scale-105 transition-transform duration-300">
                  {getPrizeIcon(prize.type)}
                </div>
                <h3 className="font-heading font-black text-xl uppercase mb-2">{prize.title}</h3>
                <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-dark border-t-[3px] border-dark pt-4 mt-2 w-full tabular-nums tracking-tighter">{prize.amount}</p>
              </motion.div>
            ))}
            
            {special && (
              <motion.div variants={cardVariants} className="bg-dark text-white border-brutal border-primary p-6 shadow-[8px_8px_0_0_#E10600] flex flex-col items-center text-center hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[4px_4px_0_0_#E10600] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group">
                <div className="mb-4 bg-white rounded-full p-3 border-[3px] border-primary group-hover:scale-105 transition-transform duration-300">
                  {getPrizeIcon(special.type)}
                </div>
                <h3 className="font-heading font-black text-xl uppercase mb-2 text-primary">Special Prize</h3>
                <p className="font-bold text-sm mb-2">{special.title}</p>
                <p className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-white border-t-[3px] border-white/20 pt-4 mt-2 w-full tabular-nums tracking-tighter">{special.amount}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
