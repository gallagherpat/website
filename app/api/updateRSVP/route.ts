import { NextResponse } from "next/server";
//@ts-ignore
export async function PUT(request: Request) {
    const env = process.env.NODE_ENV;
    const oData = await request.json();
    const event = await oData.data.eventsRSVP;
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

    // console.log(JSON.stringify({event: data}))
    const req = await fetch(`${host}/api/event-rsvps/${oData.data.id}`, {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify({
            data: event
        })
    });
    const res = await req.json();
    const data = await res;
    // console.log(data);

    // const req = await fetch('https://dummyjson.com/products/1')
    // const res = await req.json();
    return NextResponse.json({success: true});
}
