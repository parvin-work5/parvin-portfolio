// ─────────────────────────────────────────────
// app/layout.tsx
//
// Root layout — wraps every page.
// Sets the <html> lang, loads global CSS,
// and adds the page title / meta tags.
// ─────────────────────────────────────────────

import type { Metadata } from "next"
import "./globals.css"
import { info } from "@/lib/info"

export const metadata: Metadata = {
  title: `${info.name} — ${info.role}`,
  description: info.bio,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
