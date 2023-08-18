"use client"
import Image from 'next/image';
import CountDownTimer from './components/countDownComponent';
import Section from './components/section';

export default function Home() {
  const weddingDate = new Date("2024-09-29");

  return (
    <main>
      <div className="flex min-h-screen mb-72 flex-col items-center justify-between">
      <div className='relative w-full h-[480px] md:h-[560px]'>
      <span className='absolute text-white z-10 pt-8 ml-4 text-3xl'>
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
      <div className='container mx-auto text-center pt-6'>
        <section className='mt-4'>
          <h1 className='text-2xl pb-3'>M'Kenna Daily</h1>
          <h1 className='text-lg pb-3'>- & -</h1>
          <h1 className='text-2xl pb-3'>Patrick Gallagher</h1>
        </section>
        <h2 className='mt-4'>Septepber 29th, 2024</h2>
        <CountDownTimer targetDate={weddingDate}/>
        <Section title="met"/>'
        <br />
        <Section title="proposal"/>
      </div>
    </div>
    </div>

    </main>
  )
}
