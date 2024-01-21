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
                                <div className="card w-96 mt-10 h-5/6 bg-blue-700 text-white shadow-lg shadow-blue-300 md:m-14 md:ml-0 hover:scale-105 duration-300">
                                    <figure className=' h-60 rounded-2xl'>
                                        <img src={data.image} className=' w-96 h-60 object-cover' alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title capitalize">
                                            {data.title}
                                            {/* <div className="badge badge-secondary">NEW</div> */}
                                        </h2>
                                        <p>{data.mentor_name}</p>
                                        <p className='font-bold text-xl'>Rp. {(parseFloat(data.price)).toLocaleString()}</p>
                                        <div className="card-actions justify-end capitalize">
                                            <div className="badge badge-outline px-5 py-3">{data.category}</div>
                                            <div className="badge badge-outline px-5 py-3">{data.subMenu}</div>
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
