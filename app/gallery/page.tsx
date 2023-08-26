"use client"
import Gallery from "../components/gallery";
import FullImage from "../components/fullImage";
import React from 'react';
import { useState, useEffect } from "react";
import SubHeader from "../components/subHeader";

export default function Page() {
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState('');
    const [oImages, setOImages] = useState([]);
    const containerArrays = [
        { id: 0,},
        { id: 9,}
    ];

    useEffect(() => {
        async function getImages() {
            let reqHeaders = new Headers();
            reqHeaders.append("Content-Type", "application/json")
            const req = await fetch('/api/getImages', {
                method: "POST",
                body: JSON.stringify({position: "0"})
            })
            const res = await req.json();
            const data = await res;
            setOImages(data)
        }
        getImages()
    }, []);

    // useEffect(() => {
    //     const host = process.env.DB_HOST_DEV;
    //     console.log(host)
    //     const env = process.env.NODE_ENV;
    //     let token;
    //     console.log(token)
    //     if(env == "production"){
    //         token = process.env.API_KEY_PRODUCTION;
    //     }else if(env == "development"){
    //         token = process.env.API_KEY;
    //     }
    //     token="defb91aa7e39bf7dc814e3023b85296c0350360555cec1c5fbc83b4738d212bf12cbdfd946bd9431e38ea51beeb5371a67b79cbbf713d0c6fa9ac475c9cab4b39945b02eb1d4744050185ce630a98f3544527cf890fffb46900f7d4217a2ded05c521075e8cbce9526bb04a4a81fb66bc2590b27c3003b177edf3e17ecb6a876"
    //     let myHeaders = new Headers();
    //     myHeaders.append("Authorization", `Bearer ${token}`);
    //     fetch(`http://127.0.0.1:1337/api/o-images?populate=*&pagination[start]=0&pagination[limit]=9`,{               
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow',
    //     }).then((response) => response.json())
    //     .then((data) => {
    //         setOImages(data)
    //         console.log("OIMAGES")
    //         console.log(data);
    //     })
    // }, []);

    console.log("OIMAGES")
    console.log(oImages)
    return(
        <main>
            <div className="block sm:hidden pt-4">
                <SubHeader/>
            </div>
            <div onClick={() => {setModal(false)}} style={{display: modal ? "flex": "none"}} className="fixed bg-opacity-70 bg-black top-0 left-0 z-50 w-screen h-screen justify-center items-center">
                <FullImage image={image}/>
            </div>
            <div className="lg:w-1/2 mx-auto px-4 mt-12">

            {containerArrays.map((containerArray, index) => (
                    <Gallery key={containerArray.id} pos={containerArray.id} state={setModal} image={setImage}/>
            ))}
                {/* <Gallery state={setModal} image={setImage}/>
                <Gallery state={setModal} image={setImage}/>
                <Gallery state={setModal} image={setImage}/> */}

            </div>

        </main> 
    )
}