"use client"
import ScheduleCard from "../components/scheduleCard"
import RSVP from "../components/rsvp"
import React from "react";
import { useState } from "react";

export default function Page() {
    const [modal, setModal] = useState(true);

    return(
        <main className="w-3/4 mx-auto mt-12 max-w-md">
            <div style={{display: modal ? "none": "block"}} className="fixed inset-0 bg-opacity-70 bg-black z-50 w-screen h-screen justify-center">
                <RSVP state={setModal}/>
            </div>
            <ScheduleCard id={0} state={setModal}/>
            <ScheduleCard id={1} state={setModal}/>
            <ScheduleCard id={2} lastCard={true} state={setModal}/>
        </main>
    )
}