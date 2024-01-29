'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import testi1 from './kelly-sikkema-JN0SUcTOig0-unsplash.jpg'
import testi2 from './christian-buehner-DItYlc26zVI-unsplash.jpg'
import testi3 from './wesley-tingey-3mGnYRUNIck-unsplash.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function Testimoni() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <div className='bg-secondary text-primary px-36 py-10'>
            <p className='text-third font-space font-bold text-4xl mb-10'>What they say about Belajarin</p>
            <div className='flex flex-row justify-between'>
                <motion.div
                    ref={ref}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress
                    }}
                    className='bg-[#EDEE94] w-80 pb-5 rounded-xl text-secondary'>
                    <Image src={testi1} alt='Testimoni Belajarin' width={200} height={200} className='w-full rounded-br-[50px] border-4 border-secondary' />
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col p-3 w-64 justify-between'>
                            <p className='font-bold mb-5'>Kirana, 21 year-old</p>
                            <p className='italic text-sm'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <g clip-path="url(#clip0_1168_2103)">
                                <path d="M0 26.682H12.4041L3.63284 35.4532L9.54785 41.3672L18.318 32.597V45H26.682V32.597L35.4532 41.3672L41.3672 35.4532L32.597 26.682H45V18.318H32.597L41.3672 9.54785L35.4532 3.63284L26.682 12.4041V0H18.318V12.4041L9.54785 3.63284L3.63284 9.54785L12.4041 18.318H0V26.682Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1168_2103">
                                    <rect width="45" height="45" fill="white" transform="matrix(-1 0 0 -1 45 45)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress
                    }}
                    className='bg-[#EDEE94] w-80 pb-5 rounded-xl text-secondary'>
                    <Image src={testi2} alt='Testimoni Belajarin' width={200} height={200} className='w-full rounded-br-[50px] border-4 border-secondary' />
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col p-3 w-64 justify-between'>
                            <p className='font-bold mb-5'>Christian, 21 year-old</p>
                            <p className='italic text-sm'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <g clip-path="url(#clip0_1168_2103)">
                                <path d="M0 26.682H12.4041L3.63284 35.4532L9.54785 41.3672L18.318 32.597V45H26.682V32.597L35.4532 41.3672L41.3672 35.4532L32.597 26.682H45V18.318H32.597L41.3672 9.54785L35.4532 3.63284L26.682 12.4041V0H18.318V12.4041L9.54785 3.63284L3.63284 9.54785L12.4041 18.318H0V26.682Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1168_2103">
                                    <rect width="45" height="45" fill="white" transform="matrix(-1 0 0 -1 45 45)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress
                    }}
                    className='bg-[#EDEE94] w-80 pb-5 rounded-xl text-secondary'>
                    <Image src={testi3} alt='Testimoni Belajarin' width={200} height={200} className='w-full rounded-br-[50px] border-4 border-secondary' />
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-col p-3 w-64 justify-between'>
                            <p className='font-bold mb-5'>Wesley, 21 year-old</p>
                            <p className='italic text-sm'>“The mentor can always be relied on to answer my confusion at any time”</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <g clip-path="url(#clip0_1168_2103)">
                                <path d="M0 26.682H12.4041L3.63284 35.4532L9.54785 41.3672L18.318 32.597V45H26.682V32.597L35.4532 41.3672L41.3672 35.4532L32.597 26.682H45V18.318H32.597L41.3672 9.54785L35.4532 3.63284L26.682 12.4041V0H18.318V12.4041L9.54785 3.63284L3.63284 9.54785L12.4041 18.318H0V26.682Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1168_2103">
                                    <rect width="45" height="45" fill="white" transform="matrix(-1 0 0 -1 45 45)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}
