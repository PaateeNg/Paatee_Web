'use client'

import React, { useRef, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { useRouter } from 'next/navigation'
import { gql, useMutation, ApolloError } from '@apollo/client'

const Vendor = () => {
  const route = useRouter();
  const [error, setError] = useState('');

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null)
  const categoryRef = useRef<HTMLSelectElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);



    const [addUser, {loading}] = useMutation(REGISTER_VENDOR, {
      onCompleted: () => {
        route.push('/sign-in');  // Redirect to sign-in after successful registration
      },
      onError(err:ApolloError) {
        const error = err?.graphQLErrors?.[0]?.extensions?.originalError as { message?: string } ;
        if (error) {
          console.log(error?.message);//red line as a result from type check BE
          setError(error?.message || "")
        }
      },
      update(_, result){
        console.log(result)
      },
    })

    const handleSignUp = (e:any) => {
        e.preventDefault();

        addUser({
          variables: {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            category: categoryRef?.current?.value,
            businessName: businessNameRef?.current?.value,
            business_phone: phoneRef.current?.value,
            state: stateRef.current?.value,
            city: cityRef.current?.value,
          }
      })
    }
    
    const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={handleSignUp} className='flex flex-col gap-7'>
        <div className='flex flex-col'>
      <label className='font-semibold'>Email address</label>
      <input ref={emailRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder="Email"/>
    </div >
    <div className='flex flex-col relative'>
      <label className='font-semibold'>Password</label>
      <input ref={passwordRef} className=' rounded-full outline-none border-2 border-gray-200' type={showPassword ? 'text' : 'password'} placeholder="Password" />
      <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 bottom-4'>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
    </div>
    <div className='input'>
      <label className='font-semibold'>Vendor Category</label>
      <select ref={categoryRef} className='rounded-full outline-none border-2 border-gray-200 '>
        <option value="" disabled selected>SELECT CATEGORY</option>
        <option value="Drinks">Drinks</option>
        <option value="Cakes">Cakes</option>
        <option value="Catering">Catering</option>
        <option value="Interior decoration">Interior decoration</option>
        <option value="Potographer">Potographer</option>
        <option value="Fashion stylist">Fashion stylist</option>
        <option value="Hair stylist">Hair stylist</option>
        <option value="Makeup artist">Makeup artist</option>
        <option value="DJ">DJ</option>
        <option value="MC">MC</option>
      </select>
    </div>
    <div className="input">
      <label className='font-semibold'>Business Name</label>
      <input ref={businessNameRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder='Oliva Business'  />
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
    <p className='text-red-500 -mb-10 text-xl'>{error && error}</p>
    <AuthBtn text={`${loading ? 'please wait...' : 'register'}`}/>
    </form>
  )
}

const REGISTER_VENDOR = gql`
mutation register($email: String!, $password: String!, $state: String!, $city: String!, $category: String!, $businessName: String!, $business_phone: String!) {
createVendor(payload: {
  email: $email,
    state: $state,
    category: $category,
    business_phone: $business_phone,
    businessName: $businessName,
    city: $city
    password: $password
}){
  Response
}
}
`


export default Vendor