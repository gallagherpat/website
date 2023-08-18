"use client"
import Gallery from "../components/gallery";
import FullImage from "../components/fullImage";
import React from 'react';
import { useState } from "react";

export default function Page() {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(0);

    return(
        <main>
            <div onClick={() => {setModal(false)}} style={{display: modal ? "flex": "none"}} className="fixed bg-opacity-70 bg-black top-0 left-0 z-50 w-screen h-screen justify-center items-center">
                <FullImage image={image}/>
            </div>
            <div className="w-3/4 lg:w-1/2 mx-auto mt-12">

                <Gallery state={setModal} image={setImage}/>
                <Gallery state={setModal} image={setImage}/>
                <Gallery state={setModal} image={setImage}/>

 
            </div>

        </main> 
    )
}