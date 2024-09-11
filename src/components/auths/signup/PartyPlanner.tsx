'use client'

import React, { useRef, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { useRouter } from 'next/navigation'
import { gql, useMutation } from '@apollo/client'


const PartyPlanner = () => {
  const route = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const businessRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null)
  const stateRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);


  const [addUser, {loading}] = useMutation(REGISTER_PLANNER, {
    onCompleted: () => {
      route.push('/sign-in');  // Redirect to sign-in after successful registration
    },
    update(proxy, result){
      console.log(result)
    },
    
  })

  const handleSignUp = (e:any) => {
      e.preventDefault();
      addUser({
        variables: {
          email: emailRef?.current?.value,
          password: passwordRef?.current?.value,
          business_phone: phoneRef?.current?.value,
          state: stateRef?.current?.value,
          city: cityRef?.current?.value,
          businessName: businessRef?.current?.value
        }
      });
      // route.push('/')
    }
  
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={handleSignUp} className='flex flex-col gap-7'>
        <div className='flex flex-col'>
      <label>Email address</label>
      <input ref={emailRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="Email"/>
    </div >
    <div className='flex flex-col relative'>
      <label>Password</label>
      <input ref={passwordRef} className=' rounded-full outline-none border-2 border-gray-200' type={showPassword ? 'text' : 'password'} placeholder="Password" />
      <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 bottom-4'>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
    </div>
    <div className='input'>
      <label className='font-swmibold'>Name of business</label>
      <input ref={businessRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder='Oliva Business'/>
    </div>
    <div className='input'>
      <label className='font-semibold'>Business Phone</label>
      <input ref={phoneRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder='Oliva Business'/>
    </div>
    <div className='input'>
      <label className='font-semibold'>State</label>
      <select ref={stateRef} className='rounded-full outline-none border-2 border-gray-200 '>
        <option value="" disabled selected>SELECT STATE</option>
        <option value="Lagos">Lagos</option>
        <option value="Enugu">Enugu</option>
      </select>
    </div>
    <div className='input'>
      <label className='font-semibold'>City</label>
      <select ref={cityRef} className='rounded-full outline-none border-2 border-gray-200 '>
        <option value="" disabled selected>SELECT CITY</option>
        <option value="Lagos">Lagos</option>
        <option value="Enugu">Enugu</option>
      </select>
    </div>
    <div className='-mt-5'>
    <input type="checkbox" className='mr-2' /><span className='border-b border-gray-400'>I agree with the terms and conditions</span>
    </div>
        
    <AuthBtn text={`${loading ? 'lplease wait...' : 'register'}`}/> 
    </form>
  )
}


  const REGISTER_PLANNER = gql`
  mutation register($email: String!, $password: String!, $state: String!, $city: String!, $business_phone: String!, $businessName: String!) {
  createPlanner(payload: {
    email: $email,
    state: $state,
    business_phone: $business_phone,
    businessName: $businessName,
    city: $city
    password: $password
  }){
    Response
  }
}`

export default PartyPlanner