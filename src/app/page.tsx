import HomeBanner from "@/components/Banner/HomeBanner";
import MiniBoxes from "@/components/Home/MiniBoxes";
import Testimonials from "@/components/Home/Testimonials";
import TopPlanners from "@/components/Home/TopPlanners";
import TopVendors from "@/components/Home/TopVendors";
import Offer from "@/components/Home/Offers";
import dynamic from "next/dynamic";

//dynamic importation to prevent hydration
const CategoryCards = dynamic(() => import("@/components/Home/CategoryCards"), {ssr:false})

export default function Home() {
  return (
    <>
    <HomeBanner/>
    {/* <div className="2xl:flex 2xl:flex-col 2xl:items-center bg-[#f9f9f9]">
      <MiniBoxes/>
      <CategoryCards/>
      <TopPlanners/>
      <TopVendors/>
      <Testimonials/>
      <Offer/>
    </div> */}
    </>
  )
}
