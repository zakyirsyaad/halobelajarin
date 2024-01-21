"use client"

import Link from 'next/link';
import React from 'react';
import Search from '../../Search/Index';
import JoinModal from '@/components/Button/JoinModal';
import logoNav from '../../../assets/logo-belajarin.png';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Profile from '@/components/Button/Profile/Index';

export default function Navbar() {
    const isLoggedIn = useSelector(state => state.auth.accessToken !== '');

    return (
        <header className='flex flex-col justify-between text-white sm: p-4 md:px-36 md:py-8 md:flex-row md:items-center '>
            <Link href='/'>
                <Image
                    src={logoNav}
                    alt='belajarin'
                    className='w-48 md:w-36 h-auto object-cover cursor-pointer mb-5 md:mb-0'
                />
            </Link>
            <Search />
            <Link href='/' className='md:text-xl text-xl font-medium mb-2 md:mb-0 transition duration-300 hover:text-blue-500'>Belajarin AI</Link>
            <Link href='/' className='md:text-xl text-xl font-medium mb-5 md:mb-0 transition duration-300 hover:text-blue-500'>Workshop</Link>
            {isLoggedIn ? <Profile /> : <JoinModal />}
        </header>
    );
}
