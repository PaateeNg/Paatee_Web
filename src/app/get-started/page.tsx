import GetStartedComponent from '@/components/GetStarted/GetStarted'
import Link from 'next/link'
import React from 'react'

const components = [
  {link:'vendor', title: 'Get Started as a Vendor', desc: 'Seamless Convenience Swift, Free Delivery to Your Door'},
  {link:'customer',title: 'Get Started as a Customer', desc: 'Seamless Convenience Swift, Free Delivery to Your Door'}
]

const page = () => {
  return (
    <section className='pt-11 h-screen'>
      <div className='bg-white max-w-2xl m-auto'>
        <h2 className='font-semibold text-2xl pb-8 pt-3 bg-gray-100'>Select how to get started</h2>
        
        <div className='bg-white'>
          {components.map(comp => (
            <Link key={comp.title}  href={`/get-started/${comp.link}`}><GetStartedComponent title ={comp.title} desc= {comp.desc} /></Link>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default page