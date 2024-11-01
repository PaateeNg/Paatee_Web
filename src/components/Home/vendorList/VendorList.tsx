
import React from 'react'
import { GET_VENDORS, GetVendorData } from "@/lib/queries/GET_VENDORS"
import { useQuery } from "@apollo/client"
import PlannerCard from '@/components/PVCard/PVCard'
import { Vendor } from '@/app/api/vendors/route'

const VendorList = async ({children} : {children?: JSX.Element}) => {
  const baseUrl = 
    process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_URL || `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
    
  try{
    const res = await fetch(`${baseUrl}/api/vendors`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error("Failed to fetch vendor data.");
      return <p>Error loading vendors.</p>;
    }

    const { getVendor }: { getVendor: Vendor[] } = await res.json();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center overflow-hidden">
      <div className="flex">
        {getVendor.slice(0, 3).map((vendor) => (
          <div key={vendor.email}>
            <PlannerCard
              email={vendor.email}
              firstName={vendor.businessName}
              lastName={vendor.lastName}
            />
          </div>
        ))}
      </div>
      {children}
    </div>
  );
} catch(err){
  //
}
}

export default VendorList