"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function UpdateUser(oData: FormData) {
    const env = process.env.NODE_ENV;
    const formData = await oData;

    console.log(formData)

    const host = process.env.DB_HOST_DEV;
    let token;
    if(env == "production"){
        token = process.env.API_KEY_PRODUCTION;
    }else if(env == "development"){
        token = process.env.API_KEY;
    }
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    const req = await fetch(`${host}/api/event-guests/${formData.get('userID')?.toString()}`, { 
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify({
        data: {
            guestName: null,
            plusOneName: formData.get('name')?.toString(),
            guestEmail: formData.get('email')?.toString(),
            hasPluseOne: null
        }
        })
    });
    const res = await req.json();
    const data = await res;

    cookies().set("guestEmail", data.data.attributes.guestEmail);

    console.log("UPDATE")
    console.log(data);
    if(data.data === null){
        console.log('bad request')
    }else{
        console.log('Revalidate path')
        revalidatePath(`/rsvp/guest/${data.data.attributes.guestName}`)
    }
};