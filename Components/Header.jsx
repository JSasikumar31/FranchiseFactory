import { assets } from '@/assets/assets'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className=' flex justify-between items-center'>
                 <Image src={assets.final} width={350}  alt='' className=' sm:w-auto  '/>
                 <button className='flex  gap-2 font-medium  px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000] justify-end'> Get Started <Image alt='' src={assets.arrow}/></button>
                
            </div>



            <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-5xl font-medium'>Latest Franchise's</h1>
                    <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, et? Reiciendis ab rerum temporibus eos? Mollitia nihil expedita eos aperiam minima alias quasi labore recusandae, obcaecati maiores blanditiis dolor velit!</p>
                    <form className='flex justify-between mx-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                        <input type="email"  placeholder='Enter Your Email' className='pl-4 outline-none'/>
                        <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white '>Subscribe</button>
                    </form>
              <Link href="/admin"><button   type='submit' className='border p-4 rounded-full  border-black mt-10 sm:px-8 active:bg-gray-600 active:text-white  '>Upload Here!</button></Link> 
            </div>
    </div>
  )
}

export default Header
