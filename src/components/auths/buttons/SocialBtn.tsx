import React from 'react'

const SocialBtn = ({text, social}: {text:string; social: JSX.Element}) => {
  return (
    <div
      className='flex justify-center items-center gap-2 border w-9/12 m-auto p-2 rounded-full shadow-md font-semibold'
    >{social}{text}</div>
  )
}

export default SocialBtn