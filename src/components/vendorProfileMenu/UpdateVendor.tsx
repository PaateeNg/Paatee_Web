'use client';

import { gql, useMutation, ApolloError } from '@apollo/client';
import React, { useRef, useState } from 'react';

type Menu = {
  setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateVendor = ({ setShowBackgroundComponent }: Menu) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  const FirstNameRef = useRef<HTMLInputElement>(null);
  const LastNameRef = useRef<HTMLInputElement>(null);
  const BusinessNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const BusinessPhoneRef = useRef<HTMLInputElement>(null); 
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const addressReff = useRef<HTMLInputElement>(null);

//   const [addProduct, { loading }] = useMutation(PRODUCT, {
//     update(_, result) {
//       console.log(result);
//     },
//     onCompleted() {
//       setShowBackgroundComponent(false);
//     },
//     onError(err: ApolloError) {
//       const error = err?.graphQLErrors?.[0]?.message || 'An unknown error occurred';
//       console.log("Error:", error);
//       setError(error);
//     },
//   });

  const submitProduct = (e: React.FormEvent) => {
    e.preventDefault();

    // const productName = productNameRef.current?.value;
    // const productDescription = descriptionRef.current?.value;
    // const price = parseFloat(priceRef.current?.value || '0');
    // const category = categoryRef.current?.value;
    // const quantity = parseInt(quantityRef.current?.value || '0');

    // Logging the values for debugging
    // console.log({ productName, productDescription, price, category, quantity });

    // addProduct({
    //   variables: {
    //     productName,
    //     productDescription,
    //     price,
    //     category,
    //     quantity,
    //   },
    // });
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
              ref={FirstNameRef}
              type="text"
              placeholder="Product name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              ref={LastNameRef}
              type="email"
              placeholder="Product name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Business name</label>
            <input
              ref={BusinessNameRef}
              type="text"
              placeholder="Product name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Business email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Product name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label>Physical address</label>
            <input
              ref={addressReff}
              type="text"
              placeholder="Business address"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Business Phone</label>
            <input
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
              ref={addressReff}
              type="text"
              placeholder="X handle"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Instagram handle</label>
            <input
              ref={BusinessPhoneRef}
              type="text"
              placeholder=" Instagram handle"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label>Business Description</label>
          <textarea
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

const PRODUCT = gql`
  mutation(
    $productName: String!
    $productDescription: String!
    $price: Number!
    $category: String!
    $quantity: Number!
  ) {
    create(
      payload: {
        productName: $productName
        productDescription: $productDescription
        price: $price
        category: $category
        quantity: $quantity
      }
    ) {
      makeBy
      price
      productName
      quantity
      category
      date_added
    }
  }
`;

export default UpdateVendor;
