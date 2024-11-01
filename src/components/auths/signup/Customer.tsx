'use client'

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client'


const Customer = () => {
    const route = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');

    const loading = false

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const userType = 'customer';
    const terms = checkboxRef?.current?.checked
    
    // const [addUser, {loading }] = useMutation(REGISTER_CUSTOMER, {
    //   onCompleted: () => {
    //     route.push('/sign-in');  // Redirect to sign-in after successful registration
    //   },
    //   update(_, result){
    //     console.log(result)
    //   },
    //   onError(err){
    //     //i'll provide error later
    //   },
      
    // })

    const handleSignUp = async (e:any) => {
        e.preventDefault();

        if (!terms) {
          setError('Please accept the terms and conditions')
          return
        }

        console.log(terms)
        
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
        } catch (err:any) {
          console.log(err)
          setError(err.message)
        }

        
        // addUser({
        //   variables: {
        //     email: email,
        //     password: password
        //   }
        // });
      }
  return (
    <form onSubmit={handleSignUp} className='flex flex-col gap-7'>
    <div className='flex flex-col'>
      <label>Email address</label>
      <input ref={emailRef} className='rounded-full outline-none border-2 border-gray-200' type="email" placeholder="Email"/>
    </div >
    <div className='flex flex-col relative'>
      <label>Password</label>
      <input ref={passwordRef} className=' rounded-full outline-none border-2 border-gray-200' type={showPassword ? 'text' : 'password'} placeholder="Password" />
      <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 bottom-4'>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
    </div>
    <span className='font-light text-xs -mt-7 text-gray-600'>Must be at least8 characters</span>
    <div>
    <input ref={checkboxRef} type="checkbox" className='mr-2' /><span className='border-b border-gray-400'>I agree with the terms and conditions</span>
    </div>
    <p className='text-red-500 -mb-10 text-xl'>{error && error}</p>
    <AuthBtn text={`${loading ? 'lplease wait...' : 'register'}`}/>
  </form>
  )
}


const REGISTER_CUSTOMER = gql`
 mutation register($email: String!, $password: String!) {
  createCustomer(payload: {
    email: $email,
    password: $password
  }) {
    Response
  }
}

  
`;

export default Customer