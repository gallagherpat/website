"use server"
import { cookies } from 'next/headers'
import { redirect, useRouter } from "next/navigation";
// import { NextResponse } from "next/server";

export async function formAction(oData: FormData) {
        const env = process.env.NODE_ENV;
        const formData = await oData;
        const oName = formData.get('name');
        const host = process.env.DB_HOST_DEV;
        let token;
        if(env == "production"){
                token = process.env.API_KEY_PRODUCTION;
            }else if(env == "development"){
                token = process.env.API_KEY;
            }
        console.log(oName);
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
    
        // const req = await fetch(`${host}/api/event-guests?filters[guestName][$eq]=${oName}`, {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // });
        const req = await fetch(`${host}/api/event-guests?filters[guestName][$eq]=${oName}&populate[0]=event_rsvp`, {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            });
        const res = await req.json();
        const data = await res.data;
    
        console.log(data);
        console.log(data[0].attributes.event_rsvp);

        if(data === undefined){
                return
        }

        // const req = await fetch('https://dummyjson.com/products/1')
        // const res = await req.json();
    
        cookies().set({
                name: 'guest',
                value: JSON.stringify(data),
                path: `/`
        })
        await redirect(`/rsvp/guest/${data[0].attributes.name}`);
}