'use client'

import { Carousel } from 'antd';
import { React, useRef } from 'react'
import banner1 from '/src/assets/banner1.png'
import banner2 from '/src/assets/banner2.png'
import banner3 from '/src/assets/banner3.png'
import banner4 from '/src/assets/banner4.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';




export default function BannerCarousel() {
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
        >
            <Carousel autoplay>
                <div>
                    <Image src={banner1} className=' w-full h-auto' />
                </div>
                <div>
                    <Image src={banner2} className=' w-full h-auto' />
                </div>
                <div>
                    <Image src={banner3} className=' w-full h-auto' />
                </div>
                <div>
                    <Image src={banner4} className=' w-full h-auto' />
                </div>
            </Carousel>
        </motion.div>
    )
}
