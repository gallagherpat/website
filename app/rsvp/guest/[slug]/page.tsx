import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import EventRSVP from "@/app/components/eventRSVP";


export default async function Page({ params }: { params: { slug: string } }) {
    const cookiesStore = await cookies();
    const cookie = await JSON.parse(cookiesStore.get('guest')?.value!);
    const data = cookie[0].attributes;
    const id = cookie[0].attributes.event_rsvp.data.id;
    console.log(id);

    if(!cookie){
        redirect("/rsvp");
    }

    return (
    <main>
        <div>Hello: {data.guestName}</div>
        <form style={{display: data.hasPlusOne ? "block": "none"}} action="">
            <label htmlFor="plusOne">Your Pluse One</label>
            <input name="pluseOne" id="plusOne" type="text" defaultValue={data.hasPlusOne ?  data.plusOneName : undefined}/>
        </form>
        <EventRSVP eventID={id} hasPlusOne={data.hasPlusOne} />
    </main>
    )
}