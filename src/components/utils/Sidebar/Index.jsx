'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar({ apiMember }) {
    const pathname = usePathname()

    // const isHomeActive = pathname === '/';
    const isProfileActive = pathname === `/member/${apiMember.uid}/profile`;
    const isClassListActive = pathname === `/member/${apiMember.uid}/classlist`;
    const isWalletActive = pathname === `/member/${apiMember.uid}/wallet`;
    const isHelpActive = pathname === `/member/${apiMember.uid}/help`;

    return (
        <aside className='bg-blue-100 text-blue-700 flex flex-col md:w-72 w-full md:h-full rounded-3xl py-5 px-3 mr-10 mb-10 md:mb-0'>
            <div className='flex flex-col items-center mb-10'>
                <Image src={apiMember.photoURL} alt='Foto Profile Member Belajarin' className='rounded-full mb-2 border-2 border-blue-500' width={90} height={90} />
                <p className='capitalize text-lg font-semibold'>{apiMember.nama}</p>
                <p className='capitalize text-sm'>{apiMember.role}</p>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex md:flex-col flex-row flex-wrap justify-between'>
                    <Link href='/'
                        className='flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl  hover:bg-blue-700 hover:text-white'>
                        <span className="material-symbols-outlined text-4xl mr-1">
                            home
                        </span>
                        <p className='text-lg'>Home</p>
                    </Link>

                    <Link href={`/member/${apiMember.uid}/profile`}
                        className={isProfileActive ? "flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl bg-blue-700 text-white" : 'flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl  hover:bg-blue-700 hover:text-white active:bg-blue-700'}>
                        <span className="material-symbols-outlined text-4xl mr-1">
                            person
                        </span>
                        <p className='text-lg'>Profile</p>
                    </Link>

                    <Link href={`/member/${apiMember.uid}/classlist`}
                        className={isClassListActive ? "flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl bg-blue-700 text-white" : 'flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl  hover:bg-blue-700 hover:text-white active:bg-blue-700'}>
                        <span className="material-symbols-outlined text-4xl mr-1">
                            school
                        </span>
                        <p className='text-lg'>Class List</p>
                    </Link>

                    <Link href={`/member/${apiMember.uid}/wallet`}
                        className={isWalletActive ? "flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl bg-blue-700 text-white" : 'flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl  hover:bg-blue-700 hover:text-white active:bg-blue-700'}>
                        <span className="material-symbols-outlined text-4xl mr-1">
                            account_balance_wallet
                        </span>
                        <p className='text-lg'>Wallet</p>
                    </Link>

                    <Link href={`/member/${apiMember.uid}/help`}
                        className={isHelpActive ? "flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl bg-blue-700 text-white" : 'flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl  hover:bg-blue-700 hover:text-white active:bg-blue-700'}>
                        <span className="material-symbols-outlined text-4xl mr-1">
                            chat_info
                        </span>
                        <p className='text-lg'>Help</p>
                    </Link>
                </div>

                <div>
                    <Link href='/'
                        className='flex flex-row items-center duration-300 px-2 py-2 mb-2 rounded-xl  hover:bg-blue-700 hover:text-white bg-blue-200'>
                        <span className="material-symbols-outlined text-4xl mr-1">
                            logout
                        </span>
                        <p className='text-lg'>Logout</p>
                    </Link>
                </div>

            </div>

        </aside>
    )
}
