import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Suspense } from "react"
import Loading from "@/components/loading"
import info from "@/lib/info"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: info.name,
  description: info.title,
  icons: {
    icon: [
      { url: '/initials.svg', sizes: 'any', type: 'image/x-icon' },
      { url: '/initials.svg', sizes: '16x16', type: 'image/png' },
      { url: '/initials.svg', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/initials.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} {info.initials}. All rights reserved.
            </footer>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}