"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the-work", label: "The Work" },
  { href: "/offerings", label: "Offerings" },
  { href: "/offerings/leadership-coaching", label: "Leaders" },
  { href: "/journey", label: "The Journey" },
  { href: "/voices", label: "Voices" },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  // Manage navigation visibility based on scroll direction
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setIsVisible(false) // Scrolling down - hide
    } else {
      setIsVisible(true) // Scrolling up - show
    }
    
    setScrolled(latest > 50)
    setShowCTA(latest > 30)
  })

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* DESKTOP NAVIGATION (Fixed Top)                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9999] hidden md:block transition-all duration-700 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b" : "bg-transparent border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-serif text-xl tracking-wide text-foreground">Alchemy</span>
            <span className="font-serif text-xl tracking-wide text-primary ml-1">Unbounded</span>
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans tracking-wide transition-colors duration-500 ${
                  pathname === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Button variant="brand-primary" size="sm" asChild>
                    <Link href="/begin">Begin</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* MOBILE INTERACTIVE FLOATING DOCK (Pinned Bottom)                    */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : 120, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-6 left-0 right-0 z-[9999] md:hidden px-4 pointer-events-none"
      >
        <div className="mx-auto w-full max-w-[500px] pointer-events-auto">
          <nav className="relative overflow-hidden bg-background/80 backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            
            {/* Horizontal Swiping Container */}
            <div className="flex items-center overflow-x-auto no-scrollbar scroll-smooth px-6 py-4 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap font-sans text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 active:scale-90 ${
                    pathname === link.href 
                    ? "text-primary" 
                    : "text-foreground/40"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Manual Begin Link at end of swipable dock */}
              <Link
                href="/begin"
                className={`whitespace-nowrap font-sans text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 active:scale-90 bg-primary/10 px-4 py-2 rounded-full ${
                  pathname === "/begin" ? "bg-primary text-white" : "text-primary border border-primary/20"
                }`}
              >
                Begin
              </Link>
            </div>

            {/* Subtle Gradient Shadows to indicate more items (scroll-hinting) */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background/40 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background/40 to-transparent pointer-events-none" />
          </nav>
        </div>
      </motion.div>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* MOBILE MINI HEADER (Logo Only)                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.div
        animate={{ y: isVisible ? 0 : -80 }}
        className="fixed top-0 left-0 right-0 z-[9999] md:hidden px-6 py-6 bg-background/50 backdrop-blur-sm transition-all"
      >
        <Link href="/" className="flex justify-center">
          <span className="font-serif text-lg tracking-wide text-foreground">Alchemy</span>
          <span className="font-serif text-lg tracking-wide text-primary ml-1">Unbounded</span>
        </Link>
      </motion.div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
