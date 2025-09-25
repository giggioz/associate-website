import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://associate.it'),
  title: 'Associate - La piattaforma completa per la tua associazione',
  description: 'Gestisci la tua associazione sportiva o culturale con Associate. Multiruolo, in cloud, customizzabile. Gestione membri, corsi, prenotazioni, comunicazione e molto altro.',
  keywords: 'associazione, sportiva, culturale, gestione, piattaforma, cloud, corsi, prenotazioni, membri',
  authors: [{ name: 'Associate Team' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Associate - La piattaforma completa per la tua associazione',
    description: 'Gestisci la tua associazione sportiva o culturale con Associate. Multiruolo, in cloud, customizzabile.',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Associate - La piattaforma completa per la tua associazione',
    description: 'Gestisci la tua associazione sportiva o culturale con Associate.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
