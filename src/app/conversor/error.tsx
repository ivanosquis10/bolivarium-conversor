"use client" // Error components must be Client Components

import { useEffect } from "react"

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="h-[470px] space-y-2 overflow-y-auto rounded border bg-zinc-200 p-2 text-center shadow-md dark:border-zinc-800 dark:bg-zinc-900/70">
      <h4 className="text-2xl font-bold lg:text-4xl">Algo ha salido mal!xd</h4>
      <p className="text-sm font-semibold tracking-wider lg:text-base">
        por favor, espere unos segundos y recargue la página
      </p>
    </div>
  )
}
