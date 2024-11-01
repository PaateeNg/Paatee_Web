import { connectToDB } from "@/database/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import Products from '@/database/models/Products'
import { stringify } from "querystring";

export const POST = async(req:NextRequest) => {
    const {
        productName,
        images,
        category,
        description,
        price,
        quantity,
        rating,
        businessName
    } = await req.json()

    const productData = ({
        productName,
        images,
        category,
        description,
        price,
        quantity,
        rating,
        businessName
    })
    console.log(productData)

    await connectToDB()
    const newProduct = new Products(productData)
    try{
        await newProduct.save();
        return NextResponse.json({message: "Product Added"}, {status: 200})
    }catch(err:any) {
        console.error("Error adding product", err.message)
        return new NextResponse(JSON.stringify({ message: err.message }), { status: 500 });

    }

    
}