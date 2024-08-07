//@ts-nocheck
"use client"
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { UrlObject } from "url";

//@ts-ignore
export default function ScheduleCard(props){
    let path = usePathname();
    let border: string;
    const data = props.data;
    //@ts-ignore
    let linkToMap: UrlObject = "https://www.google.com/maps/place/The+House+on+Barber+Mill/@35.5939602,-78.4881662,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac65385f31882b:0xdf8edf96b2848b61!8m2!3d35.5939559!4d-78.4855913!16s%2Fg%2F11p65dqswt?entry=ttu"
    let linkToEvent: UrlObject = "https://www.addevent.com/event/Na18390368"
    if (props.isWelcome) {
        linkToMap = "https://maps.app.goo.gl/7PenG6oDkTidmAL9A",
        linkToEvent = "https://www.addevent.com/event/ym22512252"
    }
    const object = {
        "data": [
            {
                "event": "Ceremony",
                "date": "Sunday, September 29th, 2024",
                "time": "3:00pm",
                "name": "The House on Barber Mill",
                "location": "2239 Barber Mill Rd, Clayton, NC 27520",
                "description": "This will be held on the outside of the house"
            },
            {
                "event": "Reception",
                "date": "Sunday, September 29th, 2024",
                "time": "4:30pm",
                "name": "The House on Barber Mill",
                "location": "2239 Barber Mill Rd, Clayton, NC 27520",
                "description": "A delicous whole roasted pig"
            },            
            {
                "event": "Cocktail Hour",
                "date": "Sunday, September 29th, 2024",
                "time": "5:30pm",
                "name": "The House on Barber Mill",
                "location": "2239 Barber Mill Rd, Clayton, NC 27520",
                "description": "Drinks and good times sure to come"
            }
        ]
    }
    if(props.lastCard){
        border = "text-center mt-8 pb-4"
    }else{
        border = "text-center mt-8 pb-4 border-b-2 border-black border-opacity-30"
    }
    if(path == "/schedule"){
        return(
            <main className={border}>
                <script defer type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"></script>

                <link rel="stylesheet" href="https://cdn.addevent.com/libs/atc/themes/fff-theme-2/theme.css" type="text/css" media="all" />
                <h2 className="text-2xl mb-6">{data.event}</h2>
                <h1 className="text-xl mb-2">{data.date}</h1>
                <h5 className="mb-6">{data.time}</h5>
                <h4>{data.name}</h4>
                <a className="hover:underline" target="_blank" href={linkToMap}>{data.location}</a>
                <p className="my-4">{data.description}</p>
                <div className="text-white">
                    <Link target="_blank" rel="noreferrer" href={linkToMap}><button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">Map</button></Link>
                    <Link target="_blank" rel="noreferrer" href={linkToEvent}><button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">Add to Calendar</button></Link>

                    
        </div>
            </main>
        )
    }else if(path == "/rsvp"){
        const setModal = props.state;
        const setCurrentCard = props.card;
        return(
            <main className={border}>
                <h2 className="text-2xl mb-6">{data.event}</h2>
                <h1 className="text-xl mb-2">{data.date}</h1>
                <h5 className="mb-6">{data.time}</h5>
                <h4>{data.name}</h4>
                <a className="hover:underline" target="_blank" href={linkToMap}>{data.location}</a>
                <p className="my-4">{data.description}</p>
                <div className="text-white">
                <Link target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSe8HqtvR5iqQrhnLVshpve3HX2vdAxs8lF-x6zNxYE2ypeNRg/viewform?vc=0&c=0&w=1&flr=0"><button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">RSVP</button></Link>
                    {/* <button disabled={true} className="w-48 h-12 bg-zinc-400 m-3 rounded hover:bg-zinc-400">RSVP</button> */}
                </div>  
                {/* <div className="text-white">
                    <button disabled={false} onClick={() => {setModal(false); setCurrentCard(data.event)}} className="w-48 h-12 bg-zinc-800 m-3 rounded hover:bg-zinc-400">RSVP</button>
                </div>             */}
            </main>
        )
    }
}