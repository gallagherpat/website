import { NextResponse } from "next/server";

export default async function POST(request: Request) {
    const env = process.env.NODE_ENV;
    const oData = await request.json();
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

    const req = await fetch(`${host}/api/guests/`, { 
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify({
        data: event
        })
    });
    const res = await req.json();
    const data = await res;
    console.log(data);
    
    return NextResponse.json({success: true});
};