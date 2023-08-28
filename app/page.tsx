"use client"
import Image from 'next/image';
import CountDownTimer from './components/countDownComponent';
import Section from './components/section';
import { useRouter, redirect } from 'next/navigation';
import bg from "../public/backdrop.jpg"

export default function Home() {
  const weddingDate = new Date("2024-09-29");

  // const users = async function getUsers() {
  //   const req = await fetch('/api/getUsers');
  //   const res = await req.json();
  //   const data = await res;

  //   console.log(data);

  //   return users
  // }

  return (
    <main className="flex min-h-screen pb-12 flex-col items-center justify-between">
      <div className='relative object-cover px-auto w-full h-[480px] md:h-[560px]'>
      <span className='absolute text-white pt-8 ml-4 text-3xl z-10'>
        Meet the Bride 
      <br/> 
        and the Goof..
      </span>

      {/* <div className='bg-fixed p-64 bg-no-repeat brightness-[60%]' style={{
          backgroundImage: `url(${bg.src})`,
          height: '100%',
          width: '1900px'
        }}/> */}

      <Image
        priority
        className='object-cover brightness-[60%]'
        src="/backdrop.JPG"
        alt="Picture of the Bride and Groom"
        width={0}
        height={0}
        sizes='100vw'
        style={{width: '100%', height: '100%'}}
      />
      </div>

    <div className='mx-auto text-center pt-6'>
        {/* <button className='w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white'>CLICK ME</button> */}
        <section className='mt-4'>
          <h1 className='text-3xl pb-3'>M'Kenna Daily</h1>
          <h1 className='text-lg pb-3'>- & -</h1>
          <h1 className='text-3xl pb-3'>Patrick Gallagher</h1>
        </section>
        <h2 className='mt-4 text-lg'>Septepber 29th, 2024</h2>
        <CountDownTimer targetDate={weddingDate}/>
          <div className="h-12 mt-12">
            <a className="px-20 py-4 my h-12 mt-10 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white" href="/rsvp">RSVP</a>
          </div>

        <Section title="met"/>
        <br />
        <Section title="proposal"/>

      </div>

    </main>
  )
}
