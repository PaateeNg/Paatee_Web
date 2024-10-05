"use client"

import VendorProfileMenu from '@/components/vendorProfileMenu/vendorProfileMenu'
import React, { useState } from 'react'




const  Vendorprofile = () => {
    return (
      <>
      <div className='bg-gray-100 h-screen pt-11 text-sm'>
        <div className='max-w-6xl m-auto flex flex-col gap-6'>
          <h2 className='font-extrabold text-3xl'>Vendor profile</h2>
          <VendorProfileMenu/>
        </div>
      </div>
      
      </>
      
    )
  }
  
  export default Vendorprofile