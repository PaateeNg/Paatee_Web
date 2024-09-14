import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className='h-[44px] w-[398px]  border mb-5 ml-4 mt-4 px-3 py-2 flex items-center justify-between rounded-full'>
            <div className='flex gap-2 items-center justify-center'>
                <Image alt='serch-icon' width={15} height={15} src="/search-normal.png"/>
                
                <input type="text" placeholder='Search party planner' className='border-none' />
            </div>
            <div>
                <button className='bg-red-500 rounded-full h-[32px] w-[87px] px-3 py-2 text-xl text-white flex items-center'>Search</button>
            </div>
        </div>
    </>
  )
}

export default SearchBar