"use client"
import CustomerProfile from '@/components/profile/CustomerProfile'
import PlannerProfile from '@/components/profile/PlannerProfile'
import Vendorprofile from '@/components/profile/VendorProfile'
import { useParams } from 'next/navigation'



const Profile = () => {
  const {profileId} = useParams()
  console.log(profileId)
  
  if(profileId  === 'customer'){
    return <CustomerProfile/>
  }else if (profileId === 'vendor'){
    return <Vendorprofile/>
  }else if(profileId === 'planner'){
    return <PlannerProfile/>
  }
    
      

  }
  
  export default Profile