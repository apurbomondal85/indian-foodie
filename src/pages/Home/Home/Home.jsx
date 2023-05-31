
import React from 'react'
import Recipes from '../Recipes/Recipes';
import RecipeCard from '../RecipeCard/RecipeCard';
import Review from '../Review/Review';
import { lazy, Suspense } from 'react';
import LazyBanner from '../../../Lazyloading/LazyBanner';

const Banner = lazy(() => import('../Banner/Banner'));

function Home() {
  return (
    <div>
        <Suspense fallback={<LazyBanner></LazyBanner>}><Banner></Banner></Suspense>
        <Recipes></Recipes>
        <RecipeCard></RecipeCard>
        <Review></Review>
    </div>
  )
}

export default Home
