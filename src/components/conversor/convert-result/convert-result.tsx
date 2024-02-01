"use client"
import { CopyIcon } from "@radix-ui/react-icons"

import { useAppStore } from "@/store"
import { formatMoney } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

import { Button } from "../../ui/button"

const CURRENCY_VES = "VES" as const
const CURRENCY_USD = "USD" as const

export function ConvertResult() {
  const result = useAppStore((state) => state.result)
  const copyResult = useAppStore((state) => state.copyResult)

  if (result.conversion === 0) {
    return null
  }

  const options = {
    [CURRENCY_VES]: () => `${formatMoney(result.conversion, CURRENCY_VES)}`,
    [CURRENCY_USD]: () => `${formatMoney(result.conversion, CURRENCY_USD)} Doláres`,
  }

  return (
    <Card className="relative animate-jump overflow-hidden border-4 bg-zinc-100 shadow-xl dark:bg-zinc-900 md:mb-0 ">
      <CardContent className="z-50 mt-3 space-y-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-bold dark:text-zinc-200">{options[result.currency]()}</p>
          <p className="text-sm text-foreground/80 md:text-base">
            Tasa utilizada: <span className="font-bold text-foreground">{result.tasa}</span>
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Este resultado es aproximado, puede variar dependiendo de la tasa que se use.
        </p>
        <Button className="flex items-center gap-2" onClick={() => copyResult(result.conversion)}>
          <span className="text-sm">Copiar resultado</span>
          <CopyIcon className="h-5 w-5 text-white dark:text-black" />
        </Button>
      </CardContent>
    </Card>
  )
}
