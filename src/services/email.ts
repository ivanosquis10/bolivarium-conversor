import { send } from '@emailjs/browser'

const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string

type Props = {
  name: string
  email: string
  message: string
}

export const sendContactMessage = async ({ name, email, message }: Props) => {
  try {
    console.log(
      PUBLIC_KEY,
      TEMPLATE_ID,
      SERVICE_ID
    )

    const data = await send(SERVICE_ID, TEMPLATE_ID, {
      user_name: name,
      message,
      user_email: email
    }, PUBLIC_KEY)

    return data
  } catch (error) {
    console.log(error)
  }
}
