import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { plan, isAnnual } = await request.json()

    // In a real app, this would create a checkout session with Polar.sh
    // For demo purposes, redirect to success page
    const checkoutUrl = "/success?plan=" + plan + "&billing=" + (isAnnual ? "annual" : "monthly")

    return NextResponse.json({ checkoutUrl })
  } catch (error) {
    console.error("[v0] Checkout error:", error)
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 })
  }
}
