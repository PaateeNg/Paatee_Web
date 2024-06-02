import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
        <div className='flex'>
          <div className='bg-gray-200 flex-1 h-[45rem] flex items-center justify-center'>
            <Image width={217} height={333} alt='login picture'  src='/assets/img/login-pic.png' />
          </div>
          <div className='bg-[#f9f9f9]  flex-1 flex justify-center items-center'>
              <div className='flex flex-col items-center '>
                <span  className='text-[32px] font-bold'>Login</span>
                <div className='bg-[#FEF0C7] w-[464px] h-[414px] rounded-3xl p-8'>
                    <div >
                      <form action=""className='flex flex-col gap-3'>
                        <label htmlFor="">State</label>
                        <input type='text' placeholder='Jamie Ohakwe' className='rounded-md' />
                        <label htmlFor="" >City</label>
                        <input type="text" placeholder='Lekki'className='rounded-md'/>
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder='jamieOhakwe@gmail.com'className='rounded-md'/>
                        <button className='p-3 bg-[#F63D6B] rounded-full mt-5 text-white'>Log In</button>
                      </form>
                    </div>
                </div>
                <div className='text-gray-500'>Go back 
                <Link href="/">
                
                  <span className='text-[#F63D6B] ml-2'>HOME</span>
                </Link>
                
                </div>
              </div>
          </div>
             
        </div>
    </>
  )
}

export default Login