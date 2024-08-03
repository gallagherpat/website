import Image from "next/image"

//@ts-ignore
export default function Profile(props){
    let image = `/images/${props.name}.jpg`
    console.log(props.name)
    if (props.name == null) {
        image = `/images/profile.png`
    }
    return (
        <main className="text-center sm:mb-12 mb-4">
            <Image
            className="rounded-full mx-auto"
            src={image}
            alt="Picture of Patrick"
            width={200}
            height={100}
            />
            <h3>{props.name} {props.lastName}</h3>
            <p>{props.partyMember}</p>
            <br />
            {/* <p>Negative Patrick is so evil he makes fire feel cold</p> */}
        </main>
    )
}