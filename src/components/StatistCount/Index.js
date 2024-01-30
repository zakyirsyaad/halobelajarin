'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import dcLogo from '../../assets/Discord_logo.webp'
import gdscLogo from '../../assets/gdsc_logopng.png'
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StatisCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (count === 99) {
                clearInterval(intervalId);
            } else {
                setCount((prevCount) => prevCount + 1);
            }
        }, 50);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [count]);

    function pad(n) {
        return n < 10 ? '0' + n : n;
    }

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])



    return (
        <div
            className='bg-secondary text-white mt-20 py-5 px-4 lg:px-24 xl:px-36 flex flex-row justify-between items-center text-center font-space'>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 92 92" fill="none" className='self-start'>
                <path opacity="0.5" d="M92 45.9986C66.5933 45.9986 45.9986 66.5933 45.9986 92C45.9986 66.5933 25.4038 45.9986 0 45.9986C25.4038 45.9986 45.9986 25.4038 45.9986 0C45.9986 25.4038 66.5933 45.9986 92 45.9986Z" fill="#EDEE94" />
            </svg>
            <motion.div
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
            >
                <p className=' text-white text-base xl:text-xl mb-5'>As per today, there are already</p>
                <p className='text-xl xl:text-2xl font-space text-third font-medium mb-5'><span className='text-2xl xl:text-4xl'>{pad(count)}+</span> members & <span className='text-2xl xl:text-4xl'>{pad(count)}+</span>mentors</p>
                <p className='text-2xl'>joined Belajarin!</p>
            </motion.div>

            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 92 92" fill="none" className='self-end'>
                <path opacity="0.5" d="M92 45.9986C66.5933 45.9986 45.9986 66.5933 45.9986 92C45.9986 66.5933 25.4038 45.9986 0 45.9986C25.4038 45.9986 45.9986 25.4038 45.9986 0C45.9986 25.4038 66.5933 45.9986 92 45.9986Z" fill="#EDEE94" />
            </svg>
        </div>
    )
}
