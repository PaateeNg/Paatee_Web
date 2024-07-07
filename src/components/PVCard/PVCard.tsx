import React from 'react'
import planner1 from '../../../public/assets/img/planner1.png'
import Image, { StaticImageData } from 'next/image'

interface PVCardProps {
    imgSrc?: StaticImageData,
    email?: string,
    firstName?: string,
    LastName?: string,

}

const PVCard: React.FC<PVCardProps> = ({imgSrc = planner1, }) => {
  return (
    <>
        <div className=' w-[454px] m-3 shadow-md overflow-hidden' style={{borderRadius: "20px"}}>
            <Image src={imgSrc} height={163} width={454} alt="" />
            <div className='p-5'>
                <div className='mt-5 mb-3'>
                    <div>
                        <span className='font-bold '>Elevant Events by Sarah</span>
                        <div className='text-gray-500'>
                            <span>5k reviews</span>
                            <span className='ml-4'>Free to be booked</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PVCard