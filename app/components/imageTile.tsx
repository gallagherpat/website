//@ts-nocheck
"use client"
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
        className = "row-span-2"
    }else if(aspectRatio > 1){
        className = "row-span-1"
    }

    // if(position == 1 || position == 4 || position == 7){
    //     image = "transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 origin-top-left hover:z-10"
    // }else if(position == 2 || position == 5 || position == 8){
    //     image = "transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 origin-center hover:z-10"
    // }else if(position == 3 || position == 6 || position == 9){
    //     image = "transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 origin-bottom-right hover:z-10"
    // }

    if(position > 9){
        return
    }

    // switch(position){
    //     case 1:
    //     image += ' origin-top-left'
    //     break;
    //     case 2:
    //     image += ' origin-top'
    //     break;
    //     case 3:
    //     image += ' origin-top-right'
    //     break;
    //     case 4:
    //     image += ' origin-left'
    //     break;
    //     case 5:
    //     image += ' origin-center'
    //     break;
    //     case 6:
    //     image += ' origin-right'
    //     break;
    //     case 7:
    //     image += ' origin-bottom-left'
    //     break;
    //     case 8:
    //     image += ' origin-bottom'
    //     break;
    //     case 9:
    //     image += ' origin-bottom-right'
    //     break;
    // }
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