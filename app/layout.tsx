import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ToastProvider } from '../hooks/toast'

export const metadata: Metadata = {
  title: "Jonli Vebinar - Intizom va Самооценка ni Shakllantirish",
  description: "17-18 aprel, soat 20:00 da bo'lib o'tadigan jonli vebinar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        <meta name="facebook-domain-verification" content="dbgztq788y2s7dxz1vapn7bgjasl6p" />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
    
  )
}
