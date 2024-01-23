'use client'

import Footer from '@/components/utils/Footer/Index'
import Navbar from '@/components/utils/Navbar/Index'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'

export default function OrderSummary({ searchParams }) {
    //MEMBER DATA
    const user = searchParams.user
    const uid = searchParams.uid

    //MENTOR DATA
    const nama = searchParams.mentorNama
    const foto = searchParams.mentorPhotoUrl

    //MATERI DATA
    const materi_id = searchParams.materi_id
    const title = searchParams.title
    const subCategory = searchParams.subCategory
    const subMenu = searchParams.subMenu
    const harga = searchParams.price
    const date = searchParams.selectedDate
    const time = searchParams.selectedTime


    // Parse the date string
    const parsedDate = new Date(date);

    // Get the month name
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    const monthName = monthNames[parsedDate.getMonth()];

    const totalAmount = parseFloat(harga) + 5000;

    const selectedDate = date
    const selectedTime = time

    const payHandle = async () => {
        try {
            const LoadingToast = toast.loading("Processing Payment")
            // Lakukan operasi penyimpanan ke database di sini
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pay`, {
                title,
                materi_id,
                totalAmount,
                selectedDate,
                selectedTime,
                uid
            });

            const responseData = response.data;
            console.log(responseData)
            const token = JSON.parse(responseData.dataPayment.response).token;
            // Redirect ke halaman pembayaran Midtrans
            window.snap.pay(token);
            toast.dismiss(LoadingToast)

            // Outputkan respons atau lakukan operasi lain sesuai kebutuhan
            console.log('Order confirmation response:', response.data);

            // Show success toast after a successful response
            toast.success('Silahkan lakukan pembayaran', 3000);
        } catch (error) {
            // Handle errors here
            console.error('Error confirming order:', error.message);
            toast.error('Error confirming order');
        }
    };


    return (
        <div className='bg-home'>
            <Navbar />
            <div className='p-4 md:px-36 md:py-20 text-white capitalize'>
                <p className='font-bold md:text-4xl mb-24'>Your Appointment is Ready,
                    <br />
                    Please complete your Appointment
                </p>
                <div className='flex md:flex-row'>
                    <img src={foto} alt='foto-mentor' className=' w-56 h-56 rounded-box md:mr-10' />
                    <div className='mr-40'>
                        <p className='md:text-3xl md:font-semibold md:mb-5'>{nama}</p>
                        <p className='font-semibold text-ellipsis mb-2'>{title}</p>
                        <div className='flex flex-row mb-5'>
                            <p className='mr-5 border-2 py-1 px-3 border-blue-700 rounded-xl'>{subCategory}</p>
                            <p className='border-2 py-1 px-3 border-blue-700 rounded-xl'>{subMenu}</p>
                        </div>
                        {/* <img src={fotoMateri} alt='foto-materi' /> */}
                        <p className='text-2xl font-semibold'>Class Time</p>
                        <p>Date: <span className='text-lg font-medium'>{parsedDate.getDate()} {monthName} {parsedDate.getFullYear()}</span></p>
                        <p>Time: <span className='text-lg font-medium'>{time}</span></p>
                    </div>
                    <div className='bg-white text-black w-72 h-80 p-5 rounded-box flex flex-col justify-between'>
                        <div    >
                            <p className='font-bold text-2xl mb-3'>Order Summary</p>
                            <p className='flex justify-between'>Session Class <span>Rp. {(parseFloat(harga)).toLocaleString()}</span></p>
                            <p className='flex justify-between'>Admin fee <span>Rp. 5,000</span></p>
                            {/* <p className='flex justify-between'>Payment fee <span>Rp. 2,500</span></p> */}
                        </div>
                        <div>
                            <p className='flex justify-between'>order by -<span className='font-semibold'>{user}</span></p>
                            <hr />
                            <p className='flex justify-between my-1 font-semibold'>Total Price <span>Rp. {(parseFloat(totalAmount)).toLocaleString()}</span></p>
                            {/* <Pay title={title} materi_id={materi_id} totalAmount={totalAmount} selectedDate={date} selectedTime={time} uid={uid} /> */}
                            <button className='btn btn-primary w-full' onClick={payHandle}>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
