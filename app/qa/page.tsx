//@ts-nocheck
"use client"
import React from "react";
import SubHeader from "../components/subHeader";
import QACard from "../components/qaCard";

const data = [{
    "question": "Are kids udner 21 invited?",
    "answer" : " No, unfortunatley the Venue's space is very limited as well we will be providing alcohol to everyone"
}, {
    "question": "Can I take pictures during the ceremony",
    "answer" : "We willbe having an unplugged ceremony. So please keep your phone in your pants, or purse. We have a photographer taking pictures of us!"
}, {
    "question" : "Dress code?",
    "answer" : "Semi formal"
}, {
    "question" : "The bar situation?",
    "answer" : "Open bar, go crazy! But not too crazy we don't want any embarassing stories, just happy ones!"
}, {
    "question" : "Indoors or Outdoors?",
    "answer" : "The ceremony will be outdoors and we will have a dance and dining tables outside for the reception. The cocktail hour will be half in and half out"
}, {
    "question" : "Wedding Registry",
    "answer" : "Kenna has set one up through amazon!"
}]

export default function Page() {
    return(
        <main className="w-3/4 mx-auto mt-6 sm:mt-12 max-w-md">
            <div className="block sm:hidden">
                <SubHeader/>
            </div>
            {data.map((qaData, index) => (
                <QACard key={index} data={qaData} index={index}/>
            ))}
        </main>
    )
}

