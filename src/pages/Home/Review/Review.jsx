
import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import { Pagination, Autoplay } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Avatar } from 'flowbite-react';
import reviewImg1 from '../../../assets/images/review1.jpg'
import reviewImg2 from '../../../assets/images/review2.jpg'
import reviewImg3 from '../../../assets/images/review3.jpg'

function Review() {
    return (
        <div className='py-12'>
            <h1 className='text-center text-3xl text-slate-800 font-bold underline'>Review</h1>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-full h-[200px] md:h-[250px] lg:h-[400px] my-12 shadow-md">
                <SwiperSlide>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className="text-center py-4 lg:py-8 px-4 lg:px-8 w-[80%] lg:w-[50%] mx-auto bg-[rgba(172,170,170,0.1)]">
                            <img src={reviewImg1} className='w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover mx-auto' alt="review image" />
                            <h2 className='text-xl lg:text-2xl font-semibold text-slate-800 my-2 lg:my-4'>James jhon</h2>
                            <p>I  really enjoyed using this recipe website. The layout was clean and <span className='hidden md:inline'>easy to navigate and the recipes were all well-organized and easy to find.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className="text-center py-8 px-4 lg:px-8 w-[80%] lg:w-[50%] mx-auto bg-[rgba(172,170,170,0.1)]">
                            <img src={reviewImg2} className='w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover mx-auto' alt="review image" />
                            <h2 className='text-xl lg:text-2xl font-semibold text-slate-800 my-2 lg:my-4'>James jhon</h2>
                            <p>I  really enjoyed using this recipe website. The layout was clean and <span className='hidden md:inline'>easy to navigate and the recipes were all well-organized and easy to find.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className="text-center py-8 px-4 lg:px-8 w-[80%] lg:w-[50%] mx-auto bg-[rgba(172,170,170,0.1)]">
                            <img src={reviewImg3} className='w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover mx-auto' alt="review image" />
                            <h2 className='text-xl lg:text-2xl font-semibold text-slate-800 my-2 lg:my-4'>James jhon</h2>
                            <p>I  really enjoyed using this recipe website. The layout was clean and <span className='hidden md:inline'>easy to navigate and the recipes were all well-organized and easy to find.</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Review
