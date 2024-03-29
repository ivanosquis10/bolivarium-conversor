import { send } from "@emailjs/browser"

const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID!
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID!

type Props = {
  name: string
  email: string
  message: string
}

export const sendContactMessage = async ({ name, email, message }: Props) => {
  try {
    const data = await send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        user_name: name,
        message,
        user_email: email,
      },
      PUBLIC_KEY,
    )

    return data
  } catch (error) {
    console.log(error)
  }
}
