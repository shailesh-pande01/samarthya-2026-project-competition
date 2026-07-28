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
    visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
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
            <div className="absolute top-0 right-10 w-1 h-16 bg-dark origin-top scale-y-75 group-hover/card:scale-y-100 transition-transform duration-300 ease-out" />

            <h3 className="font-heading font-black text-2xl uppercase mb-8 border-b-[3px] border-dark pb-4 tracking-wider">Get in Touch</h3>
            
            <div className="space-y-8">
              <a href={siteConfig.mailtoLink} className="flex items-center gap-5 group">
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

              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="bg-[#25D366] text-white p-3 border-[2px] border-dark group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.41 1.451 5.428 0 9.85-4.303 9.853-9.592.002-2.561-1.002-4.97-2.83-6.796A9.52 9.52 0 0 0 12.008 1.54c-5.435 0-9.861 4.305-9.863 9.594-.001 2.029.533 4.012 1.547 5.766l-.995 3.636 3.79-.974zm12.39-6.07c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-1.125-.56-1.93-1.04-2.695-2.355-.2-.35.2-.33.57-1.08.06-.12.03-.22-.01-.3-.05-.07-.47-1.12-.64-1.54-.17-.41-.34-.35-.47-.36-.12-.01-.27-.01-.42-.01-.15 0-.38.06-.58.27-.2.2-1.01.99-1.01 2.41s1.03 2.78 1.17 2.97c.15.2 2.03 3.1 4.92 4.35.688.298 1.347.506 1.838.662.693.22 1.325.19 1.824.115.556-.083 1.77-.722 2.02-1.417.25-.695.25-1.29.17-1.417-.07-.12-.27-.22-.57-.37z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-dark/50 tracking-widest mb-1">WhatsApp</p>
                  <p className="font-bold text-lg group-hover:text-primary transition-colors">Chat with Us</p>
                </div>
              </a>
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
                <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="bg-white text-dark p-3 border-[2px] border-dark hover:-translate-y-1 hover:shadow-brutal hover:bg-dark hover:text-white active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 transition-all duration-300 flex items-center justify-center" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white text-dark p-3 border-[2px] border-dark hover:-translate-y-1 hover:shadow-brutal hover:bg-dark hover:text-white active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 transition-all duration-300 flex items-center justify-center" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href={siteConfig.socials.youtube} target="_blank" rel="noopener noreferrer" className="bg-white text-dark p-3 border-[2px] border-dark hover:-translate-y-1 hover:shadow-brutal hover:bg-dark hover:text-white active:translate-y-0 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 transition-all duration-300 flex items-center justify-center" aria-label="YouTube">
                  <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
