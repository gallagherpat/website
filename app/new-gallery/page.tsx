"use client"
import {useEffect, useState} from 'react'
import NewImageTile from '../components/newImageTile'
import NewFullImage from '../components/newFullImage'
import Image from 'next/image'

export default function Page() {
    const env = process.env.NODE_ENV;
    const [images, setImages] = useState([]);
    const [counter, setCounter] = useState(0);
    const [load, setLoad] = useState(true);
    const [isModalOpen, setModalOpen] = useState(false);
    let src = 'http://127.0.0.1:1337';
    if(env === "production"){
        src = 'https://plankton-app-muzg8.ondigitalocean.app'
    }
    const modalHandler = function () {
        setModalOpen(!isModalOpen)
        return isModalOpen
    }
    async function getImages() {
        try {
          const reqHeaders = new Headers();
          reqHeaders.append('Content-Type', 'application/json');
          const req = await fetch('/api/getImages', {
            method: 'POST',
            body: JSON.stringify({ position: "hello" }),
          });
          const res = await req.json();
          setImages(res.data);

          setLoad(false);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
    useEffect(() =>{
        getImages()
    },[])
    if(!load){
        return (<>
        <NewFullImage isModalOpen={isModalOpen} modalHandler={modalHandler} images={images} setCounter={setCounter} counter={counter} src={src}/>
            <section className="w-11/12 md:w-10/12 lg:w-1/2 mx-auto">
                <div className="grid grid-cols-3 gap-2">
                    {images.map((image, index) => (
                        <NewImageTile modalHandler={modalHandler} setCounter={setCounter} key={index} index={index} image={image} src={src}/>
                    ))}
                </div>
            </section>
        </>
        )
    }
}
