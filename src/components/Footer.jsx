import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row h-16 bg-white w-[100%] md:justify-between items-center  text-red-400 px-4 text-sm '>
     <div>2022© turna</div>
     <div className='flex gap-4'>
        <Link to="#">About</Link>
        <Link to="#">Support</Link>
        <Link to="#">Purchase</Link>
     </div>
    </div>
  )
}

export default Footer
