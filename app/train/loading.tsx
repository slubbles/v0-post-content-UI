export default function TrainLoading() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="h-10 w-72 bg-muted animate-pulse rounded-lg" />
          <div className="h-5 w-96 bg-muted animate-pulse rounded-lg" />
        </div>

        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-8 w-8 bg-muted animate-pulse rounded-full" />
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="h-6 w-48 bg-muted animate-pulse rounded" />
            <div className="h-40 bg-muted animate-pulse rounded-lg" />
          </div>

          <div className="flex justify-between">
            <div className="h-11 w-24 bg-muted animate-pulse rounded-full" />
            <div className="h-11 w-32 bg-primary/20 animate-pulse rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
