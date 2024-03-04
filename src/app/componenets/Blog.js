import React from 'react'
import BlogCard from './BlogCard'

export default function Blog({data}){
    return (
        <>
            {data && (
                <div className='py-10'>
                    <h1 className='text-2xl font-bold text-center'>Blog</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 px-2 space-y-5 md:gap-3'>

                        {data?.map((blogs, index) => {

                            return (
                                <div key={index} className='flex flex-col  justify-center items-center text-center p-2 border rounded-md space-y-2'>

                                    {/* <Image src={blogs?.blogImage?.url} alt='' width={500} height={200} />
                                    <h3 className='text-xl font-bold'>{blogs?.blogtitle}</h3>
                                    <p className='text-sm'>{blogs?.blogdescription}</p>
                                    <p className='flex  text-sm text-green-800 font-semibold'>read more !!!</p> */}
                                    <BlogCard

                                        title={blogs.blogtitle}
                                        description={blogs.blogdescription}
                                        image={blogs.blogImage?.url}
                                        slug={blogs.slug}
                                        more={blogs.read}
                                    />

                                </div>
                            )

                        })}

                    </div>
                </div>
            )}
        </>

    )
}


