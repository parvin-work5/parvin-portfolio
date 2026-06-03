// ─────────────────────────────────────────────
// components/Contact.tsx
//
// "Let's work together" section with contact
// links. Update email / github / linkedin in
// lib/info.ts — it flows through here.
// ─────────────────────────────────────────────

import styles from "./Contact.module.css"
import { info } from "@/lib/info"

export default function Contact() {
  return (
    <div className={styles.section}>
      <p className={styles.label}>04 — Let's talk</p>

      <div className={styles.card}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Work with
            <br />
            <em>Parvin.</em>
          </h2>
          <p className={styles.sub}>
            Open to full-time roles, freelance,
            <br />
            and interesting collaborations.
          </p>
        </div>

        <div className={styles.links}>
          <a href={`mailto:${info.email}`} className={styles.link}>
            <span className={styles.linkIcon}>✉</span>
            <span className={styles.linkText} data-text={info.email}>{info.email}</span>
          </a>
          <a href={info.github} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.linkIcon}>◆</span>
            <span className={styles.linkText} data-text="github.com/parvin">github.com/parvin</span>
          </a>
          <a href={info.linkedin} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.linkIcon}>in</span>
            <span className={styles.linkText} data-text="linkedin.com/in/parvin">linkedin.com/in/parvin</span>
          </a>
        </div>
      </div>
    </div>
  )
}
