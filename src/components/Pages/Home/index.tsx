
import HomeBanner from "../../Banner/HomeBanner";
import MiniBoxes from "./MiniBoxes";
// import Products from "./Products";
// import Testimonials from "./Testimonials";
// import TopPlanners from "./TopPlanners";
// import TopVendors from "./TopVendors";
// import Offer from "@/components/Section/Offers";
import CategoryCards from "./CategoryCards";


export default function HomePage() {
	// const session = false
	return (
	<>
	<HomeBanner/>
	<div className="2xl:flex 2xl:flex-col 2xl:items-center bg-[#f9f9f9]">
		<MiniBoxes/>
		{/* {session && <Products/>} */}
		<CategoryCards/>
		{/* <TopPlanners/>
		<TopVendors/>
		<Testimonials/>
		<Offer/> */}
	</div>
	</>
	)
}
