"use client";
import Offer from "@/components/Section/Offers";
import HomeBanner from "../../Banner/HomeBanner";
import CategoryCards from "./CategoryCards";
import MiniBoxes from "./MiniBoxes";
import PlannerCards from "./PlannerCards";
import Products from "./Products";
import Testimonials from "./Testimonials";
import VendorCards from "./VendorCards";


export default function HomePage() {
	return (
	<>
	<HomeBanner/>
	<div className="2xl:flex 2xl:flex-col 2xl:items-center bg-[#f9f9f9]">
		<MiniBoxes/>
		<Products/>
		<CategoryCards/>
		<PlannerCards/>
		<VendorCards/>
		<Testimonials/>
		<Offer/>
	</div>
	</>
	)
}
