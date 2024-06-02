import React from "react";
import Image from 'next/image'
import { StaticImageData } from "next/image";

const CategoryCard: React.FC<{ img?: StaticImageData; title?: string }> = ({
  title = "PARTY ITEMS",
  img = "/assets/img/partyItemsImg.png"
}) => {
  return (
    <div className="relative flex flex-col align-middle md:w-[480px] h-[470px]">
      <Image src={img} alt="" style={{"width": "auto", "height": "470px", "objectFit": "cover" }}/>
      <div className="absolute flex flex-col w-full h-full">
        <div className="flex flex-grow items-center justify-center">
          <span className="text-white text-[32px] font-[700]">
            {title}
          </span>
        </div>
        <div className="pb-5 flex justify-center">
          <span className="w-[125px] h-[44px] bg-white text-black inline-flex justify-center items-center rounded-full hover:bg-slate-400 focus:bg-slate-400 cursor-pointer">
            Buy Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
