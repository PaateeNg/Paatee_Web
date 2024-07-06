import { gql } from '@apollo/client';

export const GET_VENDORS = gql`
    query{
        getAllPlanner {
            email
            firstName
            lastName
        }
    }
`;