// 'use client'

import GetAllClass from '@/components/CardClass/GetAllClass/Index'
import MemberName from '@/components/DisplayName/MemberName'
import Category from '@/components/utils/Category/Index'
import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
// import { useRouter } from 'next/navigation'
import React from 'react'


export default function Member() {
    // const isLoggedIn = useSelector(state => state.auth.accessToken);

    // const isLoggedIn = localStorage.getItem('accessToken')

    // const router = useRouter();

    // useEffect(() => {
    //     // Pemeriksaan status login
    //     if (!isLoggedIn) {
    //         // Jika sudah login dan uid ada, arahkan ke halaman utama
    //         router.push('/');
    //     }
    // }, []); // Run the effect when isLoggedIn changes
    return (
        <div className='bg-secondary'>
            <Navbar />
            <Category />
            <div className="p-4 lg:px-36 md:py-20">
                <MemberName />
                <hr className='my-10'></hr>
                <GetAllClass />
            </div>
            <Footer />
        </div>
    )
}
