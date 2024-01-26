import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function GettAllClass() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`)
    const getClass = await response.json()

    return (
        <div>
            <p className='text-white mt-10 text-3xl mb-10'>All Class in Belajarin</p>
            <div className='flex md:flex-row flex-wrap justify-center md:justify-evenly' >
                {
                    getClass.materiData.map(data => {
                        const mentor_name = data.mentor_name ? data.mentor_name.replace(/ /g, '-') : '';
                        return (
                            <div key={data.materi_id} className='bg-blue-700 rounded-box w-60 duration-200 hover:scale-105 mb-5'>
                                <Link href={`/${mentor_name}/${data.materi_id}`} >
                                    <Image src={data.image} width={200} height={200} alt='Foto Kelas Belajarin' className='w-full h-40 object-cover mb-3 rounded-box' />
                                    <div className='px-3 flex flex-col justify-around h-36 text-white'>
                                        <div className='mb-4'>
                                            <div className="avatar items-center">
                                                <div className="w-8 rounded-full mr-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                                <p className='text-xs font-semibold'>{data.mentor_name}</p>
                                            </div>
                                            <p className='text-sm font-light text-ellipsis capitalize'>{data.title}</p>
                                        </div>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-white" />
                                            <p>4.9</p>
                                        </div>
                                        <p className='mb-3 font-bold text-lg'>Rp. {(parseFloat(data.price)).toLocaleString()}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }


            </div >
        </div >

    )
}
