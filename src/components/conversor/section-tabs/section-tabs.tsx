'use client'
import toast from 'react-hot-toast'
import { useAppStore } from '@/store'
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
import type { Expression } from '@/interfaces'

export function SectionTabs() {
  const { setTab, tab, getResult } = useAppStore()
  const tasa = useAppStore((state) => state.tasa)
  const cantidad = useAppStore((state) => state.cantidad)

  const getCantidad = useAppStore((state) => state.getCantidad)
  const geTasa = useAppStore((state) => state.getTasa)
  const resetFields = useAppStore((state) => state.resetFields)
  const resetResults = useAppStore((state) => state.resetResult)

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Number(cantidad) <= 0 || Number(tasa) <= 0) {
      return toast.error('Por favor, ingresa una cantidad valida')
    }

    return getResult(cantidad, tasa)
  }

  const handleResets = () => {
    resetFields()
    resetResults()
  }

  return (
    <Tabs defaultValue={tab} className="w-full" onValueChange={(data) => setTab(data as Expression)}>
      <TabsList className="grid w-full grid-cols-2 bg-zinc-200 dark:bg-zinc-900">
        <TabsTrigger value="VES">Bolivares a USD</TabsTrigger>
        <TabsTrigger value="USD">USD a Bolivares</TabsTrigger>
      </TabsList>
      <TabsContent value="VES">
        <Card className='dark:bg-zinc-900/50 bg-zinc-100 shadow-xl'>
          <CardHeader>
            <CardTitle>Convierte de Bolivares a Dolares</CardTitle>
            <CardDescription>
              Escribe tu cantidad, escoge a que tasa quieres convertir y listo!
            </CardDescription>
          </CardHeader>
          <form onSubmit={submitHandler}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="tasa-bolivar">Seleciona tu tasa:</Label>
                <Input
                  type='number'
                  id="tasa-bolivar"
                  value={tasa}
                  onChange={(e) => geTasa(e.target.value)}
                  placeholder='Escoge o escribe la tasa a convertir'
                  className='shadow-md'
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cantidad-bolivar">Cantidad en Bolívares:</Label>
                <Input
                  type='number'
                  id="cantidad-bolivar"
                  value={cantidad}
                  onChange={(e) => getCantidad(e.target.value)}
                  placeholder='Ingresa tu cantidad en bs'
                  className='shadow-md'
                />
              </div>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
              <Button type='submit' size={'sm'} className='lg:h-9 lg:px-4 lg:py-2 lg:text-sm'>Convertir cantidad</Button>
              <Button type='button' size={'sm'} className='lg:h-9 lg:px-4 lg:py-2 lg:text-sm' onClick={handleResets}>Limpiar todo</Button>

            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value='USD'>
        <Card className='dark:bg-zinc-900/50 bg-zinc-100 shadow-xl'>
          <CardHeader>
            <CardTitle>Convierte de Dólares a Bolívares</CardTitle>
            <CardDescription>
              Escribe tu cantidad, escoge a que tasa quieres convertir y listo!
            </CardDescription>
          </CardHeader>
          <form onSubmit={submitHandler}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="tasa-dolar">Seleciona tu tasa:</Label>
                <Input
                  type='number'
                  id="tasa-dolar"
                  // defaultValue={tasa}
                  value={tasa}
                  onChange={(e) => geTasa(e.target.value)}
                  placeholder='Escoge o escribe la tasa a convertir'

                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cantidad-dolar">Cantidad en Dolares:</Label>
                <Input
                  type='number'
                  id="cantidad-dolar"
                  // defaultValue={cantidad}
                  value={cantidad}
                  // value={amount}
                  onChange={(e) => getCantidad(e.target.value)}
                  placeholder='Ingresa tu cantidad en USD'
                />
              </div>
            </CardContent>
            <CardFooter className='flex items-center justify-between'>
              <Button type='submit' size={'sm'} className='lg:h-9 lg:px-4 lg:py-2 lg:text-sm'>Convertir cantidad</Button>
              <Button type='button' size={'sm'} className='lg:h-9 lg:px-4 lg:py-2 lg:text-sm' onClick={handleResets}>Limpiar todo</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
