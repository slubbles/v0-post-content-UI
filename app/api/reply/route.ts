import { NextResponse } from "next/server"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { originalPost, context, replyTone } = await request.json()

    if (!originalPost) {
      return NextResponse.json({ error: "Original post is required" }, { status: 400 })
    }

    const prompt = `Generate 3 different reply options to this social media post:

Original Post: ${originalPost}

${context ? `Additional Context: ${context}` : ""}

Reply Style: ${replyTone}

Generate 3 unique, engaging replies that are ${replyTone} in tone. Make each reply natural and conversational.

Format: Return each reply separated by "---" on its own line.`

    const { text } = await generateText({
      model: "xai/grok-2-1212",
      prompt,
      temperature: 0.8,
      maxTokens: 800,
    })

    const replies = text
      .split("---")
      .map((reply) => reply.trim())
      .filter((reply) => reply.length > 0)

    return NextResponse.json({ replies })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Failed to generate replies" }, { status: 500 })
  }
}
