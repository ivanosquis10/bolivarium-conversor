import { ContactForm } from "../../components/contact-form/contact-form"

export default function PageContact() {
  return (
    <section className="mx-auto my-5 grid max-w-7xl px-4 md:px-2 lg:h-[75vh] lg:px-0">
      <header className="animate-fade-right px-2 text-center md:px-0">
        <h2 className="text-center text-2xl font-extrabold uppercase md:text-4xl">
          Contacta con
          <span className="text-zinc-700 dark:text-zinc-300"> Bolivarium</span>
        </h2>
        <p className="text-center text-sm tracking-tight text-gray-400 md:text-base">
          Comparte con nosotros algunas dudas, sugerencias o ideas que tengas para nuestra app,
          estaremos encantados de leerlos!
        </p>
      </header>
      <div className="animate-fade lg:mx-auto lg:w-6/12">
        <ContactForm />
      </div>
    </section>
  )
}
