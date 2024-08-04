import Image from 'next/image'
//@ts-ignore
export default function NewImageTile(props) {
    let image = props.image;
    const imgSrc = `/images/gallery/image_${props.index}.jpg`
    const imageUrl = image.attributes.image.data.attributes.url
    const h = image.attributes.image.data.attributes.height;
    const w = image.attributes.image.data.attributes.width;
    const aspectRatio = h / w;
    const setCounter = props.setCounter;
    const modalHandler = props.modalHandler;
    let className = 'row-span-2 rounded-lg';
    const imageClass = "transition duration-150 ease-in-out rounded-lg object-cover h-full hover:scale-125 hover:z-20 origin-center";
    if(aspectRatio < 1){
        className = 'row-span-1 rounded-lg'
    }
    return (
        <>
            <button className={className} onClick={() => {
                modalHandler()
                setCounter(props.index);
            }}>
                <Image
                className={imageClass}
                src={imgSrc}
                alt={image.attributes.image.data.attributes.name}
                width={300}
                height={300}
                unoptimized
                />
            </button>
        </>
    )
}