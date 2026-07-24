"use client"

import * as React from "react"
import { stats } from "@/constants/data"
import { motion, useInView, animate } from "framer-motion"

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (isInView) {
      const node = nodeRef.current
      if (node) {
        const controls = animate(from, to, {
          duration,
          onUpdate(value) {
            node.textContent = Math.round(value).toString()
          },
        })
        return () => controls.stop()
      }
    }
  }, [from, to, duration, isInView])

  return <span ref={nodeRef}>{from}</span>
}

export function Stats() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white border-y-[var(--border-width-brutal)] border-dark relative overflow-hidden">
      {/* Blueprint background but with white grid for red bg */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" as any, stiffness: 300, damping: 24 }}
              className="text-center bg-dark/10 p-6 border-[3px] border-white backdrop-blur-sm relative group hover:translate-y-[calc(var(--brutal-offset)/4)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            >
              {/* Dimension line accents */}
              <div className="absolute top-1/2 -left-2 w-4 h-[2px] bg-white hidden md:block" />
              <div className="absolute top-1/2 -right-2 w-4 h-[2px] bg-white hidden md:block" />
              <div className="absolute -top-2 left-1/2 w-[2px] h-4 bg-white hidden md:block" />
              <div className="absolute -bottom-2 left-1/2 w-[2px] h-4 bg-white hidden md:block" />

              <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-black font-heading mb-2 tabular-nums tracking-tighter">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base font-bold uppercase tracking-widest text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
