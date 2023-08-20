import {formAction} from "./formAction.ts";

type Props = {
    state: Function
    card: string
}

export default function RSVP(props: Props){
    const setModal = props.state;
    const currentCard = props.card;
    return(
        <main className="absolute inset-0 max-w-xl max-h-fit w-3/4 md:w-1/2 m-auto bg-slate-300 rounded-xl text-center">
            <button onClick={() => {setModal(true)}} className="absolute top-0 right-0 mr-4 mt-2">X</button>
            <div className="my-6">
                <div className="pb-2 text-lg">{currentCard}</div>
            <form className="mx-6" action={formAction}>
                    <p>Please enter the first and last name of one member of your party below. If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group on the next page.</p>
                    <input className="h-8 w-5/6 my-4" type="text" name="name" />
                    <input readOnly type="text" className="hidden"  name="event" value={currentCard}/>
                    <p className="text-xs">Ex. Sarah Fortune (not The Fortune Family or Dr. & Mr. Fortune)</p>
                    <button onClick={() => {setModal(true)}} className="w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" type="submit">Continue</button>
                </form>
            </div>
        </main>
    )
}