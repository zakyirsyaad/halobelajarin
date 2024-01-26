import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CardProgramming({ apiClass }) {
    return (
        <div className='flex md:flex-row flex-wrap'>
            {apiClass.materi?.map((materiItem, index) => (

                <div key={index} className='bg-blue-700 rounded-box w-60 duration-200 hover:scale-105'>
                    <Link href={`/${materiItem.mentor_name}/${materiItem.materi_id}`}>
                        <Image src={materiItem.image} width={200} height={200} alt='Foto Kelas Belajarin' className='w-full mb-3 rounded-box' />
                        <div className='px-3 flex flex-col justify-around h-36'>
                            <div className='mb-4'>
                                <div className="avatar items-center">
                                    <div className="w-8 rounded-full mr-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                    <p className='text-xs font-semibold'>{materiItem.mentor_name}</p>
                                </div>
                                <p className='text-sm font-light text-ellipsis capitalize'>{materiItem.title}</p>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" />
                                <p>4.9</p>
                            </div>
                            <p className='mb-3 font-bold text-lg'>Rp. {(parseFloat(materiItem.price)).toLocaleString()}</p>
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    )
}
