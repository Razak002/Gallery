import Image from 'next/image'
import React from 'react'
import images from './ImageCon'
import Link from 'next/link'


const Hero = ({data}) => {
  return (
    <div className='max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row justify-between items-center  '>
      <div className='p-4 space-y-4'>
        <h1 className='text-2xl font-bold'>
          {data?.heading}
        </h1>
        <h2 className='text-sm font-semibold text-green-800'>Where Every Click Tells a Tale, Every Frame Narrates an Epic Saga</h2>
        <p className='text-sm font-normal '> we don't just capture moments; we transform them into epic stories. Our lens is the storyteller, and each click is a chapter that unfolds the magic of life. 
          </p>
        <button className='py-4 sm:py-6 lg:py-8 ' >
          <Link
            href="/contact"
            className="block rounded-md bg-green-800 px-6 py-3 text-[0.8rem] font-medium text-white transition hover:bg-green-800"
          >
            Explore the Extraordinary
          </Link>
        </button>

      </div>

      <div>

        <Image src={images.camera} alt='' width={600}  />

      </div>
    </div>
  )
}

export default Hero
