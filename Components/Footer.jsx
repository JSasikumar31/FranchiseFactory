import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
                <Image src={assets.white} alt=''  className='w-[200px] ' />
                <p className='text-sm text-white'>All right reserved. Copyright @FranchiseFactoryIND </p>
                <div className='flex gap-3'>
                    <Image src={assets.facebook_icon} alt=""  width={40} />
                    <Image src={assets.twitter_icon} alt=""  width={40} />
                    <Image src={assets.googleplus_icon} alt=""  width={40} />
                </div>
    </div>
  )
}

export default Footer