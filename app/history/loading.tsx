export default function HistoryLoading() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="h-10 w-64 bg-muted animate-pulse rounded-lg" />
          <div className="h-5 w-80 bg-muted animate-pulse rounded-lg" />
        </div>

        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-9 w-20 bg-muted animate-pulse rounded-full" />
          ))}
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                </div>
                <div className="flex gap-2">
                  <div className="h-9 w-9 bg-muted animate-pulse rounded-lg" />
                  <div className="h-9 w-9 bg-muted animate-pulse rounded-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
