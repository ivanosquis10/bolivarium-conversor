import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { QUESTIONS } from '@/constants'

export const FAQ = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className='font-bold'>Preguntas</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Preguntas o dudas con Bolivarium</SheetTitle>
          <SheetDescription>
            Aquí estarán resueltas la mayoria de dudas alrededor de la aplicación :)
          </SheetDescription>
        </SheetHeader>
        <Accordion className='my-2' type="single" collapsible>
          {QUESTIONS.map(({ id, answer, question }) => (
              <AccordionItem value={question} key={id}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                 {answer}
                </AccordionContent>
              </AccordionItem>
          ))}
          <AccordionItem value='5'>
            <AccordionTrigger>Tiene alguna sugerencia o duda?</AccordionTrigger>
            <AccordionContent>
              Puede enviarnos un mensaje: <strong>ivanosquis02.08@gmail.com</strong>.
              Con el asunto <strong>Bolivarium duda</strong>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  )
}
