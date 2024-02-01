import Image from 'next/image'
import React from 'react'


const Services = ({ data }) => {
  return (
    <>
      {data && (

        // <div className='flex justify-center items-center text-center py-2'>
        //   <h1 className='text-[2rem] font-bold'>What we offer</h1>
        // {/* </div> */}
        <>
          <h1 className='flex justify-center items-center text-[2rem] font-bold'>What we offer</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 justify-evenly gap-4 px-4'>
            {data.offers?.map((offer) => {
              return (
                <div className='bg-gray-400 p-4' key={offer.offerTitle} >
                  <div className='flex flex-col justify-center items-center p-6'>
                    <Image src={offer?.offerIcon?.url} alt='' width={50} height={50}/>
                    <span className='text-sm font-semibold'>{offer.offerTitle}</span>
                    <p className='text-[0.8rem]'>{offer.description}</p>
                  </div>
                </div>
              )
            })}

          </div >
        </>
      )}
    </>
  )
}

export default Services