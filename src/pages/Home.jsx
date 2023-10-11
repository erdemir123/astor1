import React from 'react'

import { Outlet } from 'react-router'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'



const Home = () => {
  return (
    < div className="flex relative">
      
    <SideBar />
      
    <div className="w-full flex flex-col flex-1 bg-[#F5F8FA]" >
      <Nav />
        <div className=" w-full flex flex-col relative flex-1 mb-4 ">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
    
    
  )
}

export default Home
