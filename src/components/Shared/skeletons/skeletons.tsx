export function MonitorSkeleton() {
  const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='p-2 space-y-2 overflow-y-auto border rounded dark:border-zinc-800 h-[320px] lg:h-[550px]'>
      {skeletonItems.map((index) => (
          <div key={index} className='rounded-xl border bg-card text-card-foreground shadow p-2 transition-all cursor-pointer ring-2 ring-transparent animate-pulse'>
            <div>
              <div>
                <div className="w-1/2 h-2 bg-primary/75 rounded-full "></div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-1'>
              <div>
                <div className="w-32 h-2 rounded-full bg-primary/75"></div>
              </div>
              <div>
                <div className="h-2.5 bg-primary/75 rounded-full w-24 mb-1"></div>
                <div className="w-32 h-2  rounded-full bg-primary/75"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
      ))}
    </div>
  )
}
