"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FormData {
  name: string
  email: string
  phone: string
}

export function ProgressiveForm() {
  const [step, setStep] = useState(0) // 0: Name, 1: Email, 2: Phone, 3: Success
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "" })
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-focus input when step changes
  useEffect(() => {
    if (step < 3) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 500)
    }
  }, [step])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleNext()
    }
  }

  const handleNext = () => {
    if (step === 0 && formData.name.trim() === "") return
    if (step === 1 && (formData.email.trim() === "" || !formData.email.includes("@"))) return
    // Phone is optional
    
    if (step === 2) {
      // Simulate submission here
      setStep(3)
    } else {
      setStep(s => s + 1)
    }
  }

  const transitionSettings = { duration: 1, ease: [0.22, 1, 0.36, 1] as const }
  const exitTransitionSettings = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }

  const slideVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: transitionSettings },
    exit: { opacity: 0, y: -30, transition: exitTransitionSettings }
  }

  return (
    <div className="w-full max-w-3xl mx-auto min-h-[50vh] flex flex-col justify-center items-start">
      <AnimatePresence mode="wait">
        
        {step === 0 && (
          <motion.div key="step-0" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full">
            <label className="block text-primary/70 font-sans text-xs tracking-[0.3em] uppercase mb-8">Step 01</label>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-12 italic">What should I call you?</h2>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="Your name..."
                className="w-full bg-transparent border-b border-foreground/10 pb-6 text-4xl md:text-5xl text-foreground placeholder:text-foreground/20 outline-none focus:border-primary/50 transition-colors"
                spellCheck={false}
              />
              <button 
                onClick={handleNext}
                className={`absolute right-0 bottom-6 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-500 ${formData.name.trim() !== "" ? "text-primary opacity-100" : "text-foreground/20 opacity-0 pointer-events-none"}`}
              >
                Press Enter →
              </button>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="step-1" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full">
            <label className="block text-primary/70 font-sans text-xs tracking-[0.3em] uppercase mb-8">Step 02</label>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-12 italic">Where can I reach you?</h2>
            <div className="relative">
              <input
                ref={inputRef}
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="Your email address..."
                className="w-full bg-transparent border-b border-foreground/10 pb-6 text-4xl md:text-5xl text-foreground placeholder:text-foreground/20 outline-none focus:border-primary/50 transition-colors"
                spellCheck={false}
              />
              <button 
                onClick={handleNext}
                className={`absolute right-0 bottom-6 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-500 ${(formData.email.trim() !== "" && formData.email.includes("@")) ? "text-primary opacity-100" : "text-foreground/20 opacity-0 pointer-events-none"}`}
              >
                Press Enter →
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step-2" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full">
            <label className="block text-primary/70 font-sans text-xs tracking-[0.3em] uppercase mb-8">Step 03 (Optional)</label>
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-12 italic">How shall we continue this?</h2>
            <div className="relative">
              <input
                ref={inputRef}
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder="Your phone number..."
                className="w-full bg-transparent border-b border-foreground/10 pb-6 text-4xl md:text-5xl text-foreground placeholder:text-foreground/20 outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                onClick={handleNext}
                className={`absolute right-0 bottom-6 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-500 text-primary opacity-100`}
              >
                Begin the dialogue →
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="step-3" variants={slideVariants} initial="initial" animate="animate" exit="exit" className="w-full text-center">
            <div className="w-16 h-px bg-primary/30 mx-auto mb-12" />
            <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-10 italic">This has begun.</h2>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              I have received what you shared. Expect to hear from me shortly.
            </p>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  )
}
