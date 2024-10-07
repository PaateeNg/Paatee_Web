"use client";

import styles from './Nav.module.css'


import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { middleMenu } from "./NavBarMenu/NavMenu";
import { useContext, useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { NavbarContext } from "@/lib/context/NavbarContext";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../logo/Logo';
import { GET_CURRENT_VENDOR, Vendor } from '@/lib/queries/GET_CURRENT_VENDOR';
import { useQuery } from '@apollo/client';


export default function NavBar() {
  const [click, setClick] = useState<number | null>(null);
  const [dropDown, setDropDown] = useState(false);
  const context = useContext(NavbarContext);
  const pathName = usePathname();

  const {data} = useQuery<Vendor>(GET_CURRENT_VENDOR);
  const user = data?.currentVendor;
  console.log(user)

  const [open, setOpen] = useState(false);

  const showNavbar = context?.showNavbar;

  // Ensure that showNavbar is toggled based on path
  if (pathName === '/') {
    context?.setShowNavbar(true);
  } else if (['/sign-in', '/forgot-password', '/sign-up'].includes(pathName)) {
    context?.setShowNavbar(false);
  }

  // Toggle dropdown for menus
  const handleDropDown = (menu: number) => {
    if (click === menu) {
      setClick(null);
      setDropDown(false);
    } else {
      setClick(menu);
      setDropDown(true);
    }
  };

  return (
    <>
      {showNavbar && (
        <nav className="h-[90px] relative flex items-center justify-between px-8 bg-white">
          {/* Start --> Logo */}
          <Link href="/" className="relative h-20 w-48">
            <Logo/>
          </Link>

          {/* Middle Menu */}
          <div className="hidden md:flex md:flex-1 md:justify-center md:gap-12 text-lg">
            {middleMenu.map((menu) => (
              <Link
                key={menu.id}
                href={menu.dropDown ? "" : `/${menu.link}`}
                className="relative"
                onClick={() => handleDropDown(menu.id)}
              >
                {menu.menu}
                {/* DropDown Menu */}
                {click === menu.id && dropDown && (
                  <div className="absolute top-10 left-0.5 flex flex-col bg-white border cursor-pointer">
                    {menu.dropMenu?.map((menu) => (
                      <Link key={menu.menu} className="p-2" href="/">
                        {menu.menu}
                      </Link>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Icons with Navs and Button for Get Started */}
          {user ? (
            <div className="hidden md:flex md:items-center md:justify-end text-2xl gap-5">
              <Link href={`/profile/${user?.userType}`}>
                <FaRegUser />
              </Link>
              <RiSearch2Line />
              <FaRegHeart />
              <IoCartOutline />
            </div>
          ) : (
            <Link className="hidden md:block" href="/sign-up">
              <PrimaryBtn center={true} text="Join us" />
            </Link>
          )}

            <div>
            <GiHamburgerMenu onClick={() => setOpen(!open)} className=" relative  z-20 text-4xl md:hidden  text-red-500"  />
              <div className={`md:hidden fixed z-10 top-0 right-0 flex flex-col justify-center gap-8 items-center text-white bg-black w-[200px] h-[80vh] transition-all duration-500 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'} `}>
              {middleMenu.map((menu) => (
                 
                <Link
                  key={menu.id}
                  href={menu.dropDown ? "" : `/${menu.link}`}
                  className="relative"
                  onClick={() => handleDropDown(menu.id)}
                >
                  {menu.menu}
                  {/* DropDown Menu */}
                  {click === menu.id && dropDown && (
                    <div className="absolute top-10 left-0.5 flex flex-col bg-white border cursor-pointer">
                      {menu.dropMenu?.map((menu) => (
                        <Link key={menu.menu} className="p-2" href="/">
                          {menu.menu}
                        </Link>
                      ))}
                    </div>
                    )}
                </Link>
              ))}
                             {user ? (
            <div className="flex md:flex md:items-center md:justify-end text-2xl gap-5">
              <Link href={`/profile/${user.userType}`}>
                <FaRegUser />
              </Link>
              <RiSearch2Line />
              <FaRegHeart />
              <IoCartOutline />
            </div>
          ) : (
            <Link className=" w-[70%] md:block" href="/sign-up">
              <PrimaryBtn center={true} text="Join us" />
            </Link>
          )}

              </div>
            </div>
          
        </nav>
      )}
    </>
  );
}
