"use client";
import { useContext } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Link from "next/link";
import { AuthContext } from "@/lib/context/UserContext";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_VENDOR, Vendor } from "@/lib/queries/GET_CURRENT_VENDOR";

export default function HomeBanner() {
  //placed the complete profile there 
  const {userComplete, setUserComplete} = useContext(AuthContext)

  //retrive current user
  const {data} = useQuery<Vendor>(GET_CURRENT_VENDOR);
  const user = data?.currentVendor as any

  const { email,firstName, lastName, business_phone, businessName, city, state } = user as any;

  if(!email || !firstName ||  !lastName || !business_phone || !businessName || !city || !state ){
      setUserComplete(true)
  }

  return (

        <div className="relative px-1 flex flex-col gap-3 justify-center  items-center bg-white h-[550px] sm:h-[calc(100vh-90px)] w-ful">
          {/* usercomplete check */}
           {userComplete &&
             <div className="absolute top-0 left-0 bg-[#f63d6823] w-full text-center md:flex justify-between items-center p-2">
              <p>Please give us more information</p>
              <Link href={`/profile/${user?.userType}`} className="bg-[#F63D68] text-sm text-white px-5 py-1 rounded-lg">
              Complete your profile
              </Link>
            </div>
           }

          {/* ends */}
          <div className="md:flex w-40%] p-[5px] md:bg-[#f63d6823] rounded-full gap-2" >
            <h5 className='bg-white p-[2px] text-[#F63D68] px-3 border border-[#f63d685e] w-fit m-auto mb-2 md:mb-0 md:border-none font-bold rounded-full text-center text-sm'>Party planning made easy </h5>
            <h5 className='text-[#F63D68] bg-[#f63d6823] px-3 w-fit m-auto font-bold rounded-full text-center text-sm'>Vendors, venue and planners all in one place</h5>
          </div>
          <h1 className="block text-center text-5xl font-semibold text-[35px] md:text-[56px] ">Your perfect Celebration Starts Here </h1>
          <p className="block text-center text-[15px] md:text-lg max-w-[600px] mb-8">
            Say goodebye to planning headaches! Connect with top vendors for every event. 
            Explore  compare and book effortlessly to make your celebration unforgetable
          </p>
          <Link href="/about" >
            <PrimaryBtn center={true} text="Learn more" />
          </Link>
        </div>

  
        
     
  );
}
