import Image from "next/image";
import React from "react";


interface OfferBtnProps {
  title: string;
  desc: string;
  imgSrc: string;
  link?: string;
}


export default function Offer() {
  
  const OfferBtn = ({ title, desc, imgSrc, link }: OfferBtnProps) => {
    return (
      <div className="flex flex-col leading-6 mt-5 overflow-hidden">
        <Image src={imgSrc} width={64} height={64} alt={`${title} from Paatee`} />
        <span className="font-bold text-[20px] mt-3">
          {title}
        </span>
        <span className="text-[#667085] mt-3 inline-block pe-[40px]">
          {desc}
        </span>
      </div>
    );
  };

  const offerData: Array<OfferBtnProps> = [
    {
      title: "Free and Fast Delivery",
      desc: "Seamless Convenience: Swift, Free Delivery to Your Door!",
      imgSrc: "/delivery.png"
    },
    {
      title: "24/7 Support",
      desc: "Get Instant Assistance and Expert Guidance Anytime!",
      imgSrc: "/map.png"
    },
    {
      title: "Assured Payment System",
      desc: "Trust Our Secure Payment System for Safe Shopping Every Time.",
      imgSrc: "/connect.png"
    }
  ];

  return (
    <div className="px-5 py-20">
      <div className="flex flex-col justify-center align-middle items-center">
        <h3
          className="text-[34px] font-[700]"
          style={{
            backgroundImage: "linear-gradient(to right, #F63D68, #90243D)",
            backgroundSize: "100%",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Our Offers for you
        </h3>
        <p className="text-[18px] text-center text-[#667085] inline-block my-2">
          Explore a World of Exclusive Deals and Tailored Promotions: Our Offers
          Await You
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between">
        {offerData.map((item, index) => {
          return (
            <OfferBtn
              title={item.title}
              desc={item.desc}
              imgSrc={item.imgSrc}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
