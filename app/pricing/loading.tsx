export default function PricingLoading() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="h-12 w-96 bg-muted animate-pulse rounded-lg mx-auto" />
          <div className="h-6 w-[480px] bg-muted animate-pulse rounded-lg mx-auto" />
        </div>

        <div className="flex justify-center gap-2">
          <div className="h-10 w-32 bg-muted animate-pulse rounded-full" />
          <div className="h-10 w-32 bg-muted animate-pulse rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="space-y-2">
                <div className="h-8 w-32 bg-muted animate-pulse rounded" />
                <div className="h-10 w-40 bg-muted animate-pulse rounded" />
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-5 w-full bg-muted animate-pulse rounded" />
                ))}
              </div>
              <div className="h-11 w-full bg-primary/20 animate-pulse rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
