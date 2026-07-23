"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { navLinks, siteConfig } from "@/constants/data"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-brutal border-dark bg-white shadow-brutal-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary w-10 h-10 border-brutal border-dark flex items-center justify-center font-heading font-black text-white text-xl group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-brutal transition-all">
                S
              </div>
              <span className="font-heading font-black text-xl uppercase tracking-tighter hidden sm:block">
                {siteConfig.organizer}
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-bold text-dark hover:text-primary hover:-translate-y-0.5 transition-transform font-sans"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="default" size="sm" className="ml-4">
                <Link href={siteConfig.registrationLink}>Register Now</Link>
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 border-brutal border-dark bg-bg hover:bg-accent focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6 stroke-[3]" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 stroke-[3]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t-brutal border-dark bg-white absolute w-full left-0 shadow-brutal-lg" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2 sm:px-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block px-3 py-2 font-bold text-dark hover:bg-accent border-l-brutal border-transparent hover:border-primary transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Button asChild variant="default" className="w-full">
                <Link href={siteConfig.registrationLink} onClick={() => setIsOpen(false)}>
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
