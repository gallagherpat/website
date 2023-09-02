"use client"
import Gallery from "../components/gallery";
import FullImage from "../components/fullImage";
import React from 'react';
import { useState } from "react";
import SubHeader from "../components/subHeader";

export default function Page() {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState('');
    // const containerArrays = [
    //     { id: 0,},
    //     { id: 9,},
    //     {id: 18},
    //     {id: 27},
    //     {id: 36},
    //     {id: 45}
    // ];
    const containerArrays = [
        { id: 0,},
    ];


    return(
        <main>
            <div className="block sm:hidden pt-4">
                <SubHeader/>
            </div>
            <div onClick={() => {setModal(false)}} style={{display: modal ? "flex": "none"}} className="fixed bg-opacity-70 bg-black top-0 left-0 z-50 w-screen h-screen justify-center items-center">
                <FullImage image={image}/>
            </div>
            <div className="lg:w-1/2 mx-auto px-4 mt-12">

            {containerArrays.map((containerArray) => (
                    <Gallery key={containerArray.id} pos={containerArray.id} state={setModal} image={setImage}/>
            ))}

            </div>

        </main> 
    )
}