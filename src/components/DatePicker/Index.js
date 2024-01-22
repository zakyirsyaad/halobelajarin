'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ apiDetail, materi_Id, mentor_name }) => {
    // Mendapatkan tanggal hari ini
    const currentDate = new Date();


    const [value, setValue] = useState({
        startDate: currentDate,
        selectedTime: "12:00", // Waktu default
    });
    const handleValueChange = (newValue) => {
        // console.log("newValue:", newValue);
        setValue(newValue);
    };

    const handleTimeChange = (event) => {
        const newTime = event.target.value;
        setValue((prevValue) => ({
            ...prevValue,
            selectedTime: newTime,
        }));
        // console.log(newTime);
    };

    const generateTimeOptions = () => {
        const timeOptions = [];
        for (let i = 1; i <= 24; i++) {
            const formattedHour = i < 10 ? `0${i}` : `${i}`;
            const nextHour = i === 24 ? "00" : i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;

            timeOptions.push(
                <option key={formattedHour} value={`${formattedHour}:00 - ${nextHour}:00`}>
                    {`${formattedHour}:00 - ${nextHour}:00`}
                </option>
            );
        }
        return timeOptions;
    };

    // const [selectedDate, setSelectedDate] = useState(null);
    // const [selectedTime, setSelectedTime] = useState(null);
    const user = useSelector(state => state.auth.user);
    const uid = useSelector(state => state.auth.uid)
    const material = apiDetail.material[0];
    const mentor = apiDetail.mentorData[0];
    const date = value.startDate
    const time = value.selectedTime
    console.log(material);
    console.log(mentor);
    console.log(date)
    console.log(time)

    // You can pass any data you want in the query object
    // router.push(`/${mentor_name}/${materi_Id}/ordersummary`, {
    //     query: {
    //         materi_id: material.materi_id,
    //         title: material.title,
    //         price: material.price,
    //         image: material.image,
    //         mentorNama: mentor.nama,
    //         mentorPhotoUrl: mentor.photoURL,
    //         mentorEmail: mentor.email,
    //         selectedDate: value.startDate,
    //         selectedTime: value.selectedTime,
    //     },
    // });

    // const orderData = {
    //     materi_id: material.materi_id,
    //     title: material.title,
    //     price: material.price,
    //     image: material.image,
    //     mentorNama: mentor.nama,
    //     mentorPhotoUrl: mentor.photoURL,
    //     mentorEmail: mentor.email,
    //     selectedDate: value.startDate,
    //     selectedTime: value.selectedTime,
    // };

    // router.push({
    //     pathname: `/${mentor_name}/${materi_Id}/ordersummary`, // Update the path based on your actual structure
    //     query: orderData,
    // });


    return (
        <div>
            <Datepicker
                value={value}
                onChange={handleValueChange}
                asSingle={true}
                placeholder={"Whats ur Date?"}
                minDate={currentDate.toISOString().split("T")[0]}
            />

            <select
                className="select select-bordered w-full bg-slate-800 mt-5 text-slate-400"
                onChange={handleTimeChange}
                value={value.selectedTime}
            >
                <option disabled>Whats ur time?</option>
                {generateTimeOptions()}
            </select>

            <Link href={{
                pathname: `/${mentor_name}/${materi_Id}/ordersummary`,
                query: {
                    user,
                    uid,
                    materi_id: material.materi_id,
                    title: material.title,
                    price: material.price,
                    image: material.image,
                    subCategory: material.subCategory,
                    subMenu: material.subMenu,
                    mentorNama: mentor.nama,
                    mentorPhotoUrl: mentor.photoURL,
                    mentorEmail: mentor.email,
                    selectedDate: date,
                    selectedTime: time
                }, // the data
            }}>
                <button className='btn btn-default md:w-full mt-5'>BOOK NOW</button>
            </Link>
        </div>

    );
};

export default DatePicker;
