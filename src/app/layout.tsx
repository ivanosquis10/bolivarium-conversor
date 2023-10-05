import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

import { Header, ThemeProvider } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bolivarium | Inicio',
  description: 'El portal de las divisas donde podrás ver la información del dólar en Venezuela de una forma estructurada y precisa, además de poder usar el convertidor para hacer conversiones de bolívares a dólares y viceversa.'
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
          </ThemeProvider>
      </body>
    </html>
  )
}
