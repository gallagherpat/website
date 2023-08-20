"use client"
import Image from 'next/image';
import CountDownTimer from './components/countDownComponent';
import Section from './components/section';

export default function Home() {
  const weddingDate = new Date("2024-09-29");

  const users = async function getUsers() {
    const req = await fetch('/api/getUsers');
    const res = await req.json();
    const data = await res;

    // console.log(data);

    return users
  }

  return (
    <main className="flex min-h-screen mb-96 flex-col items-center justify-between">
      <div className="flex min-h-screen mb-96 flex-col items-center justify-between">
      <div className='relative w-full h-[480px] md:h-[560px] -z-30'>
      <span className='absolute text-white pt-8 ml-4 text-3xl z-10'>
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
        {/* <button onClick={users} className='w-48 h-12 bg-zinc-700 m-3 rounded hover:bg-zinc-900 text-white'>CLICK ME</button> */}
        <section className='mt-4'>
          <h1 className='text-2xl pb-3'>M'Kenna Daily</h1>
          <h1 className='text-lg pb-3'>- & -</h1>
          <h1 className='text-2xl pb-3'>Patrick Gallagher</h1>
        </section>
        <h2 className='mt-4'>Septepber 29th, 2024</h2>
        <CountDownTimer targetDate={weddingDate}/>
        <Section title="met"/>
        {/* <div className='bg-slate-300 h-[1px] mt-6'/> */}
        <br />
        <Section title="proposal"/>
      </div>
    </div>
    </div>

    </main>
  )
}
