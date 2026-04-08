"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the-work", label: "The Work" },
  { href: "/offerings", label: "Offerings" },
  { href: "/offerings/leadership-coaching", label: "Leaders" },
  { href: "/journey", label: "Journey" },
  { href: "/voices", label: "Voices" },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  
  // Mobile Dock scroll interaction state
  const [lastScrollY, setLastScrollY] = useState(0)
  const [dockVisible, setDockVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      setScrolled(currentScrollY > 50)
      setShowCTA(currentScrollY > 30)
      
      // Floating Dock Logic: 
      // Hide when scrolling down (reading intent), Show when scrolling up (nav intent)
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setDockVisible(false)
      } else {
        setDockVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* ═ DESKTOP/GLOBALS HEADER ═ */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[9998] transition-all duration-700 ${
          scrolled ? "bg-background/90 md:backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-serif text-xl tracking-wide text-foreground">Alchemy</span>
            <span className="font-serif text-xl tracking-wide text-primary ml-1">Unbounded</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-sans tracking-wide transition-colors duration-500 ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
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
          
          {/* Mobile Begin Button (Replaces Hamburger) */}
          <div className="md:hidden flex items-center">
             <AnimatePresence>
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Button variant="brand-primary" size="sm" asChild className="h-8 text-[10px] px-4">
                    <Link href="/begin">Begin</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </motion.header>

      {/* ═ THE MOBILE FLOATING DOCK ═ */}
      <AnimatePresence>
        {dockVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm md:hidden z-[9999]"
          >
            <div className="relative w-full rounded-2xl bg-background/70 backdrop-blur-2xl border border-white/10 shadow-2xl p-2 flex items-center overflow-x-auto overscroll-x-contain hide-scrollbar">
               {navLinks.map((link) => {
                 const isActive = pathname === link.href
                 return (
                   <Link
                     key={link.href}
                     href={link.href}
                     className={`flex-none px-4 py-2.5 rounded-xl font-sans text-xs tracking-[0.15em] uppercase font-bold transition-all duration-300 ${
                       isActive 
                         ? "bg-white/10 text-primary shadow-sm" 
                         : "text-foreground/40 active:text-foreground active:bg-white/5"
                     }`}
                   >
                     {link.label}
                   </Link>
                 )
               })}
               
               {/* Spacer to allow full scroll access to the last item */}
               <div className="w-2 flex-none" aria-hidden="true" />
            </div>
            
            {/* Soft glow shadow underneath the dock */}
            <div className="absolute -inset-2 bg-primary/20 blur-2xl -z-10 rounded-full opacity-30 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
