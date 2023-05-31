
import React from 'react'

function LazyCards() {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="animate-pulse h-64 bg-gray-400"></div>
            <div className="p-6">
                <div className="h-4 bg-gray-400 rounded w-1/4"></div>
                <div className="mt-4 h-6 bg-gray-400 rounded"></div>
                <div className="mt-6 h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="mt-4 h-6 bg-gray-400 rounded"></div>
            </div>
        </div>
    )
}

export default LazyCards
