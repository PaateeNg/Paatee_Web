"use client"
import BackgroundComponent from '@/components/vendorProfileMenu/background/BackgroundComponent'
import VendorProfileMenu from '@/components/vendorProfileMenu/vendorProfileMenu'
import React, { useState } from 'react'



const CustomerProfile = () => {
  const [showBackgroundComponent, setShowBackgroundComponent ] = useState(false);
  
    return (
      <>
      <div className='bg-gray-100 h-screen pt-11 text-sm'>
      { showBackgroundComponent && <BackgroundComponent setShowBackgroundComponent={setShowBackgroundComponent} />}
        <div className='max-w-6xl m-auto flex flex-col gap-6'>
          <h2 className='font-extrabold text-3xl'>Customer profile</h2>
          <VendorProfileMenu setShowBackgroundComponent={setShowBackgroundComponent}/>
        </div>

      </div>
      
      </>
      
    )
  }
  
  export default CustomerProfile