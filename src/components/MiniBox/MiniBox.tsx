import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

const MiniBox: React.FC<{ img?: StaticImageData; title?: string }> = ({
  title = "Icon",
  img = "/assets/img/venueIcon.png"
}) => {
  return (
    <div className="flex flex-col justify-center align-middle">
      <Image
        src={img}
        alt=""
        style={{ width: "auto", height: "70px", objectFit: "contain" }}
      />
      <div className="flex flex-grow items-center justify-center">
        <span className="text-black text-[16px] font-[500]">
          {title}
        </span>
      </div>
    </div>
  );
};

export default MiniBox;
