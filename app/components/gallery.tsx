
"use client"
import React from 'react';
import  { useEffect, useState } from 'react';
import ImageTile from './imageTile'; // Make sure to use the correct import path

type Props = {
  state: Function;
  image: Function;
  pos: number;
};

type ImageAttributes = {
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
};

export default function Gallery(props: Props) {
  const [images, setImages] = useState<ImageAttributes[]>([]);
  const [counter, setCounter] = useState(0);
  const [load, setLoad] = useState(true);
  const pos = props.pos;

  useEffect(() => {
    async function getImages() {
      try {
        const reqHeaders = new Headers();
        reqHeaders.append('Content-Type', 'application/json');
        const req = await fetch('/api/getImages', {
          method: 'POST',
          body: JSON.stringify({ position: pos }),
        });
        const res = await req.json();
        console.log(res.data);
        setImages(res.data);
        setLoad(false);
        console.log(images)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
    getImages();
  }, []);
  console.log(images);

  if (!load) {
    return (
      <main className="inline-grid grid-cols-3 grid-rows-3 gap-1 sm:gap-3 mt-8 sm:mt-20">
        <>
        {/* {images.map((image) => (<div>{image.attributes.image.data.attributes.url}</div>))} */}
        {images.map((image, index) => (
          <ImageTile
            key={index}
            setCounter={setCounter}
            counter={counter}
            id={index}
            setModal={props.state}
            setImage={props.image}
            url={image?.attributes?.image?.data?.attributes?.url}
            width={image?.attributes?.image?.data?.attributes?.width}
            height={image?.attributes?.image?.data?.attributes?.height}
          />
        ))}
        </>
      </main>
    );
  }

}



// import React, { useEffect, useState } from 'react';
// import ImageTile from "./imageTile";
// import { Img } from '@react-email/components';
// type Props = {
//     state: Function,
//     image: Function,
//     pos: number
// }
// type images = {
//     attributes: object
// }
// export default function Gallery(props: Props){
//     const [images, setImages] = useState<any[]>([]);
//     const [counter, setCounter] = useState(0);
//     const [load, setLoad] = useState(false);
//     const pos = props.pos

//     useEffect(() => {
//         async function getImages() {
//             let reqHeaders = new Headers();
//             reqHeaders.append("Content-Type", "application/json")
//             const req = await fetch('/api/getImages', {
//                 method: "POST",
//                 body: JSON.stringify({position: pos})
//             })
//             const res = await req.json();
//             const data = await res;
//             console.log(typeof data);
//             setImages(data.data)
//             console.log("NEW DATA")
//             setLoad(true);
//         }
//         getImages()
//     }, []);
//     // console.log(images[1].attributes.image)
//     // console.log("ITEMS");
//     // console.log(typeof images)
//     console.log(images)
//     const setModal = props.state;
//     const setImage = props.image;
//     if(load){
//         return (
//             <main className="grid grid-cols-3 grid-rows-3 gap-1 sm:gap-3 mt-8 sm:mt-20">
//                 {images && images.map((image) => (
//                         <ImageTile key={image.id} setCounter={setCounter} counter={counter} id={image.id} setModal={setModal} setImage={setImage} url={image?.attributes.image.data.attributes.url} width={image?.attributes.image.data.attributes.width} height={image?.attributes.image.data.attributes.height}/>
//                 ))}
//             </main>
//         )
//     }

// }