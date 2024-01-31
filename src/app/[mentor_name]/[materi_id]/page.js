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
        <div className='bg-secondary'>
            <Navbar />
            <Category />
            <div className='p-4 lg:px-36 md:py-20 lg:flex lg:flex-row lg:justify-between gap-20'>
                <div className=''>

                    {
                        detailClass.material.map(data => {
                            return (
                                <div className=' text-white mb-16' key={data.mentor_id}>
                                    <p className='text-3xl font-bold capitalize mb-5'>{data.title}</p>
                                    {
                                        detailClass.mentorData.map(data => {
                                            return (
                                                <div key={data.mentor_id} className='text-white mb-3'>
                                                    <div className="avatar items-center gap-2">
                                                        <div className=" w-7 rounded-full">
                                                            <img src={data.photoURL} />
                                                        </div>
                                                        <p className='font-medium capitalize'>{data.nama}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <img src={data.image} className=' w-full h-48 md:h-96 object-cover rounded-lg mb-10' alt='foto-class' />
                                    <p className='text-xl font-bold capitalize'>learning Path</p>
                                    <p className='indent-5 text-lg'>{data.learningPath}</p>
                                </div>
                            )
                        })
                    }
                    {
                        detailClass.mentorData.map(data => {
                            return (
                                <div key={data.mentor_id} className='text-white mb-5'>
                                    <div className="avatar items-center gap-2 mb-3">
                                        <div className=" w-10 rounded-full">
                                            <img src={data.photoURL} />
                                        </div>
                                        <p className='font-medium capitalize'>{data.nama}</p>
                                    </div>
                                    <div className='bg-third/[.4] p-4 rounded-lg'>
                                        <p className='text-xl font-bold capitalize'>about mentor</p>
                                        <p className='indent-10'>For 10+ years, I ve helped job seekers ditch boring resumes and land amazing gigs at big companies. Im like a word wizard unearthing your hidden skills and crafting stories that make hiring managers sit up and say WOW So ready to make your career dreams come true? Lets chat! </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-full'>
                    <button className='btn bg-blue-700 border-none text-white  hover:bg-blue-400 w-full mb-10'>Contact Me</button>
                    <DatePicker apiDetail={detailClass} mentor_name={mentor_name} materi_Id={materi_Id} />
                </div>
            </div>

            <Footer />
        </div >
    )
}
