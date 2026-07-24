"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { themes } from "@/constants/data"
import { HeartHandshake, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export function Themes() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake size={48} />
      case "Lightbulb":
        return <Lightbulb size={48} />
      default:
        return <Lightbulb size={48} />
    }
  }

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
    <section id="themes" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle 
            title="Competition Themes" 
            subtitle="Choose a theme that aligns with your innovative ideas."
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {themes.map((theme, index) => (
            <motion.div 
              variants={cardVariants}
              key={theme.id}
              className="bg-white border-brutal border-dark shadow-brutal p-8 md:p-10 relative group hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            >
              <div className="absolute top-4 right-4 text-dark/10 font-heading font-black text-6xl pointer-events-none group-hover:text-primary/10 transition-colors tabular-nums">
                0{index + 1}
              </div>
              
              {/* Corner mark */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="bg-primary w-20 h-20 flex items-center justify-center text-white border-brutal border-dark mb-6 group-hover:scale-105 transition-transform duration-300">
                {getIcon(theme.icon)}
              </div>
              <h3 className="text-3xl font-heading font-black mb-4 uppercase">{theme.title}</h3>
              <p className="text-lg font-medium text-dark/80">
                {theme.description}
              </p>
              {/* Decorative circuit line */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
