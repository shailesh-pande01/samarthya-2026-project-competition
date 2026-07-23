import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { SectionTitle } from "@/components/ui/section-title"
import { Trophy } from "lucide-react"

export const metadata = {
  title: "Winners | Samarthya 2026",
  description: "Winners of Samarthya 2026",
}

export default function WinnersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col justify-center bg-bg relative overflow-hidden">
        {/* Background dots */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #111111 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10 text-center flex flex-col items-center">
          <SectionTitle title="Samarthya 2026 Winners" />
          
          <div className="bg-white border-brutal border-dark shadow-brutal p-12 max-w-2xl mx-auto mt-12 flex flex-col items-center">
            <div className="bg-primary p-6 border-4 border-dark mb-8 animate-pulse text-white">
              <Trophy size={64} />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-wider mb-4">
              Winner announcements coming soon.
            </h2>
            <p className="text-lg text-dark/70 font-medium">
              Check back after the final presentation round!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
