"use server"
import sgMail from '@sendgrid/mail';
import { render } from '@react-email/render';
import StripeWelcomeEmail from '../react-email-starter/emails/stripe-welcome';
//@ts-ignore
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'default@gmail.com';

export async function SendEmail() {
async function sendEmail(){
    const oData = {data: {
        email: "gallagherpatrick21@gmail.com",
    }}
    const email = oData.data.email;
    const emailHtml = render(<StripeWelcomeEmail/>)
    const msg = {
        to: "gallagherpatrick21@gmail.com",
        from: FROM_EMAIL,
        subject: 'Mail from ' + email,
        html: emailHtml,
    };
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);  
    }
}
    return(
    <button className="w-48 h-12 mt-6 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" onClick={sendEmail}>Send Email</button>
    )
};