import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
import Link from 'next/link';
import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

const AcctCreated = () => {
  return (
    <div className='max-w-[500px]  border mt-10 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-5 text-center m-auto'>
        <FaCheckSquare className='bg-white text-4xl m-auto' />
        <h5 className='font-bold text-xl'>Account created successfully </h5>
        <span className='text-gray-500 bg-white  px-5 py-6 text-'>We have sent a confirmation PIN to your email.</span>
        <Link href={'/'}> <PrimaryBtn center={true} text="Explore home" /></Link>
        
        
       
    </div>
  )
}

export default AcctCreated