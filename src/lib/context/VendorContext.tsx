"use client"

import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

interface VendorData {
    _id?: string
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    businessName?: string;
    city?: string;
    state?: string;
    ig?: string;
    x?: string;
    description?: string;
}

interface VendorContextPprops {
    vendor: VendorData | null;
    setVendor: React.Dispatch<React.SetStateAction<VendorData | null>>;
    completeProfile: boolean;
    setCompleteProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const VendorContext = createContext<VendorContextPprops | null>(null);

export const VendorProvider = ({ children } : { children : React.ReactNode }) => {
    const {data : session} = useSession()
    const [vendor, setVendor] = useState<VendorData | null>(null)
    const [completeProfile, setCompleteProfile] = useState(false)

    useEffect(() => {
        const fetchVendorData = async () => {
            if(session?.user?.businessName){
                try{
                    const res = await fetch(`/api/user/${session.user.businessName}`);
                    if(!res.ok){
                        throw new Error("Failed to fetch vendor data");
                    }
                    const data = await res.json();
                    setVendor(data)
                }catch(err) {
                    console.error("Error fetching vendor data", err)
                }
            }
        }
        fetchVendorData();
    }, [session])

    useEffect(() => {
        if(vendor){
            const { firstName, lastName, x, ig, description } = vendor;
            if  (!firstName || !lastName || !x || !ig || !description ){
                setCompleteProfile(true)
            }
        }
    }, [vendor]);
    

    return (
        <VendorContext.Provider value={{vendor, setVendor, completeProfile, setCompleteProfile}}>
            {children}
        </VendorContext.Provider>
    )
}

export const useVendor = () => {
    const context = useContext(VendorContext);
    if(!context){
        throw new Error("useVendor must be used within a VendorProvider");
    }
    return context
}