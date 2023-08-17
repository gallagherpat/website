import Image from "next/image"

export default function Profile(){
    return (
        <main className="text-center mb-12">
            <Image
            className="rounded-full mx-auto"
            src="/profile_pic_patrick.jpg"
            alt="Picture of Patrick"
            width={200}
            height={100}
            />
            <h3>Patrick Gallagher</h3>
            <p>Negative Patrick is so evil he makes fire feel cold</p>
        </main>
    )
}