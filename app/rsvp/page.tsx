"use client"
import ScheduleCard from "../components/scheduleCard"
import RSVP from "../components/rsvp"
import React from "react";
import { useState } from "react";
import SubHeader from "../components/subHeader";

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

export default function Page() {
    const [modal, setModal] = useState(true);
    const [currentCard, setCurrentCard] = useState('');

    const users = async function getUsers() {
        const req = await fetch('/api/getUsers');
        const res = await req.json();
        const data = await res;

        // console.log(data);

        return users
    }

    return(
        <main className="w-3/4 mx-auto mt-6 sm:mt-12 max-w-md">
            <div className="block sm:hidden">
                <SubHeader/>
            </div>
            <button onClick={users} className="w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white">Click me</button>
            <div style={{display: modal ? "none": "block"}} className="fixed inset-0 bg-opacity-70 bg-black z-50 w-screen h-screen justify-center">
                <RSVP card={currentCard} state={setModal}/>
            </div>
            <ScheduleCard data={object.data[0]} state={setModal} card={setCurrentCard}/>
            <ScheduleCard data={object.data[1]} state={setModal} card={setCurrentCard}/>
            <ScheduleCard data={object.data[2]} lastCard={true} state={setModal} card={setCurrentCard}/>
        </main>
    )
}