'use client'

import React from 'react'
import { FaApple } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import SocialBtn from '@/components/auths/buttons/SocialBtn'
import Logo from '@/components/logo/Logo'
import Link from 'next/link'
import Customer from './Customer'
import Vendor from './Vendor'
import PartyPlanner from './PartyPlanner'

const signup = [
  {id:1, label: 'customer', content:<Customer/>},
  {id:2, label: 'vendor', content:<Vendor/>},
  {id:3, label: 'party planner', content:<PartyPlanner/>}
]

const SignUp = () => {
    //For Active menu
    const [activeMenu, setActiveMenu] = useState(signup[0].id);

    const renderedComponent = () => {
      const activeItem = signup.find(item => item.id === activeMenu)
      return activeItem ? activeItem.content : null
    }


  return (
    <>
    <div className='flex flex-col px-6 pt-6 sm:max-w-[500px] pb-5 sm:m-auto bg-white'>
      <h2 className='font-bold mb-2 text-2xl'>Create your account</h2>
      <p className='font-light mb-2'>Become a Paatee person by creating an account</p>
      <div className='flex justify-between mt-10'>
        {
          signup.map(menu => (
            <div 
            className={`cursor-pointer py-2 px-5 mb-5 text-xl focus:outline-none ${activeMenu === menu.id ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
            onClick={() => setActiveMenu(menu.id)}
            key={menu.id}
            >
              {menu.label}
            </div>
          ))
        }
      </div>
      <div className='mb-8'>
        {renderedComponent()}
      </div>
      <div className='flex justify-center items-center gap-4 mb-8'>
        <div className='h-[1px] w-[80%] bg-[#b5b6b8]'/>
        <p className='text-center '>or</p>
        <div className='h-[1px] w-[80%] bg-[#b5b6b8]'/>
      </div>
      <SocialBtn social={<FcGoogle />} text={'Sign in with Google'}/>
      <SocialBtn social={<FaApple />} text={'Sign in with Apple Id'}/>
      <div className='text-center mt-4'>
      <p>If you already have an account just <Link href={'./sign-in'} className='text-[#F63D6B] font-semibold'>Sign in</Link></p>
      
      </div>
    </div>
  </>
  )
}

export default SignUp