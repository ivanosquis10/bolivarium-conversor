import { TrashIcon, ClipboardCopyIcon } from "@radix-ui/react-icons"

import { calculateDate, formatMoney } from "@/lib/utils"
import { type HistoryItem } from "@/interfaces"

import { Button } from "../../ui/button"
import { Card } from "../../ui/card"

type Props = {
  history: HistoryItem
  onDelete: (id: string) => void
  onCopy: (result: number) => void
}

export function HistoryCard({ history, onDelete, onCopy }: Props) {
  const { tasa, amount, conversion, currency, date, id } = history

  return (
    <Card
      className="border shadow-xl ring-2 ring-transparent transition-all hover:ring-rose-500/70"
      data-testid={`history-card-${history.id}`}
    >
      <div className="rounded-xl p-4">
        <small className="mb-1 block text-xs font-semibold dark:text-foreground/80">
          Creada hace {calculateDate(date)}...
        </small>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-1 rounded">
            <p className="flex-1 border-b px-1 text-sm dark:text-zinc-300">
              Tasa:{" "}
              <span className="text-base font-semibold text-foreground dark:text-zinc-100">
                {formatMoney(tasa, "USD")}
              </span>
            </p>
            <p className="rounded bg-emerald-600 px-1 font-bold text-white">{currency}</p>
          </div>
          <p className="flex-1 border-b px-1 text-sm dark:text-zinc-300">
            Cantidad:{" "}
            <span className="text-base font-semibold text-foreground dark:text-zinc-100">
              {currency === "USD"
                ? `${formatMoney(Number(amount), "VES")}`
                : formatMoney(Number(amount), "USD")}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <p className="flex-1 px-1 text-sm dark:text-zinc-300">
              Resultado:{" "}
              <span className="text-base font-semibold text-foreground dark:text-zinc-100">
                {formatMoney(conversion, currency)}
              </span>
            </p>
            <Button
              className="self-end shadow"
              size="icon"
              title="Copiar resultado"
              onClick={() => onCopy(conversion)}
            >
              <span className="sr-only">Copiar</span>
              <ClipboardCopyIcon className="h-5 w-5" />
            </Button>
            <Button
              className="self-end shadow"
              size="icon"
              title="Eliminar elemento"
              variant="outline"
              onClick={() => onDelete(id)}
            >
              <span className="sr-only">Eliminar</span>
              <TrashIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
