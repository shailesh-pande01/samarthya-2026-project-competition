"use client"

import { siteConfig } from "@/constants/data"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, MapPin, MonitorSmartphone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Power-on Schematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.svg
          className="absolute w-full h-full"
          initial="hidden"
          animate="visible"
        >
          {/* Top left circuit trace */}
          <motion.path
            d="M -100 200 L 200 200 L 250 150 L 800 150"
            stroke="var(--color-primary)"
            strokeWidth="2"
            fill="transparent"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 0.3, transition: { duration: 1.5, ease: "easeInOut" } }
            }}
          />
          {/* Bottom right circuit trace */}
          <motion.path
            d="M 110vw 80vh L 80vw 80vh L 75vw 85vh L 30vw 85vh"
            stroke="var(--color-dark)"
            strokeWidth="2"
            fill="transparent"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 0.2, transition: { duration: 1.5, delay: 0.5, ease: "easeInOut" } }
            }}
          />
        </motion.svg>
        {/* Blueprint Grid */}
        <div className="absolute inset-0 bg-blueprint opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title with Power-on sequence */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "brightness(2)" }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              filter: "brightness(1)",
            }}
            transition={{ duration: 0.8, type: "spring" as any, stiffness: 200, damping: 20 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-4 relative inline-block">
               {/* CAD Registration Marks */}
               <div className="absolute -top-4 -left-4 w-6 h-6 border-t-[3px] border-l-[3px] border-dark z-20 opacity-50" />
               <div className="absolute -top-4 -right-4 w-6 h-6 border-t-[3px] border-r-[3px] border-dark z-20 opacity-50" />
               <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b-[3px] border-l-[3px] border-dark z-20 opacity-50" />
               <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-[3px] border-r-[3px] border-dark z-20 opacity-50" />
              
              <span className="inline-block hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-default relative z-10">
                Samarthya
              </span>
              <br />
              <span className="text-primary inline-block hover:-translate-y-1 hover:-translate-x-1 transition-transform cursor-default relative z-10">
                2026
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, boxShadow: "0px 0px 40px 10px rgba(225,6,0,0)" }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              boxShadow: ["0px 0px 40px 10px rgba(225,6,0,0.5)", "0px 0px 0px 0px rgba(225,6,0,0)"]
            }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-12 inline-block relative"
          >
            <p className="text-xl md:text-3xl font-bold font-heading border-brutal border-dark py-4 bg-white px-8 shadow-brutal uppercase">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
            }}
          >
            {[
              { icon: MonitorSmartphone, title: "Competition Mode", value: siteConfig.mode, sub: "Online + Offline" },
              { icon: Calendar, title: "Date", value: siteConfig.date },
              { icon: MapPin, title: "Venue", value: siteConfig.venue }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring" as any, stiffness: 300, damping: 24 } }
                }}
                className="bg-white border-brutal border-dark p-4 flex items-center gap-4 shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group"
              >
                <div className="bg-primary p-3 border-2 border-dark text-white group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">{item.title}</p>
                  <p className="font-heading font-bold text-lg tabular-nums tracking-tight">{item.value}</p>
                  {item.sub && <p className="text-sm font-medium">{item.sub}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" as any, stiffness: 400, damping: 28 }}
          >
            <Button size="lg" asChild>
              <Link href={siteConfig.registrationLink}>
                Register Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#" onClick={(e) => e.preventDefault()}>
                Download Brochure
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
