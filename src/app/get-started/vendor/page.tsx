'use client'
import React from 'react'

const VendorStart = () => {
  return (
    <>
    <span className='flex item-center justify-center -mb-[3rem] text-[#F63D68] text-xl  mt-[2rem]'>Get started as a Vendor</span>
    <div className='flex m-[104px]  h-[448px] text-sm gap-[80px] '>
            {/* Left */}
        <div className='flex-2 flex flex-col w-[620px] h-[448px]'>
            <span>Are you ready to turn your passion into profit? Become a vendor and unlock a world of opportunities to showcase your products and reach a wider audience. Whether you&lsquo;re an artisan, a small business owner, or a seasoned entrepreneur, our platform provides the perfect launchpad for your success.</span>
            <span className='mt-[50px]'>1. How It Works:</span>
            <div className='ml-[20px] flex flex-col gap-[20px]'>
                <span>a. Sign Up: Create your vendor account and complete your profile with details about your products and brand.</span>
                <span>b. List Your Products: Showcase your items with high-quality photos and detailed descriptions to entice buyers.</span>
                <span>c. Manage Orders: Receive notifications of new orders, process them efficiently, and ship your products with ease.</span>
                <span>d. Grow Your Business: Continuously refine your offerings, engage with customers, and watch your business flourish.</span>
            </div>
        </div>
            {/* Right */}
        <div className='flex-1  flex flex-col w-[700px] h-[518px] text-xs '>
            <span className='bg-[#FEF0C7] p-[3px] rounded-full text-center'>Please share some business information  with us</span>
            <div className='flex flex-col gap-2'>
                <span className='mt-[20px] font-bold'>Name of business</span>
                <input type="text" placeholder='jamieohakwe@gmail.com' className='rounded-xl bg-white border border-gray-300'   />
                <span className='mt-[20px] font-bold'>Email address</span>
                <input type="text" placeholder='jamieohakwe@gmail.com' className='rounded-xl bg-white border border-gray-300'/>
                <span className='mt-[20px] font-bold'>Business phone</span>
                <input type="text" placeholder='jamieohakwe@gmail.com' className='rounded-xl bg-white border border-gray-300'/>
            </div>
            <button className=' text-white text-xl mt-[40px] w-[337px] h-[48px] bg-[#F63D68] rounded-full'>Next</button>
            <hr />
        </div>
    </div>
    <div className='bg-[#FFF1F3] flex p-[32px] justify-between -mt-[7rem]'>
        <div className='w-[620px] h-[116px] flex flex-col'>
            <span className='text-[#F63D68] '>Looking to throw your next party?</span>
            <span>Whether it&lsquo;s a birthday bash, a corporate event, or a special celebration, we&lsquo;ve got you covered. From venue selection to entertainment, catering, and everything in between, we&lsquo;ll bring your vision to life. Let&lsquo;s make it unforgettable! </span>
        </div>
        <div className='w-[233px] h-[48px] border border-[#F63D68] rounded-full  text-sm flex justify-center '>
            <span>Start as a customer instead</span>
        </div>
    </div>
    </>
  )
}

export default VendorStart