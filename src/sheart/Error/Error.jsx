
import React from 'react'
import errorImg from '../../assets/images/error404.jpg'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-[50%] relative'>
                <img src={errorImg} alt="error image" />
                <div className=' w-[50%] absolute top-[10%] left-[25%] text-center'>
                    <h1 className='text-4xl font-bold'>{error.statusText}</h1>
                </div>
            </div>
        </div>
    )
}

export default Error
