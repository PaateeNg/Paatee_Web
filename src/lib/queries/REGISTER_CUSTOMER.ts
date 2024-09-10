import { gql } from "@apollo/client";

export const REGISTER_CUSTOMER = gql`
  mutation{
  createCustomer(payload: {
    email: "ukosaviour21@gmail.com"
    password: "12345"
  }){
    Response
  }
  }
  
`;