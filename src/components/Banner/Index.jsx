import React from 'react';

export default function Banner() {
    return (
        <div className='p-4 lg:px-24 xl:px-36 '>
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10'>
                <div className='md:mr-5 2xl:w-2/3'>
                    <p className='flex flex-row items-center justify-between font-space uppercase font-medium text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl'>Unleash <span>Your</span></p>
                    <p className='flex flex-row items-center justify-between font-space uppercase font-medium text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl'>Potential <span className='font-juana text-2xl lg:text-4xl 2xl:text-5xl italic normal-case border-2 border-secondary rounded-full px-6 py-2'>With</span></p>
                    <p className='font-space uppercase font-medium text-5xl md:text-6xl  xl:text-7xl 2xl:text-8xl mb-5'>expert guidance</p>
                </div>
                <div className='border-2 border-secondary w-full 2xl:w-96 h-56 lg:w-60 lg:h-60 xl:w-72 xl:h-72 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                    <p className='p-3 absolute bottom-0 left-0 font-medium md:mb-5 lg:mb-0 md:text-xl lg:text-base'>Get a <b>real-time, one on one </b> mentoring session with an expert</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row xl:items-center'>
                <div className='w-full md:w-1/2 mr-5'>
                    <div className='flex flex-row justify-between border-2 p-5 mb-5 lg:mb-10 items-center border-black rounded-[20px] bg-[#EDEE94]'>
                        <p className='font-semibold w-96 text-xl'>Save your money for more urgent matters! Gain mentoring at <b>cheaper</b> price than other platforms</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.7993 7.70337H2.8784V0.703369H45.6526H49.1526V4.20337V45.767H42.1526V12.2496L4.94975 49.4524L0 44.5027L36.7993 7.70337Z" fill="#0E0801" />
                        </svg>
                    </div>

                    <div className='flex flex-row mb-5 md:mb-0'>
                        <div className='border-2 border-secondary w-full h-36 mr-5 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                            <p className='p-3 absolute bottom-0 left-0 font-bold text-sm'>Easily hold classes using Discord to have sessions with mentors</p>
                        </div>
                        <div className='border-2 border-secondary w-full h-36 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                            <p className='p-3 absolute bottom-0 left-0 font-bold text-sm'>Gain a certificate after completing the class to add to your job qualifications</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-secondary w-full h-56 md:h-auto xl:h-80 lg:w-1/2 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                    <div className='absolute bottom-0 left-0 flex flex-row items-center justify-between mb-5 p-5'>
                        <p className='font-medium mr-5 xl:mr-20'>Earn <b>additional income </b> for <b>mentors</b> with an <b>easy and fast registration proccess</b></p>
                        <button className='btn btn-primary'>Register now</button>
                    </div>

                </div>
            </div>
        </div>

    );
}
