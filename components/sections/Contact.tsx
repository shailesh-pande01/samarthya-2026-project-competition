"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { siteConfig } from "@/constants/data"
import { Mail, Globe, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Blueprint background and subtle grid */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.04] pointer-events-none" />
      
      {/* CAD-style corner registration marks */}
      <div className="hidden md:block absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-dark opacity-30 pointer-events-none" />
      <div className="hidden md:block absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-dark opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionTitle title="Contact Us" />
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={childVariants} className="bg-white border-[3px] border-dark p-8 md:p-10 shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group/card relative">
            
            {/* Circuit line accent */}
            <div className="absolute top-0 right-10 w-1 h-12 bg-dark group-hover/card:h-16 transition-all duration-300 ease-out" />

            <h3 className="font-heading font-black text-2xl uppercase mb-8 border-b-[3px] border-dark pb-4 tracking-wider">Get in Touch</h3>
            
            <div className="space-y-8">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-5 group">
                <div className="bg-primary text-white p-3 border-[2px] border-dark group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-dark/50 tracking-widest mb-1">Email</p>
                  <p className="font-bold text-lg group-hover:text-primary transition-colors">{siteConfig.email}</p>
                </div>
              </a>
              
              <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="bg-dark text-white p-3 border-[2px] border-dark group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-dark/50 tracking-widest mb-1">Website</p>
                  <p className="font-bold text-lg group-hover:text-primary transition-colors">www.sknisb.in</p>
                </div>
              </a>
              
              <div className="flex items-center gap-5">
                <div className="bg-bg text-dark p-3 border-[2px] border-dark">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-dark/50 tracking-widest mb-1">Location</p>
                  <p className="font-bold text-lg">{siteConfig.venue}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={childVariants} className="bg-primary border-[3px] border-dark p-8 md:p-10 shadow-brutal text-white flex flex-col justify-center relative hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden">
            
            {/* Background trace */}
            <svg className="absolute -bottom-10 -right-10 w-48 h-48 text-dark/20 pointer-events-none" viewBox="0 0 100 100" fill="none">
              <path d="M 0 100 L 50 100 L 50 50 L 100 50" stroke="currentColor" strokeWidth="4" />
            </svg>

            <h3 className="font-heading font-black text-3xl md:text-4xl uppercase mb-6 leading-tight relative z-10">
              Have questions? <br />
              <span className="text-dark bg-white px-3 mt-3 inline-block -ml-2 -rotate-2 shadow-brutal-sm border-[2px] border-dark">We're here to help!</span>
            </h3>
            <p className="text-lg font-medium mb-10 relative z-10 leading-relaxed">
              Reach out to our team for any queries regarding registration, themes, or the event schedule.
            </p>
            
            <div className="relative z-10">
              <p className="font-bold uppercase tracking-widest mb-4 border-b-[3px] border-dark/20 pb-2">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="bg-white text-dark px-6 py-3 border-[2px] border-dark hover:-translate-y-1 hover:shadow-brutal hover:bg-dark hover:text-white font-black uppercase tracking-wider transition-all duration-300">
                  IG
                </a>
                <a href="#" className="bg-white text-dark px-6 py-3 border-[2px] border-dark hover:-translate-y-1 hover:shadow-brutal hover:bg-dark hover:text-white font-black uppercase tracking-wider transition-all duration-300">
                  IN
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
