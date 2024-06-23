"use client"
import React from "react"
import { useState } from "react"
import EventRSVPButton from "./eventRSVPButton"
// import { render } from "@react-email/components"
// import Confirmation from "../react-email-starter/emails/confirmation"
import RSVPConfirmationButton from "./rsvpConfirmation"


//@ts-ignore
export default function EventRSVP(props){
    console.log("WORK DAMMITs")
    console.log("Guest email " + props.email)
    const [eventsRSVP, setEventsRSVP] = useState({});
    console.log("Props guest name " + props.guestName);
    const guestName = props.guestName;
    const plusOneName = props.plusOneName;
    // console.log(guestEmail)
    //@ts-ignore
    const handleChange = (event, isComing) => {
        let updatedValue = {};
        //@ts-ignore
        updatedValue[event] = isComing
        setEventsRSVP(eventsRSVP => ({
            ...eventsRSVP,
            ...updatedValue,
            guest: guestName,
            plusOne: plusOneName
        }));
        // console.log(eventsRSVP);
    }

    return (
    <main className="text-center">
        <div className="mt-8 pb-4 border-b-2 border-black border-opacity-30">
            Ceremony
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"ceremony"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange} currentState={eventsRSVP}/>
            <EventRSVPButton event={"ceremony"} setButton={"No thanks!"} state={handleChange} currentState={eventsRSVP}/>
            {/* <pre>{JSON.stringify(eventsRSVP, null, 2)}</pre> */}
        </div>
        <div className="mt-8 pb-4 border-b-2 border-black border-opacity-30">
            Reception
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"reception"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange} currentState={eventsRSVP}/>
            <EventRSVPButton event={"reception"} setButton={"No thanks!"} state={handleChange} currentState={eventsRSVP}/>
            {/* <pre>{JSON.stringify(eventsRSVP, null, 2)}</pre> */}
        </div>
        <div className="mt-8 pb-4 border-b-2 border-black border-opacity-30">
            Cocktail Hour
            <div>3:00pm</div>
            <br />
                <EventRSVPButton event={"cocktail"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange} currentState={eventsRSVP}/>
                <EventRSVPButton event={"cocktail"} setButton={"No thanks!"} state={handleChange} currentState={eventsRSVP}/>
            {/* <pre>{JSON.stringify(eventsRSVP, null, 2)}</pre> */}
        </div>
        <div>
            {/* <button style={{cursor: Object.keys(eventsRSVP).length  < 3  && !props.email ? "not-allowed" : ""}} className="w-48 h-12 mt-10 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" onClick={rsvpHandler}>Confirm RSVP</button> */}
            <br />
            <RSVPConfirmationButton eventsRSVP={eventsRSVP} email={props.email}/>

            {/* <button className="w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" onClick={sendEmail}>Send email</button> */}
        </div>
        {/* <RSVPConfirmationButton eventsRSVP={eventsRSVP} rsvpHandler={rsvpHandler}/> */}
    </main>
    )
}




    // async function updateRSVP() {
    //     console.log(JSON.stringify(eventsRSVP))
    //     console.log("Event ID" + JSON.stringify(props.eventID));
    //     const req = await fetch('/api/updateRSVP', {
    //         method: "PUT",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             data: {
    //             id: props.eventID,
    //             eventsRSVP
    //         }}),
    //     });
    //     const res = await req.json();
    //     const data = await res;

    //     console.log(data);
    //     return true
    // }

    // async function rsvpHandler() {
    //     if(await updateRSVP()){
    //         sendEmail()        
    //     }
    // }
    
    // async function sendEmail() {
    //     const req = await fetch(`/api/send-email`, {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify({
    //             data: {
    //                 email: "guestEmail",
    //                 html: render(<Confirmation/>)
    //             }
    //         })
    //     })
    //     const res = await req.json()
    //     const data = await res
    //     console.log(data);
    // }