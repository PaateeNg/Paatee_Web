import React from 'react'
import Image from 'next/image'
import {Vendor} from "@/lib/queries/GET_VENDORS"

const PVCard = ({ email, firstName, lastName } : Vendor)=> {
  return (
    <>
        <div className=' w-[454px] m-3 shadow-md overflow-hidden' style={{borderRadius: "20px"}}>
            <Image src={'/planner1.png'} height={163} width={454} alt="" />
            <div className='p-5'>
                <div className='mt-5 mb-3'>
                    <div>
                        <span className='font-bold '>{firstName}</span>
                        <div className='text-gray-500'>
                            <span>{email}</span>
                            <span className='ml-4'>{lastName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PVCard