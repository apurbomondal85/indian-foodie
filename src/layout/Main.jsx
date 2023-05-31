
import React, { useEffect, useState } from 'react'
import Navbars from '../sheart/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footers from '../sheart/Footer/Footer'
import { Triangle } from 'react-loader-spinner'

function Main() {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(false)
    setTimeout(() => {
      setLoader(true)
    }, 1000);
  }, [])

  return (
    <>
      {
        loader ?
          <div className='md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4'>
            < Navbars ></Navbars >
            <Outlet></Outlet>
            <Footers></Footers>
          </div >
          :
          <div className=' h-screen flex justify-center items-center'>
            <Triangle
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
      }
    </>
  )
}

export default Main
