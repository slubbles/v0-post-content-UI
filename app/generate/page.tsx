import { AppNavigation } from "@/components/app-navigation"
import { PostGenerator } from "@/components/post-generator"
import { Suspense } from "react"

export default function GeneratePage() {
  return (
    <div className="min-h-screen bg-background">
      <AppNavigation />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Stop overthinking.
            <br />
            Start posting.
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Turn your ideas into engaging social media posts in seconds. No more staring at blank screens.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-muted-foreground">Loading generator...</div>}>
          <PostGenerator />
        </Suspense>
      </main>
    </div>
  )
}
