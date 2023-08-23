import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import EventRSVP from "@/app/components/eventRSVP";
import SubHeader from "@/app/components/subHeader";


export default async function Page({ params }: { params: { slug: string } }) {
    const cookiesStore = await cookies();
    const cookie = await JSON.parse(cookiesStore.get('guest')?.value!);
    const data = cookie[0].attributes;
    const id = cookie[0].attributes.event_rsvp.data.id;
    const email = data.guestEmail;
    console.log(email);
    console.log(id);

    if(!cookie){
        redirect("/rsvp");
    }

    return (
    <main className="w-3/4 mx-auto mt-8 sm:mt-12 max-w-md text-center pb-4">
            {/* <div className="block sm:hidden">
                <SubHeader/>
            </div> */}
        <div>Hello: {data.guestName}</div>
        <form style={{display: data.hasPlusOne ? "block": "none"}} action="">
            <label htmlFor="plusOne">Your Pluse One</label>
            <input name="pluseOne" id="plusOne" type="text" defaultValue={data.hasPlusOne ?  data.plusOneName : undefined}/>
        </form>
        <form action="">
            <label htmlFor="">Email:</label>
            <input type="email" defaultValue={email ? email: ''}/>
        </form>
        <EventRSVP eventID={id} hasPlusOne={data.hasPlusOne} email={data.email}/>
    </main>
    )
}