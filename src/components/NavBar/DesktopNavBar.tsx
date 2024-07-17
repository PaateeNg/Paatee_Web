"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { RiSearch2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { middleMenu } from "./NavBarMenu/NavMenu";
import { useState } from "react";

export default function NavBar() {
  const [click, setClick] = useState< number | null>(null)
  const [dropDown, setDropDown] = useState(false)

  const handleDropDown = (menu : number) => {
    if(click === menu) {
      setClick(null)
      setDropDown(false)
    }else {
      setClick(menu)
      setDropDown(!dropDown)
    }
  }
  

  return (
    <nav className="h-[90px] flex items-center justify-between px-12 ">
      {/* start --> logo */}
      <div className=" relative h-20 w-48">
        <Image
          src="/assets/img/logo.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* middle */}
      <div className="flex flex-1 justify-center gap-12 text-lg ">
        {middleMenu.map(menu => {
          return (
            <>
            <Link 
            key={menu.id} 
            href= {`${menu.dropDown ? "" : `/${menu.menu.toLowerCase()}`}`}
            className="relative"
            onClick={() => handleDropDown(menu.id)}
            >
              {menu.menu}
              {/* DropDow Menu */}
              {
                click === menu.id && dropDown &&
              <div className='absolute top-10 left-0.5 flex flex-col bg-white border cursor-pointer'>
                {menu.dropMenu?.map(menu => <Link className="p-2" href='/'>{menu.menu}</Link>)}
              </div>
              }
            </Link>
            </>
          )
        } )}
      </div>

      {/* icons with navs */}
      <div className = 'flex items-center  justify-end text-2xl gap-5'>
      <FaRegUser />
      <RiSearch2Line />
      <FaRegHeart />
      <IoCartOutline />

      </div>
    </nav>
  );
}
