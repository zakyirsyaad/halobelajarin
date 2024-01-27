import Image from 'next/image'
import React from 'react'
import notFoundImg from '../assets/404.png'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div data-theme="dark" className='flex flex-col h-screen justify-center items-center'>
            <Image src={notFoundImg} width={400} height={300} alt='Eror Halaman Tidak di temukan -Belajarin' className='mb-10' />
            <Link href='/' className='btn bg-white text-black hover:text-white'>Back To Home Belajarin </Link>
        </div>
    )
}
