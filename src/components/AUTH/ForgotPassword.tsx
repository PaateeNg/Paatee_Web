import React from 'react'

const ForgotPassword = () => {
  return (
    <>
        <div>
            <div className='w-[387px] min-h-[258px] border m-5 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-3'>
                <span className='font-bold text-xl'>Forgot Password </span>
                <span className='text-gray-500'>Enter your email address in the field, and we would send you a recovery email to reset your password.</span>
                <span className='mt-7'>Email</span>
                <input type="text" placeholder='Enter email' className='bg-white border-gray-200 rounded-full' />
                <button className='bg-red-500 rounded-full mt-4 h-[3rem] text-white'>Confirm</button>
            </div>
        </div>
    </>
  )
}

export default ForgotPassword