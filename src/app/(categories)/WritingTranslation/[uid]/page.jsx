import React from 'react';
import CardProgramming from './card';

export default async function ClassProgramming({ params }) {
    const uid = params.uid;
    const formattedUid = uid.replace(/-/g, ' ');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/writing-translation/${uid}`);
    const classProgramming = await response.json();
    const materiCount = classProgramming.materi?.length || 0;

    return (
        <div className='text-white'>
            <div className='mb-14'>
                <p className='capitalize font-bold text-5xl mb-2'>{formattedUid}</p>
                <p>Discover the best {formattedUid} mentoring you need to help you successfully achieve your project goals and deadlines.</p>
            </div>
            <p className='mb-3 capitalize text-slate-400 font-medium'>{materiCount} {formattedUid} class available</p>
            <CardProgramming apiClass={classProgramming} />

        </div>
    );
}
