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
    <section className="py-16 bg-primary text-white border-y-brutal border-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111), linear-gradient(45deg, #111 25%, transparent 25%, transparent 75%, #111 75%, #111)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-dark/20 p-6 border-2 border-white backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-black font-heading mb-2">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base font-bold uppercase tracking-wider text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
