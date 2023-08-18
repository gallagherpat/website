import Image from "next/image"
export default function Gallery(){
    return (
        <main className="grid grid-cols-3 gap-3">
            <Image
            className="rounded-lg object-cover row-span-2 h-full" 
            src="/pictures/image (2).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />
            <Image
            className="rounded-lg" 
            src="/pictures/image (1).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />            
            <Image
            className="rounded-lg"
            src="/pictures/image (3).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />            
            <Image
            className="rounded-lg"
            src="/pictures/image (4).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />
            <Image
            className="rounded-lg"
            src="/pictures/image (5).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />            
            <Image
            className="rounded-lg"
            src="/pictures/image (7).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />
            <Image
            className="rounded-lg"
            src="/pictures/image (14).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />
            <Image
            className="rounded-lg"
            src="/pictures/image (15).jpg"
            alt="Image 1"
            width={300}
            height={300}
            />
            
        </main>
    )
}