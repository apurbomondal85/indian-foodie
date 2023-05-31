
import { Button } from 'flowbite-react';
import React from 'react'
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom'
import YummyRecipe from '../YummyRecipe/YummyRecipe';

function ChefRecipes() {
    const chefData = useLoaderData();
    const { chef_image, chef_name, chef_description, likes, recipes, experience } = chefData
    return (
        <div>
            <div className='w-full grid grid-cols-2 items-center justify-center gap-6 my-12'>
                <div>
                    <h1 className='text-5xl font-bold'>{chef_name}</h1>
                    <p className='my-3'>{chef_description}</p>
                    <p className='text-gray-500'>Number of recipes : {recipes.length} Items</p>
                    <p className='text-gray-500'>Experience : {experience} Years</p>
                    <div className='mt-8 flex gap-12 items-center'>
                        <span className='flex items-center gap-1 px-6 py-2 rounded-md cursor-pointer bg-slate-100'><FaThumbsUp color='gray'></FaThumbsUp>Like {likes}</span>
                        <Button>View More</Button>
                    </div>
                </div>
                <div className="">
                    <img src={chef_image} className='w-full' alt="banner person" />
                </div>
            </div>
            <div className='my-16'>
                <h2 className='text-slate-800 text-3xl font-bold text-center underline mb-10'>Yummy Recipes</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        recipes?.map(recipe => <YummyRecipe key={recipe._id} recipe={recipe}></YummyRecipe>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ChefRecipes
