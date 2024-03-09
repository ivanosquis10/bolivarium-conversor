"use client";
import type { Expression } from "@/interfaces";

import toast from "react-hot-toast";

import { useAppStore } from "@/store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SectionTabs() {
  const { setTab, tab, getResult } = useAppStore();
  const tasa = useAppStore((state) => state.tasa);
  const cantidad = useAppStore((state) => state.cantidad);

  const getCantidad = useAppStore((state) => state.getCantidad);
  const geTasa = useAppStore((state) => state.getTasa);
  const resetFields = useAppStore((state) => state.resetFields);
  const resetResults = useAppStore((state) => state.resetResult);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number(cantidad) <= 0 || Number(tasa) <= 0) {
      return toast.error("Por favor, ingresa una cantidad valida");
    }

    return getResult(cantidad, tasa);
  };

  const handleResets = () => {
    resetFields();
    resetResults();
  };

  return (
    <Tabs
      className="w-full"
      data-testid="tabs-conversor"
      defaultValue={tab}
      onValueChange={(data) => setTab(data as Expression)}
    >
      <TabsList className="grid w-full grid-cols-2 bg-zinc-200 dark:bg-zinc-900">
        <TabsTrigger value="VES">Bolivares a USD</TabsTrigger>
        <TabsTrigger value="USD">USD a Bolivares</TabsTrigger>
      </TabsList>
      <TabsContent value="VES">
        <Card className="bg-zinc-100 shadow-xl dark:bg-zinc-900/50">
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
                  className="shadow-md"
                  id="tasa-bolivar"
                  placeholder="Escoge o escribe la tasa a convertir"
                  type="number"
                  value={tasa}
                  onChange={(e) => geTasa(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cantidad-bolivar">Cantidad en Bolívares:</Label>
                <Input
                  className="shadow-md"
                  id="cantidad-bolivar"
                  placeholder="Ingresa tu cantidad en bs"
                  type="number"
                  value={cantidad}
                  onChange={(e) => getCantidad(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button
                className="lg:h-9 lg:px-4 lg:py-2 lg:text-sm"
                size="sm"
                type="submit"
              >
                Convertir cantidad
              </Button>
              <Button
                className="[ hover:text-white hover:bg-red-500 bg-inherit text-gray-500 group ] [ lg:h-9 lg:px-4 lg:py-2 lg:text-sm ]"
                size="sm"
                type="button"
                onClick={handleResets}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Limpiar todo
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value="USD">
        <Card className="bg-zinc-100 shadow-xl dark:bg-zinc-900/50">
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
                  placeholder="Escoge o escribe la tasa a convertir"
                  type="number"
                  onChange={(e) => geTasa(e.target.value)}
                  id="tasa-dolar"
                  // defaultValue={tasa}
                  value={tasa}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cantidad-dolar">Cantidad en Dolares:</Label>
                <Input
                  placeholder="Ingresa tu cantidad en USD"
                  id="cantidad-dolar"
                  // defaultValue={cantidad}
                  value={cantidad}
                  type="number"
                  // value={amount}
                  onChange={(e) => getCantidad(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button
                className="lg:h-9 lg:px-4 lg:py-2 lg:text-sm"
                size="sm"
                type="submit"
              >
                Convertir cantidad
              </Button>
              <Button
                className="lg:h-9 lg:px-4 lg:py-2 lg:text-sm"
                size="sm"
                type="button"
                onClick={handleResets}
              >
                Limpiar todo
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
