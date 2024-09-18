"use client";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import Link from "next/link";

export default function HomeBanner() {
  // md:h-[480px] lg:h-[555px]
  return (

        <div className="px-1 flex flex-col gap-3 justify-center  items-center bg-white h-[550px] sm:h-[calc(100vh-90px)] w-ful">
          <div className="md:flex w-40%] p-[5px] md:bg-[#f63d6823] rounded-full gap-2" >
            <h5 className='bg-white p-[2px] text-[#F63D68] px-3 border border-[#f63d685e] w-fit m-auto mb-2 md:mb-0 md:border-none font-bold rounded-full text-center text-sm'>Party planning made easy </h5>
            <h5 className='text-[#F63D68] bg-[#f63d6823] px-3 w-fit m-auto font-bold rounded-full text-center text-sm'>Vendors, venue and planners all in one place</h5>
          </div>
          <h1 className="block text-center text-5xl font-semibold text-[35px] md:text-[56px] ">Your perfect Event Starts Here </h1>
          <p className="block text-center text-[15px] md:text-lg max-w-[600px] mb-8">
            Say goodebye to planning headaches! Connect with top vendors for every event. 
            Explore  compare and book effortlessly to make your celebration unforgetable
          </p>
          <Link href="/about" >
            <PrimaryBtn center={true} text="Learn more" />
          </Link>
        </div>

  
        
     
  );
}
