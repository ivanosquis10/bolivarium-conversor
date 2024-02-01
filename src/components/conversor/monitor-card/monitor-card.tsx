/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client"

import type { Monitor } from "@/interfaces"

import { StarFilledIcon } from "@radix-ui/react-icons"

import { useAppStore } from "@/store/appStore"
import { Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { formatMoney } from "@/lib/utils"

type Props = {
  monitor: Monitor
}

export function MonitorCard({ monitor }: Props) {
  const getTasa = useAppStore((state) => state.getTasa)
  const isFavorite = useAppStore((state) => state.favorite)
  const { title, price, last_update: lastUpdate, favorite } = monitor

  // Si el filtro está activado y el monitor no es favorito, oculta el componente
  const favoriteLogic = () => (isFavorite && !favorite ? "hidden" : "")

  return (
    <Card
      className={`cursor-pointer p-2 ring-2 ring-transparent transition-all hover:ring-rose-600 dark:bg-zinc-950/50 ${favoriteLogic()}`}
      onClick={() => getTasa(price)}
    >
      <CardHeader className="flex flex-row items-center gap-1 space-y-0 p-0">
        {favorite ? <StarFilledIcon /> : null}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardDescription className="mt-1 flex items-center justify-between">
        {formatMoney(price, "USD")}
        <span className="text-xs">{lastUpdate}</span>
      </CardDescription>
    </Card>
  )
}
