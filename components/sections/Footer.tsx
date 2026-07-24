import { siteConfig } from "@/constants/data"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t-[var(--border-width-brutal)] border-dark bg-dark text-white py-16 relative overflow-hidden">
      {/* Blueprint grid with white lines for dark background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 relative border-[3px] border-white group-hover:translate-y-[calc(var(--brutal-offset)/4)] group-hover:translate-x-[calc(var(--brutal-offset)/4)] shadow-[4px_4px_0_0_#FFFFFF] group-hover:shadow-none transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white overflow-hidden">
                <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="font-heading font-black text-3xl uppercase tracking-tighter block leading-none group-hover:text-primary transition-colors duration-300">
                  Samarthya
                </span>
                <span className="font-sans font-bold text-primary tracking-widest text-sm uppercase">
                  2026
                </span>
              </div>
            </Link>
            <p className="text-white/70 font-medium max-w-sm text-center md:text-left tracking-wide">
              Organized by {siteConfig.organizer}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-6">
            <p className="font-bold text-lg border-b-2 border-white/20 pb-4">
              Made with <span className="text-primary animate-pulse inline-block">❤️</span> by SKN IEEE Web Team
            </p>
            <div className="flex space-x-8 text-sm font-bold text-white/80 uppercase tracking-widest">
              <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                Website
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark transition-all duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
