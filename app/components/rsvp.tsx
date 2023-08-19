type Props = {
    state: Function
}
export default function RSVP(props: Props){
    const setModal = props.state;
    return(
        <main className="absolute inset-0 w-3/4 md:w-1/2 h-1/3 m-auto bg-slate-300 rounded-xl text-center">
            <div className="my-6">
                <div className="pb-4">RSVP</div>
                <form className="mx-6" action="">
                    <p>Please enter the first and last name of one member of your party below. If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group on the next page.</p>
                    <input className="h-8 w-3/4 my-2"  type="text" />
                    <p className="text-xs">Ex. Sarah Fortune (not The Fortune Family or Dr. & Mr. Fortune)</p>
                    <button className="w-32 md:w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" type="submit">Continue</button>
                    <button onClick={() => {setModal(false)}} className="w-32 md:w-48 h-12 bg-red-700 m-3 rounded hover:bg-red-900 text-white">Close</button>
                </form>
            </div>
        </main>
    )
}