import { LoginForm } from "@/components/login-form"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-bold transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary transition-transform hover:scale-110">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            Post Content
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight">Hey, welcome back!</h1>
          <p className="mt-2 text-muted-foreground">Ready to create some awesome content?</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground">
          New here?{" "}
          <Link href="/signup" className="font-medium text-primary transition-colors hover:underline">
            Create your account
          </Link>
        </p>
      </div>
    </div>
  )
}
