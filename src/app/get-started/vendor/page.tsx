'use client'
import React from 'react'

const VendorStart = () => {
  return (
    <section className='flex flex-col pt-16'>
    <h3 className=' text-[#F63D68] text-xl text-center mb-16 '>Get started as a Vendor</h3>
    <div className='flex flex-col gap-12 text-sm  max-w-6xl mb-44 m-auto '>
         <div className='flex justify-between gap-6'>
               {/* Left */}
            <div className='flex-1'>
                <h3>Are you ready to turn your passion into profit? Become a vendor and unlock a world of opportunities to showcase your products and reach a wider audience. Whether you&lsquo;re an artisan, a small business owner, or a seasoned entrepreneur, our platform provides the perfect launchpad for your success.</h3>
                <h5 className='mt-[50px]'>1. How It Works:</h5>
                <div className='ml-[20px] flex flex-col gap-[20px]'>
                    <span>a. Sign Up: Create your vendor account and complete your profile with details about your products and brand.</span>
                    <span>b. List Your Products: Showcase your items with high-quality photos and detailed descriptions to entice buyers.</span>
                    <span>c. Manage Orders: Receive notifications of new orders, process them efficiently, and ship your products with ease.</span>
                    <span>d. Grow Your Business: Continuously refine your offerings, engage with customers, and watch your business flourish.</span>
                </div>
            </div>
                {/* Right */}
            <div className='flex-1'>
                <h5 className='bg-[#FEF0C7] p-[3px] mb-5 w-[70%] m-auto rounded-full text-center text-md'>Please share some business information  with us</h5>
                <form>
                    <div className='input'>
                        <label className='font-swmibold'>Name of business</label>
                        <input type="text" placeholder='Oliva Business' />
                    </div>
                    <div className='input'>
                        <label className='font-swmibold'>Email Address</label>
                        <input type="text" placeholder='Oliva Business' />
                    </div>
                    <div className='input'>
                        <label className='font-semibold'>Business Phone</label>
                        <input type="text" placeholder='Oliva Business' />
                    </div>
                    <button className=' text-white text-xl w-[337px] h-[48px] bg-[#F63D68] rounded-full'>Next</button>
                </form>
            </div>
         </div>

            {/* bottm */}
        <div className='bg-[#FFF1F3] flex p-[28px] justify-between items-center'>
            <div className='w-[620px] h-[116px] flex flex-col gap-3'>
                <h6 className='text-[#F63D68] font-bold '>Looking to throw your next party?</h6>
                <span>Whether it&lsquo;s a birthday bash, a corporate event, or a special celebration, we&lsquo;ve got you covered. From venue selection to entertainment, catering, and everything in between, we&lsquo;ll bring your vision to life. Let&lsquo;s make it unforgettable! </span>
            </div>
            <button className=' text-[#F63D68] border-[#F63D68] border-2 text-xl w-[337px] h-[48px]  rounded-full'>Start as a customer</button>
        </div>
    </div>
    
    </section>
  )
}

export default VendorStart