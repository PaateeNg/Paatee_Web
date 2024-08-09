import { gql } from '@apollo/client';

export const GET_VENDORS = gql`
    query{
        getAllUser {
            email
            firstName
            lastName
        }
    }
`;

//defining typescript for the vendors 
export type Vendor = {
    email: string;
    firstName: string;
    lastName: string;
}
//we are merging our query for typescript 
export interface GetVendorData {
    getAllUser : Vendor[]
}