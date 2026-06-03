"use client"

// ─────────────────────────────────────────────
// components/GlitchButton.tsx
//
// A button (or link) that shows a red/blue RGB
// split glitch effect on hover.
//
// Usage:
//   <GlitchButton href="#projects">View Projects</GlitchButton>
//   <GlitchButton onClick={fn} variant="gold">Send</GlitchButton>
//
// Variants:
//   "default" — transparent, muted text
//   "gold"    — solid gold background
//   "outline" — bordered, muted text
// ─────────────────────────────────────────────

import React from "react"
import styles from "./GlitchButton.module.css"

type Variant = "default" | "gold" | "outline"

type Props = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  disabled?: boolean
  className?: string
}

export default function GlitchButton({
  children,
  href,
  onClick,
  variant = "default",
  disabled = false,
  className = "",
}: Props) {
  const text = typeof children === "string" ? children : ""
  const cls = `${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} data-text={text}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} data-text={text} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
