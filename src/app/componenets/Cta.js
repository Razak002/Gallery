import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className='px-4 md:px-8'>
      <section className='bg-green-800 text-white py-8'>
        <div className='mx-auto max-w-[700px] text-center space-y-3'>

          <h2 className='test-bold text-xl'>Explore the Atistry</h2>

          <p className='text-[0.7rem] md:text-sm p-4'>Dive into our Gallery and Own a Piece of Captivating Beauty.Discover More, Collect Now!
            Dive into our Gallery and Own a Piece of Captivating Beauty.Discover More, Collect Now!
          </p>

          <ul className="flex justify-center items-center gap-6 text-sm">
            <li>
              <Link
                href="/contact"
                className="block rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-green-800 transition "
              >
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </section>
    </div>
  )
}

export default Cta
