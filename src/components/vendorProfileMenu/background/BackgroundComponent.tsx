import React from 'react'
import AddProduct from '../createEditVendor/AddProduct'
import UpdateVendor from '../UpdateVendor';


type Menu = {
  setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu?: any;
}
const BackgroundComponent = ({setShowBackgroundComponent, activeMenu}: Menu ) => {
  return (
    <div className='bg-[#80808087] h-auto w-full absolute top-0 left-0 flex justify-center items-center '>
      {activeMenu === 'menu1' ? <UpdateVendor setShowBackgroundComponent={setShowBackgroundComponent}/> : <AddProduct setShowBackgroundComponent={setShowBackgroundComponent} /> }
      
    </div>
  )
}

export default BackgroundComponent