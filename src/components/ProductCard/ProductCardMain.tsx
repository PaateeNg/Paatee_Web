import Image from 'next/image'
import React from 'react'
import cart from '../../../public/assets/img/shopping-cart.png'
import type { StaticImageData } from 'next/image';

interface ProductProps {
    price: string;
    image: StaticImageData;
    label: string;
    tag?: string; 
  }

const ProductCardMain = (props: ProductProps) => {

    const {price, image, label, tag} = props;
  return (
    <>
         <div className='flex flex-col hover:shadow-xl'>            
            <div className='relative'>
            <Image height={267} width={360} className="" src={image} alt="" />
                <span className='absolute top-4 left-5 bg-yellow-400 rounded-xl p-1 px-3 font-bold'>{tag}</span>
            </div>
            <div className='p-5 text-lg flex gap-20'>
                <div className='flex flex-col'>
                    <span>{label}</span>
                    <span className='text-xl font-bold'>{price}</span>
                </div>
                <div className=' '>
                    <div className='bg-black rounded-md h-[40px] w-[40px] flex items-center justify-center'>

                        <Image height={24} width={24} className="" src={cart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCardMain