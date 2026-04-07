import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full relative overflow-hidden", {
  variants: {
    size: {
      default: "py-16 md:py-24",
      sm: "py-8 md:py-12",
      md: "py-24 md:py-32",
      lg: "py-32 md:py-48 min-h-[70vh] flex flex-col justify-center",
      screen: "min-h-screen flex flex-col justify-center py-24",
      content: "py-24 md:py-36",
    },
    background: {
      default: "bg-background",
      muted: "bg-card",
      primary: "bg-primary text-primary-foreground",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    size: "default",
    background: "transparent",
  },
})

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  asChild?: boolean
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, size, background, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "section"
    return (
      <Comp
        className={cn(sectionVariants({ size, background, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

const containerVariants = cva("mx-auto px-6 w-full", {
  variants: {
    width: {
      default: "max-w-7xl",
      narrow: "max-w-4xl",
      prose: "max-w-3xl",
      wide: "max-w-[1400px]",
    },
  },
  defaultVariants: {
    width: "default",
  },
})

interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(containerVariants({ width, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Section, Container }
