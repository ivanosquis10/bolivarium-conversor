import "./globals.css"
import type { Metadata, Viewport } from "next"

import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "react-hot-toast"

import { Footer, Header, ThemeProvider } from "@/components"
import { config, umami } from "@/app/config"
import { onest } from "@/fonts"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.siteUrl),
  title: {
    default: config.meta.title,
    template: `%s | ${config.meta.title}`,
  },
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: "./",
    siteName: config.meta.title,
    images: [config.meta.socialBanner],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: config.meta.title,
    card: "summary_large_image",
    images: [config.meta.socialBanner],
  },
  creator: config.author.name,
  publisher: config.author.name,
  authors: [
    {
      name: "Ivan Rodríguez",
      url: config.author.website,
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${onest.className} relative min-h-screen overflow-x-hidden scroll-smooth`}>
        <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Analytics />
          <Footer />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
      <Script async data-website-id={umami.website_id} src={umami.src} />
    </html>
  )
}
