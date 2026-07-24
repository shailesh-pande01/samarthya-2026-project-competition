"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-bg transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-x-[var(--brutal-offset)] active:translate-y-[var(--brutal-offset)] active:shadow-none font-heading uppercase tracking-wider group/btn",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-light border-brutal border-dark shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal",
        outline:
          "border-brutal border-dark bg-bg hover:bg-accent text-dark shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal-sm",
        secondary:
          "bg-dark text-light border-brutal border-dark shadow-brutal hover:translate-y-[calc(var(--brutal-offset)/4)] hover:translate-x-[calc(var(--brutal-offset)/4)] hover:shadow-brutal-sm",
        ghost: "hover:bg-accent hover:text-dark",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 px-4",
        lg: "h-14 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
