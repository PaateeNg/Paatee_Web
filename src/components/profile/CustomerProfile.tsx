"use client"
import React, { useState,  useContext } from 'react'
import Account from './customer/Account';
import Settings from './customer/Settings';
import SavedItems from './customer/SavedItems';

import { AuthContext } from '@/lib/context/UserContext';
import { useRouter } from 'next/navigation';

interface Menu {
  id: number;
  label: string;
  content: React.JSX.Element;
}

const menu: Menu[] = [
  { id: 1, label: 'Account', content: <Account /> },
  { id: 2, label: 'Settings', content: <Settings /> },
  { id: 3, label: 'Saved Items', content: <SavedItems /> },
]

const CustomerProfile = () => {
  const [activeSection, setActiveSection] = useState(menu[0].id);
  const route = useRouter()

  const renderedComponent = () => {
    const activeItem = menu.find(item => item.id === activeSection)
    return activeItem ? activeItem.content : null
  }

  const context = useContext(AuthContext);

  const logout = () => {
    context.logout()
    route.push('/')
    
    
  }

  return (
    <div className="flex gap-5 items-start mx-16 py-6">
      {/* Sidebar */}
      <div className="flex flex-col justify-between md:h-[300px] w-1/4 bg-white p-4">
        <div className='flex flex-col'>
          {menu.map(item => (
            <div 
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`cursor-pointer p-4 ${activeSection === item.id ? 'bg-[#F63D68] font-semibold text-white rounded-lg' : 'text-gray-700'}`}
            >
              {item.label}
            </div>
          ))}
        </div>
        {activeSection === 1
         &&
         <div onClick={logout} className='text-[#F63D68] font-semibold p-4 border-t-2 '>logout</div>
         }
         {activeSection === 2
         &&
         <div onClick={logout} className='text-[#F63D68] bg-[#f63d6831] text-center font-semibold p-4 border-t-2 '>Delete accocunt</div>
         }
        
      </div>

      {/* Content area */}
      <div className="w-3/4 p-6 bg-white">
        {renderedComponent()}
      </div>
    </div>
  )
}

export default CustomerProfile
