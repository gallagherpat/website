"use client"
import StripeWelcomeEmail from "./emails/stripe-welcome";
import NotionMagicLinkEmail from "./emails/notion-magic-link";
import VercelInviteUserEmail from "./emails/vercel-invite-user";
import PlaidVerifyIdentityEmail from "./emails/plaid-verify-identity";
import Confirmation from "./emails/confirmation";
import { render } from "@react-email/components";
export default function Page(){
    return(
        //@ts-ignore
       <div dangerouslySetInnerHTML={{__html: render(<Confirmation/>)}}/> 
    )
}