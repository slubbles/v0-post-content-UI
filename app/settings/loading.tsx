export default function SettingsLoading() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="h-10 w-48 bg-muted animate-pulse rounded-lg" />
          <div className="h-5 w-72 bg-muted animate-pulse rounded-lg" />
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="h-6 w-40 bg-muted animate-pulse rounded" />
              <div className="space-y-3">
                <div className="h-10 bg-muted animate-pulse rounded-lg" />
                <div className="h-10 bg-muted animate-pulse rounded-lg" />
              </div>
            </div>
          ))}

          <div className="h-11 w-full bg-primary/20 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  )
}
