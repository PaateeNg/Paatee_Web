import { NextResponse } from "next/server";
import { connectToDB } from '@/database/connectToDB'
import User from '@/database/models/User'
import bcrypt from 'bcryptjs';


export const POST = async (req: any) => {
    const {
        email,
        password,
        userType,
        category,
        businessName, 
        phone,
        state, 
        city, 
        terms 
    } = await req.json();

    await connectToDB()

    // Check if email already exists
    const existingUser = await User.findOne({ email, userType });
    if (existingUser) {
        return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        email,
        password: hashPassword,
        userType,
        category,
        businessName, 
        phone,
        state, 
        city, 
        terms
        })

    try {
        // console.log(newUser)
        await newUser.save()
        return new NextResponse("User is registered");
    } catch (error: any){
        console.error("Error saving the listing:", error.message);
        return new NextResponse(JSON.stringify(
            {message: error.message}
        ), {status: 500})
    }
}

