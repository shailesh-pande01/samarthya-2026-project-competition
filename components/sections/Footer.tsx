import { siteConfig } from "@/constants/data"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t-brutal border-dark bg-dark text-white py-12 relative overflow-hidden">
      {/* Decorative tech background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 relative border-2 border-white group-hover:scale-110 transition-transform bg-white overflow-hidden">
                <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="font-heading font-black text-2xl uppercase tracking-tighter block leading-none">
                  Samarthya
                </span>
                <span className="font-sans font-bold text-primary tracking-widest text-sm">
                  2026
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-medium max-w-sm text-center md:text-left">
              Organized by {siteConfig.organizer}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <p className="font-bold text-lg">
              Made with <span className="text-primary animate-pulse inline-block">❤️</span> by SKN IEEE Web Team
            </p>
            <div className="flex space-x-6 text-sm font-medium text-gray-400">
              <a href={siteConfig.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline underline-offset-4">
                Website
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors hover:underline underline-offset-4">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
