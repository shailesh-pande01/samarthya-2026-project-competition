"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { themes } from "@/constants/data"
import { HeartHandshake, Lightbulb } from "lucide-react"

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

  return (
    <section id="themes" className="py-20 bg-bg">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Competition Themes" 
          subtitle="Choose a theme that aligns with your innovative ideas."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {themes.map((theme, index) => (
            <div 
              key={theme.id}
              className="bg-white border-brutal border-dark shadow-brutal p-8 md:p-10 relative group hover:-translate-y-2 hover:-translate-x-2 transition-transform"
            >
              <div className="absolute top-4 right-4 text-dark/10 font-heading font-black text-6xl pointer-events-none group-hover:text-primary/10 transition-colors">
                0{index + 1}
              </div>
              <div className="bg-primary w-20 h-20 flex items-center justify-center text-white border-brutal border-dark mb-6 group-hover:scale-110 transition-transform">
                {getIcon(theme.icon)}
              </div>
              <h3 className="text-3xl font-heading font-black mb-4 uppercase">{theme.title}</h3>
              <p className="text-lg font-medium text-dark/80">
                {theme.description}
              </p>
              {/* Decorative circuit line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
