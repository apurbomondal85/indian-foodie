
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import LazyCards from '../../../lazyloading/LazyCards';

const Recipe = lazy(() => import('../Recipe/Recipe'));

function Recipes() {
    const recipeData = useLoaderData();
    return (
        <div className='py-16'>
            <h1 className='text-3xl text-slate-800 font-bold text-center underline'>Our Chefs</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {
                    recipeData?.map(item => <Suspense fallback={<LazyCards></LazyCards>}><Recipe key={item.id} chef={item}></Recipe></Suspense>)
                }
            </div>
        </div>
    )
}

export default Recipes
