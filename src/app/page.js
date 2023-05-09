import Image from 'next/image'
import HomePage from '../../components/home'
import { Logo } from '../../components/logo'
export default function Home() {
  return (
    <main className="py-24 px-12 lg:p-24 h-screen grid items-center content-center">
      <title>RORGANICS</title>
      <Image src="/bg.jpg" width={1000} height={500} className='absolute 
      -z-10 left-0 right-0 top-0 bottom-0 h-screen w-screen
       object-cover object-center'/>
      <div className="text-center ">
    <div className=' '>

        <Logo />

        <h1 className='text-4xl mb-8 mt-8 xl:mt-2 font-semibold sm:text-6xl xl:text-9xl'>COMING SOON!</h1>
        <div className='md:text-center lg:text-xl'>

          <p className='yellow'>Tel: <a className='white font-bold ' href='tel://+97148702000'>
            +971 4 870 2000
          </a>
          </p>
          <p className='yellow'>Fax: <a className='font-bold'>
            +971 4 884 9013 / 14 </a></p>

          <p className='yellow'>Email: <a className='font-bold' href='mailto:info@rorganics.com'>
            info@rorganics.com
          </a></p>

        </div>
    </div>

      </div>
    </main>
  )
}
