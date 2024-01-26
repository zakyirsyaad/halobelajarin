import Link from 'next/link'
import React from 'react'

export default function Category() {
    return (
        <header className='md:flex md:text-wrap md:justify-between md:text-white md:p-4 md:px-36 md:py-2 md:flex-row md:items-center md:font-semibold md:text-lg invisible md:visible '>
            <Link href='/ProgrammingTech' className='transition duration-300 hover:text-blue-500'>
                Programming & Tech
            </Link>
            <Link href='/Data' className='transition duration-300 hover:text-blue-500'>
                Data
            </Link>
            <Link href='/' className='transition duration-300 hover:text-blue-500'>
                Busisness
            </Link>
            <Link href='/' className='transition duration-300 hover:text-blue-500'>
                Graphic & Design
            </Link>
            <Link href='/' className='transition duration-300 hover:text-blue-500'>
                Digital Marketing
            </Link>
            <Link href='/' className='transition duration-300 hover:text-blue-500'>
                Writing & Translation
            </Link>
            <Link href='/' className='transition duration-300 hover:text-blue-500'>
                Video & Animation
            </Link>
            <Link href='/' className='transition duration-300 hover:text-blue-500'>
                Music & Audio
            </Link>
        </header>
    )
}
