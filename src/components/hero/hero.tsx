import { Suspense } from "react"

import { HeroCard, Spotlight } from ".."

export function Hero() {
  return (
    <section className="relative mx-auto mt-5 max-w-6xl md:h-[78vh]">
      <div className="animate-fade-right px-2 text-center md:px-0">
        <h1
          className="text-center text-2xl font-extrabold uppercase md:text-4xl"
          id="title"
          role="heading"
        >
          Bienvenido a<span className="text-zinc-700 dark:text-zinc-300"> Bolivarium</span>
        </h1>
        <p className="text-center text-sm tracking-tight text-gray-400 md:text-base">
          El portal de las divisas donde podrás ver la información del dólar de una forma
          estructurada y precisa, además de poder usar el convertidor.
        </p>
      </div>

      <Spotlight
        className="relative mt-10 flex w-full animate-fade justify-center"
        title="hero-container"
      >
        <HeroCard />
      </Spotlight>
    </section>
  )
}
