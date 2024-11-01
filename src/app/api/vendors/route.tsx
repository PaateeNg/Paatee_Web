import { connectToDB } from "@/database/connectToDB";
import User from "@/database/models/User";
import { NextRequest, NextResponse } from "next/server";



export interface Vendor {
    _id?: string;
    email?:string;
    password?:string;
    userType?:string;
    category?:string;
    businessName?:string;
    phone?:String;
    state?:string;
    city?:string;
    terms?:string;
    true?:string;
    description?:string;
    firstName?:string;
    ig?:string;
    lastName?:string;
    x?:string
}

export const GET = async (req:NextRequest) => {
    await connectToDB()

    try {
        const getVendor: Vendor[] = await User.find ({ userType: "vendor" })
        return NextResponse.json({getVendor: getVendor})
    } catch (error) {
        console.error('Error fetching vendor', error)
        return new NextResponse("Failed to fetch vendors", { status: 500 });
    }

}