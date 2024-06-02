import Image from 'next/image'
import React from 'react'
import cart from '../../../public/assets/img/shopping-cart.png';
import { StaticImageData } from 'next/image';

const ProductCard: React.FC<{ img?: StaticImageData, category?: string, categoryBg?: string  }> = ({img, category, categoryBg}) => {
  return (
    <>
        <div className='flex flex-col w-[360px] border-[#98A2B3] overflow-hidden' style={{"borderWidth": "0.2px"}}>
            <div className='relative'>
                {
                    (img !== undefined) && 
                     <Image className="" src={img} alt="" style={{"width": "auto", "height": "267px"}}/>
                }
                {(category !== undefined) && <span className={`absolute top-4 left-5 bg-${categoryBg !== undefined ? categoryBg : 'yellow-400'}  rounded-xl p-1 px-3 font-bold`}>{category}</span>}
            </div>
                {(img == undefined) &&
                    <div className='p-5 h-full grow relative'>
                    
                    <span className='font-bold block text-4xl'>FAVORITE</span>
                    <span className='block text-lg mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                    <span className='underline text-3xl absolute bottom-0 pb-4 text-[#F63D68]'>SEE ALL</span>
                    </div>
                }
            {
                    (img !== undefined) && 
                    
                    <div className='p-5 text-lg flex gap-20 justify-between pb-5'>
                        <div className='flex flex-col'>
                            <span>2 layer fruit cake</span>
                            <span className='text-xl font-bold'>$14</span>
                        </div>
                        <div className='  '>
                            <div className='bg-black mt-2 rounded-md h-[40px] w-[40px] flex items-center justify-center'>
                                <Image height={24} width={24} className="" src={cart} alt="" />
                            </div>
                        </div>
                    </div>
            }
        </div>
    </>
  )
}

export default ProductCard

