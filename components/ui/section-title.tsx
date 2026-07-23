import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center space-y-4 mb-12", className)} {...props}>
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-wider relative z-10 bg-white px-4 border-brutal border-dark py-2 shadow-brutal-sm">
          {title}
        </h2>
        {/* Decorative elements behind the title */}
        <div className="absolute top-1/2 left-[-2rem] right-[-2rem] h-1 bg-dark -z-0" />
        <div className="absolute top-0 bottom-0 left-[-1rem] right-[-1rem] border-y-brutal border-primary -z-0 pointer-events-none" />
      </div>
      {subtitle && (
        <p className="text-lg md:text-xl font-medium text-dark/80 max-w-2xl mt-6">
          {subtitle}
        </p>
      )}
    </div>
  )
}
