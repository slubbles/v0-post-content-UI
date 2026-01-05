import { NextResponse } from "next/server"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { topic, keyPoints, threadLength } = await request.json()

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 })
    }

    const prompt = `Generate a ${threadLength}-post Twitter thread about: ${topic}

${keyPoints ? `Key Points to Cover: ${keyPoints}` : ""}

Requirements:
- Create exactly ${threadLength} posts
- Each post should flow naturally to the next
- Start with a hook that grabs attention
- Include valuable insights and information
- End with a strong conclusion or call to action
- Keep each post within Twitter's character limit

Format: Return each post separated by "---" on its own line.`

    const { text } = await generateText({
      model: "xai/grok-2-1212",
      prompt,
      temperature: 0.8,
      maxTokens: 2000,
    })

    const thread = text
      .split("---")
      .map((post) => post.trim())
      .filter((post) => post.length > 0)

    return NextResponse.json({ thread })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Failed to generate thread" }, { status: 500 })
  }
}
