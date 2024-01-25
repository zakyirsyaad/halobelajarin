import TabClassMemberSearch from '@/components/Search/TabClassMember/Index'
import Link from 'next/link'
import React from 'react'

export default function TabClassMember() {
    return (
        <div>
            <div className='flex md:flex-row justify-between items-center border-2 border-blue-300 text-blue-200 rounded-3xl p-5 mb-10'>
                <p className='text-2xl px-10 py-1 duration-300 rounded-btn  hover:bg-blue-300 hover:text-white'>
                    <Link href=''>
                        All
                    </Link>
                </p>
                <p className='text-2xl px-10 py-1 duration-300 rounded-btn  hover:bg-blue-300 hover:text-white'>
                    <Link href=''>
                        Waiting
                    </Link>
                </p>
                <p className='text-2xl px-10 py-1 duration-300 rounded-btn  hover:bg-blue-300 hover:text-white'>
                    <Link href=''>
                        Active
                    </Link>
                </p>
                <p className='text-2xl px-10 py-1 duration-300 rounded-btn  hover:bg-blue-300 hover:text-white'>
                    <Link href=''>
                        Completed
                    </Link>
                </p>
                <p className='text-2xl px-10 py-1 duration-300 rounded-btn  hover:bg-blue-300 hover:text-white'>
                    <Link href=''>
                        Canceled
                    </Link>
                </p>
                <p className='text-2xl px-10 py-1 duration-300 rounded-btn  hover:bg-blue-300 hover:text-white'>
                    <Link href=''>
                        Refund
                    </Link>
                </p>
            </div>
            {/* <TabClassMemberSearch /> */}
        </div>

    )
}
