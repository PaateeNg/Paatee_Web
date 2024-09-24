import Image from 'next/image'
import React from 'react'
import { MdDelete } from 'react-icons/md'

const SavedItem = () => {
  return (
    <div className='flex justify-between gap-2'>
        <div className='bg-red-500 w-[85px] h-[85px]'>
            {/* <Image src=''alt='' layout='fill' objectFit='cover'/> */}
        </div>
        <div className='flex-1'>
            <p className='mb-4'>This contains the name and description of the particuler product</p>
            <p className='text-gray-500 text-sm mb-1'>Amount: <span className='text-black'>64</span></p>
            <p>MGN 8,000</p>
        </div>
        <div className='flex flex-col justify-around'>
            <div className='bg-[#F63D68] rounded-lg text-white p-2'>Buy now</div>
            <div className='flex items-center text-[#F63068]'><MdDelete /> <div>Remove</div></div>
        </div>
    </div>
  )
}

export default SavedItem