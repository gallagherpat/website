import { NextResponse } from "next/server";

export async function GET() {
    const env = process.env.NODE_ENV;
    const host = process.env.DB_HOST_DEV;
    let token;
    if(env == "production"){
        token = process.env.API_KEY_PRODUCTION;
    }else if(env == "development"){
        token = process.env.API_KEY;
    }

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const req = await fetch(`${host}/api/event-guests`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const res = await req.json();
    const data = await res;

    // console.log(data);

    // const req = await fetch('https://dummyjson.com/products/1')
    // const res = await req.json();

    return NextResponse.json(data);
}