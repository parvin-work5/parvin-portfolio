"use client"

import { useRef, useEffect } from "react"
import styles from "./Skills.module.css"
import { skills } from "@/lib/info"

const doubled = [...skills, ...skills]

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)
  const dirRef   = useRef(1)
  const speedRef = useRef(0)
  const hoverRef = useRef(false)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const AUTO_SPEED = 0.6

    function frame() {
      if (!track) return
      const max = track.scrollWidth / 2

      if (hoverRef.current && speedRef.current !== 0) {
        posRef.current += speedRef.current
      } else {
        posRef.current += dirRef.current * AUTO_SPEED
      }

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
    const norm = ((e.clientX - rect.left) / rect.width) * 2 - 1

    if (Math.abs(norm) < 0.15) {
      speedRef.current = 0
    } else {
      speedRef.current = norm * 10
      dirRef.current   = norm > 0 ? 1 : -1
    }
  }

  return (
    <div className={styles.section}>
      <p className={styles.label}>02 — Toolkit</p>
      <h2 className={styles.heading}>Skills</h2>

      <div
        className={styles.trackWrap}
        onMouseEnter={() => { hoverRef.current = true }}
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
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
      </div>
    </div>
  )
}
