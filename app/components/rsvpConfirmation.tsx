import { render } from "@react-email/components"
import Confirmation from "../react-email-starter/emails/confirmation"
import { useRouter } from 'next/navigation'

//@ts-ignore
export default  function RSVPConfirmationButton(props){
    const router = useRouter();
    let eventsRSVP = props.eventsRSVP
    let guestEmail = props.email;
    let style = {
        curosr: "not-allowed"
    }
    console.log("rsvpconfiramtion")
    console.log(guestEmail);
    async function updateRSVP() {
        console.log(JSON.stringify(eventsRSVP))
        console.log("Event ID" + JSON.stringify(props.eventID));
        const req = await fetch('/api/updateRSVP', {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                data: {
                id: props.eventID,
                eventsRSVP
            }}),
        });
        const res = await req.json();
        const data = await res;

        console.log(data);
        if(data){
            return true
        }
    }

    async function rsvpHandler() {
        updateRSVP()
        sendEmail()
        router.push('/')
    }
    
    async function sendEmail() {
        console.log("Send email " + guestEmail)
        const req = await fetch(`/api/send-email`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                data: {
                    email: "stgallagherpatrick@gmail.com",
                    html: render(<Confirmation/>)
                }
            })
        })
        const res = await req.json()
        const data = await res
        console.log(data.body);
        if(res){
            return true
        }
    }

    if(Object.keys(eventsRSVP).length > 3 && guestEmail != null){
        console.log("BUTTON IS CLICKABLE")
    }

    return(
        <main>
            <button style={{cursor: Object.keys(eventsRSVP).length == 3 != null ? "" : "not-allowed"}} 
            className="w-48 h-12 mt-10 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" onClick={rsvpHandler}>Confirm RSVP</button>
            <br />
        </main>
    )
}