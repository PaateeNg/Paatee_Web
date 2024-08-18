import React from 'react'
import { GET_VENDORS, GetVendorData } from "@/lib/queries/GET_VENDORS"
import { useQuery } from "@apollo/client"
import PlannerCard from '@/components/PVCard/PVCard'

const PlannerList = ({children} : {children: JSX.Element}) => {
    const  {loading, error, data} = useQuery<GetVendorData>(GET_VENDORS)
  
    if(loading) return <div>loading...</div>
    if(error) return <div>error...</div>
  
     //come to change to vendors later//for now the array is empty no mock data
    const vendors = data?.getAllUser || [];
    // console.log(vendors)

  return (
    <div className='flex flex-col gap-5 items-center overflow-hidden'>
     <div className='flex'>
     {vendors.map( (vendor) => { 
          return (
            <div key={vendor.email}>
              <PlannerCard email={vendor.email} firstName={vendor.firstName} lastName={vendor.lastName} />
            </div>
          )
        })}
     </div>

        {children}
    </div>
  )
}

export default PlannerList