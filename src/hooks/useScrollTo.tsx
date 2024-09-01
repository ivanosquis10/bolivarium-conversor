import { useRef } from "react"

export const useScrollTo = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const scrollTo = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return { ref, scrollTo }
}
