import React from 'react'
import PlannerList from '@/components/PlannerList/PlannerList'
import SecondaryBtn from '@/components/Buttons/SecondaryBtn'
import Link from 'next/link'

const TopVendors = () => {
  return (
    <div className="px-[51px] my-[80px]">
    <h4 className="text-[24px] font-bold mb-2 px-4">Our Top Vendors</h4>
    <div className='flex'>
      <PlannerList>
         <Link href={'/vendors'}>
          <SecondaryBtn text='See all vendors'/>
         </Link>
      </PlannerList>
    </div>
    </div>
  )
}

export default TopVendors