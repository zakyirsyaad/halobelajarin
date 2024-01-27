'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Category() {
    const pathname = usePathname()

    const Programming = pathname === '/ProgrammingTech'
    const Data = pathname === '/Data'
    const Bussiness = pathname === '/Bussiness'
    const GraphicDesign = pathname === '/GraphicDesign'
    const DigitalMarketing = pathname === '/DigitalMarketing'
    const WritingTranslation = pathname === '/WritingTranslation'
    const VideoAnimation = pathname === '/VideoAnimation'
    const MusicAudio = pathname === '/MusicAudio'




    return (
        <header className='md:flex md:text-wrap md:justify-between md:text-white md:p-4 md:px-36 md:py-2 md:flex-row md:items-center md:font-semibold md:text-lg invisible md:visible '>
            <Link href='/ProgrammingTech'
                className={Programming ? 'transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Programming & Tech
            </Link>
            <Link href='/Data'
                className={Data ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Data
            </Link>
            <Link href='/Bussiness'
                className={Bussiness ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Business
            </Link>
            <Link href='/GraphicDesign'
                className={GraphicDesign ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Graphic & Design
            </Link>
            <Link href='/DigitalMarketing'
                className={DigitalMarketing ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Digital Marketing
            </Link>
            <Link href='/WritingTranslation'
                className={WritingTranslation ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Writing & Translation
            </Link>
            <Link href='/VideoAnimation'
                className={VideoAnimation ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Video & Animation
            </Link>
            <Link href='/MusicAudio'
                className={MusicAudio ? ' transition-all duration-300 bg-white text-blue-700 px-4 rounded-sm' : 'transition duration-300 hover:text-blue-500'}>
                Music & Audio
            </Link>
        </header>
    )
}
