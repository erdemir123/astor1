import React from 'react'
import { Outlet } from 'react-router'
import Nav from './Nav'
import SideBar from './SideBar'

const Layout = () => {
  return (
    <div className="flex">
    <SideBar />
    <div className="flex flex-col flex-1 border border-red-500">
      <Nav />
        <div className=" flex flex-col relative">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout
