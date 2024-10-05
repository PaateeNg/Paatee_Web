import { gql } from "@apollo/client";

export const GET_CURRENT_VENDOR = gql`
query{
    currentVendor{
        _id
        email
        role
        firstName
        lastName
        businessName
        business_phone
        productMenu
        state
        city
        createdAt
        userType
    }
 
}
`

export interface CurrentVendor {
    _id: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    businessName: string;
    business_phone: string;
    productMenu: any;
    state: string;
    city: string;
    createdAt:any
    userType: string;
}


export interface Vendor {
   currentVendor: CurrentVendor[]
}