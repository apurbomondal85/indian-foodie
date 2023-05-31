
import { Button, Card } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Recipe({ chef }) {
    const { id, chef_image, chef_name, experience, recipes, likes } = chef;
    return (
        <Card
            className='relative pb-10 overflow-hidden'
            imgSrc={chef_image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {chef_name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Experience : {experience} Years
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Numbers of recipes : {recipes.length}
            </p>
            <div className='w-full flex justify-between items-center px-6 py-2 bg-slate-100 absolute bottom-0 left-0'>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Like : {likes}
                </p>
                <Link to={`/chef-recipe/${id}`}><Button>View Recipe</Button></Link>
            </div>
        </Card>
    )
}

export default Recipe
