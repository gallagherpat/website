"use client"
import React from "react"
import { useState } from "react"
import EventRSVPButton from "./eventRSVPButton"
import { render } from "@react-email/components"
import StripeWelcomeEmail from "../react-email-starter/emails/stripe-welcome"
import Confirmation from "../react-email-starter/emails/confirmation"

//@ts-ignore
export default function EventRSVP(props){
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
        console.log(eventsRSVP);
    }

    async function updateRSVP() {
        console.log(JSON.stringify(eventsRSVP))
        console.log("Event ID" + JSON.stringify(props.eventID));
        const req = await fetch('/api/updateRSVP', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                data: {
                id: props.eventID,
                eventsRSVP
            }}),
        });
        const res = await req.json();
        const data = await res;

        console.log(data);

    }

    async function sendEmail() {
        const req = await fetch(`/api/send-email`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                data: {
                    email: "gallagherpatrick21@gmail.com",
                    html: render(<Confirmation/>)
                }
            })
        })
        const res = await req.json()
        const data = await res
        console.log(data);
    }

    return (
    <main>
        <div>
            Ceremony
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"ceremony"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange}/>
            <EventRSVPButton event={"ceremony"} setButton={"No thanks!"} state={handleChange}/>
            <pre>{JSON.stringify(eventsRSVP, null, 2)}</pre>
        </div>
        <div>
            Reception
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"reception"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange}/>
            <EventRSVPButton event={"reception"} setButton={"No thanks!"} state={handleChange}/>
            <pre>{JSON.stringify(eventsRSVP, null, 2)}</pre>
        </div>
        <div>
            Cocktail Hour
            <div>3:00pm</div>
            <br />
            <EventRSVPButton event={"cocktail"} setButton={props.hasPlusOne ? "We're Going!": "I'm Going!"} state={handleChange}/>
            <EventRSVPButton event={"cocktail"} setButton={"No thanks!"} state={handleChange}/>
            <pre>{JSON.stringify(eventsRSVP, null, 2)}</pre>
        </div>
        <button className="w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" onClick={updateRSVP}>CLICK</button>
        <br />
        <button className="w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" onClick={sendEmail}>Send email</button>
    </main>
    )
}