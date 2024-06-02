"use client";
import Image from "next/image";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="relative object-contain w-full md:h-[480px] lg:h-[555px] overflow-hidden">
      <Image
        src="/assets/img/homebanner.jpeg"
        alt=""
        fill
        className="absolute w-auto object-cover -z-20"
      />
      <div className="absolute w-full md:h-[480px] lg:h-[555px] -z-10 bg-[rgba(58,58,58,0.6)]" />
      <div className="md:flex flex-col flex-grow justify-center text-center h-full w-ful">
        <span className="block font-{500} text-[56px] text-white">
          Let&lsquo; get the party started
        </span>
        <span className="block font-{500} text-[24px] text-white">
          Venues, Vendors and planners all in one place
        </span>
        <Link href="/get-started" >

          <PrimaryBtn center={true} title="Get Started" />
        </Link>
          
        
      </div>
    </div>
  );
}
