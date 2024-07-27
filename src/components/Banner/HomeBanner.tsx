"use client";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Link from "next/link";

export default function HomeBanner() {
  // md:h-[480px] lg:h-[555px]
  return (
        <div className="md:flex flex-col gap-3 justify-center  items-center  bg-white  h-[calc(100vh-90px)] w-ful">
          <div className="flex w-40%] p-[5px] bg-[#f63d6823] rounded-full gap-2" >
          <h5 className='bg-white p-[2px] text-[#F63D68] font-bold rounded-full text-center text-sm'>Party planning made easy </h5>
          <h5 className='text-[#F63D68] font-bold rounded-full text-center text-sm'>Vendors, venue and planners all in one place</h5>
          </div>
          <h1 className="block  text-[56px] ">
            Your perfect event starts here
          </h1>
          <p className="block text-[18px] ">
            Say goodebye to planning headaches! Connect with top vendors for every event. 
            Explore <br/> compare and book effortlessly to make your celebration unforgetable
          </p>
          <p className="block text-[18px] ">
            Start planning now!
          </p>
          <Link href="/get-started" >
            <PrimaryBtn center={true} text="Get Started" />
          </Link>
        </div>
  );
}
