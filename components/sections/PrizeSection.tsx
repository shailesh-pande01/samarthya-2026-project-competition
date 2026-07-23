"use client"

import { SectionTitle } from "@/components/ui/section-title"
import { prizes } from "@/constants/data"
import { Trophy, Medal, Award } from "lucide-react"

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

  return (
    <section id="prizes" className="py-20 bg-bg relative">
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-dark -z-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title={`Prize Pool ${prizes.pool}`} />
        
        <div className="max-w-5xl mx-auto mt-16">
          {/* Winner Card (Centered & Larger) */}
          {winner && (
            <div className="flex justify-center mb-12">
              <div className="bg-white border-brutal border-dark p-8 shadow-[12px_12px_0_0_#E10600] flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform min-w-[300px]">
                <div className="mb-4 bg-bg rounded-full p-4 border-2 border-dark">
                  {getPrizeIcon(winner.type)}
                </div>
                <h3 className="font-heading font-black text-3xl uppercase mb-2">{winner.title}</h3>
                <p className="text-4xl font-black text-primary border-t-2 border-dark pt-4 mt-2 w-full">{winner.amount}</p>
              </div>
            </div>
          )}

          {/* Runners up & Special Prize */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {runnerUps.map((prize, index) => (
              <div key={prize.title} className="bg-white border-brutal border-dark p-6 shadow-brutal flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                <div className="mb-4 bg-bg rounded-full p-3 border-2 border-dark">
                  {getPrizeIcon(prize.type)}
                </div>
                <h3 className="font-heading font-black text-xl uppercase mb-2">{prize.title}</h3>
                <p className="text-2xl font-black text-dark border-t-2 border-dark/20 pt-4 mt-2 w-full">{prize.amount}</p>
              </div>
            ))}
            
            {special && (
              <div className="bg-dark text-white border-brutal border-primary p-6 shadow-[8px_8px_0_0_#E10600] flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                <div className="mb-4 bg-white rounded-full p-3 border-2 border-primary">
                  {getPrizeIcon(special.type)}
                </div>
                <h3 className="font-heading font-black text-xl uppercase mb-2 text-primary">Special Prize</h3>
                <p className="font-bold text-sm mb-2">{special.title}</p>
                <p className="text-2xl font-black text-white border-t-2 border-white/20 pt-4 mt-2 w-full">{special.amount}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
