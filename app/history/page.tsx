import { AppNavigation } from "@/components/app-navigation"
import { HistoryList } from "@/components/history-list"
import { Suspense } from "react"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppNavigation />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">Your content archive</h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            All your past generations in one place. Find, copy, or delete what you need.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-muted-foreground">Loading history...</div>}>
          <HistoryList />
        </Suspense>
      </main>
    </div>
  )
}
