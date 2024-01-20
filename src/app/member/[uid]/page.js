'use client'

import Category from '@/components/utils/Category/Index'
import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux';

export default function Member() {
    // const auth = useSelector(state => state.auth);
    // const router = useRouter();

    // // Pemeriksaan status login
    // if (!auth.accessToken) {
    //     // Jika belum login, arahkan ke landing page
    //     router.push('/');
    // }

    const nama = localStorage.getItem("user")

    return (
        <div className='bg-home'>
            <Navbar />
            <Category />
            <p>How its going? {nama}</p>
            <Footer />
        </div>
    )
}
