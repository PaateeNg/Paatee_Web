
import HomeBanner from "@/components/Banner/HomeBanner";
import MiniBoxes from "@/components/Pages/Home/MiniBoxes";
// import Products from "./Products";
import Testimonials from "@/components/Pages/Home/Testimonials";
import TopPlanners from "@/components/Pages/Home/TopPlanners";
import TopVendors from "@/components/Pages/Home/TopVendors";
import Offer from "@/components/Section/Offers";
import dynamic from "next/dynamic";

//dynamic importation to prevent hydration
const CategoryCards = dynamic(() => import("@/components/Pages/Home/CategoryCards"), {ssr:false})

export default function Home() {
  return (
    <>
    <HomeBanner/>
    <div className="2xl:flex 2xl:flex-col 2xl:items-center bg-[#f9f9f9]">
      <MiniBoxes/>
      {/* {session && <Products/>} */}
      <CategoryCards/>
      <TopPlanners/>
      <TopVendors/>
      <Testimonials/>
      <Offer/>
    </div>
    </>
  );
}
