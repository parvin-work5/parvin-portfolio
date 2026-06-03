// ─────────────────────────────────────────────
// components/Footer.tsx
// ─────────────────────────────────────────────

import styles from "./Footer.module.css"
import { info } from "@/lib/info"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {info.name} &nbsp;·&nbsp; {info.role} &nbsp;·&nbsp; {info.location} &nbsp;·&nbsp; © {new Date().getFullYear()}
    </footer>
  )
}
