import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Lato } from "next/font/google"
import NavBar from "./components/navBar"

const lato = Lato({ 
  weight: "400",
  display: "swap",
  subsets: ["latin"]
});

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M'Kenna and Patrick's Wedding",
  description: "This is the hub of all things Kenna and Patrick, we are so excited to start this new chapter in our lives and are happy to celebrate it with you!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{

  return (

    <html lang="en">
    <head>
    <link rel="icon" href="/images/favicon.ico" sizes="any"/>
      <script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>
    </head>
      <body className={lato.className + " min-h-screen scroll-smooth"}>
      <h1 className="z-30 w-full tracking-wider text-2xl bg-white sm:bg-opacity-60 mx-auto text-center pt-6 pb-4 hidden sm:block sm:pb-0 drop-shadow-md">M'KENNA & PATRICK</h1>
      <NavBar/>
        {children}
        <footer className='my-8 w-1/2 text-center mx-auto'>-Made by ya boy-</footer>
        </body>
    </html>
  )
}
