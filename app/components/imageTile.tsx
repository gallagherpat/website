//@ts-nocheck
import React from "react";
import Image from "next/image";

export default function ImageTile(props) {
    const env = process.env.NODE_ENV;

    const setModal = props.setModal;
    const setImage = props.setImage;
    const aspectRatio = props.width / props.height;
    let className;
    let position = props.id;
    let image = "transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 hover:z-10 origin-center";

    if(aspectRatio < 1){
        className = "row-span-1"
    }else if(aspectRatio > 1){
        className = "row-span-1"
    }

    if(position > 8){
        return
    }


        if(env == "production"){
            return(
                <button onClick={() => {setModal(true); setImage(props.url)}} className={className}>
                    <Image
                    className={image}
                    src={`https://plankton-app-muzg8.ondigitalocean.app${props.url}`}
                    alt="Image 1"
                    width={300}
                    height={300}
                    />
                </button>
            )
        }else if(env == "development"){
            return(
                <button onClick={() => {setModal(true); setImage(props.url)}} className={className}>
                    <Image
                    className={image}
                    src={`http://127.0.0.1:1337${props.url}`}
                    alt="Image 1"
                    width={300}
                    height={300}
                    />
                </button>
            )
        }
}