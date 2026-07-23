import { SectionTitle } from "@/components/ui/section-title"
import { pricing, siteConfig } from "@/constants/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Registration() {
  return (
    <section className="py-20 bg-white border-y-brutal border-dark bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Registration Fees" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 mb-16">
          {pricing.map((plan, index) => (
            <div 
              key={plan.category} 
              className={`bg-white border-brutal border-dark p-8 flex flex-col items-center text-center shadow-brutal hover:-translate-y-2 hover:-translate-x-2 transition-transform ${index === 1 ? 'border-primary shadow-[8px_8px_0_0_#E10600] relative' : ''}`}
            >
              {index === 1 && (
                <div className="absolute -top-4 bg-primary text-white text-xs font-bold px-3 py-1 border-2 border-dark uppercase tracking-widest">
                  Popular
                </div>
              )}
              <h3 className="font-heading font-black text-xl uppercase mb-6 h-12 flex items-center justify-center">{plan.category}</h3>
              <div className="text-4xl font-black text-primary mb-2">{plan.fee}</div>
              <p className="text-sm font-medium text-dark/60 font-sans">per team</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="w-full max-w-md h-16 text-xl" asChild>
            <Link href={siteConfig.registrationLink}>
              Register Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
