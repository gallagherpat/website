import Image from "next/image"

export default function Profile(){
    return (
        <main className="text-center sm:mb-12 mb-4">
            <Image
            className="rounded-full mx-auto"
            src="/images/profile.png"
            alt="Picture of Patrick"
            width={200}
            height={100}
            />
            <h3>TBA</h3>
            <br />
        </main>
    )
}