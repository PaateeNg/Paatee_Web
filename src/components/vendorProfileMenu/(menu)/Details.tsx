import { AuthContext } from "@/lib/context/UserContext";
import {  GET_CURRENT_VENDOR, Vendor } from "@/lib/queries/GET_CURRENT_VENDOR";
import { useQuery } from "@apollo/client";
import { useContext } from "react";



const Details = () => {
    const {setUserComplete} = useContext(AuthContext)
    const {data} = useQuery<Vendor>(GET_CURRENT_VENDOR);
    console.log("data:", data)

      // Extract vendor details from the query response
  const vendor = data?.currentVendor;

  if (!vendor) {
    return <p>No vendor details found.</p>;
  }

  const { email,firstName, lastName, business_phone, businessName, city, state } = vendor as any;

if(!email || !firstName ||  !lastName|| !business_phone || !businessName || !city || !state ){
    setUserComplete(false)
}


    
    return (
    <>
    <div className="flex flex-col gap-3">
        <div className="flex gap-5">
            <div className='w-14 h-12 rounded-xl bg-red-600' />
            <div>
                <h4 className="text-gray-500">Business Name</h4>
                <p>{businessName}</p>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">

            <div className="flex flex-col gap-8">
                <div>
                    <h4 className="text-gray-500">Business phone</h4>
                    <p>{business_phone}</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Business email</h4>
                    <p>{email}</p>
                </div>
                <div className="flex justify-between">
                <div>
                    <h4 className="text-gray-500">Physical address</h4>
                    <p>{city}, {state}</p>
                </div>
            </div>
            </div>

            

            <div>
                <h4 className="text-gray-500">Business description</h4>
                <p className="leading-snug">Sales of party items and accessories for birthdays <br /> and official events. We setup the birthdays
                <br /> and official events. We setup the location and <br />
                resources foreverything about your party</p>
            </div>

            <div className="flex flex-col gap-5">
                
                <div>
                    <h4 className="text-gray-500">X</h4>
                    <p>@Cassiechipsng</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Instagram</h4>
                    <p>@Cassie_chipsng</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Ng of reviews</h4>
                    <p>12</p>
                </div>
            </div>
            
        </div>
        
    </div>

 

    </>
    )
}

export default Details