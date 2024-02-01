import { QUESTIONS } from "@/constants"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "../ui/sheet"
import { Button } from "../ui/button"

export function FAQ() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="font-bold" variant="ghost">
          Preguntas
        </Button>
      </SheetTrigger>
      <SheetContent data-testid="faq">
        <SheetHeader>
          <SheetTitle>Preguntas o dudas con Bolivarium</SheetTitle>
          <SheetDescription>
            Aquí estarán resueltas la mayoria de dudas alrededor de la aplicación :)
          </SheetDescription>
        </SheetHeader>
        <Accordion collapsible className="my-2" type="single">
          {QUESTIONS.map(({ id, answer, question }) => (
            <AccordionItem key={id} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value="5">
            <AccordionTrigger>Tiene alguna sugerencia o duda?</AccordionTrigger>
            <AccordionContent>
              Puede enviarnos un mensaje: <strong>ivanosquis02.08@gmail.com</strong>. Con el asunto{" "}
              <strong>Bolivarium duda</strong>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Cerrar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
