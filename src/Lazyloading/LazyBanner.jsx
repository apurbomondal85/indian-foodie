
import React from 'react'
import LazyLoad from 'react-lazy-load'

function LazyBanner() {
    return (
        <LazyLoad className='h-72 md:h-96 lg:h-[500px]' once>
            <div className="relative w-full h-96 bg-gray-200">
                <LazyLoad height={100} once>
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-12 bg-gray-300 animate-pulse"></h1>
                </LazyLoad>
                <LazyLoad height={100} once>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4/5 h-8 bg-gray-300 animate-pulse"></p>
                </LazyLoad>
                <LazyLoad height={50} once>
                    <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-1/4 h-10 bg-gray-300 animate-pulse"></button>
                </LazyLoad>
            </div>
        </LazyLoad>
    )
}

export default LazyBanner
