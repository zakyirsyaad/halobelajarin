"use client"

import React, { useRef } from 'react'
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }} className='bg-black/[.4] my-20 p-10 text-white rounded-box'>
            <p className='text-3xl font-medium text-white mb-10 md:mb-0'>Why belajarin? Good Question.</p>
            <div className='md:flex md:flex-row items-center'>
                <div className=' md:mr-44'>
                    <div className='mb-5'>
                        <div className='flex flex-row items-center'>
                            <span className="material-symbols-outlined text-white/50 mr-3">
                                task_alt
                            </span>
                            <p className='text-xl font-medium'>Affordable prices</p>
                        </div>
                        <p className='text-white/50 mr-3'>With the price limitations we have set, you will not incur any losses.</p>
                    </div>

                    <div className='mb-5'>
                        <div className='flex flex-row items-center'>
                            <span className="material-symbols-outlined text-white/50 mr-3">
                                task_alt
                            </span>
                            <p className='text-xl font-medium'>Acquire quality knowledge effortlessly.</p>
                        </div>
                        <p className='text-white/50 mr-3'>Delegate your confusion to a talented mentor within minutes, and achieve long-term results.</p>
                    </div>

                    <div className='mb-5'>
                        <div className='flex flex-row items-center'>
                            <span className="material-symbols-outlined text-white/50 mr-3">
                                task_alt
                            </span>
                            <p className='text-xl font-medium'>Easy payment process.</p>
                        </div>
                        <p className='text-white/50 mr-3'>Your issues can be resolved with our quick and easy payment solutions.</p>
                    </div>

                    <div className='mb-5'>
                        <div className='flex flex-row items-center'>
                            <span className="material-symbols-outlined text-white/50 mr-3">
                                task_alt
                            </span>
                            <p className='text-xl font-medium'>Gain access to round-the-clock guidance 24/7.</p>
                        </div>
                        <p className='text-white/50 mr-3'>We provide access to mentoring 24/7, anytime and anywhere without interruption.</p>
                    </div>
                </div>

                <CldVideoPlayer src="kcyyar2wxpsaxrgpnqyt" width='1280' height='720' />
            </div>
        </motion.div>
    )
}
