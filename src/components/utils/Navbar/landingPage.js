'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import JoinModal from '@/components/Button/JoinModal';
import logoNav from '../../../assets/BELAJARIN_LOGO_black-16.png';
import logoScrolledNav from '../../../assets/logo-belajarin.png';
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
        <header className={`text-secondary duration-300 flex flex-col justify-between ${scrolled ? 'md:fixed md:top-0 md:left-0 md:right-0 bg-secondary/75 text-white sm:p-4 lg:px-28 xl:px-36 md:py-5 lg:flex-row z-20 lg:items-center' : 'p-4 lg:px-24 xl:px-36  xl:py-8 lg:flex-row lg:items-center'}`}>
            <Link href='/'>
                <Image
                    src={scrolled ? logoScrolledNav : logoNav}
                    alt='belajarin logo'
                    className='w-48 md:w-36 h-auto object-cover cursor-pointer mb-5 xl:mb-0'
                />
            </Link>
            <nav className=' hidden md:flex md:flex-row md:items-center'>
                <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Become a Mentor</Link>
                <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Belajarin AI</Link>
                <Link href='/' className='text-lg font-medium mb-5 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Workshop</Link>
                <JoinModal />
            </nav>
            <div className="drawer flex md:hidden z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn bg-third text-secondary drawer-button">Menu</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>                <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Become a Mentor</Link>
                        </li>
                        <li>                <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Belajarin AI</Link>
                        </li>
                        <li>                <Link href='/' className='text-lg font-medium mb-5 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Workshop</Link>
                        </li>
                        <li>                <JoinModal /></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
