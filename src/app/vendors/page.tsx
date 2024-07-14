"use client"

import SearchBar from '@/components/SearchBar/SearchBar'
import VPBanner from '@/components/VPBanner/VPBanner'
import VendorList from '@/components/vendorList/VendorList'
const Vendors = () => {
  return (
    <>
        <VPBanner/>
        <SearchBar/>
        <VendorList/>
    </>
  )
}

export default Vendors