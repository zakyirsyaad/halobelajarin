import DatePicker from '@/components/DatePicker/Index'
import Category from '@/components/utils/Category/Index'
import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
import { React } from 'react'

export default async function page({ params }) {
    const mentor_name = params.mentor_name
    const materi_Id = params.materi_id


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/material/${mentor_name}/${materi_Id}`)
    const detailClass = await response.json()

    return (
        <div className='bg-home'>
            <Navbar />
            <Category />
            <div className='p-4 md:px-36 md:py-20 md:flex md:flex-row md:justify-between'>
                <div className='md:w-1/2 '>
                    {
                        detailClass.material.map(data => {
                            return (
                                <div className=' text-white mb-20' key={data.mentor_id}>
                                    <p className='text-3xl font-bold capitalize mb-5'>{data.title}</p>
                                    <img src={data.image} className=' w-full rounded-box mb-10' alt='foto-class' />
                                    <p className='text-2xl font-bold'>learning Path</p>
                                    <p className='indent-5 text-xl'>{data.learningPath}</p>
                                </div>
                            )
                        })
                    }
                    {
                        detailClass.mentorData.map(data => {
                            return (
                                <div key={data.mentor_id} className='text-white'>
                                    <div className="avatar items-center mb-5">
                                        <div className="w-24 rounded-full mr-5">
                                            <img src={data.photoURL} />
                                        </div>
                                        <p className='text-xl font-medium capitalize'>{data.nama}</p>
                                    </div>
                                    <p className='indent-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-1/4'>
                    <button className='btn bg-blue-700 border-none text-white  hover:bg-blue-400 md:w-full mb-20'>Contact Me</button>
                    <DatePicker apiDetail={detailClass} mentor_name={mentor_name} materi_Id={materi_Id} />
                </div>
            </div>

            <Footer />
        </div >
    )
}
