import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-1/2 mx-auto pt-6">
          <h1 className="w-1/2 mx-auto text-center mb-2">M'KENNA & PATRICK</h1>
          <br />
          <div className="flex justify-evenly">
            <a className="hover:underline underline-offset-8" href="/">Home</a>
            <a className="hover:underline underline-offset-8" href="/">Wedding Party</a>
            <a className="hover:underline underline-offset-8" href="/">Schedule</a>
            <a className="hover:underline underline-offset-8" href="/">Gallery</a>
            <a className="hover:underline underline-offset-8" href="/">RSVP</a>
          </div>
          </nav>
        {children}
        </body>
    </html>
  )
}
