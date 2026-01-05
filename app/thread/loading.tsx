export default function ThreadLoading() {
  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-3">
          <div className="h-10 w-80 bg-muted animate-pulse rounded-lg" />
          <div className="h-5 w-[420px] bg-muted animate-pulse rounded-lg" />
        </div>
        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
          <div className="h-40 bg-muted animate-pulse rounded-lg" />
          <div className="h-10 bg-muted animate-pulse rounded-lg" />
          <div className="h-12 w-full bg-primary/20 animate-pulse rounded-full" />
        </div>
      </div>
    </div>
  )
}
