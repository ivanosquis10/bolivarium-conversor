import type { CSSProperties } from "react"

import toast, { type ToastPosition } from "react-hot-toast"

export type ToastProps = {
  position: ToastPosition
  duration: number
  id?: string
  className: string
  style?: CSSProperties
}

export const useNotification = () => {
  const showNotification = (title: string, variant: "default" | "destructive") => {
    if (variant === "default") {
      return toast.success(title, {
        duration: 1500,
        position: "top-right",
        className: "font-bold",
      })
    }

    toast.error(title, {
      duration: 1500,
      position: "top-right",
      className: "font-bold",
    })
  }

  return {
    showNotification,
  }
}
