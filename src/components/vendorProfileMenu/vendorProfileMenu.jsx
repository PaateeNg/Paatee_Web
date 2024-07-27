"use client"

import { menuItems } from './(menu)/menuObj/menu'
import Button from '@/components/vendorProfileMenu/button/Button'
import { useState } from 'react'




const VendorProfileMenu = ({setShowBackgroundComponent}) => {
    const [activeMenu, setActiveMenu] = useState(menuItems[0].id)

    const renderedComponent = () => {
        const activeItem = menuItems.find(item => item.id === activeMenu);
        return activeItem ? activeItem.content : null;
    }

    return <div className='flex flex-col border border-gray-200 sshadow-lg rounded-xl'>
        {/* Menu */}
        <div className='flex justify-between'>
            <div className='flex border'>
                {menuItems.map(menu => (
                    <div key={menu.id}
                    onClick={() => setActiveMenu(menu.id)}
                    className={`cursor-pointer py-2 px-5 focus:outline-none ${activeMenu === menu.id ? 'border-b-2 border-blue-500 text-blue-500' : ''}`}
                    >
                    {menu.label}
                    </div>
                ))}
            </div>
            <Button activeMenu={activeMenu} setShowBackgroundComponent={setShowBackgroundComponent} />
        </div>
        {/* Outlet */}
        <div className='flex gap-5  pt-4 px-5 '>
        <div className='w-14 h-12 rounded-xl bg-red-600'>
        </div>
        <div className='flex gap-10 w-full pb-5'> 
            {renderedComponent()}
        </div>
            
        </div>
    </div>
}

export default VendorProfileMenu;