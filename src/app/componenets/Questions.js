
import React from 'react'

const Questions = ({data}) => {
  return (
    <>
      {data && (
        <>
          <h2 className="text-center block my-8 text-3xl font-bold">
            Frequent questions
          </h2>

          {data?.map((questions) => {
            return (
              <div className="grid grid-cols-1 gap-4">
                <div className="h-32 rounded-lg bg-gray-100 p-4 ">

                  <div className='flex gap-2 font-semibold mb-3'>
                    <h2>Q:</h2>
                    <span>{questions?.questText}</span>
                  </div>

                  <p className='text-sm'>A: {questions?.questAns} </p>
                </div>

              </div>
            )
          })}

        </>
      )}
    </>
  )
}

export default Questions
