import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { examples, keywords, tone } = await request.json()

    // In a real app, this would save to a database
    // For now, just return success
    console.log("[v0] Training data received:", { examples: examples.length, keywords: keywords.length, tone })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] API error:", error)
    return NextResponse.json({ error: "Failed to save training data" }, { status: 500 })
  }
}
