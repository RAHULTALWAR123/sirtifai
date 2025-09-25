import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
import "./globals.css"
import "./critical.css"
import { PerformanceMonitor } from "../components/PerformanceMonitor"

export const metadata: Metadata = {
  title: "Sirtifai - Professional Certification & Training Platform",
  description:
    "Transform your career with Sirtifai's comprehensive certification programs, professional training, and global career opportunities.",
  generator: "Next.js",
  keywords: "certification, training, professional development, career growth, skills development",
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Critical resource preloading for LCP optimization */}
        <link rel="preload" as="image" href="/assets/home/girl-book-home-img.png" />
        <link rel="preload" as="image" href="/assets/home/girl.png" />
        <link rel="preload" as="image" href="/assets/star.png" />
        <link rel="preload" as="font" href="/fonts/geist-sans.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={GeistSans.className}>
        {children}
        <PerformanceMonitor />
      </body>
    </html>
  )
}
