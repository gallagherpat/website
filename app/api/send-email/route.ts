"use server"
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
//@ts-ignore
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL ?? 'default@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'default@gmail.com';



export async function POST(request: Request) {

    const oData = await request.json();
    const email = oData.data.email;
    const emailHtml = oData.data.html
    const msg = {
        to: "gallagherpatrick21@gmail.com",
        from: FROM_EMAIL,
        subject: 'Mail from Patrick and Kenna',
        html: emailHtml,
    };
    try {
        await sgMail.send(msg);
        return NextResponse.json({success: true});
    } catch (error) {
        console.error(error);
        return NextResponse.json({success: false});
    }


};
