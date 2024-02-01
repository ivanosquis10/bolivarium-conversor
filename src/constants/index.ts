import type { FAQuestions } from "@/interfaces"

export const QUESTIONS: FAQuestions[] = [
  {
    id: 1,
    question: "Entrar a la app y recargar",
    answer:
      "A veces sucede que la información de las monedas no esta actualizada del todo, esto aplica más que todo si ya has entrado anteriormente a la aplicación, por eso te recomiendo que por seguridad actualizar la página al entrar.",
  },
  {
    id: 2,
    question: "Hay límite en la cantidad que se puede convertir?",
    answer: "No, la aplicación no tiene ningún limite ni nada por el estilo.",
  },
  {
    id: 3,
    question: "Ofrece conversiones de otras monedas?",
    answer: "No, por ahora solo hace bolívares y dólares.",
  },
  {
    id: 4,
    question: "La app muestra las tasas de cambio en tiempo real?",
    answer:
      "Dado que los cambios son después de la 1PM, es cuando se realizan los cambios. Pero en general, están actualizadas lo más posible.",
  },
]

export const favoritesRates = ["EnParaleloVzla", "BCV", "Dólar Today"]
