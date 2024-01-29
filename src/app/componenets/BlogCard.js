import Image from 'next/image'
import React from 'react'
import images from './ImageCon'

const BlogCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-2 space-y-5 md:gap-3'>

      <div className='flex flex-col  justify-center items-center text-center p-2 border rounded-md space-y-2'>
        <Image src={images.camera} alt='' width={500} />
        <h3 className='text-xl font-bold'>unique shots</h3>
        <p className='text-sm'>Our lens is the storyteller, and each click is a chapter that
          unfolds the magic of life. From sweeping landscapes that whisper tales of distant horizons to intimate portraits that capture the soul's journey, our photography transcends the ordinary.
        </p>
        <p className='flex  text-sm text-green-800'>read more</p>


      </div>

      <div className='flex flex-col  justify-center items-center text-center p-2 border rounded-md space-y-2'>
        <Image src={images.camera} alt='' width={500} />
        <h3 className='text-xl font-bold'>unique shots</h3>
        <p className='text-sm'>Our lens is the storyteller, and each click is a chapter that
          unfolds the magic of life. From sweeping landscapes that whisper tales of distant horizons to intimate portraits that capture the soul's journey, our photography transcends the ordinary.
        </p>
        <p className='flex  text-sm text-green-800'>read more</p>


      </div>

      <div className='flex flex-col  justify-center items-center text-center p-2 border rounded-md space-y-2'>
        <Image src={images.camera} alt='' width={500} />
        <h3 className='text-xl font-bold'>unique shots</h3>
        <p className='text-sm'>Our lens is the storyteller, and each click is a chapter that      unfolds the magic of life. From sweeping landscapes that whisper tales of distant horizons to intimate portraits that capture the soul's journey, our photography transcends the ordinary.
        </p>
        <p className='flex  text-sm text-green-800'>read more</p>


      </div>

    </div>

  )
}

export default BlogCard