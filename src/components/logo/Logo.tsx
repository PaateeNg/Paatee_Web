import React from 'react'
import Image from "next/image";

const Logo = () => {
  return (
    <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
  )
}

export default Logo