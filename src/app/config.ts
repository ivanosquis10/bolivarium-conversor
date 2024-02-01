export const config = {
  author: {
    name: "Iván Rodríguez",
    job: "FrontEnd Developer",
    email: "ivanosquis10.12@gmail.com",
    github: "https://github.com/ivanosquis10",
    xtwitter: "https://twitter.com/ivanosquis13",
    linkedin: "https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/",
    website: "https://portfolio-ivanosquis-iv.vercel.app/",
  },
  meta: {
    title: "Bolivarium - Conversor de Bolívares a Dólares",
    description:
      "Descubre Bolivarium, el portal de las divisas que te ofrece información detallada sobre el dólar en Venezuela. Convierte bolívares a dólares y viceversa de manera fácil y precisa. ¡Optimiza tus transacciones con nuestro amigable conversor!",
    siteUrl: "https://bolivarium-conversor.vercel.app/",
    socialBanner: "/icon-512x512.png",
    locale: "en-US",
  },
}

export const umami = {
  src: "https://umami-bolivarium.vercel.app/script.js",
  website_id: process.env.NEXT_PUBLIC_DATA_ID ?? "",
}
