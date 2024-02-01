export function MonitorSkeleton() {
  const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="h-[320px] space-y-2 overflow-y-auto rounded border p-2 dark:border-zinc-800 lg:h-[550px]">
      {skeletonItems.map((index) => (
        <div
          key={index}
          className="animate-pulse cursor-pointer rounded-xl border bg-card p-2 text-card-foreground shadow ring-2 ring-transparent transition-all"
        >
          <div>
            <div>
              <div className="h-2 w-1/2 rounded-full bg-primary/75 " />
            </div>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <div>
              <div className="h-2 w-32 rounded-full bg-primary/75" />
            </div>
            <div>
              <div className="mb-1 h-2.5 w-24 rounded-full bg-primary/75" />
              <div className="h-2 w-32  rounded-full bg-primary/75" />
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  )
}
