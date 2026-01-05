import { NextResponse } from "next/server"
import { createSession } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 })
    }

    // In a real app, hash password and save to database
    // For demo purposes, just create session
    const userId = "user-" + Math.random().toString(36).substring(7)

    await createSession(userId, email, name)

    return NextResponse.json({ success: true, user: { email, name } })
  } catch (error) {
    console.error("[v0] Signup error:", error)
    return NextResponse.json({ error: "Failed to create account" }, { status: 500 })
  }
}
