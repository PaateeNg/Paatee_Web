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
