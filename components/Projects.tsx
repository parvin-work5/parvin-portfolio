// ─────────────────────────────────────────────
// components/Projects.tsx
//
// Project cards — pulled from lib/info.ts.
// Add a new project there and it appears here.
// ─────────────────────────────────────────────

import styles from "./Projects.module.css"
import { projects } from "@/lib/info"

export default function Projects() {
  return (
    <div className={styles.section}>
      <p className={styles.label}>03 — Work</p>
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <span className={`${styles.badge} ${styles[project.status]}`}>
                {project.status === "live" ? "Live" : "In Progress"}
              </span>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
