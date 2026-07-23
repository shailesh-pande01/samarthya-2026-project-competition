"use client"

import { siteConfig } from "@/constants/data"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, MapPin, MonitorSmartphone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Neo Brutalist Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 border-brutal border-primary rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent border-brutal border-dark -rotate-12" />
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-primary border-brutal border-dark rotate-45" />
        {/* Dot pattern */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #111111 1px, transparent 0)', backgroundSize: '32px 32px', opacity: 0.05 }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-4">
              <span className="inline-block hover:-translate-y-2 hover:-translate-x-2 transition-transform cursor-default">
                Samarthya
              </span>
              <br />
              <span className="text-primary inline-block hover:-translate-y-2 hover:-translate-x-2 transition-transform cursor-default">
                2026
              </span>
            </h1>
            <p className="text-xl md:text-3xl font-bold font-heading mb-8 border-y-brutal border-dark py-4 bg-white inline-block px-8 shadow-brutal-sm uppercase">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white border-brutal border-dark p-4 flex items-center gap-4 shadow-brutal hover:-translate-y-1 hover:-translate-x-1 transition-transform group">
              <div className="bg-primary p-3 border-2 border-dark text-white group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Competition Mode</p>
                <p className="font-heading font-bold text-lg">{siteConfig.mode}</p>
                <p className="text-sm font-medium">Online + Offline</p>
              </div>
            </div>
            <div className="bg-white border-brutal border-dark p-4 flex items-center gap-4 shadow-brutal hover:-translate-y-1 hover:-translate-x-1 transition-transform group">
              <div className="bg-primary p-3 border-2 border-dark text-white group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Date</p>
                <p className="font-heading font-bold text-lg">{siteConfig.date}</p>
              </div>
            </div>
            <div className="bg-white border-brutal border-dark p-4 flex items-center gap-4 shadow-brutal hover:-translate-y-1 hover:-translate-x-1 transition-transform group">
              <div className="bg-primary p-3 border-2 border-dark text-white group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Venue</p>
                <p className="font-heading font-bold text-lg">{siteConfig.venue}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
