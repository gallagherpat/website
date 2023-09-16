"use client"
import Image from 'next/image';

//@ts-ignore
export default function NewFullImage(props) {
    const images = props.images;
    const counter = props.counter;
    const modalHandler = props.modalHandler;
    const isModalOpen = props.isModalOpen;
    const setCounter = props.setCounter
    console.log(images.length)
    if(counter >= images.length - 1){
        console.log("counter is 0")
        setCounter(0)
    }
    if(counter < 0){
        console.log(counter)
        setCounter(images.length - 2);
    }
    

    if(isModalOpen && counter != -1){
        document.body.style.overflow = "hidden";
        return(
        <>
        <div className="relative">
            <div className="fixed bg-black bg-opacity-50 z-50 w-full overflow-x-hidden overflow-y-auto inset-0 h-full max-h-full">
                    <button className="absolute z-50 ease-in-out duration-100 top-4 left-6 p-2 rounded-full hover:bg-black hover:opacity-50" onClick={() => {modalHandler()}}>
                    <svg fill="white" width="48" height="48" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"/>
                    </svg>
                    </button>
                    <div className="absolute z-50 cursor-pointer ease-in-out duration-100 inset-y-1/2 w-14 h-64 my-auto rounded-r-full hover:bg-black hover:opacity-50" onClick={() => {
                    setCounter(counter - 1)
                }}>
                <svg className="h-64" fill="white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"/>
                </svg>
              </div>
                    <Image
                    className='relative object-contain mx-auto py-24 w-full h-full max-w-2xl'
                    src={props.src + images[counter].attributes.image.data.attributes.url}
                    alt="Image"
                    width={500}
                    height={500}
                    unoptimized
                    />
                <div className="absolute cursor-pointer ease-in-out duration-100 inset-y-1/2 right-0 w-14 h-64 my-auto rounded-l-full hover:bg-black hover:opacity-50" onClick={() => {
                    setCounter(counter + 1)
                }}>
                <svg className="h-64" fill="white" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
                </svg>
              </div>
            </div>
        </div>
        </>)
    }else{
        document.body.style.overflow = "visible";
        return (<></>)
    }
}