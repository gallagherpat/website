import { NextResponse } from "next/server";


export async function POST(request: Request){
    const req = await request.json();
    const pos = await req
    let host = process.env.DB_HOST_DEV;
    const env = process.env.NODE_ENV;
    let token;
    
    if(env == "production"){
        token = process.env.API_KEY_PRODUCTION;
    }else if(env == "development"){
        token = process.env.API_KEY;
    }
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    const getReq = await fetch(`${host}/api/o-images?populate=*`,{               
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    })
    const getRes = await getReq.json();
    const data = getRes;
    console.log(data);
    return NextResponse.json(data)
}

