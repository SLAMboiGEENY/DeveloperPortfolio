import React, { useState } from 'react';
import Image from 'next/image';
import Swipe from 'react-easy-swipe';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { projectItems } from '../lib/ProjectData';


const ProjectCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => {
        setCurrentSlide((currentSlide - 1 + projectItems.length) % projectItems.length);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % projectItems.length);
    };


    return (
        <div className='relative mt-28'>
        <h1 className="text-center py-3 font-bold text-2xl text-primary-light">Some of my Projects</h1>
            <AiOutlineLeft
                onClick={previousSlide}
                className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-primary-light z-20"
            />
            <div className="w-full max-h-80 object-cover flex overflow-hidden m-auto">
                <Swipe 
                    onSwipeLeft={previousSlide} 
                    onSwipeRight={nextSlide}
                    className="relative z-10 w-full h-screen"
                >
                    {projectItems.map((projectItem, index) => {
                        if (index === currentSlide) {
                            return ( 
                                <Image 
                                    key={projectItem.id}

                                    alt="photos"
                                    src={projectItem.src}
                                    width={400}
                                    height={400}
                                    
                                    className="rounded-xl mx-auto mb-2 cursor-pointer text-primary-light text-xl font-medium"
                                />
                            );
                        }
                    })}
                </Swipe>
            </div>

            <AiOutlineRight 
                onClick={nextSlide}
                className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-primary-light z-20"
            />
        </div>
    );
};   

export default ProjectCarousel; 