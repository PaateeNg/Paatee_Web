import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa"; 

type Comp = {
  title: string;
  desc: string;
}

const GetStartedComponent = ({title, desc}: Comp) => {
  return (
    <div className='p-3 flex items-center gap-3 mb-4'>
      <div className='bg-red-600 h-24 w-32 rounded-2xl'>
        <Image src={''} alt=''/>
      </div>
      <div className=''>
        <h3 className='font-semibold'>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className='text-2xl bg-gray-100 w-8 h-8 flex items-center justify-center'>
      < FaArrowRight  />
      </div>
      
    </div>
  )
}

export default GetStartedComponent