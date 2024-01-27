// import Navbar from '@/components/utils/Navbar/Index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Data() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/writing-translation`)
    const data = await response.json()

    return (
        <div className='flex flex-row flex-wrap justify-around'>
            {data.subcategories.map((subCategory, index) => (
                <div key={index} className='bg-blue-700 rounded-xl shadow-sm text-white p-5 mb-10 w-72 h-60 flex flex-col justify-between duration-200 hover:scale-105'>
                    {/* <Image src={subCategory.image} alt='Foto Category Belajarin' width={200} height={200} /> */}
                    <p className='text-2xl font-semibold mb-3'>{subCategory.title}</p>
                    <div>
                        {subCategory.subMenu.map((menuItem, subIndex) => (
                            <div key={subIndex}>
                                <Link href={`/WritingTranslation/${menuItem.uid}`}>
                                    <p className='duration-200 hover:bg-blue-300 hover:text-blue-700 hover:font-bold hover:px-2 hover:py-1 rounded-md font-light'>{menuItem.title}</p>
                                </Link>
                                {/* <img src={menuItem.image} alt={menuItem.title} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
