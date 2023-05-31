
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../sheart/Navbar/Navbar'

function LoginLayout() {
    return (
        <div className='h-screen md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4'>
            <Navbars></Navbars>
            <Outlet></Outlet>
        </div>
    )
}

export default LoginLayout
