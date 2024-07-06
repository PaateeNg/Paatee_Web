import Image from 'next/image'

// interface PVCardProps {
//     imgSrc?: StaticImageData,
//     link?: string,
//     cat1?: string,
//     cat2?: string,
//     cat3?: string,
//     cat4?: string
// }

const VendorCard = () => {
  return (
    <>
        <div className=' w-[454px] m-3 shadow-md overflow-hidden' style={{borderRadius: "20px"}}>
            <Image src='planner1.png' height={163} width={454} alt="" />
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
    </>
  )
}

export default VendorCard