import NavBar from "@/components/NavBar/DesktopNavBar"
import VPBanner from "@/components/VPBanner/VPBanner"
import PVCard2 from '@/components/PVCard/PVCard2'
import SearchBar from "@/components/SearchBar/SearchBar"
import Footer from "@/components/Footer"

export default function AllVendors() {
    interface VendorCardDataProps {
        cat1?: string;
        cat2?: string;
        cat3?: string;
      }
      const VendorCardData: VendorCardDataProps = {
        cat1: "Weddings",
        cat2: "Social Gatherings",
        cat3: "Corporate",
      };
    return (
        <>
            <NavBar />
            <VPBanner />
            <div className="flex w-full justify-center mb-[100px]">

                <div className="flex flex-wrap w-full justify-center max-w-[1400px]">
                    <div className="flex w-full ps-[30px]
                     2xl:ps-[55px] mb-[10px] mt-[20px]">
                        <SearchBar />
                    </div>

                    <PVCard2 cat1={VendorCardData.cat1} cat2={VendorCardData.cat2} cat3={VendorCardData.cat3}/>
                    <PVCard2 cat1={VendorCardData.cat1} cat2={VendorCardData.cat2} cat3={VendorCardData.cat3}/>
                    <PVCard2 cat1={VendorCardData.cat1} cat2={VendorCardData.cat2} cat3={VendorCardData.cat3}/>
                    <PVCard2 cat1={VendorCardData.cat1} cat2={VendorCardData.cat2} cat3={VendorCardData.cat3}/>
                    <PVCard2 cat1={VendorCardData.cat1} cat2={VendorCardData.cat2} cat3={VendorCardData.cat3}/>
                    <PVCard2 cat1={VendorCardData.cat1} cat2={VendorCardData.cat2} cat3={VendorCardData.cat3}/>

                </div>
            </div>
            <Footer/>
        </>
    )
}