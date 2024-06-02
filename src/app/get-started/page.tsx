import GetStarted from '@/components/GetStarted/GetStarted'
import React from 'react'

const page = () => {
  return (
    <>
        <div className='bg-gray-100 flex flex-col justify-center items-center h-[40rem]'>
            <span className='flex items-start font-bold mb-4'>Select how to get started </span>
            <GetStarted/>
        </div>
    </>
  )
}

export default page