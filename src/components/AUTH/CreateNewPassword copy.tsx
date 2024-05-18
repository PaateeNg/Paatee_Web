import React from 'react'

const CreateNewPassword = () => {
  return (
    <>
        <div>
            <div className='w-[387px]  border m-5 p-5 rounded-2xl border-red-700 bg-[#ffecec] flex flex-col gap-3'>
                <span className='font-bold text-xl'>Create new Password </span>
                <span className='text-gray-500'>You can now create a new password for your account</span>
                <span className='mt-7'>New password</span>
                <input type="text" placeholder='Enter new password' className='bg-white border-gray-200 rounded-full' />
                <span>Must be a t least 8 charaters</span>
                <span className='mt-7'>Re-type password</span>
                <input type="text" placeholder='Enter password' className='bg-white border-gray-200 rounded-full' />
                <button className='bg-red-500 rounded-full mt-4 h-[3rem] text-white'>Reset Password</button>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default CreateNewPassword