"use client"

// ─────────────────────────────────────────────
// components/AiChat.tsx
//
// The AI assistant widget at the top of the page.
// Visitors click a chip to ask a question about
// Parvin — it sends the message to /api/chat and
// streams the reply into the chat window.
//
// The API key never touches the browser.
// Everything goes through app/api/chat/route.ts.
// ─────────────────────────────────────────────

import { useState, useRef, useEffect } from "react"
import styles from "./AiChat.module.css"
import GlitchButton from "./GlitchButton"
import { aiChips } from "@/lib/info"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function AiChat() {
  const [messages, setMessages]   = useState<Message[]>([])
  const [loading, setLoading]     = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)

  // Scroll to the bottom whenever a new message arrives
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, loading])

  async function ask(question: string) {
    if (loading) return

    const userMsg: Message = { role: "user", content: question }
    const updatedHistory = [...messages, userMsg]

    setMessages(updatedHistory)
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedHistory }),
      })

      const data = await res.json()
      const reply = data.reply || "I couldn't get a response — please try again."

      setMessages([...updatedHistory, { role: "assistant", content: reply }])
    } catch {
      setMessages([
        ...updatedHistory,
        { role: "assistant", content: "Something went wrong. Please try again." },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.widget}>

        {/* Header bar */}
        <div className={styles.topBar}>
          <div className={styles.avatar}>P</div>
          <div>
            <p className={styles.widgetTitle}>Ask about Parvin</p>
            <p className={styles.widgetSub}>AI assistant · full stack developer</p>
          </div>
          <div className={styles.status}>
            <span className={styles.pulse} />
            online
          </div>
        </div>

        {/* Message thread */}
        <div className={styles.messages} ref={messagesRef}>
          {/* Greeting — always shown */}
          <div className={styles.botMsg}>
            Hi! I'm Parvin's AI assistant. Ask me anything about her work,
            skills, projects, or background.
          </div>

          {messages.map((msg, i) =>
            msg.role === "user" ? (
              <div key={i} className={styles.userMsg}>{msg.content}</div>
            ) : (
              <div key={i} className={styles.botMsg}>{msg.content}</div>
            )
          )}

          {/* Animated typing indicator while waiting */}
          {loading && (
            <div className={styles.typingDots}>
              <span /><span /><span />
            </div>
          )}
        </div>

        {/* Quick-question chips */}
        <div className={styles.chips}>
          {aiChips.map((chip) => (
            <GlitchButton
              key={chip.label}
              onClick={() => ask(chip.question)}
              disabled={loading}
              className={styles.chip}
            >
              {chip.label}
            </GlitchButton>
          ))}
        </div>

      </div>
    </div>
  )
}
