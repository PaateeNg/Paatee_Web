import { gql } from '@apollo/client';

export const GET_VENDORS = gql`
   query{
    getAllVendor{
        email
        productMenu
        business_phone
        businessName
        category
        state
        city
        businessName
        location
        x
        instagram
        role
    }
}
`;

//defining typescript for the vendors 
export type Vendor = {
    email?: string;
    firstName?: string;
    lastName?: string;
    productMenu?: any[];
    role?: string[]
}
//we are merging our query for typescript 
export interface GetVendorData {
    getAllVendor : Vendor[]
}