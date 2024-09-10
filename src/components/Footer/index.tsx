'use client'

import Image from "next/image";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarContext } from "@/lib/context/NavbarContext";
import Link from "next/link";

const footerMenu = [
  {header: 'Product', menus:['Features', 'Pricing', 'Case Studies', 'Reviews', 'Updates']},
  {header: 'Company', menus:['About', 'Contact Us', 'Career', 'Culture', 'Blog']},
  {header: 'Support', menus:['Getting Started', 'Help Center', 'Chat Support']},
  {header: 'Download', menus:['IOS', 'Andriod', 'Mac', 'Windows', 'Chrome']},
]

export default function Footer() {
  const context = useContext(NavbarContext)
  const pathName = usePathname();
  
  const showNavbar = context?.showNavbar;

  if(pathName === '/'){
    context?.setShowNavbar(true);
  }else if(pathName === '/sign-in'){
    context?.setShowNavbar(false);
  }
  return (
    <>
    
    {showNavbar 
    &&
    <footer className="relative flex flex-col gap-4 px-4 bg-white">
      {/* first road of footer  */}
      <div className="md:flex pt-10 mb-4 md:border-b border-gray-100 pb-14">
        <div className="w-1/2 mb-5">
          <Image
            src="/Logo3.png"
            alt=""
            width={123.95}
            height={41.7}
          />
        </div>
        <p className=" text-blue-700 font-light text-2xl ">
          Say goodbye to the traditional ways of planning a party when parties
          meet technology
        </p>
      </div>

      {/* Next road of footer with the product, company, downloads etc */}
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row  ">
        <div className="flex flex-wrap md:flex-nowrap flex-1">
        {footerMenu.map(menu => (
          <div key={menu.header} className="w-1/2 mb-6">
            <h5 className="text-2xl font-semibold mb-3">{menu.header}</h5>
            <div>
            {menu.menus.map(menu => (
              <Link key={menu} className="block text-lg" href={'/'}>{menu}</Link>
            ))}
            </div>
          </div>
        ))}
         </div>
        
        <div className="flex flex-col gap-3 justify-between md:w-2/6 md:px-[20px] ">
          <h5 className="font-[700] text-[20px] ">
            Subscribe to our newsletter
          </h5>
          <p>Stay Updated With Our Newsletter for Exclusive Offers, Latest
          Updates, and More!</p>
          <div className="flex flex-col w-[90%] px-3 gap-3 md:mt-[22px]">
            <input type="text" placeholder="Enter Your Email" className="outline-none w-full px-5 rounded-[25px] shadow-xl"/>
            <PrimaryBtn text="Subscribe"/>
          </div>
        </div>
      </div>

      {/* Where copyright and social media icons are */}
      <div className="flex flex-col md:px-[110px] items-center justify-center md:pb-[30px] gap-5">
      <div className="flex w-fit justify-end gap-5">
            <Image src="/Facebook.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/Twitter.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/Instagram.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/Linkedin.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
            <Image src="/Youtube.png" width={10} height={18} alt="" className="w-auto h-auto object-contain"/>
        </div>
        <div>
        Copyright © 2023 Paatee | All Rights Reserved 
        </div>
        
      </div>
    </footer>
    }
    </>
  );
}
