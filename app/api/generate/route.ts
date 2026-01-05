import { NextResponse } from "next/server"
import { generateText } from "ai"

export async function POST(request: Request) {
  try {
    const { topic, platform, tone, variants } = await request.json()

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 })
    }

    const prompt = `Generate ${variants} social media post${variants > 1 ? "s" : ""} for ${platform} about: ${topic}

Requirements:
- Tone: ${tone}
- Platform: ${platform}
- Make each post unique and engaging
- Follow platform best practices and character limits
- Include relevant hashtags where appropriate
- Make it ${tone} in tone

Format: Return each post separated by "---" on its own line.`

    const { text } = await generateText({
      model: "xai/grok-2-1212",
      prompt,
      temperature: 0.8,
      maxTokens: 1000,
    })

    // Split posts by separator
    const posts = text
      .split("---")
      .map((post) => post.trim())
      .filter((post) => post.length > 0)

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Failed to generate posts" }, { status: 500 })
  }
}
