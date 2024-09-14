"use client"
import React, { useState } from 'react'
import AcctCreated from './AcctCreated';

const VeriOTP = () => {
  const [succesfull, setSuccesful] = useState(false);
  return (
    <>
    {succesfull ? <AcctCreated/> : (
      <div className='flex justify-center items-center sm:h-screen'>
        <div className='max-w-[500px]  border m-5 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-5 text-center'>
        <span className='font-bold text-xl'>Confrm your email </span>
        <span className='text-gray-500'>We have sent a confirmation PIN to your email.
            <br />
            Please enter the PIN in th input below to confirm your email.
        </span>
        
        <div className='flex justify-center w-full gap-4'>
        <input className='w-[20%] text-center text-2xl rounded-md' type="number" placeholder='0' />
        <input className='w-[20%] text-center text-2xl rounded-md' type="number" placeholder='0' />
        <input className='w-[20%] text-center text-2xl rounded-md' type="number" placeholder='0' />
        <input className='w-[20%] text-center text-2xl rounded-md' type="number" placeholder='0' />
        </div>
       
    </div>
    </div>
    )}
    </>
    
    
  )
}

export default VeriOTP