"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasConverted, setHasConverted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)

      // Show popup at 85% scroll if not already dismissed
      if (scrollProgress > 0.85 && !showPopup && !hasConverted) {
        setShowPopup(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showPopup, hasConverted])

  const handleDismiss = () => {
    setShowPopup(false)
    setHasConverted(true)
  }

  const handleConvert = () => {
    setHasConverted(true)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 pointer-events-auto"
            onClick={handleDismiss}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-8 right-8 left-8 md:left-auto md:right-8 md:w-96 bg-background border border-foreground/[0.1] rounded-2xl p-8 z-50 pointer-events-auto shadow-2xl"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 hover:bg-foreground/[0.05] rounded transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-6">
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                Before you go...
              </h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
                Would you like to explore if transformational coaching is right for you? A free 30-minute consultation can help clarify your path.
              </p>

              <div className="space-y-3">
                <Button
                  variant="brand-primary"
                  size="lg"
                  asChild
                  className="w-full"
                  onClick={handleConvert}
                >
                  <Link href="/begin">Schedule Consultation</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-full text-foreground/70 hover:text-foreground"
                  onClick={handleDismiss}
                >
                  Maybe Later
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
