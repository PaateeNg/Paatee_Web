"use client"

import SearchBar from '@/components/SearchBar/SearchBar'
import VPBanner from '@/components/VPBanner/VPBanner'
import VendorList from '@/components/vendorList/VendorList'
import { useParams } from "next/navigation";
import { useEffect, useState } from 'react';
import {cards} from '@/components/Pages/Home/CategoryCards'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';



const Vendors = () => {
  const category = useParams();
  const [categoryName, setCategoryName] = useState<string | undefined>("")
  const [categoryImg, setCategoryImg] = useState<string | undefined>("");
  console.log(category.category[0]);

  useEffect(() => {
    const cat = cards.find(cate => cate.title.toLowerCase() === category.category[0])

    if(category.category[0] === "party-planners"){
      setCategoryName('Party Planners');
      setCategoryImg(cat?.img)
      
    }
    else{
      setCategoryName(cat?.title);
    }
    setCategoryImg(cat?.img)
    

  
   
  }, [category.category[0]]);
  
  return (
    <>
        <VPBanner name={categoryName} img={categoryImg} />
        <SearchBar/>
        <VendorList/>
    </>
  )
}

export default Vendors