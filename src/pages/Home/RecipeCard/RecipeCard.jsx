
import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard() {
    return (
        <div className='w-full grid md:grid-cols-2 gap-6 lg:gap-12 h-auto md:h-[250px] lg:h-[350px] my-12 rounded-lg overflow-hidden'>
            <div className='w-full h-[250px] md:h-full bg-banner1 bg-cover'></div>
            <div>
                <h5 className="text-3xl font-bold tracking-tight text-slate-800 mt-8">
                    Recipe Search
                </h5>
                <p className="font-normal text-gray-700 my-4 pr-6">
                    Search over 2.3 million recipes by diets, calories and nutrient ranges.Recipe search is a process of looking for specific cooking instructions and ingredient lists to prepare a particular dish or meal. It typically involves using various online or offline resources such as cookbooks, recipe websites....
                    <Link className='text-blue-600'>Learn more</Link>
                </p>
                <Button className='lg:mt-8'>Start Now</Button>
            </div>
        </div>
    )
}

export default RecipeCard
