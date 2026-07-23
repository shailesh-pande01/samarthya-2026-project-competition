"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { timeline } from "@/constants/data"
import { CheckCircle2, FileText, PlaySquare, Users } from "lucide-react"

export function Timeline() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <FileText size={32} />
      case 1: return <PlaySquare size={32} />
      case 2: return <Users size={32} />
      default: return <CheckCircle2 size={32} />
    }
  }

  return (
    <section id="timeline" className="py-20 bg-white border-y-brutal border-dark">
      <div className="container mx-auto px-4">
        <SectionTitle title="Competition Process" />
        
        <div className="max-w-4xl mx-auto mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-dark">
          {timeline.map((item, index) => (
            <div key={item.round} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-brutal border-dark bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-brutal-sm z-10 group-hover:scale-125 transition-transform">
                <span className="font-heading font-black text-lg">{index + 1}</span>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white border-brutal border-dark p-6 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all relative">
                
                {/* Arrow */}
                <div className="absolute top-5 -left-3 md:group-even:-left-3 md:group-odd:left-auto md:group-odd:-right-3 w-4 h-4 bg-white border-t-brutal border-l-brutal border-dark rotate-[-45deg] md:group-odd:rotate-[135deg] z-0" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary bg-bg p-2 border-2 border-dark">
                      {getIcon(index)}
                    </div>
                    <div>
                      <span className="text-primary font-bold text-sm tracking-widest uppercase block">{item.round}</span>
                      <h3 className="text-2xl font-black font-heading uppercase">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="font-medium text-dark/80 mb-4">{item.description}</p>
                  
                  {item.evaluation.length > 0 && (
                    <div className="mb-4">
                      <p className="font-bold text-sm uppercase text-dark mb-2">Evaluation based on:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.evaluation.map(evalItem => (
                          <span key={evalItem} className="bg-accent px-2 py-1 text-xs font-bold border border-dark">
                            {evalItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.details && (
                    <div className="mb-4 space-y-2">
                      {item.details.map(detail => (
                        <div key={detail.mode} className="flex items-start gap-2 bg-bg p-2 border border-dark">
                          <span className="font-bold text-primary min-w-[70px]">{detail.mode}:</span>
                          <span className="text-sm font-medium">{detail.target}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t-2 border-dashed border-dark/30 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-primary" />
                    <p className="font-bold text-sm">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
