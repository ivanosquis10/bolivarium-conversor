"use client"

import toast from "react-hot-toast"

import { useAppStore } from "@/store"
import { Button } from "@/components/ui/button"
import { TabsContent } from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function RenderTabs(currency: string, title: string, placeholder: string) {
  const { getResult, tasa, cantidad, getCantidad, getTasa, resetFields, resetResult } =
    useAppStore()

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Number(cantidad) <= 0 || Number(tasa) <= 0) {
      return toast.error("Por favor, ingresa una cantidad válida")
    }

    return getResult(cantidad, tasa)
  }

  const handleResets = () => {
    resetFields()
    resetResult()
  }

  return (
    <TabsContent value={currency}>
      <Card className="bg-zinc-100 shadow-xl dark:bg-zinc-900/50">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Escribe tu cantidad, escoge a qué tasa quieres convertir y listo!
          </CardDescription>
        </CardHeader>
        <form onSubmit={submitHandler}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor={`tasa-${currency}`}>Selecciona tu tasa:</Label>
              <Input
                className="shadow-md"
                id={`tasa-${currency}`}
                placeholder={placeholder}
                type="number"
                value={tasa}
                onChange={(e) => getTasa(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`cantidad-${currency}`}>
                Cantidad en {currency === "VES" ? "Bolívares" : "Dólares"}:
              </Label>
              <Input
                className="shadow-md"
                id={`cantidad-${currency}`}
                placeholder={`Ingresa tu cantidad en ${currency === "VES" ? "bs" : "USD"}`}
                type="number"
                value={cantidad}
                onChange={(e) => getCantidad(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex items-center gap-2">
            <Button className="text-base lg:h-9 lg:px-4 lg:py-2" size="sm" type="submit">
              Convertir
            </Button>
            <Button
              className="text-base font-bold lg:h-9 lg:px-4 lg:py-2"
              size="sm"
              type="button"
              variant="destructive"
              onClick={handleResets}
            >
              Limpiar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  )
}
