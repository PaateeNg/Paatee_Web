import { GET_VENDORS, GetVendorData } from "@/lib/queries/GET_VENDORS"
import { useQuery } from "@apollo/client"
import PlannerCard from '@/components/PVCard/PVCard'

const VendorList = () => {
    const  {loading, error, data} = useQuery<GetVendorData>(GET_VENDORS)

    if(loading) return <div>loading...</div>
    if(error) return <div>error...</div>

     //come to change to vendors later//for now the array is empty no mock data
    const vendors = data?.getAllUser || [];
    console.log(vendors)

    return (
        <>
        {vendors.map( (vendor) => {
          return (
            <div>
              <PlannerCard email={vendor.email} firstName={vendor.firstName} lastName={vendor.lastName} />
            </div>
          )
        })}
        </>
    )
}

export default VendorList;