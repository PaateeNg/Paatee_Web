import React from "react";
import Image from "next/image";


interface Ibox {
  title: string;
  img: string
}
const MiniBox = ({title, img}: Ibox) => {
  return (
    <div className="flex flex-col justify-center align-middle w-1/4 md:w-auto">
      <div className="relative w-auto h-[70px]">
        <Image src={img} alt="image" fill style={{ objectFit: 'contain' }}  />
      </div>
      <div className="flex flex-grow items-center justify-center">
        <span className="text-black text-[16px] font-[500]">
          {title}
        </span>
      </div>
    </div>
  );
};

export default MiniBox;
