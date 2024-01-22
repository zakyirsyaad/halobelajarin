'use client';

import toast from "react-hot-toast";
import axios from 'axios';
import React from 'react';

export default function Pay({ title, materi_id, totalAmount, selectedDate, selectedTime, uid }) {
    const payHandle = async () => {
        try {
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
        <button className='btn w-full btn-primary' onClick={payHandle}>
            Pay
        </button>
    );
}
