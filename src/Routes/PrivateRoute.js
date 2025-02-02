import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const PrivateRoute = () => {
  return (
    <>
    <div>
        {window.localStorage.getItem("token") ?
       <Outlet /> :
       <Navigate to={"/e-commerce-website/login"} />   
    }
    </div>
    </>
  )
}

export default PrivateRoute