"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface LineRevealProps {
  lines: string[]
  className?: string
  lineClassName?: string
  delay?: number
  reveal?: "fade" | "blur" | "clip"
  focus?: boolean
  as?: React.ElementType
}

export function LineReveal({ 
  lines, 
  className = "", 
  lineClassName = "", 
  delay = 0,
  reveal = "fade",
  focus = false,
  as: Component = "div"
}: LineRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const shouldReduce = useReducedMotion()

  return (
    <Component
      ref={ref}
      className={className}
      aria-label={lines.filter(l => l.trim() !== "").join(" ")}
    >
      {lines.map((line, index) => {
        if (line.trim() === "") return <div key={index} className="h-6" aria-hidden="true" />
        
        let initial = {}
        let animate = {}

        if (reveal === "blur") {
          initial = { opacity: 0, filter: "blur(6px)" }
          animate = { opacity: 1, filter: "blur(0px)" }
        } else if (reveal === "clip") {
          initial = { clipPath: "inset(0 0 100% 0)" }
          animate = { clipPath: "inset(0 0 0% 0)" }
        } else {
          initial = { opacity: 0, y: 10 }
          animate = { opacity: 1, y: 0 }
        }

        // Implementation of 'Focus' logic: 
        // Adding a subtle opacity state for the "non-active" lines once in view.
        return (
          <motion.span
            key={index}
            initial={shouldReduce ? { opacity: 1 } : initial}
            animate={isInView ? (shouldReduce ? { opacity: 1 } : animate) : {}}
            transition={{
              duration: 1.2,
              delay: delay + index * 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={cn(
              "block transition-opacity duration-700",
              lineClassName,
              focus && "hover:opacity-100 opacity-60"
            )}
            aria-hidden="true"
          >
            {line}
          </motion.span>
        )
      })}
    </Component>
  )
}
