import Sidebar from '@/components/utils/Sidebar/Index'
import Image from 'next/image'
import React from 'react'

export default async function ProfileMember({ params, children }) {
    const uid = params.uid

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/member/${uid}`)
    const detailMember = await response.json()

    return (
        <div className=' p-10 md:h-screen flex md:flex-row flex-col bg-slate-800'>
            <Sidebar apiMember={detailMember} />
            <div>{children}</div>
        </div>
    )
}
