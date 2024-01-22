import Link from 'next/link'
import React from 'react'

export default async function GettAllClass() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`)
    const getClass = await response.json()

    return (
        <div>
            <p className='text-white mt-10 text-3xl'>All Class in Belajarin</p>
            <div className='flex md:flex-row flex-wrap'>
                {
                    getClass.materiData.map(data => {
                        const mentor_name = data.mentor_name ? data.mentor_name.replace(/ /g, '-') : '';
                        return (
                            <Link href={`/${mentor_name}/${data.materi_id}`} key={data.materi_id}>
                                <div className="card w-72 h-96 mt-10 bg-blue-700 text-white shadow-lg md:m-5 md:ml-0 hover:scale-105 duration-300">
                                    <figure className=' h-40  rounded-2xl'>
                                        <img src={data.image} className=' w-72 h-44 object-cover' alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <p className=" capitalize text-ellipsis">{data.title}</p>
                                        <p>{data.mentor_name}</p>
                                        <p className='font-bold'>Rp. {(parseFloat(data.price)).toLocaleString()}</p>
                                        <div className="card-actions justify-end capitalize">
                                            <div className="badge badge-outline bg-white text-blue-700 px-5 py-3">{data.category}</div>
                                            <div className="badge badge-outline bg-white text-blue-700 px-5 py-3">{data.subMenu}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        )
                    })
                }

            </div>
        </div>

    )
}
