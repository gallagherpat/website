//@ts-nocheck
"use client"
import React, { useEffect, useState } from 'react';
import ImageTile from "./imageTile";
type Props = {
    state: Function,
    image: Function,
    pos: number
}
export default function Gallery(props: Props){
    const [images, setImages] = useState([]);
    const host = process.env.DB_HOST_DEV;
    const [counter, setCounter] = useState(0);
    const pos = props.pos

    useEffect(() => {
        async function getImages() {
            let reqHeaders = new Headers();
            reqHeaders.append("Content-Type", "application/json")
            const req = await fetch('/api/getImages', {
                method: "POST",
                body: JSON.stringify({position: pos})
            })
            const res = await req.json();
            const data = await res;
            setImages(data.data)
        }
        getImages()
    }, []);
    // console.log(images[1].attributes.image)
    console.log("ITEMS");
const setModal = props.state;
const setImage = props.image;
    return (
        <main className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-3 mt-8 sm:mt-20">
            {/* {images.map((image) => (
                <li key={image.id}>{image.id}</li>
            ))} */}
            {images.map((image, index) => (
                    <ImageTile setCounter={setCounter} counter={counter} id={index} setModal={setModal} setImage={setImage} url={image.attributes.image.data.attributes.url} width={image.attributes.image.data.attributes.width} height={image.attributes.image.data.attributes.height}/>
            ))}


            {/* <button onClick={() => {setModal(true); setImage(2)}} className="row-span-2">
                <Image
                className="transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 origin-top-left hover:z-10"
                src="/pictures/image (2).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button onClick={() => {setModal(true); setImage(1)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-center hover:z-10"
                src="/pictures/image (1).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>           
            <button onClick={() => {setModal(true); setImage(3)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-right hover:z-10"
                src="/pictures/image (3).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>            
            <button onClick={() => {setModal(true); setImage(4)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-center hover:z-10"
                src="/pictures/image (4).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button onClick={() => {setModal(true); setImage(5)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-right hover:z-10"
                src="/pictures/image (5).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>          
            <button onClick={() => {setModal(true); setImage(7)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-left hover:z-10"
                src="/pictures/image (7).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button onClick={() => {setModal(true); setImage(14)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-center hover:z-10"
                src="/pictures/image (14).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button>
            <button onClick={() => {setModal(true); setImage(15)}} className="row-span-1">
                <Image
                className="transition duration-150 ease-in-out rounded-lg hover:scale-125 origin-top-right hover:z-10"
                src="/pictures/image (15).jpg"
                alt="Image 1"
                width={300}
                height={300}
                />
            </button> */}
            
        </main>
    )
}