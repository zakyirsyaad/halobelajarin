'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import JoinModal from '@/components/Button/JoinModal';
import logoNav from '../../../assets/logo-belajarin.png';
import Image from 'next/image';

export default function NavbarLandingPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`flex flex-col justify-between text-white duration-300 ${scrolled ? 'fixed top-0 left-0 right-0 bg-blue-700 sm:p-4 md:px-36 md:py-8 md:flex-row md:items-center z-20' : 'sm:p-4 md:px-36 md:py-8 md:flex-row md:items-center'}`}>
            <Link href='/'>
                <Image
                    src={logoNav}
                    alt='belajarin'
                    className='w-48 md:w-36 h-auto object-cover cursor-pointer mb-5 md:mb-0'
                />
            </Link>
            <nav className='flex flex-row items-center'>
                {/* <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Explore</Link> */}
                <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Become a Mentor</Link>
                <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Belajarin AI</Link>
                <Link href='/' className='text-lg font-medium mb-5 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Workshop</Link>
                <JoinModal />
            </nav>
        </header>
    );
}
