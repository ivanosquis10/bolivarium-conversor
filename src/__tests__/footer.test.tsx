/**
 * @jest-environment jsdom
*/
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components'

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('Renderiza correctamente el componente Header', () => {
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })

  it('Renderiza correctamente la fecha para el copyrigth', () => {
    const currentYear = new Date().getFullYear()
    const copyrightText = screen.getByText(`©${new Date().getFullYear()}`)

    // nos aseguramos que sea el año actual
    expect(copyrightText).toHaveTextContent(`©${currentYear}`)
    expect(copyrightText).toBeInTheDocument()
  })

  it('Contiene el link al perfil de twitter', () => {
    const twitterLink = screen.getByRole('link', { name: /Iván😻/i })
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/ivanosquis13')
  })

  it('Contiene el link al formulario de contacto', () => {
    const contactButton = screen.getByRole('link', { name: 'Contacto' })
    expect(contactButton).toHaveAttribute('href', '/contact')
  })

  // it('Redirige al formulario de contacto al hacer click', () => {
  //

  //   const contactButton = screen.getByRole('link', { name: 'Contacto' })

  //   fireEvent.click(contactButton)

  //   // expect(pushMock).toHaveBeenCalledWith('/contact')
  // })

  it('Renderiza el boton del FAQ', () => {
    const faqButton = screen.getByRole('button', { name: 'Preguntas' })
    expect(faqButton).toBeInTheDocument()
  })
})
