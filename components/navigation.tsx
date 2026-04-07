"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

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
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowCTA(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-700 ${
          scrolled ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="group">
            <span className="font-serif text-xl tracking-wide text-foreground">Alchemy</span>
            <span className="font-serif text-xl tracking-wide text-primary ml-1">Unbounded</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-500"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-6 h-0.5 bg-foreground block" />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden overflow-y-auto"
          >
            {/* Fixed Close Button Header */}
            <div className="fixed top-0 right-0 left-0 z-50 bg-background border-b border-border/20 px-6 py-6 flex justify-between items-center">
              <div />
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 hover:bg-card rounded-lg transition-all duration-300 active:scale-95"
                aria-label="Close menu"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-start gap-8 px-6 pt-32 pb-20">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  {/* Added Begin to mobile menu manually if not in navLinks list */}
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl md:text-4xl text-foreground hover:text-primary transition-colors duration-300 py-2 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Ensure Begin is in mobile menu */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.08 }}
                >
                <Link
                  href="/begin"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl md:text-4xl text-primary hover:text-primary/80 transition-colors duration-300 py-2 block"
                >
                  Begin
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
