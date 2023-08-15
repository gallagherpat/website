import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <div className='relative w-full h-[480px] md:h-[560px] mt-4'>
      <span className='absolute z-10 mt-8 ml-4 text-3xl'>
        Meet the Bride 
      <br/> 
        and the Goof..
      </span>
      <Image
        className='object-cover brightness-[60%]'
        src="/backdrop.JPG"
        alt="Picture of the Bride and Groom"
        width={0}
        height={0}
        sizes='100vw'
        style={{width: '100%', height: '100%'}}
      />
      <div className='container mx-auto text-center mt-4'>
        <h1 className='text-2xl mb-3'>Hello world</h1>
        <p>This is a bunch of text that I am typing to see what happens with this container</p>
      </div>
    </div>
    </main>
  )
}
