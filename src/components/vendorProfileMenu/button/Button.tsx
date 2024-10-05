
'use client'

import React from 'react'

type Menu = {
    activeMenu: string;
    setShowBackgroundComponent: React.Dispatch<React.SetStateAction<boolean>>;
}




const Button = ({activeMenu, setShowBackgroundComponent} : Menu ) => {

  const handleClick = () => {
    if(activeMenu === "menu1"){
      setShowBackgroundComponent(true)
    }
    if(activeMenu === "menu2"){
      setShowBackgroundComponent(true)
    }
    if(activeMenu === "menu3"){ 
      console.log('Orders')
    }
    if(activeMenu === "menu4"){
      console.log('Bookings')
    }
    if(activeMenu === "menu5"){
      console.log('Transaactions')
    }
  }


  return (
    <button
     className='bg-red-500 text-white px-5 mx-5 rounded-3xl mt-1'
     onClick={handleClick}
     >
       {
        activeMenu === 'menu1' ? 'Edit1' 
        : activeMenu === 'menu2' ? 'Add Product'
        : activeMenu === 'menu3' ? 'Edit3'
        : activeMenu === 'menu4' ? 'Edit4'
        : activeMenu === 'menu5' ? 'Edit5' : null
       }
    </button>
  )
}

export default Button