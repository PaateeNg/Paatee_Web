'use client'

import React, { useRef, useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { useRouter } from 'next/navigation'
import { gql, useMutation } from '@apollo/client'

const PartyPlanner = () => {
  const route = useRouter();
  const [error, setError] = useState('');
  const loading = false

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const businessNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null)
  const stateRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null)



const email = emailRef.current?.value;
const password= passwordRef.current?.value;
const  businessName=businessNameRef?.current?.value;
const phone= phoneRef.current?.value;
const state= stateRef.current?.value;
const city= cityRef.current?.value;
const terms = checkboxRef?.current?.checked
const userType = 'planner';

    // const [addUser, {loading}] = useMutation(REGISTER_VENDOR, {
    //   onCompleted: () => {
    //     route.push('/sign-in');  // Redirect to sign-in after successful registration
    //   },
    //   onError(err:ApolloError) {
    //     const error = err?.graphQLErrors?.[0]?.extensions?.originalError as { message?: string } ;
    //     if (error) {
    //       console.log(error?.message);//red line as a result from type check BE
    //       setError(error?.message || "")
    //     }
    //   },
    //   update(_, result){
    //     console.log(result)
    //   },
    // })

    const handleSignUp = async(e:any) => {
      e.preventDefault();

      if (!terms) {
        setError('Please accept the terms and conditions')
        return
      }

      console.log({email, terms, password,  businessName, phone, state, city })
      
      try{
        const res = await fetch('/api/user', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email, 
            password,
            userType,
            businessName,
            phone,
            state,
            city,
            terms
          })
        })

        if(res.ok){
          console.log('Success')
          route.push('/sign-in');
        }
        if(res.status === 400){
          setError("Email is already in use")
        }
      } catch (err) {
        console.error(err)
      }

      
      
      
      
      
      
      
      //   addUser({
      //     variables: {
      //       email: emailRef.current?.value,
      //       password: passwordRef.current?.value,
      //       category: categoryRef?.current?.value,
      //       businessName: businessNameRef?.current?.value,
      //       business_phone: phoneRef.current?.value,
      //       state: stateRef.current?.value,
      //       city: cityRef.current?.value,
      //     }
      // })
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
  
    <div className="input">
      <label className='font-semibold'>Business Name</label>
      <input ref={businessNameRef} className='rounded-full outline-none border-2 border-gray-200' type="text" placeholder='Oliva Business'  />
    </div>
    <div className='input'>
      <label className='font-semibold'>Business Phone</label>
      <input ref={phoneRef} className='rounded-full outline-none border-2 border-gray-200' type="number" placeholder='Oliva Business'/>
    </div>
    <div className='input'>
      <label className='font-semibold'>State</label>
      <select ref={stateRef} className='rounded-full outline-none border-2 border-gray-200 ' defaultValue={''}>
        <option value="" disabled selected>SELECT STATE</option>
        <option value="Lagos">Lagos</option>
        <option value="Enugu">Enugu</option>
      </select>
    </div>
    <div className='input'>
      <label className='font-semibold'>City</label>
      <select ref={cityRef} className='rounded-full outline-none border-2 border-gray-200 ' defaultValue={''}>
        <option value="" disabled selected>SELECT CITY</option>
        <option value="Lagos">Lagos</option>
        <option value="Enugu">Enugu</option>
      </select>
    </div>
    <div className="-mt-5">
      <input ref={checkboxRef} type="checkbox" className="mr-2" required />
      <span className="border-b border-gray-400">I agree with the terms and conditions</span>
    </div>
    <p className='text-red-500 -mb-10 text-xl'>{error && error}</p>
    <AuthBtn text={`${loading ? 'please wait...' : 'register'}`}/>
    </form>
  )
}




export default PartyPlanner




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