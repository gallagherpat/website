import Image from 'next/image'
//@ts-ignore
export default function NewImageTile(props) {
    // let image = props.image;
    const imgSrc = `/images/gallery/image_ (${props.index}).jpg`;
    //const imageUrl = image.attributes.image.data.attributes.url
    const setCounter = props.setCounter;
    const modalHandler = props.modalHandler;
    let className = 'row-span-2 rounded-lg';
    const imageClass = "transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 hover:z-20 origin-center";
    return (
        <>
            <button className={className} onClick={() => {
                console.log(props.index)
                setCounter(props.index);
                modalHandler()
            }}>
                <Image
                className={imageClass}
                src={imgSrc}
                alt="Pic of Patrick and Kenna"
                width={300}
                height={300}
                unoptimized
                />
            </button>
        </>
    )
}