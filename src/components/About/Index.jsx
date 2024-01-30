"use client"

import React, { useRef } from 'react';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='lg:px-24 xl:px-36 md:my-20'>
            <p className='text-5xl font-black mb-14 font-space'>Why belajarin? <span className='font-juana italic'>Good Question.</span> </p>
            <div className='flex flex-col lg:flex-row items-center'>

                {/* Left Column */}
                <div className='md:mr-10 mb-5 lg:mb-0'>
                    <div className='flex flex-col md:flex-row md:mb-5'>
                        <div className='flex flex-row w-full md:w-72 md:mr-3'>
                            <span className="material-symbols-outlined mr-3">
                                task_alt
                            </span>
                            <div className='flex flex-col'>
                                <p className='text-xl font-bold'>Affordable prices</p>
                                <p className='font-medium'>Get cheap mentoring prices starting from Rp20.000 per 1-hour session</p>
                            </div>
                        </div>

                        <div className='flex flex-row w-full md:w-72'>
                            <span className="material-symbols-outlined mr-3">
                                task_alt
                            </span>
                            <div className='flex flex-col'>
                                <p className='text-xl font-bold'>Clear learning path</p>
                                <p className='font-medium'>The material presented by the mentor has been curated so that it has a learning path that meets standards</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row'>
                        <div className='flex flex-row w-full md:w-72 md:mr-3'>
                            <span className="material-symbols-outlined mr-3">
                                task_alt
                            </span>
                            <div className='flex flex-col'>
                                <p className='text-xl font-bold'>Easy registration process for mentors</p>
                                <p className='font-medium'>Mentors can register without complicated paperwork and the selection process takes no more than 3 days</p>
                            </div>
                        </div>

                        <div className='flex flex-row w-full md:w-72'>
                            <span className="material-symbols-outlined mr-3">
                                task_alt
                            </span>
                            <div className='flex flex-col'>
                                <p className='text-xl font-bold'>Round-the-clock, 24/7 guidance available</p>
                                <p className='font-medium'>We provide access to mentoring 24/7, anytime and anywhere without interruption</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <CldVideoPlayer src="kcyyar2wxpsaxrgpnqyt" width='1280' height='720' className='rounded-box border-2 border-secondary' />
            </div>
        </motion.div>
    );
}
