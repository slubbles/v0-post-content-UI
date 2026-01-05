import { NextResponse } from "next/server"
import { createSession } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // In a real app, validate credentials against database
    // For demo purposes, accept any email/password
    const userId = "user-" + Math.random().toString(36).substring(7)
    const name = email.split("@")[0]

    await createSession(userId, email, name)

    return NextResponse.json({ success: true, user: { email, name } })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Failed to sign in" }, { status: 500 })
  }
}
