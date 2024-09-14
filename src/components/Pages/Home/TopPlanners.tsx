import SecondaryBtn from '@/components/Buttons/SecondaryBtn'
import PlannerList from '@/components/PlannerList/PlannerList'
import React from 'react'

const TopPlanners = () => {


  return (
    <div className="px-3 my-[80px]">
    <h4 className="text-[24px] font-bold mb-2 px-4">Our Top Planners</h4>
    <div className='flex'>
      <PlannerList>
        <SecondaryBtn text='See all planners'/>
      </PlannerList>
    </div>
    
    </div>
  )
}

export default TopPlanners