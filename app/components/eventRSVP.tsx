"use client"
import React from "react"
import { useState } from "react"
import EventRSVPButton from "./eventRSVPButton"
import RSVPConfirmationButton from "./rsvpConfirmation"

//@ts-ignore
export default function EventRSVP(props){
    console.log("WORK DAMMITs")
    console.log("Guest email " + props.email)
    const [eventsRSVP, setEventsRSVP] = useState({});
    //@ts-ignore
    const handleChange = (event, isComing) => {
        let updatedValue = {};
        //@ts-ignore
        updatedValue[event] = isComing
        setEventsRSVP(eventsRSVP => ({
            ...eventsRSVP,
            ...updatedValue
        }));
    }

    return (
    <main className="text-center">
        <div className="mt-8 pb-4 border-b-2 border-black border-opacity-30">
            Ceremony
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"ceremony"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange} currentState={eventsRSVP}/>
            <EventRSVPButton event={"ceremony"} setButton={"No thanks!"} state={handleChange} currentState={eventsRSVP}/>
        </div>
        <div className="mt-8 pb-4 border-b-2 border-black border-opacity-30">
            Reception
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"reception"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange} currentState={eventsRSVP}/>
            <EventRSVPButton event={"reception"} setButton={"No thanks!"} state={handleChange} currentState={eventsRSVP}/>
        </div>
        <div className="mt-8 pb-4 border-b-2 border-black border-opacity-30">
            Cocktail Hour
            <div>3:00pm</div>
            <br />
                <EventRSVPButton event={"cocktail"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange} currentState={eventsRSVP}/>
                <EventRSVPButton event={"cocktail"} setButton={"No thanks!"} state={handleChange} currentState={eventsRSVP}/>
        </div>
        <div>
            <br />
            <RSVPConfirmationButton eventsRSVP={eventsRSVP} email={props.email}/>
        </div>
    </main>
    )
}