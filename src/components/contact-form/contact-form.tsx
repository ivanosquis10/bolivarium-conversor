'use client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNotification } from '@/hooks/useNotification'
import { sendContactMessage } from '@/services/email'

import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Error } from '@/components'
import { validateName, validateEmail, validateMessage } from '@/validate-form'

type Fields = {
  name: string
  email: string
  message: string
}

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Fields>()
  const { showNotification } = useNotification()

  const handlerSubmit: SubmitHandler<Fields> = async ({ name, email, message }) => {
    const res = await sendContactMessage({ name, email, message })
    if (res?.status === 200) {
      showNotification('Mensaje enviado!', 'default')
    }

    reset()
  }

  return (
    <form onSubmit={handleSubmit(handlerSubmit)} className='flex flex-col gap-5 py-5'>
      <div>
        <Label>Name</Label>
        <Input {...register('name', validateName)} placeholder='Lionel Messi...' />
        {((errors.name?.message) != null) && <Error message={errors.name.message} /> }
      </div>
      <div>
        <Label>Email</Label>
        <Input {...register('email', validateEmail)} placeholder='lionelGOAT@company.bcn' />
        {((errors.email?.message) != null) && <Error message={errors.email.message} />}
      </div>

      <div>
        <Label>Message</Label>
        <Textarea {...register('message', validateMessage)} className="resize-none" placeholder='Aqui escribe tu duda o sugerencia :)' />
        {((errors.message?.message) != null) && <Error message={errors.message.message} />}
      </div>

        <Button className='font-bold'>
          Enviarme mensaje
        </Button>

    </form>
  )
}
