import React, { useRef, useState } from 'react'

const Settimgs = () => {
  const [error, setError] = useState('');

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null)
  const genderRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div className='flex justify-between mb-10'>
        <h2 className='font-bold'>Profile details</h2>
        <div className='flex items-center gap-4'>
          <div className='text-[#F63D68] font-semibold'>Edit profile</div>
          <div className='bg-[#F63D68] text-white rounded-xl px-4 py-1'>Change password</div>
        </div>
      </div>

      <form className='flex flex-col gap-7'>
        <div className='flex flex-col'>
          <label>First name</label>
          <input ref={firstNameRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="First Name"/>
        </div >
        <div className='flex flex-col'>
          <label>Last name</label>
          <input ref={lastNameRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="Last Name"/>
        </div >

    <div className='input'>
      <label>Business Phone</label>
      <input ref={phoneRef} className='rounded-full outline-none border-2 border-gray-200' type="number" placeholder='Oliva Business'/>
    </div>
    <div className='input'>
      <label>Gender</label>
      <select ref={genderRef} className='rounded-full outline-none border-2 border-gray-200 '>
        <option value="" disabled selected>SELECT STATE</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </div>
    <div className='flex flex-col'>
      <label>Date of birth</label>
      <input ref={dateRef} className='rounded-full outline-none border-2 border-gray-200' type="date" placeholder="Date of birth"/>
    </div >
    <div className='-mt-5'>
    </div>
    </form>
    </div>
  )
}

export default Settimgs