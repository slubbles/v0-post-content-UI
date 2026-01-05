export default function GenerateLoading() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header skeleton */}
        <div className="space-y-3">
          <div className="h-10 w-64 bg-muted animate-pulse rounded-lg" />
          <div className="h-5 w-96 bg-muted animate-pulse rounded-lg" />
        </div>

        {/* Form skeleton */}
        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
          <div className="space-y-2">
            <div className="h-5 w-32 bg-muted animate-pulse rounded" />
            <div className="h-32 bg-muted animate-pulse rounded-lg" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-5 w-24 bg-muted animate-pulse rounded" />
              <div className="h-10 bg-muted animate-pulse rounded-lg" />
            </div>
            <div className="space-y-2">
              <div className="h-5 w-24 bg-muted animate-pulse rounded" />
              <div className="h-10 bg-muted animate-pulse rounded-lg" />
            </div>
          </div>

          <div className="h-12 w-full bg-primary/20 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  )
}
