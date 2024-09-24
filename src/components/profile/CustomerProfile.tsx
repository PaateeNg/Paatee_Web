"use client"
import React, { useState } from 'react'
import Account from './customer/Account';
import Settings from './customer/Settings';
import SavedItems from './customer/SavedItems';

const menu = [
  { id: 1, label: 'Account', content: <Account /> },
  { id: 2, label: 'Settings', content: <Settings /> },
  { id: 3, label: 'Saved Items', content: <SavedItems /> },
]

const CustomerProfile = () => {
  const [activeSection, setActiveSection] = useState(menu[0].id);

  const renderedComponent = () => {
    const activeItem = menu.find(item => item.id === activeSection)
    return activeItem ? activeItem.content : null
  }

  return (
    <div className="flex gap-5 items-start mx-16">
      {/* Sidebar */}
      <div className="flex flex-col w-1/4 bg-white p-4">
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

      {/* Content area */}
      <div className="w-3/4 p-6 bg-white">
        {renderedComponent()}
      </div>
    </div>
  )
}

export default CustomerProfile
