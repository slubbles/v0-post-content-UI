import { cookies } from "next/headers"

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get("session")

  if (!session) {
    return null
  }

  // In a real app, validate the session token with your auth provider
  try {
    const sessionData = JSON.parse(session.value)
    return sessionData
  } catch {
    return null
  }
}

export async function createSession(userId: string, email: string, name: string) {
  const cookieStore = await cookies()
  const sessionData = {
    userId,
    email,
    name,
    createdAt: Date.now(),
  }

  cookieStore.set("session", JSON.stringify(sessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return sessionData
}

export async function clearSession() {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}
