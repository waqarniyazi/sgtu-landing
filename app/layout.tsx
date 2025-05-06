import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { WhatsappButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sikkim Global Technical University (SGTU)",
    template: "%s | Sikkim Global Technical University (SGTU)",
  },
  description:
    "Sikkim Global Technical University (SGTU) - Empowering futures through quality education and innovation",
  keywords: ["university", "education", "sikkim", "technical university", "engineering", "courses", "higher education"],
  authors: [{ name: "SGTU" }],
  creator: "SGTU",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sgtu.edu.in",
    title: "Sikkim Global Technical University (SGTU)",
    description:
      "Sikkim Global Technical University (SGTU) - Empowering futures through quality education and innovation",
    siteName: "Sikkim Global Technical University (SGTU)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikkim Global Technical University (SGTU)",
    description:
      "Sikkim Global Technical University (SGTU) - Empowering futures through quality education and innovation",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <WhatsappButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
