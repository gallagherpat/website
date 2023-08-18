import Image from "next/image"
export default function FullImage(props){
    const image = props.image;
    const src = "/pictures/image (" + image + ").jpg"
    return(
        <main className="max-w-[800px] max-h-[600px] object-cover">
                <Image
                src={src}
                alt="image"
                width={700}
                height={700}
                unoptimized
                />
        </main>
    )
}