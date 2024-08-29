"use client"

import React from 'react'
import AuthBtn from '../../Buttons/AuthBtn'
import { useRouter } from 'next/navigation'


const ForgotPassword = () => {
  const route = useRouter();

  const handleForgotPassword = (e: any) => {
    e.preventDefault();
    route.push('/forgot-password/new-password')
  }
  return (
    <>
      <div className='flex flex-col gap-4 px-6 pt-20 sm:max-w-[500px] sm:m-auto'>
        <h2 className='font-bold text-2xl'> Forgot password</h2>
        <p className='font-light'>Enter your email address in the field and we would send you a recovery email to reset your password</p>
       
        <p className='or'>or</p>
        <form onSubmit={handleForgotPassword} className='flex flex-col gap-7'>
          <div className='flex flex-col'>
            <label>Email address</label>
            <input className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="Email"/>
          </div >
          <AuthBtn text={'Confirm'}/>
        </form>
      </div>
    </>
  )
}

export default ForgotPassword