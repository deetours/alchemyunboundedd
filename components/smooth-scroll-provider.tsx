"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import type { ReactNode } from "react"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      } as any}
    >
      {children as any}
    </ReactLenis>
  )
}
