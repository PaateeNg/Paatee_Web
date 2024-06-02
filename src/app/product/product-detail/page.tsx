import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const page = () => {
	return (
		<>
    {/* top */}
			<div className="bg-gray-100 w-full h-full flex m-auto mt-[3rem] justify-center">
				<div className="max-w-[861px] max-h-[546px] p-[24px] bg-white flex items-center border ml-4">
					<Image
						height={240}
						width={240}
						loading="lazy"
						src="/assets/img/cake-new.png"
						alt="cake"
					/>
          <div className=" ml-[20px] w-[552px] h-[248px] flex flex-col gap-[1.5rem]">
            <div className="flex justify-between ">

              <span className="font-bold">Three in one two layered chocolate and vanilla cake</span>
              <FaRegHeart className="text-xl"/>
            </div>
              <span className="text-gray-500">Category 
                <span className="text-blue-400 ml-2">Food and drink</span>
              </span>
              <span className="font-bold text-xl">N27000</span>
              <div className="flex ">
                <div className="text-yellow-300 flex ">
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-400"/>
                </div>
              <span>
              (2 Total Ratings)
              </span>
              </div>
              <div className="flex gap-[16px]">
                <button className="w-[268px] h-[48px] rounded-full bg-gray-200 text-blue-700">Add to cart</button>
                <button className="w-[268px] h-[48px] bg-[#F63D68] rounded-full text-white"> Buy now</button>
              </div>
          </div>
				</div>
				{/* <div className="w-[861px] h-[546px] bg-white"></div> */}
			</div>

      {/* bottom */}
      <hr />
      <div className="ml-7 ">
        
        <span>Vendor contact details</span>
        <div className="flex gap-[2rem]">

          <div className="flex gap-2 ">
            <CiMail className="text-xl font-bold"/>
            <span>sara.cruz@example.com</span>
          </div>
          <div className="flex gap-2">
              <IoLocationOutline className="text-xl font-bold"/>
              <span>17 Okumagba Avenue, off quality in road, Warri </span>
          </div>
        </div>
        <div className="flex gap-[2rem]">

          <div className="flex gap-2 ">
            <FaPhoneAlt className="text-xl font-bold"/>
            <span>(303) 555-0105</span>
          </div>
          <div className="flex gap-2 ">
            <AiFillHome  className="text-xl font-bold"/>
            <span>(303) 555-0105</span>
          </div>
        </div>

      </div>

      {/* right */}
      <div className="w-[351px] h-[392px] bg-white">
          <span>Delivery Details</span>
          <span>The states that would be visible in the input field below are areas that this vendor can deliver items to.</span>
          <span>Select your location</span>
          <input type="text" placeholder=" Select your state"/>
          <input type="text" placeholder="Enter delivery address"/>
      </div>
		</>
	);
};

export default page;
