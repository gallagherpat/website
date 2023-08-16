"use client"
import Image from 'next/image';
import CountDownTimer from './components/countDownComponent';

export default function Home() {
  const weddingDate = new Date("2024-09-29");
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
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
        <h1 className='text-2xl mb-3'>MKenna Daily</h1>
        <h1 className='text-lg mb-3'>&</h1>
        <h1 className='text-2xl mb-3'>Patrick Gallagher</h1>
        <h2>September 29th, 2024</h2>
        <CountDownTimer targetDate={weddingDate}/>
      </div>
    </div>
    </main>
  )
}
