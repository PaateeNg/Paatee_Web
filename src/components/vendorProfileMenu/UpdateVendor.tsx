'use client';

import { gql, useMutation, ApolloError } from '@apollo/client';
import React, { useRef, useState } from 'react';

import {  GET_CURRENT_VENDOR, Vendor } from "@/lib/queries/GET_CURRENT_VENDOR";
import { useQuery } from "@apollo/client";

type Menu = {
  setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateVendor = ({ setShowBackgroundComponent }: Menu) => {
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false)

  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const BusinessNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const BusinessPhoneRef = useRef<HTMLInputElement>(null); 
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const InstagramRef = useRef<HTMLInputElement>(null);
  const XRef = useRef<HTMLInputElement>(null);

  const {data} = useQuery<Vendor>(GET_CURRENT_VENDOR);
  console.log( data?.currentVendor)

    // Extract vendor details from the query response
const vendor = data?.currentVendor;

if (!vendor) {
  return <p>No vendor details found.</p>;
}

const { email,firstName, lastName, business_phone, businessName, x, instagram, description, location } = vendor as any;

  const [updateVendor, { loading }] = useMutation(UPDATE, {
    update(_, result) {
      console.log("result:" ,result);
    },
    onCompleted() {
      setShowBackgroundComponent(false);
    },
    onError(err: ApolloError) {
      const error = err?.graphQLErrors?.[0]?.message || 'An unknown error occurred';
      console.log("Error:", error);
      setError(error);
    },
  });

  const submitProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const firstName = FirstNameRef?.current?.value;
    const lastName = LastNameRef?.current?.value;
    const business_phone = BusinessPhoneRef?.current?.value;
    const businessName = BusinessNameRef?.current?.value;
    const location = locationRef?.current?.value;
    const x = XRef?.current?.value;
    const instagram = InstagramRef?.current?.value;
    const description = descriptionRef?.current?.value;


        // Logging the values for debugging
    console.log({email, firstName, lastName, business_phone, businessName, location, x, instagram, description})




   

    updateVendor({
      variables: {
        email,
        firstName,
        lastName,
        business_phone,
        businessName,
        location,
        x,
        instagram,
        description 
      },
    });
  };

  const handleCloseAdd = () => {
    setShowBackgroundComponent(false);
  };

  return (
    <form onSubmit={submitProduct} className="border max-w-md flex flex-col gap-5 py-5 px-2 rounded-xl bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg">Edit profile</h3>
        <div onClick={handleCloseAdd}>X</div>
      </div>

      <div className="text-center bg-red-200 p-7">
        <div>icon</div>
        <p>Upload image</p>
        <p>
          Drag and drop a file or <span>choose file</span>
        </p>
      </div>

      <div className="flex flex-col gap-5">
      <div className="flex">
          <div>
            <label>First name</label>
            <input
            value={firstName}
              ref={FirstNameRef}
              type="text"
              placeholder="Enter First Name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
            value={lastName}
              ref={LastNameRef}
              type="test"
              placeholder="Enter Last Name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Business name</label>
            <input
            value={businessName}
              ref={BusinessNameRef}
              type="text"
              placeholder="Business name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Business email</label>
            <input
            value={email}
              ref={emailRef}
              type="email"
              placeholder="Business name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label>Physical address</label>
            <input
            value={location}
              ref={locationRef}
              type="text"
              placeholder="Business address"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Business Phone</label>
            <input
            value={business_phone}
              ref={BusinessPhoneRef}
              type="number"
              placeholder="Business Phone"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label>X handle</label>
            <input
            value={x}
              ref={XRef}
              type="text"
              placeholder="X handle"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Instagram handle</label>
            <input
            value={instagram}
              ref={InstagramRef}
              type="text"
              placeholder=" Instagram handle"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Business Description</label>
          <textarea
          value={description}
            ref={descriptionRef}
            placeholder="Enter a description for your product"
            className="p-2 mt-2 border-gray-400 border rounded-md outline-none"
          />
        </div>
        
      </div>
      <div>
        <p>{error && error}</p>
        <button type="submit" className="bg-red-500 w-full p-2 rounded-2xl text-white">
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </div>
    </form>
  );
};

const UPDATE = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $x: String!
    $instagram: String!
    $location: String!
  ) {
    create(
      payload: {
        firstName: $firstName
        lastName: $lastName
        x: $x
        instagram: $instagram
        location: $location
      }
    ) {
      firstName
      lastName
      email
      x
      instagram
      business_phone
      businessName
      location
      category
      userType
    }
  }
`;

export default UpdateVendor;
