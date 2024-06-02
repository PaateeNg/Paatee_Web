import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const GetStarted = () => {
  return (
    <>
        <div className='bg-white w-[591px] h-[148px] flex gap-[15px] items-center p-6 rounded-xl'>
            <div className='border w-[163px] h-[100px]'></div>
            <div className='flex flex-col'>
                <span className='font-bold'>Get Started as a Vendor</span>
                <span className='font-xs text-sm text-gray-500'>Seamless Convenience: Swift, Free Delivery to Your Door!</span>
            </div>
               <Link href="/get-started/vendor">
               
                  <div className='bg-gray-200 rounded-xl w-[40px] h-[40px] flex items-center justify-center hover:cursor-pointer'>
                  <FaArrowRight />
                  </div>
                
               </Link> 
                
        </div>
    </>
  )
}

export default GetStarted