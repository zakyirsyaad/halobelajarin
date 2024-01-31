"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Search from '../../Search/NavbarSearch/Index';
import JoinModal from '@/components/Button/JoinModal';
import logoNav from '../../../assets/logo-belajarin.png';
import logoScrolledNav from '../../../assets/logo-belajarin.png';
import Image from 'next/image';
import Profile from '@/components/Button/Profile/Index';
import { signInWithGoogle } from '@/services/firebase';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in
        const accessToken = localStorage.getItem('accessToken');
        setIsLoggedIn(accessToken !== null);
    }, []);

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
            <Search />
            <nav className=' hidden md:flex md:gap-3 2xl:gap-x-10 md:items-center '>
                <Link href='/' className='text-lg font-medium mb-2 md:mb-0 transition duration-300 hover:text-blue-500 text-primary font-space'>Belajarin AI</Link>
                <Link href='/' className='text-lg font-medium mb-5 md:mb-0 transition duration-300 hover:text-blue-500 text-primary font-space'>Workshop</Link>
                {isLoggedIn ? <Profile /> : <JoinModal />}
            </nav>
            <div className="drawer flex md:hidden z-10">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="btn bg-third text-secondary drawer-button">Menu</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li>
                            <Link href='/' className='text-lg font-medium mb-2 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Belajarin AI</Link>
                        </li>
                        <li>
                            <Link href='/' className='text-lg font-medium mb-5 md:mr-10 md:mb-0 transition duration-300 hover:text-blue-500'>Workshop</Link>
                        </li>
                        {
                            isLoggedIn ? <Profile /> :
                                <div>
                                    <li>
                                        <button className="btn w-full mb-5" onClick={signInWithGoogle}>
                                            Continue with Google
                                        </button></li>
                                    <li>
                                        <Link href='/Register'>
                                            <button className="btn w-full">
                                                Continue with E-Mail
                                            </button>
                                        </Link>
                                    </li>
                                </div>
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}
