import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creacy Photography Studio",
  description: "Professional photography services capturing life's most precious moments",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Scroll to top on page load
            if (history.scrollRestoration) {
              history.scrollRestoration = 'manual';
            }
            window.scrollTo(0, 0);
          `,
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'