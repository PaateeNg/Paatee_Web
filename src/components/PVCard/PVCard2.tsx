import React from 'react'
import planner1 from '../../../public/assets/img/planner1.png'
import Image, { StaticImageData } from 'next/image'

interface PVCardProps {
    imgSrc?: StaticImageData,
    link?: string,
    cat1?: string,
    cat2?: string,
    cat3?: string,
}

const PVCard2: React.FC<PVCardProps> = ({imgSrc = planner1, link = "", cat1, cat2, cat3}) => {
  return (
    <>
        <div className=' w-[400px] m-3 shadow-md overflow-hidden' style={{borderRadius: "20px"}}>
            <Image src={imgSrc} height={163} width={454} alt="" />
            <div className='p-5'>
                <div>
                    <ul className='flex gap-3 text-sm'>
                        {(cat1 != undefined) && <li className='bg-yellow-400 rounded-xl p-1 px-2'>{cat1}</li>}
                        {(cat2 != undefined) && <li className='bg-yellow-400 rounded-xl p-1 px-2'>{cat2}</li>}
                        {(cat3 != undefined) && <li className='bg-yellow-400 rounded-xl p-1 px-2'>{cat3}</li>}
                    </ul>
                </div>
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

export default PVCard2