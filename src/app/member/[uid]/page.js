import Category from '@/components/utils/Category/Index'
import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
import React from 'react'

export default function Member() {
    return (
        <div className='bg-home'>
            <Navbar />
            <Category />
            <p className='text-white'>BERHASIL LOGIN</p>
            <Footer />
        </div>
    )
}
