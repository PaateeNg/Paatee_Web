'use client';

import { gql, useMutation, ApolloError } from '@apollo/client';
import React, { useRef, useState } from 'react';

type Menu = {
  setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddProduct = ({ setShowBackgroundComponent }: Menu) => {
  const [error, setError] = useState('');

  const productNameRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const [addProduct, { loading }] = useMutation(PRODUCT, {
    update(_, result) {
      console.log(result);
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

    const productName = productNameRef.current?.value;
    const productDescription = descriptionRef.current?.value;
    const price = parseFloat(priceRef.current?.value || '0');
    const category = categoryRef.current?.value;
    const quantity = parseInt(quantityRef.current?.value || '0');

    // Logging the values for debugging
    console.log({ productName, productDescription, price, category, quantity });

    addProduct({
      variables: {
        productName,
        productDescription,
        price,
        category,
        quantity,
      },
    });
  };

  const handleCloseAdd = () => {
    setShowBackgroundComponent(false);
  };

  return (
    <form onSubmit={submitProduct} className="border max-w-md flex flex-col gap-5 py-5 px-2 rounded-xl bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg">Create new product</h3>
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
            <label>Product name</label>
            <input
              ref={productNameRef}
              type="text"
              placeholder="Product name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label className="font-semibold">Vendor Category</label>
            <select
              ref={categoryRef}
              defaultValue=""
              className="rounded-full outline-none border-2 border-gray-200"
            >
              <option value="" disabled>
                SELECT CATEGORY
              </option>
              <option value="Drinks">Drinks</option>
              <option value="Cakes">Cakes</option>
              <option value="Catering">Catering</option>
              <option value="Interior decoration">Interior decoration</option>
              <option value="Photographer">Photographer</option>
              <option value="Fashion stylist">Fashion stylist</option>
              <option value="Hair stylist">Hair stylist</option>
              <option value="Makeup artist">Makeup artist</option>
              <option value="DJ">DJ</option>
              <option value="MC">MC</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            ref={descriptionRef}
            placeholder="Enter a description for your product"
            className="p-2 mt-2 border-gray-400 border rounded-md outline-none"
          />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <label>Price</label>
            <input
              ref={priceRef}
              type="number"
              placeholder="0"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div className="flex flex-col">
            <label>Product quantity</label>
            <input
              ref={quantityRef}
              type="number"
              placeholder="0"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
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
    $price: Float!
    $category: String!
    $quantity: Int!
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

export default AddProduct;
