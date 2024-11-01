// import { AuthContext } from "@/lib/context/UserContext";
// import {  GET_CURRENT_VENDOR, Vendor } from "@/lib/queries/GET_CURRENT_VENDOR";
// import { useQuery } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { useVendor } from "@/lib/context/VendorContext";
import { FaEdit } from "react-icons/fa";
import { menuItems } from "./menuObj/menu";
import BackgroundComponent from "../background/BackgroundComponent";



const Details = () => {
    const {vendor, setCompleteProfile} = useVendor() as any;
    const [showBackgroundComponent, setShowBackgroundComponent ] = useState(false);
    const [activeMenu, setActiveMenu] = useState(menuItems[0].id)

    useEffect(() => {
        if(vendor){
            const { firstName, lastName, x, ig, description } = vendor;
            if  (!firstName || !lastName || !x || !ig || !description ){
                setCompleteProfile(true)
            }
        }
    }, [vendor]);


//    useEffect(() => {
//     const fetchUserData = async () => {
//         if(session?.user?.businessName){
//             const businessName = session?.user?.businessName;
//             console.log("businessName", businessName)

//             try {
//                 const res = await fetch(`/api/user/${businessName}`)
//                 if(!res.ok){
//                     throw new Error('Failed to fetch user data');
//                 }
//                 const data = await res.json()
//                 console.log(data)
//                 setVendor(data)
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         }
//     }
//     fetchUserData()
//    }, [])
   

//     const {data} = useQuery<Vendor>(GET_CURRENT_VENDOR);
//     console.log( data?.currentVendor)

//       // Extract vendor details from the query response
//   const vendor = data?.currentVendor;

 

  const {_id, email, firstName, lastName, phone, businessName, city, state, ig, x, description } = vendor as any;
  console.log('email', _id)
 


if (!vendor) {
    return <p>No vendor details found.</p>;
  } 
    return (
    <>
    { showBackgroundComponent && <BackgroundComponent activeMenu={activeMenu} setShowBackgroundComponent={setShowBackgroundComponent}/> }
    <div className=" flex flex-col gap-3">
        <div className="flex justify-between">
            <div className="flex gap-5">
            <div className='w-14 h-12 rounded-xl bg-red-600' />
            <div>
                <h4 className="text-gray-500">Name</h4>
                <p>{firstName || "Edit your name"}{lastName}</p>
            </div>
            </div>
            <FaEdit className="text-red-500 text-2xl md:hidden" onClick={() => setShowBackgroundComponent(true) } />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">

            <div className="flex flex-col gap-4">
                <div>
                    <h4 className="text-gray-500">Business Name</h4>
                    <p>{businessName || ''}</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Business phone</h4>
                    <p>{phone || ""}</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Business email</h4>
                    <p>{email || ""}</p>
                </div>
                <div className="flex justify-between">
                <div>
                    <h4 className="text-gray-500">Physical address</h4>
                    <p>{city || ""}, {state || ""}</p>
                </div>
            </div>
            </div>

            

            <div>
                <h4 className="text-gray-500">Business description</h4>
                <p className="leading-snug">{description || ""}</p>
            </div>

            <div className="flex flex-col gap-5">
                
                <div>
                    <h4 className="text-gray-500">X</h4>
                    <p>{x || ""}</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Instagram</h4>
                    <p>{ig || ""}</p>
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