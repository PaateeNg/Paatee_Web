"use client"

import Details from '@/components/vendorProfileMenu/(menu)/Details'
import Products from '@/components/vendorProfileMenu/(menu)/Products'
import Orders from '@/components/vendorProfileMenu/(menu)/Orders'
import Bookings from '@/components/vendorProfileMenu/(menu)/Bookings'
import Transactions from '@/components/vendorProfileMenu/(menu)/Transactions'
import { useState } from 'react'


const menuItems = [
    {id: 'menu1', label: 'Details', content: <Details/>},
    {id: 'menu2', label: 'Product', content: <Products/>},
    {id: 'menu3', label: 'Orders', content: <Orders/>},
    {id: 'menu4', label: 'Bookings', content: <Bookings/>},
    {id: 'menu5', label: 'Transactions', content: <Transactions/>}
  ]



const VendorProfileMenu = () => {
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
            <button className='bg-red-500 text-white px-5 rounded-3xl mt-1'>Edit Profile</button>
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