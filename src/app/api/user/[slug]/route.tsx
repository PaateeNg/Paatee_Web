import { connectToDB } from "@/database/connectToDB";
import User from "@/database/models/User";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_req: NextRequest, { params }: { params: { slug: string } }) => {
    const searchParams = params.slug;
    console.log("searchParams: ", searchParams);
    if(!searchParams){
        return NextResponse.json({error: "Invalid parameter"}, {status : 400});
    }
    try {
        await connectToDB();
       const user = await User.findOne({businessName: searchParams})

       if(!user){
        return NextResponse.json({error: "User not found"}, {status: 494})
       }
       return NextResponse.json(user);
    } catch (error) {
        console.error("Error retrieving user:", error);
        return NextResponse.json(
            { error: "Failed to retrieve users" },
            { status: 500 }
        );
    }
};


export const PATCH = async (req: NextRequest, { params }: { params: { slug: string } }) => {
    // const searchParams = req.nextUrl.searchParams;
    // const email = searchParams.get('email'); // Correctly extract email
    // const userType = searchParams.get('userType'); // Fix typo in userType retrieval
    const body = await req.json(); // Get the request body
    const id = params.slug

    console.log({ id });

    await connectToDB();

    try {
        // Find the user based on email and userType
        const user = await User.findOne({ _id : id });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Update user with the new data from the body
        Object.assign(user, body); // Update user fields with the provided data
        await user.save(); // Save the updated user

        return NextResponse.json({ message: "User updated successfully", user }, { status: 200 });
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
};
