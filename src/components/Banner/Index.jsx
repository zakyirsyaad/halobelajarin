import React from 'react';

export default function Banner() {
    return (
        <div className='p-4 px-36'>
            <div className='flex flex-row items-center justify-between mb-10'>
                <div>
                    <p className='flex flex-row items-center justify-between font-space uppercase font-medium text-8xl'>Unleash <span>Your</span></p>
                    <p className='flex flex-row items-center justify-between font-space uppercase font-medium text-8xl'>Potential <span className='font-juana text-4xl italic normal-case border-2 border-secondary rounded-full px-6 py-2'>With</span></p>
                    <p className='font-space uppercase font-medium text-8xl'>expert guidance</p>
                </div>
                <div className='border-2 border-secondary w-64 h-64 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                    <p className='p-3 absolute bottom-0 left-0 font-medium'>Get a <b>real-time, one on one </b> mentoring session with an expert</p>
                </div>
            </div>
            <div className='flex flex-row items-center'>
                <div className='w-1/2 mr-5'>
                    <div className='flex flex-row justify-between border-2 p-5 mb-10 items-center border-black rounded-[20px] bg-[#EDEE94]'>
                        <p className='font-semibold w-96 text-xl'>Save your money for more urgent matters! Gain mentoring at <b>cheaper</b> price than other platforms</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.7993 7.70337H2.8784V0.703369H45.6526H49.1526V4.20337V45.767H42.1526V12.2496L4.94975 49.4524L0 44.5027L36.7993 7.70337Z" fill="#0E0801" />
                        </svg>
                    </div>

                    <div className='flex flex-row'>
                        <div className='border-2 border-secondary w-full h-36 mr-5 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                            <p className='p-3 absolute bottom-0 left-0 font-bold text-sm'>Easily hold classes using Discord to have sessions with mentors</p>
                        </div>
                        <div className='border-2 border-secondary w-full h-36 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                            <p className='p-3 absolute bottom-0 left-0 font-bold text-sm'>Gain a certificate after completing the class to add to your job qualifications</p>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-secondary w-1/2 h-72 bg-gradient-to-b from-transparent via-gray-200 to-gray-600 object-cover bg-center rounded-[20px] relative'>
                    <div className='absolute bottom-0 left-0 flex flex-row items-center justify-between mb-5 p-5'>
                        <p className='font-medium mr-20'>Earn <b>additional income </b> for <b>mentors</b> with an <b>easy and fast registration proccess</b></p>
                        <button className='btn btn-primary'>Register now</button>
                    </div>

                </div>
            </div>
        </div>

    );
}
