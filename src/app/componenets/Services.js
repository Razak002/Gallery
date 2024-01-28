import Image from 'next/image'
import React from 'react'
import images from './ImageCon'

const Services = () => {
  return (

    <>

      <div className='flex justify-center items-center text-center py-2'>
        <h1 className='text-[2rem] font-bold'>What we offer</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 justify-evenly gap-4 px-4'>
        <div className='bg-gray-400 p-4'>
          <div className='flex flex-col justify-center items-center p-6'>
            <Image src={images.wed} alt='' width={50} />
            <span className='text-sm font-semibold'>Capturing everlasting love</span>
            <p className='text-[0.8rem]'>Entrust your special day to us, and we'll turn your wedding moments into timeless treasures. Our wedding photography service goes beyond snapshots – we craft a visual narrative that encapsulates the joy, romance, and emotion of your celebration
            </p>
          </div>
        </div>


        <div className='bg-gray-400 p-4'>
          <div className='flex flex-col justify-center items-center p-6'>
            <Image src={images.port} alt='' width={50} />
            <span className='text-sm font-semibold'>Revealing the Essence Within</span>
            <p className='text-[0.8rem]'>"Uncover the depth and beauty within with our portrait photography service. From professional headshots to intimate family portraits, we specialize in capturing the unique essence of each individual.
            </p>
          </div>
        </div>
        <div className='bg-gray-400 p-4'>
          <div className='flex flex-col justify-center items-center p-6'>
            <Image src={images.adv} alt='' width={50} />
            <span className='text-sm font-semibold'>Exploring the Extraordinary</span>
            <p className='text-[0.8rem]'>"Embark on a visual adventure with our dynamic adventure photography. Whether you're summiting peaks, traversing landscapes, or seeking adrenaline-fueled experiences, 
            </p>
          </div>
        </div>
        <div className='bg-gray-400 p-4'>
          <div className='flex flex-col justify-center items-center p-6'>
            <Image src={images.prod} alt='' width={50} />
            <span className='text-sm font-semibold'>Showcasing Your Brand in Every Detail</span>
            <p className='text-[0.8rem]'>"Elevate your brand with our precision product photography. We understand that every detail matters when it comes to showcasing your products.
            </p>
          </div>
        </div>
      </div>
    </>


  )
}

export default Services