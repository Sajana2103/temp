import Image from 'next/image'
import HomePage from '../../components/home'
import { Logo } from '../../components/logo'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/bg.jpg" width={1000} height={500} className='absolute -z-10 left-0 right-0 top-0 bottom-0 h-screen w-screen
       object-cover object-center'/>
    <div className="xl:w-3/4 text-center ">

      <Logo/>

      <h1 className=' xl:text-9xl'>COMING SOON..</h1>
      <div className='flex justify-center gap-5 pt-10'>

      <div className=" ">
        <p>
          <a href='tel://+97148702000'>
          Tel: +971 4 870 2000
          </a>
          </p>
        <p>Fax: +971 4 884 9013/ 14</p>
      </div>
      <div>
        <p> <a href='mailto:info@rorganics.com'>
        Email: info@rorganics.com
          </a></p>
        <p><a  href='www.rorganics.com<'>
        Website: www.rorganics.com
          </a></p>
      </div>
      </div>
    </div>
  </main>
  )
}
