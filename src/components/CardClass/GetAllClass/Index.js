import Link from 'next/link'
import React from 'react'

export default async function GettAllClass() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home`)
    const getClass = await response.json()

    return (
        <div className=''>
            <p className='text-white mt-10 text-3xl'>All Class in Belajarin</p>
            <div div className='flex md:flex-row flex-wrap justify-center md:justify-between' >
                {
                    getClass.materiData.map(data => {
                        const mentor_name = data.mentor_name ? data.mentor_name.replace(/ /g, '-') : '';
                        return (
                            <Link href={`/${mentor_name}/${data.materi_id}`} key={data.materi_id}>
                                <div className='bg-[#323232] text-white w-64 mb-5 mt-5 rounded-xl shadow-xl duration-200 hover:scale-105'>
                                    <img src={data.image} className=' w-96 h-44 object-cover rounded-xl' alt='belajarin class image' loading='lazy' />
                                    <div className='p-4 flex flex-col justify-between h-44'>
                                        <div className="avatar items-center">
                                            <div className="w-8 rounded-full mr-2">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                            <p className='text-xs font-semibold'>{data.mentor_name}</p>
                                        </div>
                                        <p className=" capitalize text-ellipsis text-sm font-light mb-5">{data.title}</p>
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />

                                        </div>
                                        <p className='font-medium mt-1'>Rp. {(parseFloat(data.price)).toLocaleString()}</p>
                                    </div>
                                </div>
                                {/* <div className="card w-72 h-96 mt-10 bg-blue-700 text-white shadow-lg md:m-5 md:ml-0 hover:scale-105 duration-300">
                                    <figure className=' h-40  rounded-2xl'>
                                        <img src={data.image} className=' w-72 h-44 object-cover' alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <p className=" capitalize text-ellipsis">{data.title}</p>
                                        <p>{data.mentor_name}</p>
                                       
                                        <div className="card-actions justify-end capitalize">
                                            <div className="badge badge-outline bg-white text-blue-700 px-5 py-3">{data.category}</div>
                                            <div className="badge badge-outline bg-white text-blue-700 px-5 py-3">{data.subMenu}</div>
                                        </div>
                                    </div>
                                </div> */}

                            </Link>

                        )
                    })
                }


            </div >
        </div >

    )
}
