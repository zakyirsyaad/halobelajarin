import Category from '@/components/utils/Category/Index'
import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
import React from 'react'

export default function layout({ children }) {
    return (
        <div className='bg-home '>
            <Navbar />
            <Category />
            <main className='p-4 md:px-36 md:py-14 '>
                {children}
            </main>
            <Footer />
        </div>
    )
}
