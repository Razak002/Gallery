// import Image from 'next/image'
// import React from 'react'


// const BlogCard = ({ data }) => {
//   return (

//     <>
//       {data  &&  (
//         <div className='py-10'>
//           <h1 className='text-2xl font-bold text-center'>Blog</h1>
//           <div className='grid grid-cols-1 md:grid-cols-3 px-2 space-y-5 md:gap-3'>

//             {data?.map((blogs) => {

//               return (
//                 <div className='flex flex-col  justify-center items-center text-center p-2 border rounded-md space-y-2'>
//                   <Image src={blogs?.blogImage?.url} alt='' width={500} height={200} />
//                   <h3 className='text-xl font-bold'>{blogs?.blogtitle}</h3>
//                   <p className='text-sm'>{blogs?.blogdescription}</p>
//                   <p className='flex  text-sm text-green-800 font-semibold'>read more !!!</p>

//                 </div>
//               )

//             })}

//           </div>
//         </div>
//       )}
//     </>

//   )
// }

// export default BlogCard



import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({
  title,
  description,
  image,
  slug,
  more


}) {



  return (
    <>
      <article className='overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm'>
        <Image
          src={image}
          width={300}
          height={300}
          className='w-full object-cover'
        />

        <div className='p-4 sm:p-6'>
          <h3 className='text-lg font-medium text-gray-800'>{title}</h3>
        </div>


        <p className='mt-2 line-clamp-4 text-sm text-gray-500'>
          {description}
        </p>

        <Link
        href={`/Blog/${slug}`}
        className=' mt-4 flex items-center text-sm font-medium text-green-800'>
          {more}
        </Link>
      </article>


    </>
  )
}


