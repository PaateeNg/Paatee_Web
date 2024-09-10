"use client"

import Image from 'next/image'
import Link from 'next/link'
import SocialBtn from '../buttons/SocialBtn'
import AuthBtn from '@/components/Buttons/AuthBtn'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useRef, useState } from 'react'
import Logo from '@/components/logo/Logo'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'

const Login = () => {
  const route = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLSelectElement>(null);

  const[login, {loading}] = useMutation(LOGIN_USER, {
    onCompleted: () => {
      route.push('/')
    },
    update(proxy, result){
      console.log(result)
    },
    onError(err){
      setError(err.message)
    }
  })


const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  login({
    variables: {
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
      loginAs: loginRef?.current?.value,
    }
  });
}

  return (
    <>
      <div className='flex flex-col gap-5 px-6 pt-6 sm:max-w-[500px] sm:m-auto'>
        <Logo/>
        <h2 className='font-bold text-2xl'>Welcome back!</h2>
        <p className='font-light'>Sign into your account to pick where you left off</p>
        <SocialBtn social={<FcGoogle />} text={'Sign in with Google'}/>
        <SocialBtn social={<FaApple />} text={'Sign in with Apple Id'}/>
        <p className='or'>or</p>
        <form onSubmit={handleLogin} className='flex flex-col gap-7'>
          <div className='flex flex-col'>
            <label>Email address</label>
            <input ref={emailRef} className='rounded-full outline-none border-2 border-gray-200' type="email" placeholder="Email"/>
          </div >
          <div className='flex flex-col relative'>
            <label>Password</label>
            <input ref={passwordRef} className='  rounded-full outline-none border-2 border-gray-200' type={showPassword ? 'text' : 'password'} placeholder="Password" />
            <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 bottom-4'>{showPassword ? <IoMdEye /> : <IoMdEyeOff />}</span>
          </div>
          <div className='input'>
          <label className='font-semibold'>Vendor Category</label>
          <select ref={loginRef} className='rounded-full outline-none border-2 border-gray-200 '>
            <option value="" disabled selected>SELECT CATEGORY</option>
            <option value="asUser">Customer</option>
            <option value="asVendor">Vendor</option>
            <option value="Drinks">Planner</option>
          </select>
        </div>
          <div className='flex justify-between text-sm -mt-4'>
          <div>
            <input type="checkbox" className='mr-2' /><span>Keep me signed in</span>
          </div>
          <Link href={'/forgot-password'} className='text-[#F63D6B] font-semibold'>Forgot password</Link>
          </div>
          <p className='text-red-500 -mb-10 text-xl'>{error && error}</p>
          <AuthBtn text={`${loading ? 'please wait...' : 'register'}`}/>
        </form>
        <div className='text-center mt-4'>
        <p>If you don't have an account with us you could</p>
        <Link href={'/sign-up'} className='text-[#F63D6B] font-semibold'>Sign up</Link>
        </div>
      </div>
    </>
  )
}

const LOGIN_USER = gql`
   mutation login ($email: String!, $password: String!, $loginAs: String!){
    login(payload: {
    email: $email
    password: $password
    loginAs: $loginAs
  }){
      email
      accessToken
      isUser
  }
}
`

export default Login