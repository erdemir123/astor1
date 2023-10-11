import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
import { useSelector} from 'react-redux';
const PrivateRouter = () => {
    const {user}= useSelector((state)=>state.main)
    
  return (
    user ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRouter
