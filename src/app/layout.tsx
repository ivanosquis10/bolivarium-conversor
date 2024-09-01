import "./globals.css"
import type { Metadata, Viewport } from "next"

import { GeistMono } from "geist/font/mono"
import { Toaster } from "react-hot-toast"

import { Footer, Header, ThemeProvider } from "@/components"
import { config } from "@/app/config"

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
    <html lang="es">
      <body
        className={`${GeistMono.className} relative min-h-[100svh] overflow-x-hidden scroll-smooth`}
      >
        <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
