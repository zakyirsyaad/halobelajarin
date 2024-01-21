'use client'
import React from 'react'
import { useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';

export default function MemberName() {
    const user = useSelector(state => state.auth.user);

    return (
        <TypeAnimation
            sequence={[
                `How's it going, ${user} ?`,
                1000,
                `How's it going,`,
                1000,
            ]}
            speed={50}
            repeat={Infinity}
            className='text-white md:text-4xl text-xl font-bold capitalize'
        />
    )
}
