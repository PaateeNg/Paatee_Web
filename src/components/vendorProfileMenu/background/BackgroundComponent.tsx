import React from 'react'
import AddProduct from '../createEditVendor/AddProduct'


type Menu = {
  setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
}
const BackgroundComponent = ({setShowBackgroundComponent}: Menu ) => {
  return (
    <div className='background h-screen w-full absolute top-0 left-0 flex justify-center items-center '>
      <AddProduct setShowBackgroundComponent={setShowBackgroundComponent} />
    </div>
  )
}

export default BackgroundComponent