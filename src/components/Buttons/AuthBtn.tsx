import React from 'react'

const AuthBtn = ({text}: {text:string}) => {
  return (
    <button className='p-3 bg-[#F63D6B] rounded-full mt-5 text-white' type='submit'>{text}</button>
  )
}

export default AuthBtn