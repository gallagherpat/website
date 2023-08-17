export default function ScheduleCard(){
    return(
        <main className="text-center">
            <h1>Sunday, September 29th, 2024</h1>
            <h2>Cermony</h2>
            <h5>5:00pm</h5>
            <h4>The House on Barber Mill</h4>
            <a href="https://www.google.com/maps/place/The+House+on+Barber+Mill/@35.5939602,-78.4881662,17z/data=!3m1!4b1!4m6!3m5!1s0x89ac65385f31882b:0xdf8edf96b2848b61!8m2!3d35.5939559!4d-78.4855913!16s%2Fg%2F11p65dqswt?entry=ttu">2239 Barber Mill Rd, Clayton, NC 27520</a>
            <p>This will be held on the outside of the house</p>
            <div>
                <button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">Map</button>
                <button className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900">Add to calendar</button>
            </div>
        </main>
    )
}