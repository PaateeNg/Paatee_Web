"use client"

import Image from 'next/image'
import Link from 'next/link'
import SocialBtn from '../buttons/SocialBtn'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react'
import Logo from '@/components/logo/Logo'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);


const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  //code here
}

  return (
    <>
      <div className='flex flex-col gap-5 px-6 pt-6 sm:max-w-[500px] sm:m-auto'>
        <Logo/>
        <h2 className='font-bold text-2xl'>Sign in</h2>
        <p className='font-light'>Get into your account and bein exploring</p>
        <SocialBtn social={<FcGoogle />} text={'Sign in with Google'}/>
        <SocialBtn social={<FaApple />} text={'Sign in with Apple Id'}/>
        <p className='or'>or</p>
        <form onSubmit={handleLogin} className='flex flex-col gap-7'>
          <div className='flex flex-col'>
            <label>Email address</label>
            <input className='rounded-full outline-none border-2 border-gray-200' type="email" placeholder="Email"/>
          </div >
          <div className='flex flex-col relative'>
            <label>Password</label>
            <input className='  rounded-full outline-none border-2 border-gray-200' type={showPassword ? 'text' : 'password'} placeholder="Password" />
            <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 bottom-4'>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
          </div>
          <div className='flex justify-between text-sm -mt-4'>
          <div>
            <input type="checkbox" className='mr-2' /><span>Keep me signed in</span>
          </div>
          <Link href={'/forgot-password'} className='text-[#F63D6B] font-semibold'>Forgot password</Link>
          </div>
          <AuthBtn text={'Sign in'}/>
        </form>
        <div className='text-center mt-4'>
        <p>If you don't have an account with us you could</p>
        <Link href={'/sign-up'} className='text-[#F63D6B] font-semibold'>Sign up</Link>
        </div>
      </div>
    </>
  )
}

export default Login