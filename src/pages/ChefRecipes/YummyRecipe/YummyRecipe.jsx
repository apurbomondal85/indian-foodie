
import { ListGroup } from 'flowbite-react';
import React, { useState } from 'react'
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function YummyRecipe({ recipe }) {
    const { image, name, ingredients, cooking_method, rating } = recipe;
    const [open, setOpen] = useState(false);

    const handleToast = () => {
        toast(`Your favorite recipe ${name}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setOpen(true)
    }

    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-60 object-cover" src={image} alt="recipe image" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <h2>Ingredients : </h2>
                <ListGroup className='my-4'>
                    {
                        ingredients.slice(0, 5)?.map((item, index) => <ListGroup.Item key={index}>{item}</ListGroup.Item>)
                    }
                </ListGroup>
                <p><strong>Cooking Method :</strong> {cooking_method.slice(0, 80)}...<Link className='text-blue-600 underline'> Read more</Link></p>
                <div className='flex items-center gap-12 mt-6'>
                    <div className='flex items-center gap-2'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            className='text-yellow-300'
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                        <span>{rating.toFixed(1)}</span>
                    </div>
                    <button disabled={open} onClick={handleToast} className="inline-flex items-center gap-2 py-2 px-3 cursor-pointer text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                        Favorite
                        <FaArrowRight></FaArrowRight>
                        <ToastContainer />
                    </button>
                </div>
            </div>
        </div >

    )
}

export default YummyRecipe
