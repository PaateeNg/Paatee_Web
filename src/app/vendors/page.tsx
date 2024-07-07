"use client"
import PlannerCard from '@/components/PVCard/PVCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import VPBanner from '@/components/VPBanner/VPBanner'
// import VendorCard from '@/components/vendorCard/VendorCard'
import React, { useState, useEffect } from 'react'
import { GET_VENDORS } from '@/lib/queries/GET_VENDORS'
import { useQuery } from '@apollo/client'




const Vendors = () => {
  const { loading, error, data } = useQuery(GET_VENDORS);

  
  if (loading) return <p>Loading</p>
  if (error) return <p>Error: {error.message}</p>;

  //come to change to vendors later//for now the array is empty no mock data
  const vendors = data.getAllUser;
  console.log(vendors)


  
  return (
    <>
        <VPBanner/>
        <SearchBar/>
        <PlannerCard />


        
    </>
  )
}

export default Vendors