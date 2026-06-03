"use client"

// ─────────────────────────────────────────────
// components/Skills.tsx
//
// Horizontally scrolling skill cards.
//
// Behaviour:
//   - Auto-scrolls at a steady pace when idle
//   - Hover right side → speeds up to the right
//   - Hover left side  → reverses to the left
//   - Dead zone in the center → neutral / pauses
//   - Cards are duplicated so the loop is seamless
// ─────────────────────────────────────────────

import { useRef, useEffect } from "react"
import styles from "./Skills.module.css"
import { skills } from "@/lib/info"

// We duplicate the list so the scroll loops without a visible jump
const doubled = [...skills, ...skills]

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)        // current scroll offset in px
  const dirRef   = useRef(1)        // 1 = right, -1 = left
  const speedRef = useRef(0)        // cursor override speed
  const hoverRef = useRef(false)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const AUTO_SPEED = 0.6   // px per frame when auto-scrolling
    const MAX_CURSOR = 10    // max px per frame from cursor position

    function getLoopPoint() {
      // Half the track width — where we reset to create the infinite loop
      return track.scrollWidth / 2
    }

    function frame() {
      const max = getLoopPoint()

      if (hoverRef.current && speedRef.current !== 0) {
        posRef.current += speedRef.current
      } else {
        posRef.current += dirRef.current * AUTO_SPEED
      }

      // Loop seamlessly
      if (posRef.current >= max) posRef.current = 0
      if (posRef.current < 0)   posRef.current = max - 1

      track.style.transform = `translateX(-${posRef.current}px)`
      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx   = e.clientX - rect.left
    const norm = (cx / rect.width) * 2 - 1  // -1 to +1

    // Dead zone: |norm| < 0.15 → stop cursor override
    if (Math.abs(norm) < 0.15) {
      speedRef.current = 0
    } else {
      speedRef.current = norm * 10
      dirRef.current   = norm > 0 ? 1 : -1   // update auto direction too
    }
  }

  return (
    <div className={styles.section}>
      <p className={styles.label}>02 — Toolkit</p>
      <h2 className={styles.heading}>Skills</h2>

      <div
        className={styles.trackWrap}
        onMouseEnter={() => { hoverRef.current = true  }}
        onMouseLeave={() => { hoverRef.current = false; speedRef.current = 0 }}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.track} ref={trackRef}>
          {doubled.map((skill, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{skill.icon}</span>
              <p className={styles.name}>{skill.name}</p>
              <p className={styles.type}>{skill.type}</p>
            </div>
          ))}
        </div>

        {/* Faded edges so cards fade out naturally on both sides */}
        <div className={styles.fadeLeft}  />
        <div className={styles.fadeRight} />
      </div>
    </div>
  )
}
