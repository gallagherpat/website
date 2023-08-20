"use client"
import Gallery from "../components/gallery";
import FullImage from "../components/fullImage";
import React from 'react';
import { useState } from "react";
import SubHeader from "../components/subHeader";

export default function Page() {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(0);

    return(
        <main>
            <div className="block sm:hidden pt-4">
                <SubHeader/>
            </div>
            <div onClick={() => {setModal(false)}} style={{display: modal ? "flex": "none"}} className="fixed bg-opacity-70 bg-black top-0 left-0 z-50 w-screen h-screen justify-center items-center">
                <FullImage image={image}/>
            </div>
            <div className="lg:w-1/2 mx-auto px-4 mt-12">

                <Gallery state={setModal} image={setImage}/>
                <Gallery state={setModal} image={setImage}/>
                <Gallery state={setModal} image={setImage}/>

 
            </div>

        </main> 
    )
}