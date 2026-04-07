"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Section, Container } from "@/components/ui/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProgressiveForm } from "@/components/progressive-form"
import { useEffect, useState } from "react"

export default function BeginPage() {
  const [showForm, setShowForm] = useState(false)

  // This delay simulates the "moment of arrival" before inviting action
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true)
    }, 4500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navigation />
      {/* Continuing the global light theme for consistent immersion */}
      <motion.main
        className="relative min-h-screen overscroll-none"
        style={{
          backgroundColor: "oklch(0.98 0.005 85)", // Light cream background
          color: "oklch(0.25 0.01 60)", // Charcoal text
          willChange: "background-color, color",
          transform: "translateZ(0)",
        }}
      >
        <div className="relative z-10 flex flex-col min-h-screen">
          
          <Section size="screen" className="flex-1 flex flex-col justify-center border-none">
            <Container width="narrow" className="text-center relative">
              
              {/* The Silence / Entry */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showForm ? 0 : 1, y: showForm ? -20 : 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 flex flex-col items-center justify-center ${showForm ? 'pointer-events-none' : ''}`}
              >
                <div className="w-12 h-px bg-foreground/20 mb-12" />
                <h1 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.4] italic mb-8">
                  You have arrived.
                </h1>
                <p className="font-sans text-sm tracking-[0.2em] text-foreground/40 uppercase">
                  This is where the work begins.
                </p>
                <p className="font-sans text-sm tracking-[0.2em] text-foreground/40 uppercase mt-4">
                  Not with a leap. <br/> But with a simple conversation.
                </p>
              </motion.div>

              {/* The Exchange (Form) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: showForm ? 1 : 0, y: showForm ? 0 : 40 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className={`w-full ${!showForm ? 'pointer-events-none' : ''}`}
              >
                <ProgressiveForm />
              </motion.div>

            </Container>
          </Section>

          <Footer />
        </div>
        
        {/* Soft ambient layer to give the space a bit of breath */}
         <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            background: "radial-gradient(circle at 50% 50%, oklch(0.45 0.08 145 / 0.06) 0%, transparent 60%)",
            transform: "translateZ(0)",
          }}
        />
      </motion.main>
    </>
  )
}
