import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'

import { Footer, Header, ThemeProvider } from '@/components'
import { config } from '@/app/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(config.meta.siteUrl),
  title: {
    default: config.meta.title,
    template: `%s | ${config.meta.title}`
  },
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: './',
    siteName: config.meta.title,
    images: [config.meta.socialBanner],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    title: config.meta.title,
    card: 'summary_large_image',
    images: [config.meta.socialBanner]
  },
  creator: config.author.name,
  publisher: config.author.name,
  authors: [
    {
      name: 'Ivan Rodríguez',
      url: config.author.website
    }
  ],
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden relative scroll-smooth min-h-screen`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
              {children}
            <Footer />
            <Toaster position='top-right' />
          </ThemeProvider>
          <Analytics />
      </body>
    </html>
  )
}
