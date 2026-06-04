import styles from "./Contact.module.css"
import GlitchButton from "./GlitchButton"
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
          <GlitchButton href={`$mailto:work.parvin5@gmail.com`} variant="outline">
            ✉ Email Parvin
          </GlitchButton>
          <GlitchButton href="https://github.com/parvin-work5/" variant="outline">
            ◆ github.com/parvin
          </GlitchButton>
          <GlitchButton href="https://www.linkedin.com/in/parvin-rajamurthi-5617a2236/" variant="outline">
            in linkedin.com/in/parvin
          </GlitchButton>
        </div>
      </div>
    </div>
        
  )
}
