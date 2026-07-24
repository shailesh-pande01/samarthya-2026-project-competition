import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center space-y-4 mb-16", className)} {...props}>
      <div className="relative inline-block group">
        <h2 className="text-[clamp(2rem,6vw,4rem)] font-heading font-black uppercase tracking-widest relative z-10 bg-white px-8 py-3 border-brutal border-dark shadow-brutal transition-transform group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-brutal-sm">
          {title}
        </h2>
        
        {/* CAD Registration Marks */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-[3px] border-l-[3px] border-primary z-20 transition-all group-hover:-top-3 group-hover:-left-3" />
        <div className="absolute -top-2 -right-2 w-4 h-4 border-t-[3px] border-r-[3px] border-primary z-20 transition-all group-hover:-top-3 group-hover:-right-3" />
        <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-[3px] border-l-[3px] border-primary z-20 transition-all group-hover:-bottom-3 group-hover:-left-3" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-[3px] border-r-[3px] border-primary z-20 transition-all group-hover:-bottom-3 group-hover:-right-3" />

        {/* Circuit Trace Background Element */}
        <div className="hidden md:block absolute top-1/2 left-[-3rem] right-[-3rem] h-[2px] bg-dark -z-0 opacity-20" />
      </div>
      {subtitle && (
        <p className="text-lg md:text-xl font-medium text-dark/80 max-w-2xl mt-8">
          {subtitle}
        </p>
      )}
    </div>
  )
}
