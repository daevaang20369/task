import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import "./Layout.css"
const Layout = () => {
  return (
    <div className='Layout'>
        <Navbar></Navbar>
        <Outlet/>
    </div>
    
  )
}

export default Layout