import React from 'react'
import SecondaryBtn from '@/components/Buttons/SecondaryBtn'
import Link from 'next/link'
import VendorList from './vendorList/VendorList'

const TopVendors = () => {
  return (
    <div className="px-3 my-[80px]">
    <h4 className="text-[24px] font-bold mb-2 px-4">Our Top Vendors</h4>
    <div className='mb-3'>
      <VendorList />
    </div>
    <Link href={'/vendors'}>
      <SecondaryBtn text='See all vendors'/>
    </Link>
    </div>
  )
}

export default TopVendors