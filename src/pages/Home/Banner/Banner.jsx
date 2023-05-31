
import { Button, Carousel } from 'flowbite-react'
import React from 'react'
import manImg from '../../../assets/images/person1.png'

function Banner() {
    return (
        <div className="h-72 md:h-96 lg:h-[500px]">
            {/* banner carousel */}
            <Carousel>
                <div className="h-full bg-banner1 bg-cover dark:text-white">
                    <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 -z-[1]'></div>
                    <div className='w-[80%] mx-auto h-full grid lg:grid-cols-2 items-center justify-center z-[1]'>
                        <div className="text-white">
                            <h1 className='text-2xl lg:text-5xl font-bold'>The best <br /> indian dishes</h1>
                            <p className='my-3'>Welcome to our Indian recipe website! Explore the flavors of India with our extensive <span className='hidden lg:inline'>collection of mouth-watering recipes, featuring traditional and modern dishes from all regions of the country.</span></p>
                            <Button>View More</Button>
                        </div>
                        <div className="hidden lg:block">
                            <img src={manImg} className='w-full' alt="banner person" />
                        </div>
                    </div>
                </div>
                <div className="h-full bg-banner2 bg-cover dark:text-white">
                    <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 -z-[1]'></div>
                    <div className='w-[80%] mx-auto h-full grid lg:grid-cols-2 items-center justify-center z-[1]'>
                        <div className="text-white">
                            <h1 className='text-2xl lg:text-5xl font-bold'>The best <br />yummy food</h1>
                            <p className='my-3'>Welcome to our Indian recipe website! Explore the flavors of India with our extensive <span className='hidden lg:inline'>collection of mouth-watering recipes, featuring traditional and modern dishes from all regions of the country.</span></p>
                            <Button>View More</Button>
                        </div>
                        <div className="hidden lg:block">
                            <img src={manImg} className='w-full' alt="banner person" />
                        </div>
                    </div>
                </div>
                <div className="h-full bg-banner3 bg-cover dark:text-white">
                    <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 -z-[1]'></div>
                    <div className='w-[80%] mx-auto h-full grid lg:grid-cols-2 items-center justify-center z-[1]'>
                        <div className="text-white">
                            <h1 className='text-2xl lg:text-5xl font-bold'>The best <br /> testy recipe</h1>
                            <p className='my-3'>Welcome to our Indian recipe website! Explore the flavors of India with our extensive <span className='hidden lg:inline'>collection of mouth-watering recipes, featuring traditional and modern dishes from all regions of the country.</span></p>
                            <Button>View More</Button>
                        </div>
                        <div className="hidden lg:block">
                            <img src={manImg} className='w-full' alt="banner person" />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
