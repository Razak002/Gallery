import Image from 'next/image'
import React from 'react'
import images from './ImageCon'

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-green-800 p-4 '>

      <div>
        <Image src={images.gallery} alt='' />
      </div>

      <div className='text-white'>
        <h2>contact us</h2>
      </div>

    </div>
  )
}

export default Footer