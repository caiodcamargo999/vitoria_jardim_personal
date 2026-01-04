import * as React from "react"
import { cn } from "@/lib/utils"

const CraftButton = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--color-primary)] active:scale-95 disabled:pointer-events-none disabled:opacity-50 shadow-lg",
                className
            )}
            {...props}
        />
    )
})
CraftButton.displayName = "CraftButton"

const CraftButtonLabel = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
    return (
        <span
            ref={ref}
            className={cn("text-sm font-semibold uppercase tracking-wide", className)}
            {...props}
        />
    )
})
CraftButtonLabel.displayName = "CraftButtonLabel"

const CraftButtonIcon = React.forwardRef<
    HTMLSpanElement,
    React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
    return (
        <span
            ref={ref}
            className={cn("relative flex items-center justify-center transition-transform", className)}
            {...props}
        />
    )
})
CraftButtonIcon.displayName = "CraftButtonIcon"

export { CraftButton, CraftButtonLabel, CraftButtonIcon }
