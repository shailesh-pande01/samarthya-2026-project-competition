"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { benefits } from "@/constants/data"
import { Sparkles } from "lucide-react"

export function WhyParticipate() {
  return (
    <section className="py-20 bg-bg">
      <div className="container mx-auto px-4">
        <SectionTitle title="Why Participate?" subtitle="Unlock your potential and showcase your skills on a national platform." />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border-brutal border-dark p-6 flex flex-col items-center justify-center text-center shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal transition-all min-h-[160px]"
            >
              <Sparkles size={24} className="text-primary mb-4" />
              <p className="font-heading font-bold uppercase text-sm md:text-base leading-tight">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
