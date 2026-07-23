"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { siteConfig } from "@/constants/data"
import { Mail, Globe, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-bg relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full border-4 border-primary border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Contact Us" />
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-brutal border-dark p-8 shadow-brutal hover:-translate-y-2 transition-transform">
            <h3 className="font-heading font-black text-2xl uppercase mb-6 border-b-2 border-dark pb-4">Get in Touch</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="bg-primary text-white p-3 border-2 border-dark group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase text-dark/50 tracking-wider">Email</p>
                  <p className="font-bold text-lg hover:text-primary transition-colors">{siteConfig.email}</p>
                </div>
              </a>
              
              <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-dark text-white p-3 border-2 border-dark group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase text-dark/50 tracking-wider">Website</p>
                  <p className="font-bold text-lg hover:text-primary transition-colors">www.sknisb.in</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="bg-white text-dark p-3 border-2 border-dark">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase text-dark/50 tracking-wider">Location</p>
                  <p className="font-bold text-lg">{siteConfig.venue}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary border-brutal border-dark p-8 shadow-brutal text-white flex flex-col justify-center">
            <h3 className="font-heading font-black text-3xl uppercase mb-4 leading-tight">
              Have questions? <br />
              <span className="text-dark bg-white px-2 mt-2 inline-block -ml-2 rotate-2">We're here to help!</span>
            </h3>
            <p className="text-lg font-medium mb-8">
              Reach out to our team for any queries regarding registration, themes, or the event schedule.
            </p>
            
            <div>
              <p className="font-bold uppercase tracking-widest mb-4 border-b-2 border-white/20 pb-2">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="bg-white text-primary px-4 py-2 border-2 border-dark hover:-translate-y-1 hover:shadow-brutal-sm font-bold transition-all">
                  IG
                </a>
                <a href="#" className="bg-white text-primary px-4 py-2 border-2 border-dark hover:-translate-y-1 hover:shadow-brutal-sm font-bold transition-all">
                  IN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
