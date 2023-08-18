"use client"
import { usePathname } from "next/navigation";

//@ts-ignore
export default function ScheduleCard(props){
    let path = usePathname();
    let border: string;
    if(props.lastCard){
        border = "text-center mt-8 pb-4"
    }else{
        border = "text-center mt-8 pb-4 border-b-2 border-black border-opacity-30"
    }
    if(path == "/schedule"){
        return(
            <main className={border}>
                <h2 className="text-2xl mb-6">Ceremony</h2>
                <h1 className="text-xl mb-2">Sunday, September 29th, 2024</h1>
                <h5 className="mb-6">5:00pm</h5>
                <h4>The House on Barber Mill,</h4>
                <a className="hover:underline" target="_blank" href="https://www.google.com/maps/place/The+House+on+Barber+Mill/@35.5939602,-78.4881662,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac65385f31882b:0xdf8edf96b2848b61!8m2!3d35.5939559!4d-78.4855913!16s%2Fg%2F11p65dqswt?entry=ttu">2239 Barber Mill Rd, Clayton, NC 27520</a>
                <p className="my-4">This will be held on the outside of the house</p>
                <div className="text-white">
                    <a href="https://www.google.com/maps/place/The+House+on+Barber+Mill/@35.5939602,-78.4881662,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac65385f31882b:0xdf8edf96b2848b61!8m2!3d35.5939559!4d-78.4855913!16s%2Fg%2F11p65dqswt?entry=ttu"><button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">Map</button></a>
                    <button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">Add to calendar</button>
                </div>
            </main>
        )
    }else if(path == "/rsvp"){
        return(
            <main className={border}>
                <h2 className="text-2xl mb-6">Ceremony</h2>
                <h1 className="text-xl mb-2">Sunday, September 29th, 2024</h1>
                <h5 className="mb-6">5:00pm</h5>
                <h4>The House on Barber Mill,</h4>
                <a className="hover:underline" target="_blank" href="https://www.google.com/maps/place/The+House+on+Barber+Mill/@35.5939602,-78.4881662,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac65385f31882b:0xdf8edf96b2848b61!8m2!3d35.5939559!4d-78.4855913!16s%2Fg%2F11p65dqswt?entry=ttu">2239 Barber Mill Rd, Clayton, NC 27520</a>
                <p className="my-4">This will be held on the outside of the house</p>
                <div className="text-white">
                    <button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">RSVP</button>
                </div>
            </main>
        )
    }

}