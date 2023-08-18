import Image from "next/image"
export default function Gallery(){
    return (
        <main className="grid grid-cols-3 gap-3 mt-20">
            <button className="row-span-2">
                <Image
                className="transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 origin-top-left hover:z-10"
                src="/pictures/image (2).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-center hover:z-10"
                src="/pictures/image (1).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>           
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-right hover:z-10"
                src="/pictures/image (3).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>            
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-center hover:z-10"
                src="/pictures/image (4).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-right hover:z-10"
                src="/pictures/image (5).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>          
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-left hover:z-10"
                src="/pictures/image (7).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-center hover:z-10"
                src="/pictures/image (14).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-right hover:z-10"
                src="/pictures/image (15).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            
        </main>
    )
}