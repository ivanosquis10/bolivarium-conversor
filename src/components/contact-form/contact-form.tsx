"use client"

import { useForm, type SubmitHandler } from "react-hook-form"

import { useNotification } from "@/hooks/useNotification"
import { sendContactMessage } from "@/services/email"
import { ButtonLink, Error } from "@/components"
import { validateName, validateEmail, validateMessage } from "@/validate-form"

import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"

type Fields = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Fields>()
  const { showNotification } = useNotification()

  const handlerSubmit: SubmitHandler<Fields> = async ({ name, email, message }) => {
    const res = await sendContactMessage({ name, email, message })

    if (res?.status === 200) {
      showNotification("Mensaje enviado!", "default")
    }

    reset()
  }

  return (
    <form className="flex flex-col gap-5 py-5" role="form" onSubmit={handleSubmit(handlerSubmit)}>
      <div>
        <Label aria-label="label_name" htmlFor="name">
          Name
        </Label>
        <Input
          className="bg-zinc-200 dark:bg-primary-foreground"
          {...register("name", validateName)}
          id="name"
          placeholder="Lionel Messi..."
        />
        {errors.name?.message != null && <Error message={errors.name.message} />}
      </div>
      <div>
        <Label aria-label="label_email" htmlFor="email">
          Email
        </Label>
        <Input
          className="bg-zinc-200 dark:bg-primary-foreground"
          {...register("email", validateEmail)}
          id="email"
          placeholder="lionelGOAT@company.bcn"
        />
        {errors.email?.message != null && <Error message={errors.email.message} />}
      </div>

      <div>
        <Label aria-label="label_message" htmlFor="message">
          Message
        </Label>
        <Textarea
          {...register("message", validateMessage)}
          className="resize-none bg-zinc-200 dark:bg-primary-foreground"
          id="message"
          placeholder="Aqui escribe tu duda o sugerencia :)"
        />
        {errors.message?.message != null && <Error message={errors.message.message} />}
      </div>

      <div className="flex items-center gap-2">
        <Button className="flex-1 font-bold" type="submit">
          Enviar mensaje
        </Button>
        <ButtonLink
          className="bg-zinc-300 hover:bg-background dark:bg-zinc-900/50"
          href="/"
          variant="outline"
        >
          Ir al Conversor
        </ButtonLink>
      </div>
    </form>
  )
}
