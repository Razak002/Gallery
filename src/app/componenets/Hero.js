import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const Hero = ({ data }) => {
  return (
    <div className='max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row justify-between items-center  '>
      <div className='p-4 gap-4 md:flex justify-between'>
        <div className='space-y-4'>
          <h1 className='text-2xl font-bold'>
            {data?.heading}
          </h1>
          <h2 className='text-sm font-semibold text-green-800'>{data?.semiHead}</h2>
          <p className='text-sm font-normal text-left'>{data?.heroText}</p>
          <button className='py-4 sm:py-6 lg:py-8 ' >
            <Link
              href="/contact"
              className="block rounded-md bg-green-800 px-6 py-3 text-[0.8rem] font-medium text-white transition hover:bg-green-800"
            >
              Explore the Extraordinary
            </Link>
          </button>

        </div>


        <div className='w-[100%]'>
          <Image
            src={data?.heroImage?.url}
            alt='hero image'
            width={600}
            height={500}
          />

        </div>

      </div>

    </div>
  )
}

export default Hero
