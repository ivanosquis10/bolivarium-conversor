/**
 * @jest-environment jsdom
*/
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from '@/components/contact-form/contact-form'
import PageContact from '@/app/contact/page'

describe('Page Contact Form', () => {
  it('Verifica que se renderice correctamente los elementos en la pagina de contacto', () => {
    render(<PageContact />)

    const headerTag = screen.getByRole('banner')
    const title = screen.getByRole('heading', { level: 2, name: 'Contacta con Bolivarium' })
    const subtitle = screen.getByText(/Comparte con nosotros algunas dudas/i)
    // const form = screen.getByRole('form')

    expect(headerTag).toBeInTheDocument()
    expect(headerTag).toHaveClass('px-2 text-center md:px-0 animate-fade-right')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    // expect(form).toBeInTheDocument()
  })

  it('Verifica que el componente ContactForm se renderice', () => {
    render(<PageContact />)

    // Verifica que el componente ContactForm esté presente
    expect(screen.getByRole('form')).toBeInTheDocument()

    // Puedes agregar más pruebas específicas para el formulario si es necesario
  })
})

describe('Contact Form Component', () => {
  beforeEach(() => {
    render(<ContactForm />)
  })

  // Esta funcion se encarga de verificar que se renderice el label y el input correspondiente
  // Ademas, tambien cumple con la labor de simular un cambio en el input para asi verificar si se actualiza el valor
  function verifyInputValues(label: string, placeholder: string, inputValue?: string) {
    const field = { name: screen.getByLabelText(label), input: screen.getByPlaceholderText(placeholder) } // Obtenemos el label y el input correspondiente

    expect(field.name).toBeInTheDocument()

    if (inputValue !== undefined) { // Si el valor del input es distinto de undefined
      fireEvent.change(field.input, { target: { value: inputValue } }) // Simulamos el cambio en el input
      expect(field.input).toHaveValue(inputValue) // Verificamos que el input tenga el valor correcto
    }

    return field // Retornamos el label y el input
  }

  it.each([
    ['NAME', 'label_name', 'Lionel Messi...'],
    ['EMAIL', 'label_email', 'lionelGOAT@company.bcn'],
    ['MESSAGE', 'label_message', 'Aqui escribe tu duda o sugerencia :)']
  ])('Verifica que se renderice label e input %s', (_, label, placeholder) => {
    verifyInputValues(label, placeholder)
  })

  it('Verifica que se renderice el boton de SUBMIT', () => {
    const submitButton = screen.getByRole('button', { name: 'Enviar mensaje' })
    expect(submitButton).toBeInTheDocument()
  })

  it('Verifica que se renderice el boton para ir a la pagina del CONVERSOR', () => {
    const conversorButton = screen.getByRole('link', { name: 'Ir al Conversor' })
    expect(conversorButton).toBeInTheDocument()
    expect(conversorButton).toHaveAttribute('href', '/conversor')
  })

  it.each([
    ['NAME', 'label_name', 'Lionel Messi...', 'Lionel Messi'],
    ['EMAIL', 'label_email', 'lionelGOAT@company.bcn', 'correo@company.com'],
    ['MESSAGE', 'label_message', 'Aqui escribe tu duda o sugerencia :)', 'Me gusta mucho tu aplicacion, la verdad es la mejor que es visto uwu']
  ])('Verifica si permite al usuario escribir en el input %s', (_, label, placeholder, inputValues) => {
    verifyInputValues(label, placeholder, inputValues)
  })

  /*
  it('Verifica que se renderice label e input de NAME', () => {
    verifyFieldRender('label_name', 'Lionel Messi...')
  })

  it('Verifica que se renderice label e input de EMAIL', () => {
    verifyFieldRender('label_email', 'lionelGOAT@company.bcn')
  })

  it('Verifica que se renderice label e input de MESSAGE', () => {
    verifyFieldRender('label_message', 'Aqui escribe tu duda o sugerencia :)')
  })

  it('Verificar si permite al usuario escribir en el input de NAME', () => {
  })

  it('Verificar si permite al usuario escribir en el input de EMAIL', () => {
    const emailInput = screen.getByPlaceholderText('lionelGOAT@company.bcn')

    fireEvent.change(emailInput, { target: { value: 'correo@company.com' } })
    expect(emailInput).toHaveValue('correo@company.com')
  })

  it('Verificar si permite al usuario escribir en el input de MESSAGE', () => {
    const messageInput = screen.getByPlaceholderText('Aqui escribe tu duda o sugerencia :)')

    fireEvent.change(messageInput, { target: { value: 'Me gusta mucho tu aplicacion, la verdad es la mejor que es visto uwu' } })
    expect(messageInput).toHaveValue('Me gusta mucho tu aplicacion, la verdad es la mejor que es visto uwu')
  })

  */
})

describe('Contact Form Component - Errors Validation', () => {
  beforeEach(() => {
    render(<ContactForm />)
  })

  it('Verifica que se muestren mensajes de error al enviar el formulario con campos vacíos', async () => {
    const submitButton = screen.getByRole('button', { name: 'Enviar mensaje' })

    fireEvent.click(submitButton)

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(await screen.findByText('Email is required')).toBeInTheDocument()
    expect(await screen.findByText('Message is required')).toBeInTheDocument()
  })

  it('Verifica que los mensajes de error desaparezcan después de corregir los campos', async () => {
    const submitButton = screen.getByRole('button', { name: 'Enviar mensaje' })

    // Hacer clic en el botón y esperar la aparición del mensaje de error
    fireEvent.click(submitButton)
    const nameError = await screen.findByText('Name is required')
    expect(nameError).toBeInTheDocument()

    // Corregir el campo del nombre
    const nameInput = screen.getByPlaceholderText('Lionel Messi...')
    expect(nameInput).toBeInTheDocument()
    fireEvent.change(nameInput, { target: { value: 'Lionel Messi GOAT' } })

    // verificamos que haya cambiado el valor
    expect(nameInput).toHaveValue('Lionel Messi GOAT')

    await waitFor(() => {
      expect(nameError).not.toBeInTheDocument()
    })
  })
})
