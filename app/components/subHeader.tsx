"use client"
import { usePathname } from "next/navigation"

export default function SubHeader(){
    const path = usePathname().slice(1, 48);
    return(
        <main className="text-center pb-4 capitalize text-3xl border-b-2 border-black border-opacity-30 w-3/4 mx-auto">
            {path}
        </main>
    )
}