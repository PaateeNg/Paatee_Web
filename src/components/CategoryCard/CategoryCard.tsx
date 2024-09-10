"use client "
import React from "react";
import Image from 'next/image';
import Link from "next/link";


interface Icard {
  title: string;
  img: string;
  button: string;
  link: string;
}
const CategoryCard = ({title, img, button, link}: Icard) => {


  return (
    <>
      <Image src={img} alt="" fill style={{aspectRatio: "auto", borderRadius: "0.5rem"}}/>
      <div className="absolute flex flex-col md:justify-end justify-center gap-3 w-[80%] h-[60%]">
        <h5 className="text-center text-white text-3xl">{title}</h5>
        <Link href={link} className=" hidden font-semibold mx-auto w-fit px-5 h-[44px] bg-white text-black md:inline-flex justify-center items-center rounded-full hover:bg-slate-400 focus:bg-slate-400 cursor-pointer">
            {button}
          </Link>
      </div>
    </>
  );
};

export default CategoryCard;
