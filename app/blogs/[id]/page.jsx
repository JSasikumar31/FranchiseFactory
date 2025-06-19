'use client'
import { assets, blog_data } from '@/assets/assets';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    };

    useEffect(() => {
        if (params && params.id) {
            fetchBlogData();
        } else {
            console.error('Invalid params or id not provided.');
        }
    }, []);

    return (
         data ?<>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                  <Link href='/'> <Image src={assets.final} alt=''  className='max-w-[400px] sm:w-auto ' /></Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
                        Get Started <Image src={assets.arrow} alt='' />
                    </button>
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} alt=''/>
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white rounded-b-xl' src={data.image} width={1920} height={1080} alt=''/>

                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>
                <h3 className='my-text-[18px] font-semibold'>Step 1: Lorem ipsum dolor sit amet</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
           
           
                    <h3 className='my-text-[18px] font-semibold'>Step 1: Lorem ipsum dolor sit amet</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
           
                    <h3 className='my-text-[18px] font-semibold'>Step 1: Lorem ipsum dolor sit amet</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
           


                    <h3 className='my-text-[18px] font-semibold'>CONCLUSION</h3>
                    <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
                     <p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur a architecto assumenda possimus ratione. Magnam illum sapiente voluptas dolore quasi molestias. Earum tenetur ad dignissimos esse soluta velit beatae!</p>
           
           
                        <div className='my-24'>
                            <p className='text-black font font-semibold my-4'>Share the Franchise on Social Media</p>
                            <div className='flex'>
                                <Image src={assets.facebook_icon} width={50} alt=''/>
                                <Image src={assets.twitter_icon} width={50} alt=''/>
                                <Image src={assets.googleplus_icon} width={50} alt=''/>
                            </div>
                        </div>
            </div>
            <Footer/>
            </>:<></>
        )
    
};

export default Page;