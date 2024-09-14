"use client"

import AuthBtn from '@/components/Buttons/AuthBtn'
import React, { useState } from 'react'
import PasswordResetSucc from './PasswordResetSucc'

const CreateNewPassword = () => {
  const [successful, setSuccessful] = useState(false)

  const handkeNewPassword = (e:any) => {
    e.preventDefault();
    setSuccessful(true)
  }
  return (
    <>
      <div className='flex justify-center items-center'> 
        {successful ? <PasswordResetSucc/> : (
          <form onSubmit={handkeNewPassword} className='max-w-[500px]  border m-5 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-3'>
          <span className='font-bold text-xl'>Create new Password </span>
          <span>You can now create a new password for your account</span>
          <span className='mt-7'>New password</span>
          <input type="text" placeholder='Enter new password' className='bg-white border-gray-200 rounded-full' />
          <span className='text-sm text-gray-700 -mt-2'>Must be a t least 8 charaters</span>
          <span className='mt-7'>Re-type password</span>
          <input type="text" placeholder='Enter password' className='bg-white border-gray-200 rounded-full' />
          <AuthBtn text={'Reset Password'}/>
      </form>
        )}
        
      </div>
    </>
  )
}

export default CreateNewPassword