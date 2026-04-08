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

      {/* ═ THE MOBILE FLOATING DOCK (ULTRA-PREMIUM) ═ */}
      <AnimatePresence>
        {dockVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 w-max max-w-[92vw] md:hidden z-[9999] rounded-full bg-black/90 backdrop-blur-3xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]"
          >
            {/* Inner scroll container clipping gracefully into the rounded outer shell */}
            <div className="w-full flex items-center overflow-x-auto overscroll-x-contain hide-scrollbar p-1.5 space-x-1 rounded-full">
               {navLinks.slice(1).map((link) => {
                 const isActive = pathname === link.href
                 return (
                   <Link
                     key={link.href}
                     href={link.href}
                     className={`flex-none px-5 py-2.5 rounded-full font-sans text-[14px] leading-none tracking-wide transition-all duration-300 ${
                       isActive 
                         ? "bg-white text-black font-semibold shadow-sm" 
                         : "text-white/60 active:text-white font-medium"
                     }`}
                   >
                     {link.label}
                   </Link>
                 )
               })}
               <div className="w-1 flex-none" aria-hidden="true" /> {/* Micro spacer */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
