// ─────────────────────────────────────────────
// app/page.tsx
//
// The main page. It just stacks the sections in
// order. Each section is its own component file.
// ─────────────────────────────────────────────

import Nav        from "@/components/Nav"
import AiChat     from "@/components/AiChat"
import Hero       from "@/components/Hero"
import Skills     from "@/components/Skills"
import Projects   from "@/components/Projects"
import Contact    from "@/components/Contact"
import Footer     from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Nav />

      {/* Ask the AI about Parvin — sits at the very top */}
      <section id="ai">
        <AiChat />
      </section>

      <section id="hero">
        <Hero />
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2.5rem" }} />

      <section id="skills">
        <Skills />
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2.5rem" }} />

      <section id="projects">
        <Projects />
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2.5rem" }} />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  )
}
