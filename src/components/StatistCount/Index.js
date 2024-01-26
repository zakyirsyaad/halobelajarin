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
        }, 100);

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
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='bg-blue-700/20 text-white my-20 py-10 px-5 rounded-box flex flex-col items-center text-center'>
            <p className='font-bold text-xl text-white md:text-4xl mb-5'>Mentoring Platform?</p>
            <p className='text-2xl'><span className='text-4xl'>{pad(count)}+</span> Member was joined in belajarin</p>
            <div className='flex flex-row items-center bg-black/45 px-5 rounded-box mt-5'>
                <p className='mr-5'>we mentoring on</p>
                <Image src={dcLogo} width={50} height={75} alt='Trusted Belajarin' className='mr-5' />
                <Image src={gdscLogo} width={50} height={75} alt='Trusted Belajarin' />
            </div>
        </motion.div>
    )
}
