"use client"
import Image from "next/image"
import React from 'react';
type Props = {
    state: Function,
    image: Function
}
export default function Gallery(props: Props){
    console.log(props);
const setModal = props.state;
const setImage = props.image;

    return (
        <main className="grid grid-cols-3 gap-3 mt-20">
            <button onClick={() => {setModal(true); setImage(2)}} className="row-span-2">
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
            </button>
            
        </main>
    )
}