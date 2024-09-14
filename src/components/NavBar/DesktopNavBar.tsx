"use client";

import styles from './Nav.module.css'

import Image from "next/image";
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
import { AuthContext } from "@/lib/context/UserContext";


export default function NavBar() {
<<<<<<< HEAD
  const {user} = useContext(AuthContext)
  console.log(user);
  const [click, setClick] = useState< number | null>(null)
  const [dropDown, setDropDown] = useState(false)
  const context = useContext(NavbarContext)
  const pathName = usePathname();
  
  const showNavbar = context?.showNavbar;
  // console.log(user.userType, 'profile')

//better way to write the above
  if (pathName === '/') {
    context?.setShowNavbar(true);
  } else if (['/sign-in', '/forgot-password', '/sign-up'].includes(pathName)) {
    context?.setShowNavbar(false);
  }


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
   <>
    {showNavbar 
      &&
      <nav className="h-[90px] flex items-center justify-between px-8 bg-white">
      {/* start --> logo */}
      <Link href={'/'} className=" relative h-20 w-48">
        <Image
          src="/logo.png"
          alt="Logo"
          fill
          className="object-contain"
        />
      </Link>

      {/* middle */}
      <div className=" hidden md:flex md:flex-1 md:justify-center md:gap-12 text-lg ">
        {middleMenu.map(menu => (
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
                {menu.dropMenu?.map(menu => <Link key={menu.menu} className="p-2" href='/'>{menu.menu}</Link>)}
              </div>
              } 
            </Link>
        ) )}
      </div>

      {/* icons with navs and button for get started */}
      {user ? 
        <div className = 'hidden md:flex md:items-center md:justify-end text-2xl gap-5'>
        <Link href={`/profile/${user.userType}`}><FaRegUser /></Link>
        <RiSearch2Line />
        <FaRegHeart />
        <IoCartOutline />
        
        
        
        </div>
        : <Link className="hidden md:block" href={'/sign-up'}>
          <PrimaryBtn center={true} text="Join us"/>
        </Link>
      }
      <GiHamburgerMenu className="text-4xl  md:hidden" />
    </nav>
    }
   </>
  );
=======
	const [click, setClick] = useState<number | null>(null);
	const [dropDown, setDropDown] = useState(false);
  

	const handleDropDown = (menu: number) => {
		if (click === menu) {
			setClick(null);
			setDropDown(false);
		} else {
			setClick(menu);
			setDropDown(!dropDown);
		}
	};

	return (
		<nav className="h-[90px] flex items-center justify-between px-12 bg-white">
			{/* start --> logo */}
			<Link href={"/"} className=" relative h-[6rem] w-48">
				<Image
					src="/assets/img/paatee-logo.png"
					alt="Logo"
					fill
					className="object-contain"
				/>
			</Link>
        <span>Paatee</span>

			{/* middle */}
			<div className="flex flex-1 justify-center gap-12 text-lg ">
				{middleMenu.map((menu) => {
					return (
						<>
							<Link
								key={menu.id}
								href={`${
									menu.dropDown
										? ""
										: `/${menu.menu.toLowerCase()}`
								}`}
								className="relative"
								onClick={() => handleDropDown(menu.id)}
							>
								{menu.menu}
								{/* DropDow Menu */}
								{click === menu.id && dropDown && (
									<div className="absolute top-10 left-0.5 flex flex-col bg-white border cursor-pointer">
										{menu.dropMenu?.map((menu) => (
											<Link
												key={menu.menu}
												className="p-2"
												href="/"
											>
												{menu.menu}
											</Link>
										))}
									</div>
								)}
							</Link>
						</>
					);
				})}
			</div>

			{/* icons with navs */}
			<div className="flex items-center  justify-end text-2xl gap-5">
				<FaRegUser />
				<RiSearch2Line />
				<FaRegHeart />
				<IoCartOutline />
			</div>
		</nav>
	);
>>>>>>> ca72afb2a9f6366e24f1f2118501c474585d64a7
}
