"use client"

import { logout } from '@/Redux/features/authSlice';
import { UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
    const user = useSelector((state) => state.auth.user);
    const foto = useSelector((state) => state.auth.img);

    const [userString, setUserString] = useState('');
    const [fotoString, setFotoString] = useState('');

    useEffect(() => {
        // Split the full name into an array of parts
        const userNameParts = user.split(' ');
        // Take the first part as the first name
        const firstName = userNameParts[0];

        // Update state with the first name
        setUserString(firstName);
        setFotoString(String(foto));

    }, [user, foto]);

    const uid = localStorage.getItem('uid')

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn rounded-full bg-white border-none text-black">
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-7 mr-2 rounded-full ring ring-black ring-offset-base-100 ring-offset-3">
                            <Image src={fotoString} alt="foto-profile" width={300} height={300} />
                        </div>
                    </div>
                    <p className='capitalize font-medium text-lg ell'>{userString}</p>
                    {/* <p className='capitalize font-medium text-lg'>Naufaliana</p> */}
                </div>
            </div>
            {/* <div className='capitalize font-black text-lg'>{userString}</div> */}
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 text-black">
                <li>
                    <Link href={`/member/${uid}/profile`}>
                        <button className='flex flex-row items-center'>Dashboard</button>
                    </Link>
                </li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>

    );
}
