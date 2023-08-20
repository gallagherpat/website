"use client"
import React from "react"
import { useState } from "react"
import Nav from "./nav";
import Hamburger from "./hamburger";

export default function NavBar() {
    const [nav, setNav] = useState(false);

    return (
        <main className="sticky top-0">
        <nav className="w-full mx-auto z-60 sm:bg-white sm:bg-opacity-60 sm:backdrop-blur-lg sm:pb-4">
            <header className="flex w-full bg-white px-4 sm:hidden">
              <h1 className="grow tracking-wider text-2xl pt-6 pb-4   drop-shadow-md">M'KENNA & PATRICK</h1>
              <button onClick={() => {setNav(!nav)}}>
                <img height="32" width="32" src="/Hamburger_icon.png" alt="" />
              </button>
            </header>
          <br className="hidden sm:block" />
           <div className="hidden sm:block">
            <Nav/>
            </div>
           <div style={{display: nav ? "block": "none"}} className="relative sm:hidden drop-shadow-md">
            <Hamburger />
            </div>
          </nav>
        </main>
    )
}