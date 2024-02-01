/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"

import Home from "@/app/page"

describe("Home", () => {
  beforeEach(() => {
    render(<Home />)
  })

  it("Renderiza correctamente el contenido del título", () => {
    const title = screen.getByRole("heading", { level: 1 })

    // nos aseguramos que tenga la clase
    expect(title).toHaveClass("text-2xl font-extrabold text-center uppercase md:text-4xl")
  })

  it("Renderiza correctamente el párrafo", () => {
    const parrafo = screen.getByText(
      "El portal de las divisas donde podrás ver la información del dólar de una forma estructurada y precisa, además de poder usar el convertidor.",
    )

    // nos aseguramos que tenga la clase
    expect(parrafo).toHaveClass("text-sm tracking-tight text-center text-gray-400 md:text-base")
  })

  it("Renderiza correctamente el componente HeroCard dentro de la sección principal", () => {
    const sectionCotainer = screen.getByTitle("hero-container")
    const heroCard = screen.getByTestId("hero-card")

    expect(sectionCotainer).toBeInTheDocument()
    expect(sectionCotainer).toContainElement(heroCard)
  })
})
