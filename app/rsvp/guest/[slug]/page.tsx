import { redirect } from "next/navigation";
import { cookies } from "next/headers"
import EventRSVP from "@/app/components/eventRSVP";
import UpdateUser from '@/app/components/formActions/updateUser'

// import RSVPConfirmationButton from "@/app/components/rsvpConfirmation";

export default async function Page({ params }: { params: { slug: string } }) {
    const env = process.env.NODE_ENV;
    const host = process.env.DB_HOST_DEV;
    let oName = cookies().get('name')?.toString();

    if(!oName){
        oName = params.slug;
    }else{
        redirect('/rsvp')
    }

    let token;
    if(env == "production"){
            token = process.env.API_KEY_PRODUCTION;
        }else if(env == "development"){
            token = process.env.API_KEY;
        }
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
    const req = await fetch(`${host}/api/event-guests?filters[guestName][$eq]=${oName}&populate[0]=event_rsvp`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        cache: 'no-store'
    })
    const res = await req.json();
    const data = await res.data;
    const cookiesStore = await cookies();
    const cookie = await JSON.parse(cookiesStore.get('guest')?.value!);
    // const data = cookie[0].attributes;
    const id = cookie[0].attributes.event_rsvp.data.id;
    let email = cookies().get('guestEmail')?.value;
    console.log("GUEST EMAIL");
    console.log(cookies().get('guestEmail')?.value)   
    if(!cookie){
        redirect("/rsvp");
    }

    

    return (
    <main className="w-3/4 mx-auto mt-8 sm:mt-12 max-w-md text-center pb-4">
            {/* <div className="block sm:hidden">
                <SubHeader/>
            </div> */}
        <h1 className="mb-6">Hello: {data.guestName}</h1>
        
        <div className="max-h-fit bg-slate-300 rounded-xl drop-shadow-md text-center">
            <div className="flex flex-col m-6 pt-6 py-4">
            <p className="mx-12">Before you go clicking buttons, can you verify this info for me?</p>
            <form className="grid gap-1 mt-2 mx-4 text-left" action={UpdateUser}>
                    <label style={{display: data.hasPlusOne ? "block": "none"}} htmlFor="plusOne">Your Plus One:</label>
                    <input className="h-8" type="text" name="name" defaultValue={data.hasPlusOne ?  data.plusOneName : undefined}/>
                    <label htmlFor="email">Email:</label>
                    <input className="h-8"  type="email" name="email" defaultValue={email ? email: ''}/>
                    <input className="hidden" type="text" name="userID" defaultValue={cookie[0].id}/>
                    <button className="w-48 h-12 mt-6 bg-zinc-700 m-3 mx-auto rounded hover:bg-zinc-900 text-white" type="submit">Confirm</button>
                </form>
            </div>
        </div>
        <EventRSVP eventID={id} hasPlusOne={data.hasPlusOne} email={email}/>
    </main>
    )
}