"use client"
import React from "react"
import { useState } from "react"
import Nav from "./nav";
import Hamburger from "./hamburger";

export default function NavBar() {
    const [nav, setNav] = useState(false);

    return (
        <main>
        {/* <h1 className="w-full tracking-wider text-2xl bg-white sm:bg-opacity-60 mx-auto text-center pt-6 pb-4 sm:pb-0 drop-shadow-md">M'KENNA & PATRICK</h1> */}
        <nav className="sticky top-0 w-full mx-auto z-60 sm:bg-white sm:bg-opacity-60 sm:backdrop-blur-lg sm:pb-4">
            <header className="flex w-full bg-white px-4">
              <h1 className="grow tracking-wider text-2xl pt-6 pb-4   drop-shadow-md">M'KENNA & PATRICK</h1>
              <button onClick={() => {setNav(!nav)}}>HAM</button>
            </header>
          <br className="hidden sm:block" />
           <div className="hidden sm:flex">
            <Nav/>
            </div>
           <div style={{display: nav ? "block": "none"}} className="relative sm:hidden drop-shadow-md mt-4">
            <Hamburger />
            </div>
          </nav>
        </main>
    )
}