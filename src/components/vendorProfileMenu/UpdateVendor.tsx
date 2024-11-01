'use client';

import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { useVendor } from "@/lib/context/VendorContext";

type Menu = {
  setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateVendor = ({ setShowBackgroundComponent }: Menu) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { vendor } = useVendor();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    phone: '',
    city: '',
    state: '',
    description: '',
    ig: '',
    x: '',
  });

  // Populate formData with vendor details on initial load
  useEffect(() => {
    if (vendor) {
      setFormData({
        firstName: vendor.firstName || '',
        lastName: vendor.lastName || '',
        email: vendor.email || '',
        businessName: vendor.businessName || '',
        phone: vendor.phone || '',
        city: vendor.city || '',
        state: vendor.state || '',
        description: vendor.description || '',
        ig: vendor.ig || '',
        x: vendor.x || '',
      });
    }
  }, [vendor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(''); // Reset error state before new request

    console.log("Data:", formData);

    try {
      const res = await fetch(`/api/user/${vendor?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", // Corrected typo here
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to update user data');
      }
      
      const data = await res.json();
      console.log(data);
      // Optionally, you could provide feedback to the user here
    } catch (error) {
      console.error('Error updating user data:', error);
      setError('An error occurred while updating your profile. Please try again.'); // Set error message for the user
    }

    setLoading(false);
  };

  const handleCloseAdd = () => {
    setShowBackgroundComponent(false);
  };

  return (
    <form onSubmit={handleUpdate} className="border max-w-md flex flex-col gap-5 py-5 px-2 rounded-xl bg-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg">Edit profile</h3>
        <div onClick={handleCloseAdd} className='text-xl cursor-pointer'><IoClose /></div>
      </div>

      <div className="text-center bg-red-200 p-7">
        <div>icon</div>
        <p>Upload image</p>
        <p>Drag and drop a file or <span>choose file</span></p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex">
          <div>
            <label>First name</label>
            <input
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              type="text"
              placeholder="Enter First Name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              type="text"
              placeholder="Enter Last Name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>

        <div className="flex">
          <div>
            <label>Business name</label>
            <input
              name="businessName"
              onChange={handleChange}
              value={formData.businessName}
              type="text"
              placeholder="Business name"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Business email</label>
            <input
              name="email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              placeholder="Business email"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>

        <div className="flex">
          <div>
            <label>Business Phone</label>
            <input
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              type="tel"
              placeholder="Business Phone"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <label>X handle</label>
            <input
              name="x"
              onChange={handleChange}
              value={formData.x}
              type="text"
              placeholder="X handle"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
          <div>
            <label>Instagram handle</label>
            <input
              name="ig"
              onChange={handleChange}
              value={formData.ig}
              type="text"
              placeholder="Instagram handle"
              className="p-2 mt-2 border-gray-400 border rounded-md outline-none w-11/12"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label>Business Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Enter a description for your business"
            className="p-2 mt-2 border-gray-400 border rounded-md outline-none"
          />
        </div>
      </div>

      <div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-red-500 w-full p-2 rounded-2xl text-white">
          {loading ? 'Updating Profile...' : 'Update Profile'}
        </button>
      </div>
    </form>
  );
};

export default UpdateVendor;
