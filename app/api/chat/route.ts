// ─────────────────────────────────────────────
// app/api/chat/route.ts
//
// The AI chat endpoint.
//
// The browser never touches the Anthropic API
// directly — it POST-s here instead. This keeps
// ANTHROPIC_API_KEY safe on the server and never
// exposed in the client bundle.
//
// Request body:  { messages: {role, content}[] }
// Response body: { reply: string }
// ─────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import { info } from "@/lib/info"

const client = new Anthropic()

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: info.aiContext,
      messages,
    })

    const reply =
      response.content[0].type === "text"
        ? response.content[0].text
        : "Sorry, I couldn't get a response."

    return NextResponse.json({ reply })
  } catch (err) {
    console.error("Chat API error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
