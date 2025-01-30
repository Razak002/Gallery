"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getSingleBlog } from "@/app/services";

export default function BlogDetails({ params }) {
    const [blogDetails, setBlogDetails] = useState(null)

    const getBlogDetails = async () => {
        const blogDetails = await getSingleBlog(params.slug)
        setBlogDetails(blogDetails)
        return;
    }
    // console.log(blogDetails)

    useEffect(() => {
        getBlogDetails()
    })
    // console.log(blogDetails)

    return (
        <>
            <div className="min-h-screen">
                {blogDetails && (
                    <div className="max-w-[800px] mx-auto py-10 px-5 md:px-0">
                        <div className="pb-4">
                            <Link
                                href={`/`}
                                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-600"
                            >
                                <span
                                    aria-hidden="true"
                                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &larr;
                                </span>
                                Go back
                            </Link>
                        </div>
                        <h1 className="text-left block my-4 text-3xl font-bold">
                            {blogDetails?.blog.blogtitle}
                           
                        </h1>
                        <p className="mb-4 text-lg  text-gray-500">
                            {blogDetails?.blog.blogdescription}
                        </p>
                        
                        <Image
                            alt="Office"
                            src={blogDetails?.blog?.blogImage?.url}
                            width="400"
                            height="400"
                            className="w-full object-cover"
                        />
                        <br />
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${blogDetails?.blog?.completeDesc.html}`,
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    )
}