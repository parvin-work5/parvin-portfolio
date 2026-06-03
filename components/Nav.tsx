// ─────────────────────────────────────────────
// components/Nav.tsx
//
// Sticky top navigation bar.
// Nav links use GlitchButton for the hover effect.
// ─────────────────────────────────────────────

import GlitchButton from "./GlitchButton"
import styles from "./Nav.module.css"
import { info } from "@/lib/info"

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>{info.name}</span>

      <div className={styles.links}>
        <GlitchButton href="#ai">Ask AI</GlitchButton>
        <GlitchButton href="#skills">Skills</GlitchButton>
        <GlitchButton href="#projects">Projects</GlitchButton>
        <GlitchButton href="#contact">Contact</GlitchButton>
      </div>
    </nav>
  )
}
