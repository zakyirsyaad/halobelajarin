import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function GettAllClass() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`)
    const getClass = await response.json()

    return (
        <div>
            <p className='text-white text-3xl mb-10'>All Class in Belajarin</p>
            <div className='flex md:flex-row flex-wrap lg:justify-between gap-1 gap-y-3 md:gap-2 lg:gap-y-10 2xl:gap-4 2xl:gap-y-10' >
                {
                    getClass.materiData.map(data => {
                        const mentor_name = data.mentor_name ? data.mentor_name.replace(/ /g, '-') : '';
                        return (
                            <div key={data.materi_id} className='bg-primary text-secondary rounded-lg w-44 h-60 lg:w-64 lg:h-72'>
                                <Link href={`/${mentor_name}/${data.materi_id}`} >
                                    <Image src={data.image} width={200} height={200} alt='Foto Kelas Belajarin' className='w-full h-24 lg:h-36 object-cover mb-3 rounded-lg' />
                                    <div className='px-3  flex flex-col gap-y-4'>
                                        <div className=''>
                                            <div className="avatar items-center w-full">
                                                <div className="w-8 rounded-full mr-2">
                                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                                <p className='text-xs truncate font-semibold'>{data.mentor_name}</p>
                                            </div>
                                            <p className='text-sm truncate lg:text-ellipsis capitalize'>{data.title}</p>
                                        </div>
                                        <div>
                                            <div className="rating w-10 flex gap-x-1 items-center">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-secondary" />
                                                <p className='text-xs'>4.9</p>
                                            </div>
                                            <p className='font-semibold text-lg'>Rp. {(parseFloat(data.price)).toLocaleString()}</p>
                                        </div>
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
