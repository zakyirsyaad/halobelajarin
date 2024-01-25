import TabClassMember from '@/components/utils/TabClass/member/Index'
import React from 'react'

export default async function layout({ children }) {
    // const uid = params.uid

    // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/member/${uid}`)
    // const detailMember = await response.json()
    return (
        <div className='text-white'>
            <TabClassMember />
            {children}
        </div>
    )
}
