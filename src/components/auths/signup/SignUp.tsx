'use client'

import React from 'react'
import { FaApple } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import SocialBtn from '@/components/auths/buttons/SocialBtn'
import Logo from '@/components/logo/Logo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const route = useRouter();

    const handleSignUp = (e:any) => {
      e.preventDefault();
      route.push('/sign-up/verification-otp')
    }

  return (
    <>
    <div className='flex flex-col gap-5 px-6 pt-6 sm:max-w-[500px] sm:m-auto'>
      <Logo/>
      <h2 className='font-bold text-2xl'>Create your account</h2>
      <p className='font-light'>Become a Paatee person by creating an account</p>
      <SocialBtn social={<FcGoogle />} text={'Sign in with Google'}/>
      <SocialBtn social={<FaApple />} text={'Sign in with Apple Id'}/>
      <p className='or'>or</p>
      <form onSubmit={handleSignUp} className='flex flex-col gap-7'>
         <div className='flex flex-col'>
          <label>Full name</label>
          <input className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="Name"/>
        </div >
        <div className='flex flex-col'>
          <label>Email address</label>
          <input className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="Email"/>
        </div >
        <div className='flex flex-col relative'>
          <label>Password</label>
          <input className=' rounded-full outline-none border-2 border-gray-200' type={showPassword ? 'text' : 'password'} placeholder="Password" />
          <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 bottom-4'>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
        </div>
        <span className='font-light text-xs -mt-7 text-gray-600'>Must be at least8 characters</span>
        <div>
        <input type="checkbox" className='mr-2' /><span className='border-b border-gray-400'>I agree with the terms and conditions</span>
        </div>
        <AuthBtn text={'Proceed'}/>
      </form>
      <div className='text-center mt-4'>
      <p>If you already have an account just <Link href={'./sign-in'} className='text-[#F63D6B] font-semibold'>Sign in</Link></p>
      
      </div>
    </div>
  </>
  )
}

export default SignUp