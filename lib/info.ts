// ─────────────────────────────────────────────
// lib/info.ts
//
// All of Parvin's personal info lives here.
// Update this file whenever something changes —
// the rest of the site picks it up automatically.
// ─────────────────────────────────────────────

export const info = {
  name: "Parvin Rajamurthi",
  role: "Full Stack Developer",
  location: "Kuala Lumpur, Malaysia",
  email: "parvin@email.com",
  github: "https://github.com/parvin-work5",
  linkedin: "https://linkedin.com/in/parvin",
  available: true,

  bio: "I come from graphic design and moved into full stack development — so I build things that work beautifully on every level. Currently creating cross-platform apps and AI-powered tools.",

  // The system prompt the AI assistant uses to answer visitor questions.
  // Written in plain English so it's easy to read and update.
  aiContext: `
    You are an AI assistant on Parvin Rajamurthi's personal portfolio website.
    Answer questions about Parvin in a warm, professional tone.
    Keep answers to 2–4 sentences. Speak about Parvin in third person.

    Here is everything you know about her:

    NAME: Parvin Rajamurthi
    ROLE: Full Stack Developer (transitioned from graphic design)
    LOCATION: Kuala Lumpur / Putra Heights, Selangor, Malaysia

    EDUCATION:
    - Diploma in Software Engineering
    - IBM Full Stack Software Developer Certificate

    WORK EXPERIENCE:
    - Graphic Designer at Maybank (~1+ years)
    - Graphic Designer at HTT Travel (~1+ years)

    TECHNICAL SKILLS:
    React Native, Expo, Next.js, Firebase, Cloudinary,
    TypeScript, GitHub Actions CI/CD, Figma, UI/UX Design, Graphic Design

    PROJECTS:
    1. PawXOne — solo-built cross-platform pet management app.
       Tracks health records, vet appointments, and daily logs.
       Stack: React Native, Expo, Firebase, Cloudinary, TypeScript, GitHub Actions.
       Available on iOS, Android, and web.

    2. AI Portfolio Site — this very site.
       Personal portfolio with an embedded AI assistant.
       Stack: Next.js, React, TypeScript, Vercel.

    BACKGROUND:
    Parvin's creative graphic design career gives her a strong eye for UI/UX.
    She bridges design thinking and engineering in everything she builds.

    CONTACT / AVAILABILITY:
    Open to full-time roles, freelance projects, and collaboration.
    Available for remote and on-site work.
  `.trim(),
}

export const skills = [
  { name: "React Native", type: "Mobile",   icon: "⚛"  },
  { name: "Next.js",      type: "Web",      icon: "▲"  },
  { name: "TypeScript",   type: "Language", icon: "TS" },
  { name: "Firebase",     type: "Backend",  icon: "🔥" },
  { name: "Expo",         type: "Mobile",   icon: "📱" },
  { name: "Cloudinary",   type: "Media",    icon: "☁"  },
  { name: "GitHub Actions", type: "DevOps", icon: "⚙" },
  { name: "Figma",        type: "Design",   icon: "🎨" },
  { name: "UI / UX",      type: "Product",  icon: "✦"  },
  { name: "Graphic Design", type: "Creative", icon: "🖋" },
]

export const projects = [
  {
    name: "PawXOne",
    status: "live" as const,
    description:
      "A cross-platform pet management platform built solo — health records, vet appointments, and daily logs across iOS, Android, and web in one unified app.",
    tags: ["React Native", "Expo", "Firebase", "Cloudinary", "TypeScript", "CI/CD"],
  },
  {
    name: "AI Portfolio Site",
    status: "wip" as const,
    description:
      "This very portfolio — with an embedded AI assistant that answers questions about Parvin's work, skills, and background in real time.",
    tags: ["Next.js", "React", "AI", "TypeScript", "Vercel"],
  },
]

export const aiChips = [
  { label: "Work experience", question: "Tell me about Parvin's work experience." },
  { label: "Projects",        question: "What projects has Parvin built?" },
  { label: "Skills",          question: "What are Parvin's technical skills?" },
  { label: "About Parvin",    question: "Tell me about Parvin's background and who she is." },
  { label: "Contact",         question: "How can I contact Parvin?" },
  { label: "PawXOne",         question: "What is PawXOne?" },
]
