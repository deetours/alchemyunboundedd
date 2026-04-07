"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: isMobile ? 0.8 : 1.2,
        smoothWheel: !isMobile,
        smoothTouch: isMobile
      } as any}
    >
      {children as any}
    </ReactLenis>
  )
}
