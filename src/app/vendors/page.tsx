import NavBar from '@/components/NavBar/DesktopNavBar'
import PlannerCard from '@/components/PVCard/PVCard'
import SearchBar from '@/components/SearchBar/SearchBar'
import VPBanner from '@/components/VPBanner/VPBanner'
import React from 'react'

const Vendors = () => {
  return (
    <>
        <NavBar/>
        <VPBanner/>
        <SearchBar/>
        <PlannerCard />
        
    </>
  )
}

export default Vendors