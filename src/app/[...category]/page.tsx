"use client";

import SearchBar from "@/components/SearchBar/SearchBar";
import VPBanner from "@/components/VPBanner/VPBanner";
import VendorList from "@/components/vendorList/VendorList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { cards } from "@/components/Home/CategoryCards";

// Define the type for the expected category structure
// interface Params {
//   category: string[];
// }

const Vendors = () => {
  // useParams might return a record or null, so we handle it cautiously
  const rawParams = useParams();
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryImg, setCategoryImg] = useState<string>("");

  // Safely cast and check if params contain the 'category' key
  const category = rawParams?.category as string[] | undefined;
  console.log(category?.[0]); 

  useEffect(() => {
    if (category && category[0]) {
      const cat = cards.find(
        (cate) => cate.title.toLowerCase() === category[0]
      );

      setCategoryImg(cat?.img || ""); // Use fallback empty string
      if (category[0] === "party-planners") {
        setCategoryName("Party Planners");
        setCategoryImg(cat?.img || "/planner-banner.png"); // Use fallback empty string
      } else {
        setCategoryName(cat?.title || ""); // Use fallback empty string
      }

      
    }
  }, [category]);

  return (
    <>
      <VPBanner name={categoryName} img={categoryImg} />
      <SearchBar />
      <VendorList />
    </>
  );
};

export default Vendors;
