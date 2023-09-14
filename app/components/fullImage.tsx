//@ts-nocheck
import Image from "next/image"
type Props = {
    image: string
}

export default function FullImage(props: Props){
    const env = process.env.NODE_ENV;
    const image = props.image;
    let src;
    if(env == "production"){
        src = `https://plankton-app-muzg8.ondigitalocean.app${image}`
    }else if(env == "development"){
        src = `http://127.0.0.1:1337${image}`
    }
    return(
        <main className="max-w-[800px] max-h-[600px] mb-24 md:mb-64 object-cover">
                <Image
                src={src}
                alt="image"
                width={600}
                height={600}
                unoptimized
                />
        </main>
    )
}