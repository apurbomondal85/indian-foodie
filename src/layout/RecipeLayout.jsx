
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../sheart/Navbar/Navbar'
import Footers from '../sheart/Footer/Footer'

function RecipeLayout() {
    return (
        <div className='w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4'>
            <Navbars></Navbars>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    )
}

export default RecipeLayout
