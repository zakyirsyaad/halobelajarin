import React from 'react'

export default async function Profile({ params }) {
    const uid = params.uid

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/member/${uid}`)
    const memberData = await response.json()

    return (
        <div className='bg-blue-100 text-blue-700 rounded-3xl py-10 px-5 mr-10 w-full'>
            <p className='mb-10 font-semibold text-2xl'>My Profile</p>
            <form>
                <div className='mb-5 '>
                    <input type="text" placeholder={memberData.nama}
                        className='shadow-md py-3 px-5 mr-5 mb-5 md:mb-0 md:w-96 w-full outline-none border-2 rounded-box border-blue-700 placeholder:text-blue-200 focus:bg-blue-300 focus:border-blue-700 duration-300 focus:scale-105' />

                    <input type='text' placeholder={memberData.email} disabled
                        className=' shadow-md py-3 px-5 mr-5 md:w-96 outline-none w-full border-2 rounded-box border-blue-700 placeholder:text-blue-700 disabled:bg-blue-200 ' />
                </div>
                <div className='mb-5'>
                    <input type='text' placeholder={"City: " + "Yogyakarta"}
                        className='shadow-md py-3 px-5 mr-5 md:w-96  mb-5 md:mb-0 w-full outline-none border-2 rounded-box border-blue-700 placeholder:text-blue-200 focus:bg-blue-300 focus:border-blue-700 duration-300 focus:scale-105' />
                    <input type="text"
                        placeholder={"Phone: " + "+62-81241933754"}
                        className='shadow-md py-3 px-5 mr-5 md:w-96 outline-none w-full border-2 rounded-box border-blue-700 placeholder:text-blue-200 focus:bg-blue-300 focus:border-blue-700 duration-300 focus:scale-105'
                        oninput="this.value = this.value.replace(/0/g, '')"
                        pattern="^[1-9]+$" />
                </div>

                <div className='flex md:flex-row flex-col md:items-center mb-5'>
                    <div className='shadow-md flex flex-col mb-5 md:mr-5 md:mb-0'>
                        <input type="file" className="file-input file-input-bordered md:w-96 w-full" />
                    </div>

                    <div>
                        <select className="select md:w-96 w-full shadow-md">
                            <option disabled selected>Gender</option>
                            <option>Woman</option>
                            <option>Man</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='btn px-12 bg-blue-300 text-blue-700 hover:text-white hover:bg-blue-700 border-none shadow-md'>Save</button>
            </form>
        </div>
    )
}
