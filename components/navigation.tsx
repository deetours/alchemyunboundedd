"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/the-work", label: "Work" },
  { href: "/offerings/leadership-coaching", label: "Leadership" },
  { href: "/voices", label: "Voices" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Track scrolling for Smart-Hide logic and Glass Pill transition
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    
    // Determine if we have scrolled past the initial hero
    if (latest > 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }

    // Smart-Hide Logic: Hide when scrolling down past 300px, show when scrolling up
    if (latest > previous && latest > 300) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* DESKTOP SMART-HIDE NAVIGATION                                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 }
        }}
        initial="visible"
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 flex justify-center w-full px-4 md:px-8 pointer-events-none ${
          isScrolled ? "pt-4" : "pt-6"
        }`}
      >
        <nav 
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ${
            isScrolled 
              ? "max-w-5xl w-full bg-background/80 backdrop-blur-xl border border-foreground/10 px-6 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]" 
              : "w-full max-w-7xl px-0 py-2"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="group flex-shrink-0">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-foreground">Alchemy</span>
            <span className="font-serif text-xl md:text-2xl tracking-wide text-primary ml-1">Unbounded</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.2em] font-sans font-bold text-foreground/50 hover:text-foreground transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
            
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, width: 0 }}
                  animate={{ opacity: 1, scale: 1, width: "auto" }}
                  exit={{ opacity: 0, scale: 0.9, width: 0 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="overflow-hidden overflow-visible whitespace-nowrap pl-2"
                >
                  <Button variant="brand-primary" size="sm" asChild className="rounded-full px-6">
                    <Link href="/begin">Begin</Link>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 pr-0 group"
            aria-label="Open menu"
          >
            <span className="w-6 h-[2px] bg-foreground block group-hover:w-8 transition-all duration-300" />
            <span className="w-6 h-[2px] bg-foreground block group-hover:w-4 transition-all duration-300 ml-auto" />
            <span className="w-6 h-[2px] bg-foreground block" />
          </button>
        </nav>
      </motion.header>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* IMMERSIVE MOBILE MENU: "THE SPATIAL QUIET ROOM"                    */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[10000] bg-background/95 h-[100dvh] w-screen px-6 py-6 flex flex-col"
          >
            {/* Header sequence inside the room */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
              <span className="font-serif text-xl tracking-wide text-foreground/50">Menu</span>
              
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 -mr-3 rounded-full hover:bg-foreground/5 transition-colors group"
                aria-label="Close menu"
              >
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="relative w-6 h-6"
                >
                  <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-foreground rotate-45 group-hover:bg-primary transition-colors" />
                  <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-foreground -rotate-45 group-hover:bg-primary transition-colors" />
                </motion.div>
              </button>
            </div>

            {/* Hierarchical Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-6 mt-[-10dvh]">
              {[...navLinks, { href: "/begin", label: "Begin", primary: true }].map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "120%", opacity: 0, rotate: 2 }}
                    animate={{ y: "0%", opacity: 1, rotate: 0 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.32, 0.72, 0, 1],
                      delay: i * 0.06 
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block font-serif tracking-tight transition-colors duration-500 hover:italic ${
                        (link as any).primary 
                          ? "text-[clamp(3.5rem,10vw,5rem)] text-primary mt-8" 
                          : "text-[clamp(2.5rem,8vw,4rem)] text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Footer data */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="mt-auto flex justify-between items-center w-full max-w-7xl mx-auto border-t border-foreground/[0.08] pt-6 pb-2"
            >
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-bold">
                Alchemy Unbounded
              </span>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-foreground/40 float-right font-bold">
                Global
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
