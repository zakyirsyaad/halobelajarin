import GetAllClass from '@/components/CardClass/GetAllClass/Index'
import MemberName from '@/components/DisplayName/MemberName'
import Category from '@/components/utils/Category/Index'
import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
import React from 'react'

export default function Member() {
    return (
        <div className='bg-home'>
            <Navbar />
            <Category />
            <div className="p-4 md:px-36 md:py-20">
                <MemberName />
                <hr className='my-10'></hr>
                <GetAllClass />
            </div>
            <Footer />
        </div>
    )
}
