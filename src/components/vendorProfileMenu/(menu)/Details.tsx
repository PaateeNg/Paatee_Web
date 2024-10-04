import { AuthContext } from "@/lib/context/UserContext"
import { GET_VENDORS, GetVendorData } from "@/lib/queries/GET_VENDORS";
import { useQuery } from "@apollo/client";
import { useContext } from "react"



const Details = () => {
    const {user} = useContext(AuthContext)
    const {data} = useQuery<GetVendorData>(GET_VENDORS);
    console.log(user)
    console.log(data)

    const userDetails = data?.getAllVendor.find(vendor => (
        vendor.email === user.email
    ));

    console.log(userDetails);
    const {email, business_phone, businessName, category, city, state} = userDetails as any;

    
    return (
    <>
    {/* <div className="flex flex-col gap-3">
        <h3 className="font-extrabold ">Personal details</h3>
        <div className="flex gap-8">
            <div className="flex flex-col gap-5"> 
                <div>
                    <h4 className="text-gray-500">Vendor Name</h4>
                    <p>Aderomke Balogun</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Phone number</h4>
                    <p>0815 4168 554</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Utility bill</h4>
                    <p>Doc Submitted</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div>
                    <h4 className="text-gray-500">Email Address</h4>
                    <p>{email}</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Date Joined</h4>
                    <p>6 months ago</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Valid ID</h4>
                    <p>Doc Submitted</p>
                </div>
            </div>
        </div>
    </div> */}

    

    <div className="flex flex-col gap-3">
        <div className="flex gap-5">
            <div className='w-14 h-12 rounded-xl bg-red-600' />
            <div>
                <h4 className="text-gray-500">Business Name</h4>
                <p>{businessName}</p>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">

            <div className="flex gap-5 justify-between">
                <div>
                    <h4 className="text-gray-500">Business phone</h4>
                    <p>{business_phone}</p>
                </div>
                <div>
                    <h4 className="text-gray-500">Business email</h4>
                    <p>{email}</p>
                </div>
            </div>

            <div className="flex justify-between">
                <div>
                    <h4 className="text-gray-500">Physical address</h4>
                    <p>{city}, {state}</p>
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
                    <h4 className="text-gray-500">Twitter</h4>
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