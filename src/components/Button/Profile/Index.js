'use client'

import { logout } from '@/Redux/features/authSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
    const user = useSelector((state) => state.auth.user);
    const foto = useSelector((state) => state.auth.img);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn rounded-full bg-black text-blue-400 border-blue-700">
                    <div className="avatar">
                        <div className="w-7 mr-1 rounded-full ring ring-default ring-offset-base-100 ring-offset-2">
                            <img src={foto} alt="foto-profile" />
                        </div>
                    </div>
                    <p className='capitalize font-black text-lg'>{user}</p>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 text-black">
                    <li><button onClick={handleLogout} >Logout</button></li>
                </ul>
            </div>
        </div>

    );
}
