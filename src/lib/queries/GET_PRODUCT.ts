import { gql } from '@apollo/client';

export const GET_VENDORS = gql`
    query{
        getAllProduct {
            productName
            price
            makeBy
            category
        }
    }
`;