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
        <header className='hidden text-white font-space md:flex md:flex-row md:flex-wrap md:gap-3 lg:justify-between md:p-4 lg:px-36  '>
            <Link href='/ProgrammingTech'
                className={Programming ? 'transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Programming & Tech
            </Link>
            <Link href='/Data'
                className={Data ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Data
            </Link>
            <Link href='/Bussiness'
                className={Bussiness ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Business
            </Link>
            <Link href='/GraphicDesign'
                className={GraphicDesign ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Graphic & Design
            </Link>
            <Link href='/DigitalMarketing'
                className={DigitalMarketing ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Digital Marketing
            </Link>
            <Link href='/WritingTranslation'
                className={WritingTranslation ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Writing & Translation
            </Link>
            <Link href='/VideoAnimation'
                className={VideoAnimation ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Video & Animation
            </Link>
            <Link href='/MusicAudio'
                className={MusicAudio ? ' transition-all duration-300 bg-third font-bold text-secondary px-4 rounded-sm' : 'transition duration-300 hover:text-third'}>
                Music & Audio
            </Link>
        </header>
    )
}
