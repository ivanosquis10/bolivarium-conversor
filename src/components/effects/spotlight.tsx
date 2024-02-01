/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client"

import { useRef, useState, useEffect } from "react"

import { useMousePosition } from "@/hooks/useMouse"

type SpotlightProps = {
  children: React.ReactNode
  title?: string
  className?: string
}

export function Spotlight({ children, title, className = "" }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useMousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const [boxes, setBoxes] = useState<HTMLElement[]>([])

  useEffect(() => {
    containerRef.current &&
      setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement))
  }, [])

  useEffect(() => {
    initContainer()
    window.addEventListener("resize", initContainer)

    return () => {
      window.removeEventListener("resize", initContainer)
    }
  }, [setBoxes])

  useEffect(() => {
    onMouseMove()
  }, [mousePosition])

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth
      containerSize.current.h = containerRef.current.offsetHeight
    }
  }

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const { w, h } = containerSize.current
      const x = mousePosition.x - rect.left
      const y = mousePosition.y - rect.top
      const inside = x < w && x > 0 && y < h && y > 0

      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y

          box.style.setProperty("--mouse-x", `${boxX}px`)
          box.style.setProperty("--mouse-y", `${boxY}px`)
        })
      }
    }
  }

  return (
    <section ref={containerRef} className={className} title={title}>
      {children}
    </section>
  )
}

// type SpotlightCardProps = {
//   children: React.ReactNode
//   className?: string
// }

// export function SpotlightCard({
//   children,
//   className = ''
// }: SpotlightCardProps) {
//   return <div className={`
//     w-[500px] mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg md:max-w-3xl m-3 border-2 relative h-full p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}>{children}</div>
// }

// Spotlight Effect alternative
// export const CardSpotlightEffect = () => {
//   const divRef = useRef<HTMLDivElement>(null)
//   const [isFocused, setIsFocused] = useState(false)
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [opacity, setOpacity] = useState(0)

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!divRef.current || isFocused) return

//     const div = divRef.current
//     const rect = div.getBoundingClientRect()

//     setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
//   }

//   const handleFocus = () => {
//     setIsFocused(true)
//     setOpacity(1)
//   }

//   const handleBlur = () => {
//     setIsFocused(false)
//     setOpacity(0)
//   }

//   const handleMouseEnter = () => {
//     setOpacity(1)
//   }

//   const handleMouseLeave = () => {
//     setOpacity(0)
//   }

//   return (
//     <div
//       ref={divRef}
//       onMouseMove={handleMouseMove}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="to-slate-950 relative max-w-md overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 px-8 py-16 shadow-2xl"
//     >
//       <div
//         className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//         style={{
//           opacity,
//           background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`
//         }}
//       />
//       <span className="mb-4 inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
//         <svg
//           className="h-6 w-6 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           aria-hidden="true"
//         />
//       </span>
//       <h3 className="mb-2 font-medium tracking-tight text-white">Hello!</h3>
//       <p className="text-sm text-slate-400">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
//         obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
//         quod quibusdam expedita nemo.
//       </p>
//     </div>
//   )
// }
