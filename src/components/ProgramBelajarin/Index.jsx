import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function ProgramBelajarin() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    return (
        <motion.div ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='text-white my-24'>
            <p className='text-3xl font-medium mb-10'>We Deserve, what you need</p>
            <div className='flex flex-row flex-wrap justify-around items-center'>
                <Link href='/ProgrammingTech'>
                    <div className='flex flex-col items-center duration-300 hover:shadow-md hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            developer_mode
                        </span>
                        <p>Programming & Tech</p>
                    </div>
                </Link>

                <Link href='/Data'>
                    <div className='flex flex-col items-center duration-200 hover:shadow-md hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            analytics
                        </span>
                        <p>Data</p>
                    </div>
                </Link>

                <Link href='/Bussiness'>
                    <div className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            storefront
                        </span>
                        <p>Business</p>
                    </div>
                </Link>

                <Link href='/WritingTranslation'>
                    <div className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            edit_note
                        </span>
                        <p>Writing & Translation</p>
                    </div>
                </Link>

                <Link href='/GraphicDesign'>
                    <div className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            draw
                        </span>
                        <p>Graphic & Design</p>
                    </div>
                </Link>

                <Link href='/VideoAnimation'>
                    <div className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            movie
                        </span>
                        <p>Video & Animation</p>
                    </div>
                </Link>

                <Link href='/MusicAudio'>
                    <div className='flex flex-col items-center duration-200 hover:shadow-md  hover:shadow-white/45 w-48 p-3 rounded-md'>
                        <span className="material-symbols-outlined text-4xl mb-5">
                            library_music
                        </span>
                        <p>Music & Audio</p>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}
