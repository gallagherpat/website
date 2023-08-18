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
})
{
  // function currentPage(href: string) {
  //   let path = usePathname();
  //   if(href == path){
  //     return "underline underline-offset-8"
  //   }else{
  //     return "hover:underline underline-offset-8"
  //   }
  // }
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className="w-1/2 mx-auto text-center mt-6">MKENNA & PATRICK</h1>
        <nav className="sticky top-0 w-full mx-auto z-50 bg-inherit pb-4">
          <br />
          <div className="flex justify-evenly w-3/4 md:w-1/2 mx-auto">
            <a className="hover:underline underline-offset-8" href="/">Home</a>
            |
            <a className="hover:underline underline-offset-8" href="/party">Wedding Party</a>
            |
            <a className="hover:underline underline-offset-8" href="/schedule">Schedule</a>
            |
            <a className="hover:underline underline-offset-8" href="/gallery">Gallery</a>
            |
            <a className="hover:underline underline-offset-8" href="/rsvp">RSVP</a>
          </div>
          </nav>
        {children}
        </body>
    </html>
  )
}
