/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'
import type { Expression, Monitor } from '@/interfaces'
import { useAppStore } from '@/store/appStore'
import { SelectCoin } from '@/components'
interface Props {
  coins: Monitor[]
}

export function SectionTabs({ coins }: Props) {
  const { setUserValues, userValues, setTab, tab } = useAppStore()
  const getResult = useAppStore((state) => state.getResult)

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if ([userValues.tasa, userValues.cantidad].includes('')) {
      return alert('Por favor, llena todos los campos')
    }

    if (userValues.cantidad <= 0) {
      return alert('Por favor, ingresa una cantidad valida')
    }

    // necesitamos convertir la "tasa" a un string valido para la api y quitar los acentos de las palabras
    // const title = userValues.tasa.replaceAll(' ', '_').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // console.log(userValues.tasa, userValues.cantidad)
    await getResult(userValues.cantidad, userValues.tasa)
  }

  return (
    <Tabs defaultValue={tab} className="w-full" onValueChange={(data) => setTab(data as Expression)}>
      <TabsList className="grid w-full grid-cols-2 bg-zinc-200 dark:bg-zinc-800">
        <TabsTrigger value="bs">Bolivares a USD</TabsTrigger>
        <TabsTrigger value="usd">USD a Bolivares</TabsTrigger>
      </TabsList>
      <TabsContent value="bs" className='' >
        <Card className='dark:bg-zinc-800/30'>
          <CardHeader>
            <CardTitle>Convierte de Bolivares a Dolares</CardTitle>
            <CardDescription>
              Escribe tu cantidad, escoge a que tasa quieres convertir y listo!
            </CardDescription>
          </CardHeader>
          <form onSubmit={submitHandler}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="tasa">Seleciona tu tasa:</Label>
                <SelectCoin coins={coins} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cantidad">Cantidad en Bolívares:</Label>
                <Input
                  type='number'
                  id="cantidad"
                  defaultValue={userValues.cantidad}
                  value={userValues.cantidad}
                  onChange={(e) => setUserValues({ ...userValues, cantidad: Number(e.target.value) })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button >Convertir cantidad</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value="usd" className=''>
        <Card className='dark:bg-zinc-800/30'>
          <CardHeader>
            <CardTitle>Convierte de Dólares a Bolívares</CardTitle>
            <CardDescription>
              Escribe tu cantidad, escoge a que tasa quieres convertir y listo!
            </CardDescription>
          </CardHeader>
          <form onSubmit={submitHandler}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="tasa">Seleciona tu tasa:</Label>
                <SelectCoin coins={coins} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cantidad">Cantidad en Dolarés</Label>
                <Input
                  type='number'
                  id="cantidad"
                  defaultValue={userValues.cantidad}
                  value={userValues.cantidad}
                  onChange={(e) => setUserValues({ ...userValues, cantidad: Number(e.target.value) })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type='submit'>Convertir cantidad</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

    </Tabs>
  )
}
