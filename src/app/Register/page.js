import React from 'react'
import Image from 'next/image'
import logoSign from '/src/assets/logo-belajarin.png'
import Link from 'next/link'
import bannerSign from '/src/assets/sign-member.png'
import RegisterForm from './register'

export default function Register() {
    return (
        <div className='bg-home md:pl-52 pl-4 h-screen flex md:flex-row md:justify-between'>
            <div className='md:w-1/2'>
                <Link href='/'>
                    <Image src={logoSign} alt='belajarin' className='md:mb-32 md: py-10 md:item-baseline' width={200} height={100} />
                </Link>

                <p className='md:text-6xl md:font-semibold md:mb-14 text-3xl font-medium mb-10 text-white'>
                    Welcome,
                    <br />
                    Members👋🏻 !
                </p>
                <RegisterForm />
                <p className=' text-slate-300 md:text-lg md:mt-10 mt-5'>Do you have account? <Link href='/Login' className='text-white font-bold'>Login</Link></p>
            </div>
            <div>
                <Image src={bannerSign} alt='sign-belajarin' className='md:w-max md:h-screen md:visible invisible' width={400} height={500} />
            </div>
        </div >
    )
}
