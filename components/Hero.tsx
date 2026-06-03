// ─────────────────────────────────────────────
// components/Hero.tsx
//
// The intro section — name, one-liner bio,
// and the two CTA buttons.
// ─────────────────────────────────────────────

import GlitchButton from "./GlitchButton"
import styles from "./Hero.module.css"
import { info } from "@/lib/info"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <p className={styles.eyebrow}>{info.role}</p>

      <h1 className={styles.heading}>
        {info.name.split(" ")[0]}
        <br />
        <em>{info.name.split(" ")[1]}.</em>
      </h1>

      <p className={styles.bio}>{info.bio}</p>

      <div className={styles.cta}>
        <GlitchButton href="#projects" variant="gold">
          View Projects
        </GlitchButton>
        <GlitchButton href="#contact" variant="outline">
          Get in touch
        </GlitchButton>
      </div>
    </div>
  )
}
