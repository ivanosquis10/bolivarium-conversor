"use client"
import type { Expression } from "@/interfaces"

import { useAppStore } from "@/store"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { RenderTabs } from "../render-tabs/render-tabs"

export function SectionTabs() {
  const { setTab, tab } = useAppStore()

  return (
    <Tabs
      className="w-full"
      data-testid="tabs-conversor"
      defaultValue={tab}
      onValueChange={(data) => setTab(data as Expression)}
    >
      <TabsList className="grid w-full grid-cols-2 bg-zinc-200 dark:bg-zinc-900">
        <TabsTrigger id="tab-ves" value="VES">
          Bolívares a USD
        </TabsTrigger>
        <TabsTrigger id="tab-usd" value="USD">
          USD a Bolívares
        </TabsTrigger>
      </TabsList>
      {RenderTabs(
        "VES",
        "Convierte de Bolívares a Dólares",
        "Escoge o escribe la tasa a convertir",
      )}
      {RenderTabs(
        "USD",
        "Convierte de Dólares a Bolívares",
        "Escoge o escribe la tasa a convertir",
      )}
    </Tabs>
  )
}
