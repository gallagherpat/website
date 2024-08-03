"use client"
import React from "react";
import { usePathname } from "next/navigation"

export default function Hamburger() {
    let path = usePathname();

    function currentPage(href: string) {
        // console.log(path)
        if(href == path){
          return "underline underline-offset-8"
        }else{
          return "hover:underline underline-offset-8"
        }
      }
    return (
        <main className="absolute inset-x-0 top-4 flex flex-col justify-center text-center z-40 gap-6 bg-white mx-12 rounded-xl py-8 text-2xl">
        <a className={currentPage("/")} href="/">Home</a>
        <a className={currentPage("/party")} href="/party">Wedding Party</a>
        <a className={currentPage("/schedule")} href="/schedule">Schedule</a>
        <a className={currentPage("/gallery")} href="/gallery">Gallery</a>
        <a className={currentPage("/rsvp")} href="/rsvp">RSVP</a>
        <a className={currentPage("/qa")} href="/qa">Q&A</a>
        <a className={currentPage("/Registry")} href="https://www.amazon.com/wedding/registry/K6SNSHTMWE1V">Registry</a>
        </main>
    )
}