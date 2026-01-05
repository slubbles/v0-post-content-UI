import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const settings = await request.json()

    // In a real app, this would save to a database
    console.log("[v0] Settings saved:", settings)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Settings save error:", error)
    return NextResponse.json({ error: "Failed to save settings" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // In a real app, this would fetch from a database
    const settings = {
      name: "John Doe",
      email: "john@example.com",
      preferences: {
        defaultPlatform: "twitter",
        defaultTone: "professional",
        defaultVariants: 3,
        temperature: 0.8,
        enableHistory: true,
        autoSave: true,
      },
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error("[v0] Settings fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
  }
}
